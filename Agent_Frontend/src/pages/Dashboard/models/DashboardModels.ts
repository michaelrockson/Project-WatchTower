export type AnalyticsCardsPayload = {
  id?: number;
  Tag: string;
  Data: number | string;
};

export type httpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type PipelinePayload = {
  pipeline: string;
  runs: number;
};

export type Record = {
  id: number;
  name: string;
  content: string;
  date: string;
};

export type AgentPayload = {
  month: string;
  runs: number;
};

export interface DashboardData {
  analyticsCardData: AnalyticsCardsPayload[];
  pipelineData: PipelinePayload[];
  agentRecords: Record[];
  agentPayload: AgentPayload[];
}
