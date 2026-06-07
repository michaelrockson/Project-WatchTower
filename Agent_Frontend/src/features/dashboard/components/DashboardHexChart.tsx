import React, { useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { DashboardHexChartProps, TimePeriod } from "../models/DashboardModels.ts";
import DashboardTimeFilter from "./DashboardTimeFilter.tsx";
import PipelineTooltip from "./PipelineTooltip.tsx";

const ANGLE_STYLE = {
  fontSize: 11,
  fill: "#8a8f98",
  fontFamily: "Inter, sans-serif",
};

export default function DashboardHexChart({
  pipelineData,
}: DashboardHexChartProps): React.JSX.Element {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("6months");

  return (
    <div className="li-card li-hover-lift">
      <div className="li-flex li-justify-between li-items-center li-mb-md">
        <div>
          <h3 style={{ marginBottom: 2 }}>Pipeline Activity</h3>
          <p className="li-text-xs li-text-muted">
            Run frequency by pipeline type
          </p>
        </div>
      </div>

      <DashboardTimeFilter value={timePeriod} onChange={setTimePeriod} />

      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <RadarChart
          data={pipelineData}
          margin={{ top: 10, right: 32, bottom: 10, left: 32 }}
        >
          <PolarGrid stroke="rgba(255,255,255,0.07)" />
          <PolarAngleAxis dataKey="pipeline" tick={ANGLE_STYLE} />
          <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 100]} />
          <Radar
            dataKey="runs"
            stroke="#ff6a33"
            strokeWidth={2}
            fill="#ff4500"
            fillOpacity={0.18}
            dot={{ fill: "#ff6a33", r: 3, strokeWidth: 0 }}
          />
          <Tooltip content={<PipelineTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
