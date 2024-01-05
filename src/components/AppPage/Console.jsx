import React from "react";
import { MdDone } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";

import SmallLogoLight from "../../assets/images/small-logo-light.webp";
import SmallLogoDark from "../../assets/images/small-logo.webp";

const Console = () => {
  const { currentMode } = useStateContext();

  // const lightIcon = "https://media.publit.io/file/StockPics/console-light.webp";
  // const darkIcon = "https://media.publit.io/file/StockPics/console.webp";

  return (
    <>
      {/* Console */}
      <div className="flex  flex-col items-start mt-auto bg-greyelement dark:bg-button-dark border-t dark:border-[#2C2C2C]  h-[270px] p-4">
        {/* Console message */}
        <div className="flex flex-row items-center w-full select-none">
          <img
            className="h-[30px] w-[30px]"
            src={currentMode === "Light" ? SmallLogoLight : SmallLogoDark}
            alt=""
          />
          <span className="ml-1 ">: no bugs detected.</span>
          <MdDone className="text-[#006908] ml-1" />
        </div>
        {/* Console message */}
        <div className="flex flex-row items-center w-full mt-1.5 select-none">
          <img
            className="h-[30px] w-[30px]"
            src={currentMode === "Light" ? SmallLogoLight : SmallLogoDark}
            alt=""
          />
          <span className="ml-1 mr-1">:</span>

          <div className="flex flex-row items-center bg-[#D7F7C2] px-1 py-0.5 rounded-md">
            <span className=" text-[#006908] ">running</span>
            <MdDone className="text-[#006908] ml-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Console;
