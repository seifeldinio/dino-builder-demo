// import React from "react";
import CircularProgress from "./CircularProgress";

const MobileAppStatus = (props) => {
  const { progress } = props;
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      className="md:invisible md:h-0 md:w-0 visible rounded-lg bg-greyelement items-center justify-center content-center dark:bg-section-dark"
    >
      <div className="flex flex-row items-center content-center justify-center p-3">
        <div className="flex flex-col items-center mr-3">
          <CircularProgress
            progress={progress === 0 ? 50 : 100}
            title={"Design"}
          />
          <div className="mb-6" />
          <CircularProgress
            progress={progress === 1 ? 50 : progress === 0 ? 0 : 100}
            title={"Development"}
          />
        </div>
        <div className="">
          {progress === 0 ? (
            <span className="text-purple text-[20px]">10%</span>
          ) : progress === 1 ? (
            <span className="text-purple text-[20px]">25%</span>
          ) : progress === 2 ? (
            <span className="text-purple text-[20px]">50%</span>
          ) : progress === 3 ? (
            <span className="text-purple text-[20px]">75%</span>
          ) : (
            <span className="text-green text-[20px]">100%</span>
          )}
        </div>

        <div className="flex flex-col items-center ml-1">
          {" "}
          <CircularProgress
            progress={
              progress === 2
                ? 50
                : progress === 0
                ? 0
                : progress === 1
                ? 0
                : 100
            }
            title={"Beta"}
          />
          <div className="mb-6" />
          <CircularProgress
            progress={
              progress === 3
                ? 50
                : progress === 0
                ? 0
                : progress === 1
                ? 0
                : progress === 2
                ? 0
                : 100
            }
            title={"First release"}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppStatus;
