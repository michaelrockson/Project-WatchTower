import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";
import type { DashboardHistoryCardProps, TimePeriod } from "../models/DashboardModels.ts";
import DashboardTimeFilter from "./DashboardTimeFilter.tsx";
import EmptyHistoryState from "./EmptyHistoryState.tsx";
import { truncate } from "../utils/truncate.ts";

export default function DashboardHistoryCard({
  record,
}: DashboardHistoryCardProps): React.JSX.Element {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("weekly");

  return (
    <section className="li-section-sm">
      <div className="li-card li-hover-lift">
        <div className="li-flex li-justify-between li-items-center li-mb-md">
          <div>
            <h3 style={{ marginBottom: 2 }}>Recent Findings</h3>
            <p className="li-text-xs li-text-muted">
              Latest records surfaced by your agents
            </p>
          </div>
          <div className="li-flex li-items-center">
            <DashboardTimeFilter value={timePeriod} onChange={setTimePeriod} />
            <a
              href="#"
              className="li-flex li-items-center li-text-sm li-text-secondary"
              style={{ gap: 4, transition: "color 0.2s" }}
              id="history-view-all"
            >
              View all <MdArrowForward size={14} />
            </a>
          </div>
        </div>

        {record.length === 0 ? (
          <EmptyHistoryState />
        ) : (
          <div className="li-table-container">
            <table className="li-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Finding</th>
                  <th>Subreddit</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {record.map((row) => (
                  <tr key={row.id}>
                    <td
                      style={{
                        maxWidth: 200,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.title}
                    </td>
                    <td style={{ maxWidth: 320 }} title={row.content}>
                      {truncate(row.content)}
                    </td>
                    <td>
                      {row.subreddit ? (
                        <span className="li-badge-subreddit">
                          {row.subreddit}
                        </span>
                      ) : (
                        <span className="li-text-muted li-text-xs">—</span>
                      )}
                    </td>
                    <td>{row.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
