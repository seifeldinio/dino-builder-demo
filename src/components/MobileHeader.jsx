// import { AiOutlineBell } from "react-icons/ai";
// import { useState } from "react";
import { BiBell, BiMenuAltLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// import socket from "../socket/Socket";

// import RobootLogo from "../assets/roboot-siteheader.svg";
// import RobootLogoDark from "../assets/roboot-siteheader-dark.svg";

// import BellSVG from "../assets/Icons/Bell.svg";
// import Sidebar from "./Sidebar";
import { useStateContext } from "../contexts/ContextProvider";
// import { useCurrentUser } from "../contexts/userContext/UserContext";
import { notificationsData } from "../data/DemoData";

const MobileHeader = () => {
  const { setMobileSidebar, currentMode } = useStateContext();

  // For navigation
  const navigate = useNavigate();

  // GET CURRENT USER DATA
  // const { currentUser, fetchCurrentUser, notifications, fetchNotifications } =
  //   useCurrentUser();

  // const [notificationSentFromAdmin, setNotificationSentFromAdmin] =
  //   useState(false);

  // Unread notifications
  const unReadNotifications = notificationsData?.filter(
    (notification) => notification?.read === false
  );

  return (
    <>
      {/* <Sidebar /> */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-[60px] w-full md:invisible dark:bg-black">
        <div className="flex flex-row items-center  h-full pl-4 pr-4 ">
          <div className="flex flex-row items-center">
            {/* Menu button */}
            <button
              onClick={() => {
                setMobileSidebar(true);
              }}
              className="inline-flex justify-center hover:bg-[#eaeaea] px-3 py-3 rounded-full w-full text-sm font-medium text-gray-700 transition-color duration-200 "
            >
              <BiMenuAltLeft className="h-[25px] w-[25px] dark:text-white" />
            </button>
            {currentMode === "Light" ? (
              <img
                src="https://media.publit.io/file/StockPics/bloxat-siteheader.svg"
                className="h-[28px] ml-1"
                alt=""
              />
            ) : (
              <img
                src="https://media.publit.io/file/StockPics/bloxat-dark.webp"
                className="h-[28px] ml-1"
                alt=""
              />
            )}
          </div>

          <div className="ml-auto">
            {/* Notification button */}
            {unReadNotifications?.length > 0 ? (
              <>
                {/* Animated ping */}
                <div className="animate-ping absolute bg-red h-3 w-3 rounded-full  opacity-75 right-[23px] mt-[9px] z-50" />
                <div className="absolute bg-red h-3 w-3 rounded-full right-[23px] mt-[9px] z-50" />
              </>
            ) : (
              <></>
            )}
            <button
              onClick={() => navigate("/notifications")}
              className="inline-flex justify-center hover:bg-[#eaeaea] hover:dark:bg-[#323232] px-3 py-3 rounded-full w-full text-sm font-medium text-gray-700 transition-color duration-200 "
            >
              <BiBell className="w-[20px] h-auto dark:text-white text-black" />
              {/* <img src={BellSVG} className="h-[20px] w-[20px]" alt="" /> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
