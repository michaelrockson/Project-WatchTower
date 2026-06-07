import type { IconType } from "react-icons";

export type AnalyticsCardVariant = "info" | "success" | "warning" | "error" | "brand";

export type AnalyticsCardsPayload = {
  id?: number;
  tag: string;
  data: number | string;
  trend?: number;
  trendDirection?: "up" | "down" | "neutral";
  variant?: AnalyticsCardVariant;
  icon?: IconType;
};

export type httpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type PipelinePayload = {
  pipeline: string;
  runs: number;
};

export type Record = {
  id: number;
  title: string;
  content: string;
  data: string;
  subreddit?: string;
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

export interface GreetingProps {
  username: string;
}

export type TimePeriod = "weekly" | "monthly" | "3months" | "6months";

export interface DashboardHexChartProps {
  pipelineData: PipelinePayload[];
}

export interface HexChartTooltipProps {
  active?: boolean;
  payload?: { value: number; payload: PipelinePayload }[];
}

export interface DashboardHistoryCardProps {
  record: Record[];
}

export interface DashboardLineChartProps {
  agentData: AgentPayload[];
}

export interface LineChartTooltipProps {
  active?: boolean;
  payload?: { value: number; payload: AgentPayload; color: string }[];
  label?: string;
}

export interface DashboardOverviewCardsProps {
  cardData: AnalyticsCardsPayload[];
}

export interface DashboardOverviewChartsProps {
  agentData: AgentPayload[];
  pipelineData: PipelinePayload[];
}

export interface DashboardTimeFilterProps {
  value: TimePeriod;
  onChange: (val: TimePeriod) => void;
}
