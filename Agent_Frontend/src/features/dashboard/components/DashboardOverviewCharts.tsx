import React from "react";
import DashboardLineChart from "./DashboardLineChart.tsx";
import DashboardHexChart from "./DashboardHexChart.tsx";
import type { DashboardOverviewChartsProps } from "../models/DashboardModels.ts";

export default function DashboardOverviewCharts({
  agentData,
  pipelineData,
}: DashboardOverviewChartsProps): React.JSX.Element {
  return (
    <section className="li-section-sm li-grid li-grid-take-5">
      <DashboardLineChart agentData={agentData} />
      <DashboardHexChart pipelineData={pipelineData} />
    </section>
  );
}
