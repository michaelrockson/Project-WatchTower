import type { LineChartTooltipProps } from "../models/DashboardModels.ts";
import React from "react";

export default function AgentActivityTooltip({
  active,
  payload,
  label,
}: LineChartTooltipProps): React.JSX.Element | null {
  if (!active || !payload?.length) return null;
  return (
    <div className="li-chart-tooltip">
      <p className="li-chart-tooltip-label">{label}</p>
      <div className="li-chart-tooltip-value">
        <span>
          <span
            className="li-chart-tooltip-dot"
            style={{ background: payload[0].color }}
          />
          Agent Runs
        </span>
        <span>{payload[0].value.toLocaleString()}</span>
      </div>
    </div>
  );
}
