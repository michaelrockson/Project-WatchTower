from typing import List, Dict

from nltk.sentiment import SentimentIntensityAnalyzer

from clients.reddit_client import get_reddit_client
from settings import settings
from utils.helpers import evaluate_engagements
from utils.logger import logger


class ScoutBotService:
    """
        Service for scouting Reddit posts that express user pain points.

        Searches configured subreddits using predefined queries, filters posts
        by engagement thresholds (score, comments, upvote ratio) and classifies
        them by sentiment using VADER. Only negative posts are retained for
        downstream processing.

        Attributes:
            subreddits (List[str]): Target subreddits to search.
            search_queries (List[str]): Queries to run against each subreddit.
            min_score (int): Minimum post score threshold for engagement filtering.
            min_comments (int): Minimum comment count threshold.
            min_upvote_ratio (float): Minimum upvote ratio threshold.
            reddit: Authenticated PRAW Reddit client instance.
            sia (SentimentIntensityAnalyzer): VADER sentiment analyzer.
            search_results (List[List[Dict]]): Raw results from the last subreddit search,
                grouped by subreddit/query pair.
            search_result_sentiments (List[List[Dict]]): Filtered results containing
                only negative posts from the last analysis run.
        """


    def __init__(self):
        self.subreddits = settings.DEFAULT_SUBREDDITS
        self.search_queries = settings.SEARCH_QUERIES
        self.min_score = settings.MIN_SCORE
        self.min_comments = settings.MIN_COMMENTS
        self.min_upvote_ratio = settings.MIN_UPVOTE_RATIO
        self.reddit = get_reddit_client()
        self.sia = SentimentIntensityAnalyzer()
        self.search_results = []
        self.search_result_sentiments = []


    def search_subreddit(self) -> List[List[Dict]]:
        """
        Searches configured subreddits using predefined queries and stores the results.
        Results are grouped by combination and stored in self.search_results.
        Returns:
            List[List[Dict]]: Nested list where each inner list contains post dicts
            for a single subreddit/query pair.
        """
        try:
            search_results_list: List[List[Dict[str, str]]] = []

            for subreddit in self.subreddits:
                for search_query in self.search_queries:
                    cumulated_search_results: List[Dict[str, str]] = []
                    logger.info(
                        f"Firing Reddit API call on r/{subreddit} with query='{search_query}'")
                    search_results = self.reddit.subreddit(subreddit).search(
                        search_query,
                        sort = "top",
                        limit = 10,
                        time_filter = "month")

                    for search_result in search_results:
                        evaluate_engagements(search_result,
                                             cumulated_search_results,
                                             subreddit, search_query,
                                             self.min_upvote_ratio,
                                             self.min_score, self.min_comments)

                    if not cumulated_search_results:
                        logger.warning(
                            f"No results for query '{search_query}' on r/{subreddit} found: {len(cumulated_search_results)} posts")
                    else:
                        logger.info(
                            f"Query '{search_query}' on r/{subreddit} found {len(cumulated_search_results)} posts")

                    search_results_list.append(cumulated_search_results)

            self.search_results = search_results_list
            logger.info(
                f"Searching subreddits complete! {len(search_results_list)} active indexes")
            return search_results_list

        except RuntimeError as e:
            logger.error("Reddit instance check failed: %s", e)
            return []

        except Exception as e:
            logger.error(f"Unexpected error while querying Reddit API: {e}",
                         exc_info = True)
            return []


    def analyze_search_results(self) -> List[List[Dict[str, str]]]:
        """
        Analyzes search results and filters posts by negative sentiment.
        Triggers a fresh subreddit search if no results are currently stored.

         Returns:
            List[List[Dict[str, str]]]: A nested list where each inner list contains
            a single dict representing a negative post with keys or an empty list if no search results are found or an exception occurs.
        """
        try:
            if not self.search_results:
                logger.info(
                    "No search search results available! Searching for results....")
                self.search_subreddit()

                if not self.search_results:
                    logger.error(
                        "Search returned no results. Aborting analysis.")
                    return []

            logger.info(
                f"Starting sentiment analysis on {len(self.search_results)} index batches.")
            sentiment_collection: List[List[Dict[str, str]]] = []

            skipped_posts = 0

            for indexes in self.search_results:
                for results in indexes:
                    result_batches: List[Dict] = []
                    score: Dict[str, float] = self.sia.polarity_scores(
                        results.get("post_content", "Unknown"))

                    if score["compound"] > 0.05:
                        post_sentiment = "Positive"
                        skipped_posts += 1
                    elif score["compound"] < -0.05:
                        post_sentiment = "Negative"
                    else:
                        post_sentiment = "Neutral"
                        skipped_posts += 1

                    if post_sentiment == "Negative":
                        result_batches.append(
                            {"subreddit": results["subreddit"],
                             "search_query": results[
                                 "search_query"],
                             "post_title": results["post_title"],
                             "post_content": results[
                                 "post_content"],
                             "post_sentiment": post_sentiment})
                        sentiment_collection.append(result_batches)
                        logger.info(
                            f"Negative post captured: '{results["post_title"]}' from r/{results['subreddit']}.")

            logger.info(
                f"Analysis complete. {len(sentiment_collection)} negative posts found. {skipped_posts} posts skipped.")
            self.search_result_sentiments = sentiment_collection
            return sentiment_collection

        except Exception as e:
            logger.error(f"Error analyzing search results: {e}",
                             exc_info = True)
            return []
