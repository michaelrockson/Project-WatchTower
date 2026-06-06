import type {
  AgentPayload,
  AnalyticsCardsPayload,
  httpMethod,
  PipelinePayload,
  Record,
} from "../models/DashboardModels.ts";

class DashboardService {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:8000";
  }

  private async request<T>(
    endpoint: string,
    requestMethod: httpMethod,
    body?: undefined,
  ): Promise<T> {
    const serverResponse = await fetch(`${this.baseUrl}${endpoint}`, {
      method: `${requestMethod}`,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!serverResponse.ok) throw new Error(`${serverResponse.status}`);

    return (await serverResponse.json()) as Promise<T>;
  }

  getAnalyticsCardData() {
    return this.request<AnalyticsCardsPayload[]>("/dashboard/analytics/card", "GET");
  }

  getPipelineData() {
    return this.request<PipelinePayload[]>("/dashboard/chart/agent/pipeline", "GET");
  }

  getAgentRecords() {
    return this.request<Record[]>("/dashboard/recents/agent/records", "GET");
  }

  getLineChartData() {
    return this.request<AgentPayload[]>("/dashboard/chart/agent/runs", "GET");
  }
}

export const dashboardService = new DashboardService();
