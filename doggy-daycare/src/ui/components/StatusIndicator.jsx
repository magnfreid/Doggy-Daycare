import "./StatusIndicator.css";

function StatusIndicator({ isPresent }) {
  return (
    <span className={`status-indicator ${isPresent ? "present" : "absent"}`} />
  );
}

export default StatusIndicator;
