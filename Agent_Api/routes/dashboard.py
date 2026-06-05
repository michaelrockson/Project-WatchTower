from fastapi import APIRouter, HTTPException

from models.dashboard_models import AnalyticsCardsStruct, PipelineDataStruct, AgentRunStruct, AgentRecordsStruct

router = APIRouter(prefix = "/dashboard", tags = ["dashboard"])

@router.get("/analytics/card")
def get_analytics_info():
    try:
        payload: list[AnalyticsCardsStruct] = [
            AnalyticsCardsStruct(id = 0, tag = "Agent Health", data = 92),
            AnalyticsCardsStruct(id = 1, tag = "Agent Runs", data = 16),
            AnalyticsCardsStruct(id = 2, tag = "Problem Gathered", data = 45),
            AnalyticsCardsStruct(id = 3, tag = "Reports Sent", data = 4),
        ]
        return {"AnalyticsCards": payload, "status_code": 200}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/chart/agent/pipeline")
def get_pipeline_info():
    try:
        payload: list[PipelineDataStruct] = [
            PipelineDataStruct(pipeline="Scout", runs=62),
            PipelineDataStruct(pipeline="Ingress", runs=82),
            PipelineDataStruct(pipeline="Sentiment", runs=62),
            PipelineDataStruct(pipeline="Core", runs=76),
            PipelineDataStruct(pipeline="Egress", runs=15),
        ]
        return {"PipelinePayload": payload, "status_code": 200}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/chart/agent/runs")
def get_runs_info():
    try:
        payload: list[AgentRunStruct] = [
            AgentRunStruct(month = "January", runs = 45),
            AgentRunStruct(month = "February", runs = 60),
            AgentRunStruct(month = "March", runs = 72),
            AgentRunStruct(month = "April", runs = 14),
            AgentRunStruct(month = "May", runs = 35),
            AgentRunStruct(month = "June", runs = 92),
            AgentRunStruct(month = "July", runs = 140),
            AgentRunStruct(month = "August", runs = 45),
        ]
        return {"AgentRunPayload": payload, "status_code": 200}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/recents/agent/records")
def get_recent_findings():
    try:
        payload: list[AgentRecordsStruct] = [
            AgentRecordsStruct(id=0, title="Suspicious Login Attempt", content="Multiple failed attempts from unknown IP", data="04-06-2026"),
            AgentRecordsStruct(id=1, title="API Rate Limit Exceeded", content="Service API hit threshold of 1000 req/min", data="03-06-2026"),
            AgentRecordsStruct(id=2, title="New Device Registered", content="User admin authenticated from new device", data="01-06-2026"),
            AgentRecordsStruct(id=3, title="New Rust Package", content="New Rust package for something interesting", data="01-06-2026"),
        ]
        return {"AgentRecordsPayload": payload, "status_code": 200}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
