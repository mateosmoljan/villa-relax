import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <div className="flex justify-center">
      <CircularProgress className="!text-black" />
    </div>
  );
}

export default Loading;
