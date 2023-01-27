// import React, { useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
// import { useCurrentUser } from "../contexts/userContext/UserContext";
import {  notificationsData } from "../data/DemoData";
import { mobileLinks } from "../utils/Constants";
// import RobootLogo from "../assets/roboot-siteheader.svg";
// import RobootLogoDark from "../assets/roboot-siteheader-dark.svg";
// import BottomProfile from "./BottomProfile";
// import Spacer from "react-spacer";

const MobileSidebar = () => {
  const {
    activeMenu,
    // setActiveMenu,
    // mobileSidebar,
    setMobileSidebar,
    currentMode,
    profilePicture,
  } = useStateContext();

  // const [hasNotif, setHasNotif] = useState(true);

  // GET CURRENT USER DATA and Notifications data

  // Unread notifications
  const unReadNotifications = notificationsData?.filter(
    (notification) => notification?.read === false
  );

  const activeLink =
    "flex items-center gap-2.5 pl-4 pt-1.5 pb-1.5 rounded-lg text-black text-md mr-2 mt-2 mb-2 bg-lemon transition-color duration-200 dark:bg-[#2C2C2C] dark:text-white";

  const normalLink =
    "flex items-center gap-2.5 pl-4 pt-1.5 pb-1.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:bg-section-dark hover:bg-light-gray mr-2 mt-2 mb-2  transition-color duration-200";

  const { pathname } = useLocation();

  return (
    <div className="bg-half-transparent  w-screen fixed nav-item top-0 right-0">
      <div className="mobile-sidebar-animation">
        <div className="float-left h-screen  dark:text-gray-200 bg-white dark:bg-section-dark w-2/3  pl-2 pt-2 overflow-y-scroll	">
          {/* Right Panel Context */}
          <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10  ">
            {activeMenu && (
              <>
                <div className="flex justify-between items-center ">
                  <div className="flex flex-row items-center">
                    {/* Menu button */}
                    <button
                      onClick={() => {
                        setMobileSidebar(false);
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
                    <Link
                      to="/profile"
                      onClick={() => {
                        setMobileSidebar(false);
                      }}
                    >
                      <div className="flex flex-row  space-x-3 items-center m-3 pt-0.5 pb-0.5 ">
                        {pathname === "/profile" ? (
                          <>
                            <img
                              src={profilePicture}
                              className="rounded-full object-cover outline outline-4 outline-lemon w-[40px] h-[40px] transition-color duration-200"
                              alt=""
                            />
                          </>
                        ) : (
                          <>
                            <img
                              src={profilePicture}
                              className="rounded-full object-cover w-[40px] h-[40px] transition-color duration-200"
                              alt=""
                            />
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
                <hr className="mt-1 dark:border-[#323232]" />
                <div className="mt-5">
                  {mobileLinks.map((item) => (
                    <div key={item.title}>
                      <p className="text-gray-400 m-3 mt-4  text-[14px]">
                        {item.title}
                      </p>

                      {item.links.map((link) => (
                        <NavLink
                          to={`/${link.slug}`}
                          key={link.slug}
                          onClick={() => {
                            setMobileSidebar(false);
                          }}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLink
                          }
                        >
                          {link.icon}
                          {/* <img
                            src={link.icon}
                            className="h-[25px] w-[25px]"
                            alt=""
                          /> */}
                          <span className="text-[18px]">{link.name}</span>

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
                      ))}
                    </div>
                  ))}
                  {/* Profile */}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
