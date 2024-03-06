import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <div className="flex justify-center">
      <CircularProgress className="!text-black" />
    </div>
  );
}

export default Loading;
