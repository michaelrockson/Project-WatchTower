import os
import sys
from typing import List

from dotenv import load_dotenv

from services.infisical_service import InfisicalSecretsService
from utils.logger import logger

load_dotenv()

try:
    infisical = InfisicalSecretsService()
    infisical.authenticate_infisical_client()
    infisical.load_infisical_secrets()
except Exception as e:
    logger.error(f"Failed to load secrets from Infisical: {e}")

# =====================================================
# REDDIT CONFIGURATION
# =====================================================
REDDIT_CLIENT_ID = os.getenv("REDDIT_CLIENT_ID")
REDDIT_CLIENT_SECRET = os.getenv("REDDIT_CLIENT_SECRET")
REDDIT_USER_AGENT = os.getenv("REDDIT_USER_AGENT")

# =====================================================
# NOTION CONFIGURATION
# =====================================================
NOTION_API_KEY = os.getenv("NOTION_API_KEY")
NOTION_DB_ID = os.getenv("NOTION_DB_ID")

# =====================================================
# EMAIL CONFIGURATION
# =====================================================
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_APP_PASSWORD = os.getenv("EMAIL_APP_PASSWORD")
RECIPIENT_ADDRESS = os.getenv("RECIPIENT_ADDRESS")

# =====================================================
# EGRESS CHANNEL CONFIGURATION
# =====================================================
CHOICE_ONE = "Notion"
CHOICE_TWO = "Email"
CHOICE_THREE = "Notion & Email"

# =====================================================
# AGENT CONFIGURATION
# =====================================================
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# =====================================================
# DATABASE CONFIGURATION
# =====================================================
DATABASE_URL = os.getenv("DATABASE_URL")

# =====================================================
# SECRET VALIDATION (FAIL FAST)
# =====================================================
CRITICAL_SECRETS = {
    "REDDIT_CLIENT_ID": REDDIT_CLIENT_ID,
    "REDDIT_CLIENT_SECRET": REDDIT_CLIENT_SECRET,
    "REDDIT_USER_AGENT": REDDIT_USER_AGENT,
    "GEMINI_API_KEY": GEMINI_API_KEY,
    "DATABASE_URL": DATABASE_URL,
    "NOTION_API_KEY": NOTION_API_KEY,
    "NOTION_DB_ID": NOTION_DB_ID,
    "EMAIL_ADDRESS": EMAIL_ADDRESS,
    "EMAIL_APP_PASSWORD": EMAIL_APP_PASSWORD,
    "RECIPIENT_ADDRESS": RECIPIENT_ADDRESS,
}

missing_critical = []

for key, value in CRITICAL_SECRETS.items():
    if not value:
        missing_critical.append(key)

if missing_critical:
    logger.error(
        f"CRITICAL ERROR: Missing essential secrets: {', '.join(missing_critical)}"
    )
    logger.error(
        "System cannot continue. Please check Infisical or your .env file."
    )
    sys.exit(1)

# =====================================================
# REDDIT DATA INGRESS SETTINGS
# Free-tier token budget: keep subreddit × query count
# low so the scout agent payload stays under ~50k tokens.
# =====================================================
DEFAULT_SUBREDDITS: List[str] = [
    "smallbusiness",       
    "Entrepreneur",        
    "freelance",          
    "productivity",       
    "ADHD",              
    "personalfinance",     
    "povertyfinance",     
    "careerguidance",     
    "antiwork",          
    "cscareerquestions",   
    "burnout",           
    "selfimprovement",     
    "webdev",              
    "SideProject",         
    "startups",            
]
DEFAULT_POST_LIMIT: int = 50  
DEFAULT_COMMENT_LIMIT: int = 50 

# =====================================================
# REDDIT SCOUT BOT QUERIES SETTINGS
# =====================================================
MAX_SCOUT_RESULTS: int = 30

SEARCH_QUERIES: List[str] = [
    "This takes too long",
    "How to stop spending money on",
    "Overwhelmed by",
    "I've tried everything",
    "What's the hardest part about",
    "Can't stop procrastinating",
    "Imposter syndrome",
    "Feeling left behind",
    "Analysis paralysis",
    "Completely burned out from",
    "There has to be a better way",
    "Nothing seems to work for",
    "Living paycheck to paycheck",
    "Lack of motivation to",
    "Why isn't there an app that",
]


# =====================================================
# REDDIT DATA FILTERING REQUIREMENTS
# =====================================================
MIN_COMMENTS = 50
MIN_SCORE = 50
MIN_UPVOTE_RATIO = 0.50

# =====================================================
# AGENT SETTINGS AND OBJECTIVES
# =====================================================
AGENT_MODEL = "gemini-2.5-flash"
SCOUT_OBJECTIVE = """
You are a market scout agent.

Your ingress will come directly from the database using the `query_posts_with_sentiments()` function.

Each record returned by that method includes:
- Post Number
- Title
- Body
- Subreddit
- Sentiment Score (counts, average compound, dominant sentiment)

Your new workflow:

1. Call the `query_posts_with_sentiments()` function to retrieve all posts and their associated sentiment summaries.

2. Group the retrieved posts by subreddit for contextual analysis.

3. For each post:
   - Interpret the sentiment data to understand audience tone and emotional intensity.
   - Identify whether the discussion highlights a common or critical market problem.

5. For each post, return a problem statement:
   "X people face Y problem so build Z solution for W results."

6. Accompany each with a sentiment statement:
   "Sentiment statement: Sentiment towards [X: Entity/Topic] is predominantly [Y: Sentiment Label], with users [Z: Key themes, opinions, or concerns drawn from the discussion]."

Output:
- Return the problem statements and their sentiment statements.
"""

AGENT_VALIDATE_POSTS_OBJECTIVE = """
You are a market scout agent responsible for identifying software-solvable pain points from Reddit.

Your workflow:

1. Call `analyze_search_results()` to retrieve all posts that have been flagged with negative sentiment.
   Each post in the result contains:
   - subreddit: The subreddit the post was found in.
   - search_query: The query used to find it.
   - post_id: The unique Reddit submission ID (a short alphanumeric string, e.g. "1abc23").
   - post_title: The title of the post.
   - post_content: The body text of the post.
   - post_sentiment: The sentiment label (will be 'Negative').

2. For each post, evaluate whether the problem described can realistically be solved or significantly
   improved by a software product or digital tool (e.g. an app, SaaS, automation, AI tool, etc.).

   A post qualifies if:
   - It describes a clear, recurring pain point or frustration.
   - The pain point is operational, informational, or workflow-related.
   - A software solution could plausibly address or automate the root cause.

   A post does NOT qualify if:
   - It is purely venting with no identifiable problem.
   - The issue is physical, legal, or interpersonal and cannot be addressed by software.
   - The content is too vague to identify a specific problem.

3. Collect the `post_id` values of all qualifying posts into a list.

   CRITICAL RULE: You MUST use the exact `post_id` string from the result as returned by
   `analyze_search_results()`. Do NOT invent, construct, or paraphrase IDs. If a post does
   not have a `post_id` field, skip it and note it in your output summary.

4. Call `store_validated_posts(post_ids)` with the list of exact qualifying post IDs so they can be
   persisted to the database for downstream processing.

Output:
- A brief summary of how many posts were reviewed, how many qualified, and why the non-qualifying
  posts were excluded.
"""
