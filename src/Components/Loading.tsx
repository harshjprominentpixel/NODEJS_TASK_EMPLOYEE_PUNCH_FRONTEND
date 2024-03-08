import { usePromiseTracker } from "react-promise-tracker";
import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();
  return promiseInProgress ? (
    <div
      role="status"
      className="fixed flex justify-center items-center bg-cyan-100/75 z-50 h-screen w-screen"
      onClick={(e) => e.stopPropagation()}
    >
      <Spinner className="h-16 w-16 text-red-900/50" />
    </div>
  ) : (
    <></>
  );
};

export default Loading;
