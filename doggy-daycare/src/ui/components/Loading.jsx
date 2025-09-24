import "./Loading.css";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <div className="loading">
      <CircularProgress style={{ color: "pink", width: 200, height: 200 }} />
      {/* <p>Loading...</p> */}
    </div>
  );
}

export default Loading;
