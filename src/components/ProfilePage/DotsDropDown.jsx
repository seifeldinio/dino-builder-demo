import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { BiStore } from "react-icons/bi";
import { HiOutlineCubeTransparent } from "react-icons/hi";
// import { BiBell } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
// import { AuthContext } from "../../contexts/authContext/AuthContext";
// import { logout } from "../../contexts/authContext/AuthActions";
import { useNavigate } from "react-router-dom";
import { BsGearFill } from "react-icons/bs";
import { Tooltip } from "antd";
import { useStateContext } from "../../contexts/ContextProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownComponent() {
  // Navigation to routes
  const navigate = useNavigate();

  const { tourStarted } = useStateContext();

  return (
    <>
      {tourStarted ? (
        <Tooltip placement="bottom" title={"Finish your tour first! 😊"}>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center hover:bg-[#eaeaea] hover:dark:bg-[#323232] px-3 py-3 rounded-full w-full text-sm font-medium text-gray-700 transition-color duration-200 ">
                <BsThreeDotsVertical className="h-[18px] w-[18px] dark:text-white" />
              </Menu.Button>
            </div>
          </Menu>
        </Tooltip>
      ) : (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center hover:bg-[#eaeaea] hover:dark:bg-[#323232] px-3 py-3 rounded-full w-full text-sm font-medium text-gray-700 transition-color duration-200 ">
              <BsThreeDotsVertical className="h-[18px] w-[18px] dark:text-white" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-[#2C2C2C] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#/"
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 dark:bg-[#383838] dark:text-white"
                          : "text-gray-700 dark:text-white",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => navigate("/settings")}
                    >
                      <div className="flex flex-row items-center">
                        <BsGearFill className="mr-1.5" />
                        <span className="">Settings</span>
                      </div>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#/"
                      className={classNames(
                        active
                          ? "bg-gray-100 dark:bg-[#383838] dark:text-white text-gray-900"
                          : "text-gray-700 dark:text-white",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => navigate("/store")}
                    >
                      <div className="flex flex-row items-center">
                        <HiOutlineCubeTransparent className="mr-1.5" />
                        <span className=""> AR Products</span>
                      </div>
                    </a>
                  )}
                </Menu.Item>
                <Tooltip placement="left" title={"Disabled in demo mode."}>
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900 dark:bg-[#383838] dark:text-white"
                              : "text-gray-700",
                            "block w-full text-left px-4 py-2 text-sm dark:text-white"
                          )}
                          // onClick={() => {
                          // dispatch(logout());
                          // }}
                        >
                          <div className="flex flex-row items-center">
                            <MdLogout className="mr-1.5 dark:text-[#7d7d7d] text-[#9f9f9f]" />
                            <span className="dark:text-[#7d7d7d] text-[#9f9f9f]">
                              Logout
                            </span>
                          </div>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Tooltip>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </>
  );
}
