// import BellSVG from "../assets/Icons/Bell.svg";
// import Spacer from "react-spacer";
import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { BiBell } from "react-icons/bi";
// import { useStateContext } from "../contexts/ContextProvider";
// import socket from "../socket/Socket";
import { BsGear, BsGearFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tooltip } from "antd";
import { useStateContext } from "../contexts/ContextProvider";

const BottomProfile = (props) => {
  // const { pathname } = useLocation();

  // const { profilePic } = props;
  // const { firstName } = props;
  // const { lastName } = props;
  const { email } = props;
  const { notifications } = props;

  const { notificationSentFromAdmin } = props;

  const { profilePicture, firstName, lastName } = useStateContext();

  return (
    <div className="absolute   mr-2 mt-2 ml-2 mb-5  rounded-md outline  outline-2 outline-grey bg-white bottom-0  dark:bg-main-dark dark:outline-[#2C2C2C]">
      {/* notifications?.length > 0 */}
      {notificationSentFromAdmin || notifications?.length > 0 ? (
        <>
          {/* Animated ping */}
          <div className="animate-ping absolute bg-red h-3 w-3 rounded-full  opacity-75 left-[43px] mt-[13px] z-50" />
          <div className="absolute bg-red h-3 w-3 rounded-full left-[43px] mt-[13px] z-50" />
        </>
      ) : (
        <></>
      )}
      <div className="flex flex-row  space-x-3 items-center m-3 pt-0.5 pb-0.5 ">
        <LazyLoadImage
          data-tour="26"
          className="rounded-full object-cover w-[40px] h-[40px] "
          src={profilePicture}
          effect="blur"
          placeholderSrc={profilePicture}
        />

        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <span className="text-[14px] font-semibold mr-1 dark:text-white">
              {firstName}
            </span>
            <span className="text-[14px] font-semibold dark:text-white">
              {lastName}
            </span>
          </div>
          <span className="text-[12px] w-[125px] truncate text-ellipsis	dark:text-white">
            {email}
          </span>
        </div>

        {/* <Spacer width="18px" /> */}
        {/* Settings button */}
        <div
          data-tour="29"
          className="bg-gray-50 p-2 hover:bg-gray-100 rounded-full transition-color duration-200 dark:bg-button-dark dark:hover:bg-hover-dark "
        >
          {/* <img className="h-[19px] w-[19px]" src={BellSVG} /> */}
          <BsGear className="h-[19px] w-[19px] dark:text-white" />
        </div>
        {/* <div className="bg-white p-2 rounded-full ">
            <div className="h-[19px] w-[19px] " />
          </div> */}

        {/* Link to notifications page was placed here */}
      </div>
    </div>
  );
};

export default BottomProfile;

//  <Link to="/notifications">
//    {notifications?.length > 0 ? (
//      <>
//        {" "}
//        {/* Animated ping */}
//        <div className="animate-ping absolute bg-red h-2.5 w-2.5 rounded-full  opacity-75 right-0 mr-[18px] mt-[5px]" />
//        <div className="absolute bg-red h-2.5 w-2.5 rounded-full right-0 mr-[18px] mt-[5px]" />
//      </>
//    ) : (
//      <></>
//    )}

//    {pathname === "/notifications" ? (
//      <div className=" bg-lemon p-2 rounded-full transition-color duration-200">
//        <img className="h-[19px] w-[19px]" src={BellSVG} />
//      </div>
//    ) : (
//      <div className="bg-gray-50 p-2 hover:bg-gray-100 rounded-full transition-color duration-200">
//        <img className="h-[19px] w-[19px]" src={BellSVG} />
//      </div>
//    )}
//  </Link>;
