import { MdInbox } from "react-icons/md";

export default function EmptyHistoryState() {
  return (
    <div className="li-empty-state">
      <MdInbox className="li-empty-state-icon" />
      <p className="li-empty-state-title">No findings yet</p>
      <p className="li-empty-state-sub">
        Agent records will appear here once the pipelines start running.
      </p>
    </div>
  );
}
