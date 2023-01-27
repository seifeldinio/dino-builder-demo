import { BsCalendar } from "react-icons/bs";
import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import BackButton from "../Buttons/BackButton";
import { Avatar } from "antd";
import clickB from "../../assets/sfx/clickB.mp3";
import useSound from "use-sound";

const ViewTaskSidePanel = () => {
  const { setViewTaskSidePanel, taskData, setTaskData } = useStateContext();

  const [play] = useSound(clickB, { volume: 0.5 });

  return (
    <>
      <div className="bg-half-transparent  w-screen fixed nav-item top-0 right-0">
        <div className="page-animation">
          <div className="float-right h-screen  dark:text-gray-200 bg-white  w-400 p-5 overflow-y-scroll	dark:bg-section-dark">
            {/* Right Panel Context */}
            <div className="flex justify-between items-center ">
              <BackButton
                onClick={() => {
                  setViewTaskSidePanel(false);
                  setTaskData(null);
                  play();
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center mt-8 ">
                <span className="text-[20px]">{taskData?.task_title}</span>
                {taskData?.progress === 0 ? (
                  <div className="bg-[#dcedff] px-1.5 rounded-lg ml-auto dark:bg-blue mr-2">
                    <span className="text-[14px] text-blue dark:text-[#202020] dark:font-medium">
                      Backlog
                    </span>
                  </div>
                ) : taskData?.progress === 1 ? (
                  <div className="bg-[#fffcd8] px-1.5 rounded-lg ml-auto dark:bg-yellow mr-2">
                    <span className="text-[14px] text-[#d5c13c] dark:text-[#202020] dark:font-medium">
                      In progress
                    </span>
                  </div>
                ) : (
                  <div className="bg-[#e1ffdf] px-1.5 rounded-lg ml-auto dark:bg-green mr-2">
                    <span className="text-[14px] text-green dark:text-[#202020] dark:font-medium">
                      Done
                    </span>
                  </div>
                )}

                {/* <img
                  className=""
                  src="https://media.publit.io/file/StockPics/DevTeam-m.svg"
                  alt=""
                /> */}
                <Avatar.Group
                  maxCount={3}
                  // maxPopoverTrigger="click"
                  size="small"
                  maxStyle={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer",
                  }}
                >
                  <Avatar src="https://media.publit.io/file/StockPics/team-member-1.webp" />
                  <Avatar src="https://media.publit.io/file/StockPics/kloud.webp" />
                  <Avatar src="https://media.publit.io/file/StockPics/dp-demo.webp" />
                </Avatar.Group>
              </div>
              <span className="mt-2 font-normal text-[14px] text-[#8E8E8E] dark:text-[#a9a9a9]">
                {taskData?.brief_description}
              </span>

              <hr className="mt-5 mb-5 dark:border-[#2C2C2C]" />
              <div className="flex flex-row items-center space-x-2 ">
                <span className="text-gray-400 dark:text-[#777777]">
                  Estimated date:
                </span>
                <BsCalendar className="text-gray-400 dark:text-[#777777]" />
                <span className="text-gray-400 dark:text-[#777777]">
                  {/* {taskData?.due_date} */}
                  {new Date().toLocaleString("en-US", { month: "2-digit" })}/
                  {new Date().toLocaleString("en-US", { day: "2-digit" })}/
                  {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTaskSidePanel;
