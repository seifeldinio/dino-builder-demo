import moment from "moment";
import React from "react";

const SmallNotificationTile = (props) => {
  const { fromName } = props;
  const { fromProfilePic } = props;

  const { title } = props;
  const { body } = props;
  const { timestamp } = props;
  const { read } = props;
  const { onClick } = props;

  //   Format from ISO to date format
  // var date = moment(timestamp);
  // var dateComponent = date.utc().format("YYYY-MM-DD HH:mm:ss");
  //   var timeComponent = date.utc().format("HH:mm:ss");
  // console.log(dateComponent);
  //   console.log(timeComponent);

  // const timestampFormat = moment
  //   .utc({ dateComponent })
  //   .local()
  //   .startOf("seconds")
  //   .fromNow();

  // For navigation
  //   const navigate = useNavigate();

  return (
    <>
      {/* Notification List tile */}
      <div
        onClick={onClick}
        className="flex flex-row items-center h-[70px] hover:bg-[#F7FBFF] hover:dark:bg-hover-dark cursor-pointer transition-all duration-200  "
      >
        <div className="ml-[15px] h-[40px] w-[40px]">
          <img
            className="rounded-full h-[40px] w-[40px] object-cover"
            src={fromProfilePic}
            alt=""
          />
        </div>
        <div className="flex flex-col ml-[12px]">
          <span className="text-[16px] font-normal dark:text-white">
            {fromName}: {title}
          </span>
          <span className="text-[14px] text-[#9E9696]">{body}</span>
        </div>
        <div className="flex flex-row items-center ml-auto mr-[15px]">
          <span className="text-[14px] text-[#9E9696] mr-[12px]">
            {moment(`${timestamp}`).fromNow()}
            {/* {timestampFormat} */}
          </span>
          {read === true ? (
            <div className="inline-flex bg-[#F2F3F7] dark:bg-[#414141] h-2.5 w-2.5 rounded-full" />
          ) : (
            <>
              {/* Animated Ping */}
              <div className="animate-ping realtive bg-red h-2.5 w-2.5 rounded-full  opacity-75 mr-[-10px]" />
              <div className="inline-flex bg-red h-2.5 w-2.5 rounded-full" />
            </>
          )}
        </div>
      </div>
      <hr className="w-full dark:border-[#3a3a3a]" />
    </>
  );
};

export default SmallNotificationTile;
