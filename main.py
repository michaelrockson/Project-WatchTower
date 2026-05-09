import sys
from database.init_db import init_db
from pipelines.core_pipeline import CorePipeline
from pipelines.egress_pipeline import EgressPipeline
from pipelines.ingress_pipeline import IngressPipeline
from pipelines.scout_pipeline import ScoutBotPipeline
from pipelines.sentiment_pipeline import SentimentPipeline
from settings import settings
from utils.helpers import run_pipeline
from utils.logger import logger

if __name__ == "__main__":
    logger.info("Initializing database...")
    init_db()

    scout = ScoutBotPipeline()
    ingress = IngressPipeline()
    sentiment = SentimentPipeline()
    core = CorePipeline()
    egress = EgressPipeline()

    pipelines = [scout,ingress,sentiment,core,egress]

    for pipeline in pipelines:
        if isinstance(pipeline, EgressPipeline):
            run_pipeline(pipeline, settings.CHOICE_THREE)
        else:
            run_pipeline(pipeline)

    logger.info("Full pipeline execution successful.")
    sys.exit(0)
