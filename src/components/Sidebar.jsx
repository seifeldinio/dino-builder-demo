import { Link, NavLink } from "react-router-dom";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../utils/Constants";
// import { ReactComponent as RobootLogo } from "../assets/roboot-siteheader.svg";
// import { ReactComponent as RobootLogoDark } from "../assets/roboot-siteheader-dark.svg";
import Spacer from "react-spacer";

import { useStateContext } from "../contexts/ContextProvider";

import { BottomProfile, TourBottomProfile } from "./index";
// import { useState } from "react";
// import { useCurrentUser } from "../contexts/userContext/UserContext";

// import socket from "../socket/Socket";
import { currentUserData, notificationsData } from "../data/DemoData";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const Sidebar = () => {
  const { currentMode, tourStarted } = useStateContext();

  // // const [hasNotif, setHasNotif] = useState(true);

  // // GET CURRENT USER DATA and Notifications data
  // const { currentUser, fetchCurrentUser, notifications, fetchNotifications } =
  //   useCurrentUser();

  // const [notificationSentFromAdmin, setNotificationSentFromAdmin] =
  //   useState(false);

  // Unread notifications
  const unReadNotifications = notificationsData?.filter(
    (notification) => notification?.read === false
  );

  // console.log("Ehhhhhhh", unReadNotifications);

  const activeLink =
    "flex items-center gap-2.5 pl-4 pt-1.5 pb-1.5 rounded-lg text-black text-md mr-2 mt-2 mb-2 bg-lemon transition-color duration-200 dark:bg-button-dark dark:text-white";

  const normalLink =
    "flex items-center gap-2.5 pl-4 pt-1.5 pb-1.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:bg-section-dark hover:bg-light-gray mr-2 mt-2 mb-2  transition-color duration-200";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 mr-2 ">
      <>
        <div className="flex justify-between items-center ">
          <Link to="/" onClick={() => {}} className="items-center">
            {currentMode === "Light" ? (
              // <LazyLoadImage
              //   className="mt-10 mb-[-3px] ml-3 w-[150px] items-center gap-3 tracking-tight   dark:fill-white	"
              //   src="https://media.publit.io/file/StockPics/roboot-siteheader.svg"
              //   effect="blur"
              //   placeholderSrc="https://media.publit.io/file/StockPics/roboot-siteheader-dark.svg"
              // />
              <img
                src="https://media.publit.io/file/StockPics/bloxat-siteheader.svg"
                className="mt-10 ml-3 w-[150px] items-center gap-3 tracking-tight   dark:fill-white	"
                alt=""
              />
            ) : (
              // <RobootLogo className="mt-10 ml-3 w-[150px] items-center gap-3 tracking-tight   dark:fill-white	" />
              // <LazyLoadImage
              //   className="mt-10 mb-[-3px] ml-3 w-[150px] items-center gap-3 tracking-tight   dark:fill-white	"
              //   src="https://media.publit.io/file/StockPics/roboot-siteheader-dark.svg"
              //   effect="blur"
              //   placeholderSrc="https://media.publit.io/file/StockPics/roboot-siteheader-dark.svg"
              // />
              <img
                src="https://media.publit.io/file/StockPics/bloxat-dark.webp"
                className="mt-10 ml-3 w-[150px] items-center gap-3 tracking-tight   dark:fill-white	"
                alt=""
              />
              // <RobootLogoDark className="mt-10 ml-3 w-[150px] items-center gap-3 tracking-tight   dark:fill-white	" />
            )}
          </Link>
        </div>
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-400 m-3 mt-4  text-[14px]">
                {item.title}
              </p>

              {item.links.map((link) => (
                <>
                  {tourStarted ? (
                    <NavLink
                      // to={"/"}
                      key={link.slug}
                      onClick={() => {}}
                      // className={({ isActive }) =>
                      //   isActive ? activeLink : normalLink
                      // }

                      // className={({ isActive }) =>
                      //   isActive ? activeLink : normalLink
                      // }
                      className={normalLink}
                      data-tour={
                        link.slug === "app"
                          ? "5"
                          : link.slug === "store"
                          ? "8"
                          : link.slug === "connect"
                          ? "18"
                          : link.slug === "documents"
                          ? "20"
                          : link.slug === "overview"
                          ? "23"
                          : null
                      }
                    >
                      {link.icon}
                      {/* <img
                      src={link.icon}
                      className="dark:fill-white dark:text-white"
                    /> */}
                      <span className="text-[16px]">{link.name}</span>

                      {/* Sidebar Item Notifications */}
                      {/* {unReadNotifications?.filter(notification => notification?.route.includes(link.slug)) ?} */}
                      {unReadNotifications !== undefined && (
                        <>
                          {link.slug === unReadNotifications[0]?.type ? (
                            <div className="flex ml-auto mr-3 ">
                              {/* Animated Ping */}
                              {/* <div className="animate-ping realtive bg-red h-2.5 w-2.5 rounded-full  opacity-75 mr-[-10px]" /> */}
                              {/* <div className="inline-flex bg-red h-2.5 w-2.5 rounded-full" /> */}
                            </div>
                          ) : null}
                        </>
                      )}
                    </NavLink>
                  ) : (
                    <NavLink
                      to={`/${link.slug}`}
                      key={link.slug}
                      onClick={() => {}}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      data-tour={
                        link.slug === "app"
                          ? "5"
                          : link.slug === "store"
                          ? "8"
                          : link.slug === "connect"
                          ? "18"
                          : link.slug === "documents"
                          ? "20"
                          : link.slug === "overview"
                          ? "23"
                          : null
                      }
                    >
                      {link.icon}
                      {/* <img
                      src={link.icon}
                      className="dark:fill-white dark:text-white"
                    /> */}
                      <span className="text-[16px]">{link.name}</span>

                      {/* Sidebar Item Notifications */}
                      {/* {unReadNotifications?.filter(notification => notification?.route.includes(link.slug)) ?} */}
                      {unReadNotifications !== undefined && (
                        <>
                          {link.slug === unReadNotifications[0]?.type ? (
                            <div className="flex ml-auto mr-3 ">
                              {/* Animated Ping */}
                              {/* <div className="animate-ping realtive bg-red h-2.5 w-2.5 rounded-full  opacity-75 mr-[-10px]" /> */}
                              {/* <div className="inline-flex bg-red h-2.5 w-2.5 rounded-full" /> */}
                            </div>
                          ) : null}
                        </>
                      )}
                    </NavLink>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
        <Spacer height="55px" />
        <div>
          {tourStarted === false ? (
            <BottomProfile
              // profilePic={currentUserData?.avatar_url}
              // firstName={currentUserData?.first_name}
              // lastName={currentUserData?.last_name}
              email={currentUserData?.email}
              notifications={unReadNotifications}
              // notificationSentFromAdmin={notificationSentFromAdmin}
            />
          ) : (
            <TourBottomProfile
              // profilePic={currentUserData?.avatar_url}
              // firstName={currentUserData?.first_name}
              // lastName={currentUserData?.last_name}
              email={currentUserData?.email}
              notifications={unReadNotifications}
            />
          )}
        </div>
      </>
    </div>
  );
};

export default Sidebar;
