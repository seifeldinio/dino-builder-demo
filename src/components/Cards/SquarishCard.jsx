import React from "react";
import { TextIconBlueButton } from "../";
// import Download from "../../assets/Icons/Download.svg";
import { DisabledButton } from "../";
// import WhiteCheckSVG from "../../assets/Icons/WhiteCheck.svg";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// import { MdOutlineFileDownload } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { BsCheck2 } from "react-icons/bs";
import { Tooltip } from "antd";

const SquarishCard = (props) => {
  const { svg } = props;
  const { title } = props;
  const { desc } = props;
  const { contractFileDownload } = props;
  const { signed } = props;

  // 👇️ open link in new tab
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div class="flex h-[230px] w-[230px]">
      <div class=" rounded-lg shadow-sm outline outline-2 outline-grey bg-white max-w-sm w-[230px] dark:bg-[#2C2C2C] dark:outline-[#2C2C2C]">
        <div className="flex-wrap ">
          <div className=" pt-2.5 pl-2.5 pr-2.5 ">
            <img className="absolute mt-[27px] ml-[80px]" src={svg} alt="" />

            <div className="h-[100px] w-auto  bg-[#FAFAFA] rounded-lg dark:bg-[#2C2C2C]"></div>
          </div>
        </div>

        <div class="p-2.5">
          <h5 class="text-gray-900 text-[18px] dark:text-white ">{title}</h5>
          <p class="text-gray-700  text-[13px] mb-2 dark:text-[#a6a6a6]">
            {desc}
          </p>
          {/* BUTTON */}
          <div className="flex flex-warp">
            <div className="ml-auto">
              {signed === true ? (
                <Tooltip title="Contract already signed ✅" placement="bottom">
                  <div>
                    <DisabledButton
                      text={"Signed"}
                      icon={<BsCheck2 className="ml-1" />}
                      // iconSize={"16px"}
                      // ml={"ml-1"}
                    />
                  </div>
                </Tooltip>
              ) : (
                <TextIconBlueButton
                  onClick={() => openInNewTab(contractFileDownload)}
                  text={"Download"}
                  icon={<HiDownload className="ml-1" />}
                  // iconSize={"19px"}
                  // ml={"ml-1"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquarishCard;
