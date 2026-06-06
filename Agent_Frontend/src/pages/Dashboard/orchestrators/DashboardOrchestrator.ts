import { dashboardService } from "../services/DashboardService.ts";
import type { DashboardData } from "../models/DashboardModels.ts";

export async function fetchDashboardData(): Promise<DashboardData> {
  const [analyticsRes, pipelineRes, agentRecordsRes, agentPayloadRes] =
    await Promise.all([
      dashboardService.getAnalyticsCardData(),
      dashboardService.getPipelineData(),
      dashboardService.getAgentRecords(),
      dashboardService.getLineChartData(),
    ]);
  return {
    analyticsCardData: (analyticsRes as any).AnalyticsCards || [],
    pipelineData: (pipelineRes as any).PipelinePayload || [],
    agentRecords: (agentRecordsRes as any).AgentRecordsPayload || [],
    agentPayload: (agentPayloadRes as any).AgentRunPayload || [],
  };
}

export async function refetchAnalyticsCards() {
  return dashboardService.getAnalyticsCardData();
}

export async function refetchPipelineData() {
  return dashboardService.getPipelineData();
}

export async function refetchAgentRecords() {
  return dashboardService.getAgentRecords();
}

export async function refetchAgentPayload() {
  return dashboardService.getLineChartData();
}
