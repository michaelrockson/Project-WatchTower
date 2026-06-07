import React from "react";
import DashboardAnalyticsCard from "./DashboardAnalyticsCard.tsx";
import type { DashboardOverviewCardsProps } from "../models/DashboardModels.ts";

export default function DashboardOverviewCards({ cardData }: DashboardOverviewCardsProps): React.JSX.Element {
  return (
    <section className="li-section-sm li-grid li-grid-4">
      {cardData.map((data) => (
        <DashboardAnalyticsCard key={data.id} tag={data.tag} data={data.data} />
      ))}
    </section>
  );
}
