import type { HexChartTooltipProps } from "../models/DashboardModels.ts";

export default function PipelineTooltip({
  active,
  payload,
}: HexChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="li-chart-tooltip">
      <p className="li-chart-tooltip-label">{payload[0].payload.pipeline}</p>
      <div className="li-chart-tooltip-value">
        <span>
          <span
            className="li-chart-tooltip-dot"
            style={{ background: "#ff4500" }}
          />
          Runs
        </span>
        <span>{payload[0].value}</span>
      </div>
    </div>
  );
}
