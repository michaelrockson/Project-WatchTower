import React from "react";
import type {
  DashboardTimeFilterProps,
  TimePeriod,
} from "../models/DashboardModels.ts";

const OPTIONS: { label: string; value: TimePeriod }[] = [
  { label: "7 Days", value: "weekly" },
  { label: "30 Days", value: "monthly" },
  { label: "3 Months", value: "3months" },
  { label: "6 Months", value: "6months" },
];

export default function DashboardTimeFilter({
  value,
  onChange,
}: DashboardTimeFilterProps): React.JSX.Element {
  return (
    <div
      className="li-flex li-flex-no-gap"
      style={{
        background: "rgba(255,255,255,0.02)",
        padding: 2,
        borderRadius: 6,
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {OPTIONS.map((period) => (
        <button
          key={period.value}
          className={`li-btn li-btn-xs ${value === period.value ? "li-btn-secondary" : "li-btn-ghost"}`}
          style={{
            height: 26,
            fontSize: "11px",
            padding: "0 8px",
            border: value === period.value ? undefined : "none",
            background:
              value === period.value ? "rgba(255,255,255,0.06)" : "transparent",
          }}
          onClick={() => onChange(period.value)}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}
