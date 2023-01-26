import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useStateContext } from "../contexts/ContextProvider";

const LoadingSkeleton = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="page-animation">
      <div className="md:mt-10 md:ml-10 md:mr-10 mt-20 ml-5 mr-5">
        {currentMode === "Light" ? (
          <SkeletonTheme baseColor="#FAFAFA" highlightColor="#f2f3f7">
            <div className="flex flex-col ">
              <Skeleton className="h-[30px] w-[20px] rounded-lg mb-2" />
              <Skeleton className="h-[25px] rounded-lg mb-5" />

              <Skeleton className="h-[130px] rounded-lg mb-5" />
              <Skeleton className="h-[130px] rounded-lg mb-5" />
              <Skeleton className="h-[130px] rounded-lg mb-5" />
            </div>
          </SkeletonTheme>
        ) : (
          <SkeletonTheme baseColor="#1a1a1a" highlightColor="#2b2b2b">
            <div className="flex flex-col ">
              <Skeleton className="h-[30px] w-[20px] rounded-lg mb-2" />
              <Skeleton className="h-[25px] rounded-lg mb-5" />

              <Skeleton className="h-[130px] rounded-lg mb-5" />
              <Skeleton className="h-[130px] rounded-lg mb-5" />
              <Skeleton className="h-[130px] rounded-lg mb-5" />
            </div>
          </SkeletonTheme>
        )}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
