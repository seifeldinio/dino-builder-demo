// import Lottie from "lottie-react-web";
import React, { useState } from "react";
import { BiNotification } from "react-icons/bi";
import {
  BsArrowRight,
  // BsBag,
  BsCreditCardFill,
  BsFillBagFill,
} from "react-icons/bs";
import { IoMdHelpBuoy } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { AddOnCard, SearchBar, SettingsCard, ThemeCards } from "../components";
// import TextIconBlueButton from "../components/Buttons/TextIconBlueButton";
// import { useStateContext } from "../contexts/ContextProvider";
// import { useProjectByUserId } from "../contexts/projectContext/ProjectByUserIdContext";
// import { useCurrentUser } from "../contexts/userContext/UserContext";
// import ARLottie from "../assets/Lotties/ar.json";
import { HiOutlineCubeTransparent } from "react-icons/hi";
// import { useStore } from "../contexts/storeContext/StoreContext";
import { pagesSearch } from "../utils/Constants";
// import { CgSearch } from "react-icons/cg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GrRobot } from "react-icons/gr";
import { projectData, storeData } from "../data/DemoData";
import { Popover } from "antd";
// import { useStateContext } from "../contexts/ContextProvider";

const Settings = () => {
  // GET CURRENT USER DATA
  // const { currentUser, fetchCurrentUser } = useCurrentUser();

  // GET PROJECT THAT BELONGS TO USER DATA
  // const { project, fetchProjectByUserId } = useProjectByUserId();

  // GET PAYMENT METHODS
  // const { paymentMethods, fetchPaymentMethods, store, fetchStore } = useStore();

  // GET PROJECT THAT BELONGS TO USER DATA
  //   const { project, fetchProjectByUserId } = useProjectByUserId();

  // For navigation
  const navigate = useNavigate();

  // console.log(store);

  // Search setttings
  const [searchSettings, setSearchSettings] = useState("");

  const searchFiltered = pagesSearch?.filter((item) =>
    item?.keywords.includes(searchSettings.toLowerCase())
  );

  // For Billing Pop over
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  // const { tourStarted } = useStateContext();

  return (
    <div className="page-animation">
      <div className="md:mt-10 md:ml-10 md:mr-10 mt-20 ml-5 mr-5">
        <div className="flex flex-wrap lg:flex-nowrap ">
          <div className="flex flex-row w-full items-center ">
            {/* Top section */}
            {/* <img
              src={project?.app_icon}
              className="rounded-lg w-[65px] h-[65px]"
              alt=""
            /> */}
            <LazyLoadImage
              className="rounded-lg w-[65px] h-[65px] object-cover"
              src={projectData?.app_icon}
              effect="blur"
              placeholderSrc={projectData?.app_icon}
            />
            <div className="flex flex-col ml-4">
              <span className="font-medium dark:text-white">
                {projectData?.app_name}
              </span>
              <span className="text-[#9C9BAB]">{projectData?.app_status}</span>
            </div>

            {/* Search bar */}
            <SearchBar
              onChange={(e) => {
                setSearchSettings(e.target.value);
                // fetchGuide(e.target.value);
              }}
            />
            {/* Search suggestions results */}
            {searchSettings !== "" && (
              <div className="absolute right-[40px] mt-[265px] bg-greyelement dark:bg-[#323232] w-[280px] h-[193px] rounded-md z-50 overflow-y-scroll shadow-lg">
                <div className="flex flex-col ">
                  {searchFiltered?.length === 0 ? (
                    <>
                      <div className=" flex content-center justify-center mt-[60px]">
                        <div className="flex flex-col justify-center items-center content-center">
                          {/* <CgSearch className="h-[25px] w-[25px] text-[#979797]" /> */}
                          <span className="mb-1 text-[18px]">🤷</span>
                          <span className="text-[14px] text-[#979797]">
                            No results found
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      {searchFiltered?.map((item, i) => (
                        <>
                          {/* Item */}
                          <div
                            onClick={() => navigate(item?.slug)}
                            className="flex flex-row items-center  p-3 hover:bg-[#eeeeee] dark:hover:bg-[#454545] cursor-pointer duration-200 transition-all "
                          >
                            {item?.icon}
                            <span className="ml-2 dark:text-white">
                              {item?.name}
                            </span>
                            <BsArrowRight className="ml-auto text-[#7a7a7a]" />
                          </div>
                          <hr className="dark:border-[#4a4a4a]" />
                          {/* End Item */}
                        </>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="mt-7 mb-7 dark:border-[#2C2C2C]" />
        {/* Settings section */}
        <div className="flex flex-col">
          <span className="text-[22px] font-medium dark:text-white">
            Settings
          </span>
          <span className="font-normal text-[#595959] dark:text-[#7e7e7e]">
            Edit abilities of Bloxat Built
          </span>
          {/* Settings cards */}

          <div className="flex md:flex-row flex-col  md:space-x-7 md:space-y-0 space-y-7 mt-4   ">
            <div className="flex-1">
              <div className="delay-1">
                <SettingsCard
                  icon={<RiUser3Fill className="h-[18px] w-[18px]" />}
                  title={"Profile Settings"}
                  description={"View and update your profile details."}
                  onClick={() => navigate("/edit")}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="delay-2">
                <SettingsCard
                  icon={<BiNotification className="h-[18px] w-[18px]" />}
                  title={"Push notifications"}
                  description={"Send notifications to your users."}
                  onClick={() => navigate("/store/push-notifications")}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="delay-3">
                <Popover
                  content={
                    <div className="flex flex-col">
                      <span>
                        Book a free call to determine the plan that best suits
                        your business.
                      </span>
                      <button onClick={hide} className="text-blue mt-1.5">
                        Ok
                      </button>
                    </div>
                  }
                  title="Custom Plans 🤝"
                  trigger="click"
                  open={open}
                  onOpenChange={handleOpenChange}
                  placement="bottom"
                >
                  <SettingsCard
                    icon={<BsCreditCardFill className="h-[18px] w-[18px]" />}
                    title={"Billing"}
                    description={"View your current plan."}
                    onClick={() => {}}
                  />
                </Popover>
              </div>
            </div>
          </div>
          {/* Theme section */}
          <div className="delay-4">
            <div className="h-[30px]" />
            <div data-tour="30">
              <div className="flex flex-col">
                <span className="text-[22px] font-medium dark:text-white">
                  Appearance
                </span>
                <span className="font-normal text-[#595959] dark:text-[#7e7e7e]">
                  Change Bloxat Built’s theme.
                </span>
              </div>

              {/* Theme card */}
              <ThemeCards />
            </div>
            {/* Add-ons */}
            <div className="h-[30px]" />
            <div data-tour="31">
              <div className="flex flex-col">
                <span className="text-[22px] font-medium dark:text-white">
                  Add-ons
                </span>
                <span className="font-normal text-[#595959] dark:text-[#7e7e7e]">
                  Add-ons in your Bloxat Built App.
                </span>
              </div>

              {/* Add-ons grid */}
              <div className="md:grid md:grid-cols-3 md:gap-7 mt-4 md:space-y-0  flex flex-col space-y-7 mb-8">
                <AddOnCard
                  title={"AR Products"}
                  description={`${storeData?.ar_products_limit} Interactive AR Products`}
                  connected={storeData?.ar_products_limit > 0 ? true : false}
                  icon={
                    <HiOutlineCubeTransparent className="h-[25px] w-[25px] " />
                  }
                  bgColor={"bg-[#fcec51]"}
                />
                <AddOnCard
                  title={"Payment recovery"}
                  description={"Automatically recover failed payments"}
                  // connected={storeData?.payment_recovery === true ? true : false}
                  connected={true}
                  icon={<IoMdHelpBuoy className="h-[25px] w-[25px]" />}
                  bgColor={"bg-lemon"}
                />
                <AddOnCard
                  title={"Abandoned cart"}
                  description={
                    "Sends notifications to people who didn't check out."
                  }
                  connected={
                    storeData?.cart_notifications === true ? true : false
                  }
                  icon={<BsFillBagFill className="h-[20px] w-[20px] " />}
                  bgColor={"bg-lightblue"}
                />
                <AddOnCard
                  title={"Competition analysis"}
                  description={
                    "AI Analysis of your competitors' notifications."
                  }
                  connected={true}
                  icon={<GrRobot className="h-[23px] w-[23px]" />}
                  bgColor={"bg-purple"}
                />
                {/* {paymentMethodsData?.map((item, i) => (
                <>
                  <AddOnCard
                    iconImg={
                      <img
                        className="h-[30px] w-auto object-cover rounded-lg"
                        src={item?.icon}
                        alt=""
                      />
                    }
                    title={item?.payment_title}
                    description={item?.status}
                    connected={true}
                    bgColor={"bg-lemon"}
                  />
                </>
              ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
