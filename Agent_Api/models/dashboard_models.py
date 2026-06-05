from pydantic import BaseModel

class AnalyticsCardsStruct(BaseModel):
    id: int
    tag: str
    data: int

class PipelineDataStruct(BaseModel):
    pipeline: str
    runs: int

class AgentRunStruct(BaseModel):
    month: str
    runs: int

class AgentRecordsStruct(BaseModel):
    id: int
    title: str
    content: str
    data: str
