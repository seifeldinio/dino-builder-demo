import { HiOutlineArrowLeft } from "react-icons/hi";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
// import { MdOutlinedFlag } from "react-icons/md";
import {
  AndroidPreview,
  CommunicateCard,
  // DevicesTable,
  IOSPreview,
  // PaginationComponent,
  // RecentTable,
  // TextIconBlueButton,
} from "../../components";
// import { MdSend } from "react-icons/md";
// import { AiOutlineCalendar } from "react-icons/ai";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
import { useState } from "react";
import TabsNotifications from "../../components/PushNotificationsPage/TabsNotifications";
import { useStateContext } from "../../contexts/ContextProvider";
// import { useStore } from "../../contexts/storeContext/StoreContext";
import { projectData, storeData } from "../../data/DemoData";
import { Dropdown, Space } from "antd";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useSound from "use-sound";
import clickB from "../../assets/sfx/clickB.mp3";

const PushNotifications = () => {
  // GE

  // For input fields (Global in order to get affected by cloning notifications too from competitors)
  const {
    pushNotificationTitle,
    setPushNotificationTitle,
    pushNotificationBody,
    setPushNotificationBody,
    tourStarted,
  } = useStateContext();

  // For navigation
  const navigate = useNavigate();

  // Input fields
  // const [title, setTitle] = useState("");
  // const [message, setMessage] = useState("");

  // To switch device preview
  const [device, setDevice] = useState("iOS");

  // Dropdown object
  const items = [
    {
      key: "1",
      label: <button onClick={() => setDevice("iOS")}>iOS</button>,
    },
    {
      key: "2",
      label: <button onClick={() => setDevice("Android")}>Android</button>,
    },
  ];

  const [playB] = useSound(clickB, { volume: 0.5 });

  return (
    <div className="page-animation">
      <div
        data-tour="17"
        className="md:mt-10 md:ml-10 md:mr-10 h-full mt-20 ml-5 mr-5 md:overflow-x-visible overflow-x-hidden"
      >
        <div className="flex flex-wrap lg:flex-nowrap ">
          <div className="flex flex-row items-center space-x-1">
            {/* Back button */}
            <button
              onClick={() => {
                if (tourStarted === false) {
                  navigate(-1);
                  playB();
                } else {
                }
              }}
              className="flex h-[40px] w-[40px] justify-center content-center hover:dark:bg-[#323232] dark:text-white cursor-pointer bg-[#F4F4F4] dark:bg-[#2D2D2D] hover:bg-[#e7e7e7] mt-[1px] px-3 py-3 rounded-full  transition-color duration-200  mr-[7px]"
            >
              <HiOutlineArrowLeft className="scale-110" />
            </button>
            {/* Title */}
            <span className="text-[26px] dark:text-white font-bold">
              Push notifications
            </span>
          </div>
        </div>
        <hr className="mt-5 mb-5 dark:border-[#353535]" />
        {/* Page content */}
        <div
          data-tour="16"
          className="flex md:flex-row flex-col md:space-x-7 md:space-y-0 space-y-7  "
        >
          {/* Communicate and preview row */}
          <div className="flex-1 ">
            <div className="md:h-[400px] h-auto rounded-lg outline outline-2 outline-[#F5F5F5]  dark:outline-[#2E2E2E]  dark:bg-section-dark overflow-y-clip">
              {/* Content */}
              <CommunicateCard
                titleOnChange={(e) => setPushNotificationTitle(e.target.value)}
                messageOnChange={(e) => setPushNotificationBody(e.target.value)}
                oneSignalApiKey={storeData?.onesignal_api_key}
              />
            </div>
          </div>
          {/* Notification preview card */}
          <div className="flex-1">
            <div className="h-[400px] rounded-lg outline outline-2 outline-[#F5F5F5] dark:outline-[#2E2E2E] overflow-y-clip dark:bg-section-dark">
              <div className="flex flex-col p-4">
                {/* Card title */}
                <span className="text-[18px] dark:text-white">
                  Notification preview
                </span>
                {/* Select */}
                {/* Select */}
                <div className="flex w-[50px] mt-2">
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <button
                      className="text-gray-900 dark:text-white"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Space>
                        {device}
                        <MdOutlineKeyboardArrowDown />
                      </Space>
                    </button>
                  </Dropdown>
                </div>
                {/* <select
                  id="countries"
                  class="mt-2 h-[25px] w-[85px] pl-2  bg-gray-50 border border-gray-300   text-gray-900 text-sm rounded-lg focus:ring-blue focus:border-blue block   dark:bg-[#303030] dark:border-[#272727] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                  onChange={(e) => setDevice(e.target.value)}
                >
                  <option class="block w-full">iOS</option>
                  <option class="block w-full">Android</option>
                </select> */}

                {/* iOS/ Android Preview component */}
                {device === "iOS" ? (
                  <IOSPreview
                    title={pushNotificationTitle}
                    message={pushNotificationBody}
                    appName={projectData?.app_name}
                    appIcon={projectData?.app_icon}
                  />
                ) : (
                  <AndroidPreview
                    title={pushNotificationTitle}
                    message={pushNotificationBody}
                    appName={projectData?.app_name}
                    appIcon={projectData?.app_icon}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recent notifications table */}
        <div className="delay-5">
          <div className="mt-4">
            <TabsNotifications />

            {/* Recent notifications table */}
            {/* <RecentTable /> */}
            {/* Devices */}
            {/* <div className="mt-[65px]">
              <span className="text-[20px] font-normal">Devices</span>
            </div> */}
            {/* Devices table */}
            {/* <DevicesTable /> */}
            {/* Space */}
            <div className="mb-[115px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushNotifications;
