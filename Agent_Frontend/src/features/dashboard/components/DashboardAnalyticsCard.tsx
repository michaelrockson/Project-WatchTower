import React from "react";
import { MdTrendingUp, MdTrendingDown, MdTrendingFlat } from "react-icons/md";
import type {
  AnalyticsCardsPayload,
  AnalyticsCardVariant,
} from "../models/DashboardModels.ts";

const variantIconBoxClass: Record<NonNullable<AnalyticsCardVariant>, string> = {
  info: "li-card-icon-box-info",
  success: "li-card-icon-box-success",
  warning: "li-card-icon-box-warning",
  error: "li-card-icon-box-error",
  brand: "li-card-icon-box-brand",
};

export default function DashboardAnalyticsCard({
  tag,
  data,
  trend,
  trendDirection = "neutral",
  variant = "brand",
  icon: Icon,
}: AnalyticsCardsPayload): React.JSX.Element {
  const iconBoxClass = variantIconBoxClass[variant];

  const TrendIcon =
    trendDirection === "up"
      ? MdTrendingUp
      : trendDirection === "down"
        ? MdTrendingDown
        : MdTrendingFlat;

  const trendClass =
    trendDirection === "up"
      ? "li-stat-trend li-stat-trend-up"
      : trendDirection === "down"
        ? "li-stat-trend li-stat-trend-down"
        : "li-stat-trend li-stat-trend-neutral";

  return (
    <div className="li-card li-hover-lift">
      <div className="li-flex li-justify-between li-items-center li-mb-md">
        <p className="li-text-sm li-text-secondary">{tag}</p>
        {Icon && (
          <div className={`li-card-icon-box ${iconBoxClass}`}>
            <Icon size={18} />
          </div>
        )}
      </div>

      <p className="li-stat-value li-mb-sm">{data}</p>

      {trend !== undefined && (
        <span className={trendClass}>
          <TrendIcon size={12} />
          {trendDirection === "down" ? "-" : "+"}
          {Math.abs(trend)}%{" "}
          <span style={{ fontWeight: 400, opacity: 0.7 }}>vs last month</span>
        </span>
      )}
    </div>
  );
}
