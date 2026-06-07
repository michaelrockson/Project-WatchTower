import React from "react";
import { MdNotificationsNone, MdSearch } from "react-icons/md";
import { useLiveClock } from "./hooks/useLiveClock.ts";
import { formatTimestamp } from "./utils/formatTimestamp.ts";
import type { HeaderBarProps } from "./models/LayoutModels.ts";

export default function HeaderBar({
  pageTitle = "Dashboard",
  notificationCount = 0,
}: HeaderBarProps): React.JSX.Element {
  const now = useLiveClock();

  return (
    <header className="li-border-b li-navbar">
      <div className="li-container">
        <div className="li-nav li-justify-between">
          <div className="li-flex li-flex-col li-flex-no-gap">
            <nav className="li-header-breadcrumb">
              <h3 className="li-text-muted li-text-h3">{pageTitle}</h3>
            </nav>
          </div>

          <div className="li-flex li-items-center">
            <span className="li-header-timestamp">{formatTimestamp(now)}</span>

            <div className="li-header-search-wrap">
              <MdSearch className="li-header-search-icon" size={16} />
              <input
                className="li-input li-header-search"
                type="text"
                placeholder="Search findings..."
                id="header-search"
              />
            </div>

            <button
              className="li-header-bell"
              aria-label="Notifications"
              id="header-notifications"
            >
              <MdNotificationsNone size={20} />
              {notificationCount > 0 && (
                <span className="li-header-bell-badge">
                  {notificationCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
