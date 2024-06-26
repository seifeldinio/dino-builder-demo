import { Popover } from "antd";
import { useState } from "react";
// import React, { useEffect } from "react";
// import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlinedFlag, MdSend } from "react-icons/md";
// import TextIconBlueButton from "../Buttons/TextIconBlueButton";
// import { AiOutlineSmile } from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
// import { useStore } from "../../contexts/storeContext/StoreContext";

const CommunicateCard = (props) => {
  const { titleOnChange } = props;
  const { messageOnChange } = props;
  // const { oneSignalApiKey } = props;

  const {
    pushNotificationTitle,
    // setPushNotificationTitle,
    pushNotificationBody,
    // setPushNotificationBody,
  } = useStateContext();

  // const [schedule, setSchedule] = useState(false);

  // For date picker
  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  // Pop over

  // const error = () => {
  //   messageApi.open({
  //     type: "error",
  //     content: "No message to send! 🤷‍♀️",
  //   });
  // };

  // For pop over
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <div className="flex flex-col p-4">
      {/* Card title */}
      <span className="text-[18px] dark:text-white">Communicate</span>
      <span className="text-[#9A9A9A]">
        Send push notifications to your users & promote your offers.
      </span>
      <hr className="mt-2 mb-2 dark:border-[#2C2C2C]" />
      {/* Title */}
      <span className="mt-2 mb-2 font-normal text-[16px] text-[#25272E] dark:text-white">
        Title
      </span>
      <input
        type="text"
        id="small-input"
        class="flex-1  h-[25px] p-2 w-[200px] text-gray-900  rounded-lg border border-gray-300 sm:text-xs focus:ring-blue focus:border-blue dark:bg-[#303030] dark:border-[#272727] dark:placeholder-[#272727] dark:text-white dark:focus:ring-blue dark:focus:border-blue"
        onChange={titleOnChange}
        value={pushNotificationTitle}
      ></input>
      <div className="mb-2" />
      {/* Message */}
      <span className="mt-2 mb-2 font-normal text-[16px] text-[#25272E] dark:text-white">
        Message
      </span>
      <input
        type="text"
        id="small-input"
        class="flex-1  h-[25px] p-2 w-[350px] text-gray-900  rounded-lg border border-gray-300 sm:text-xs focus:ring-blue focus:border-blue dark:bg-[#303030] dark:border-[#272727] dark:placeholder-[#272727] dark:text-white dark:focus:ring-blue dark:focus:border-blue"
        onChange={messageOnChange}
        value={pushNotificationBody}
      ></input>
      <div className="mb-6" />
      {/* Priority */}
      <div className="flex flex-row items-center">
        <MdOutlinedFlag className="mr-1 dark:text-white" />
        <span className="dark:text-white">Priority</span>
        <select
          id="countries"
          className="ml-2 h-[25px] w-[85px] pl-2  bg-gray-50 border border-gray-300 dark:bg-[#303030] text-gray-900 text-sm rounded-lg focus:ring-blue focus:border-blue block    dark:border-[#272727] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
        >
          <option className="block w-full">High</option>
          <option className="block w-full">Medium</option>
        </select>
      </div>

      {/* <hr className="mt-7 mb-5 w-[400px] dark:border-[#2C2C2C]" /> */}

      {/* Delivery */}
      {/* <span className="text-[18px] mb-4 dark:text-white">Delivery</span> */}
      <div className="flex flex-row items-center mt-[68px] ml-auto">
        <Popover
          content={
            <div className="flex flex-col">
              <span>Sends your notification to all your users. 🚀</span>
              <button onClick={hide} className="text-blue mt-1.5">
                Ok
              </button>
            </div>
          }
          title="Demo"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
          placement="right"
        >
          <div>
            <button
              onClick={() => {}}
              class="bg-blue hover:bg-darkblue text-white  py-1 px-2.5 rounded-md inline-flex items-center transition-color duration-200 "
            >
              <span className="text-[14px]">Send</span>
              <MdSend className="ml-1 h-[15px] w-[15px]" />
            </button>
          </div>
        </Popover>
      </div>
      {/* <div className="mb-[7px]" /> */}
    </div>
  );
};

export default CommunicateCard;
