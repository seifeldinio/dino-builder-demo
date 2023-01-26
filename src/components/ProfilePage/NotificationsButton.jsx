import {  useState } from "react";
import { BiBell } from "react-icons/bi";
// import BellSVG from "../../assets/Icons/Bell.svg";
// import socket from "../../socket/Socket";

const NotificationsButton = (props) => {
  const { onClick } = props;
  const { newNotifications } = props;

  const [notificationSentFromAdmin] =
    useState(false);

  return (
    <button onClick={onClick} className="md:visible invisible cursor-pointer">
      {" "}
      {newNotifications === true || notificationSentFromAdmin ? (
        <>
          {" "}
          {/* Animated ping */}
          <div className="animate-ping absolute bg-red h-2.5 w-2.5 rounded-full  opacity-75 right-0 mt-[17px] mr-[10px]" />
          <div className="absolute bg-red h-2.5 w-2.5 rounded-full right-0  mt-[17px] mr-[10px]" />
        </>
      ) : (
        <></>
      )}
      <div className="justify-center cursor-pointer hover:bg-[#eaeaea] hover:dark:bg-[#323232] mt-2 px-3 py-3 rounded-full w-full   transition-color duration-200 ">
        <BiBell className=" h-[20px] w-[20px] dark:text-white" />

        {/* <img className=" h-[20px] w-[20px]" src={BellSVG} /> */}
      </div>
    </button>
  );
};

export default NotificationsButton;
