import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useState } from "react";
import { AiOutlineCloudSync } from "react-icons/ai";

const SyncButton = () => {
  const [projectProgressUpdate] = useState(false);

  // GET PROJECT THAT BELONGS TO USER DATA

  return (
    <>
      {projectProgressUpdate && (
        <div className=" absolute right-[40px]">
          <TooltipComponent
            className="tooltip-box"
            content="There's new unsynced updates, click to sync."
            target="#tooltip"
          >
            <div id="tooltip">
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className="cursor-pointer"
              >
                {/* Animated ping */}
                <div className="animate-ping absolute bg-red h-2.5 w-2.5 rounded-full  opacity-75 right-0 mt-[18px] mr-[8px]" />
                <div className="absolute bg-red h-2.5 w-2.5 rounded-full right-0 mt-[18px] mr-[8px]" />

                <div className="justify-center cursor-pointer hover:bg-[#eaeaea] hover:dark:bg-[#2C2C2C] mt-2 px-3 py-3 rounded-full w-full   transition-color duration-200 ">
                  <AiOutlineCloudSync className="h-[23px] w-[23px] dark:text-white" />
                </div>
              </button>
            </div>
          </TooltipComponent>
        </div>
      )}
    </>
  );
};

export default SyncButton;
