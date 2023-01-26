import React from "react";
import { MdDone } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";

const Console = () => {
  const { currentMode } = useStateContext();

  const lightIcon = "https://media.publit.io/file/StockPics/console-light.webp";
  const darkIcon = "https://media.publit.io/file/StockPics/console.webp";

  return (
    <>
      {/* Console */}
      <div className="flex flex-col items-start mt-auto bg-greyelement dark:bg-button-dark border-t dark:border-[#2C2C2C]  h-[170px] p-4">
        {/* Console message */}
        <div className="flex flex-row items-center w-full select-none">
          <img
            className="h-[30px] w-[30px]"
            src={currentMode === "Light" ? lightIcon : darkIcon}
            alt=""
          />
          <span className="ml-1">: No bugs detected.</span>
          <MdDone className="text-green ml-1" />
        </div>
        {/* Console message */}
        <div className="flex flex-row items-center w-full mt-1.5 select-none">
          <img
            className="h-[30px] w-[30px]"
            src={currentMode === "Light" ? lightIcon : darkIcon}
            alt=""
          />
          <span className="ml-1 mr-1">:</span>

          <div className="mr-1 bg-green pl-1 pr-1 rounded-md">
            <span className=" text-black ">Running</span>
          </div>
          <MdDone className="text-green ml-1" />
        </div>
      </div>
    </>
  );
};

export default Console;
