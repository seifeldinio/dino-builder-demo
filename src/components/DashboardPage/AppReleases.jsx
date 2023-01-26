// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";
// import TextIconBlueButton from "../Buttons/TextIconBlueButton";
// import LinkSVG from "../../assets/Icons/Link.svg";
import { FiExternalLink } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Fragment } from "react/cjs/react.development";
import { Popover } from "antd";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AppReleases = (props) => {
  const { appReleases } = props;
  const { releaseDate } = props;

  // 👇️ open link in new tab
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // For pop over
  const [iosOpen, setIOSOpen] = useState(false);
  const [androidOpen, setAndroidOpen] = useState(false);

  const handleIOSOpenChange = (newOpen) => {
    setIOSOpen(newOpen);
  };

  const handleAndroidOpenChange = (newOpen) => {
    setAndroidOpen(newOpen);
  };

  return (
    <div data-tour="4" className="mt-6">
      <span className="text-[20px] font-normal dark:text-white">
        App releases
      </span>

      {appReleases == null || appReleases.length === 0 ? (
        <>
          <div class="overflow-x-auto h-auto bg-[#FAFAFA] relative rounded-lg mt-5 dark:bg-section-dark">
            <div className="flex flex-wrap">
              <div />
              <div className="flex flex-col items-center ml-auto mr-auto mt-5 mb-5 space-y-5 ">
                <img
                  className="h-[60px]"
                  src="https://media.publit.io/file/StockPics/Face.webp"
                  alt=""
                />
                <div>
                  <p className="text-[#717171] text-center dark:text-white	">
                    Your app is still under development.
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <span className="text-[#7E7E7E] mr-1">Release date: </span>
                  <span className="dark:text-white">{releaseDate}</span>
                </div>
              </div>
              <div />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Releases table */}
          <div class="overflow-x-auto relative outline outline-2 outline-grey rounded-lg mt-5 dark:outline-[#2C2C2C] ">
            <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead class=" text-gray-700   bg-gray-50 dark:bg-main-dark dark:text-[#898989]">
                <tr>
                  <th scope="col" class="py-1 px-6">
                    Version number
                  </th>
                  <th
                    scope="col"
                    class="py-1 px-1   items-center content-center"
                  >
                    <div className="flex flex-wrap">
                      <div />

                      <span className="ml-auto mr-auto">
                        Expected feedback date
                      </span>
                      <div />
                    </div>
                  </th>
                  <th scope="col" class="py-1 md:visible invisible">
                    <div className="flex flex-wrap ">
                      <div className="ml-auto mr-[50px]">
                        <th scope="col" class="py-3">
                          View
                        </th>
                      </div>
                    </div>{" "}
                  </th>
                  {/* <div className="flex flex-wrap ">
                <div className="ml-auto mr-20">
                  <th scope="col" class="py-3">
                    View
                  </th>
                </div>
              </div> */}
                </tr>
              </thead>
              <tbody>
                {appReleases?.length === 0 ? (
                  <></>
                ) : (
                  <>
                    {appReleases?.map((item, i) => (
                      <>
                        {/* Row */}
                        <tr class="bg-white border-t  dark:bg-main-dark dark:border-[#2C2C2C] ">
                          <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <span className="text-[#797979] font-normal dark:text-white">
                              {item?.version}
                            </span>
                            <span className="ml-1 text-[#797979] font-normal  dark:text-white">
                              ({item?.type})
                            </span>
                          </th>

                          <td class="py-3 px-6  ">
                            <div className="flex flex-wrap">
                              <div />
                              <span className="ml-auto mr-auto text-[#797979] font-normal  dark:text-[#fff]">
                                {item?.expected_feedback_date}
                              </span>
                              <div />
                            </div>
                          </td>

                          {item === appReleases[0] && (
                            <div className="flex flex-wrap ">
                              <div className="ml-auto mr-5">
                                <th scope="col" class="py-3">
                                  {/* Desktop View */}
                                  <div className="flex flex-row items-center md:visible invisible md:h-auto md:w-auto h-0 w-0">
                                    {/* Go to App Store Button */}
                                    <Popover
                                      content="Launches your iOS App 🍏"
                                      trigger="click"
                                      open={iosOpen}
                                      onOpenChange={handleIOSOpenChange}
                                      placement="top"
                                    >
                                      <div>
                                        <button
                                          // onClick={() =>
                                          //   openInNewTab(
                                          //     appReleases[0].app_store_link
                                          //   )
                                          // }
                                          class="bg-blue hover:bg-darkblue text-white  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200 "
                                        >
                                          <span className="text-[14px] font-normal mr-2">
                                            App store
                                          </span>
                                          <FiExternalLink />
                                        </button>
                                      </div>
                                    </Popover>

                                    <div className="ml-2" />

                                    {/* Go to Play Store Button */}
                                    <Popover
                                      content="Launches your Android App 🤖"
                                      trigger="click"
                                      open={androidOpen}
                                      onOpenChange={handleAndroidOpenChange}
                                      placement="top"
                                    >
                                      <div>
                                        <button
                                          // onClick={() =>
                                          //   openInNewTab(
                                          //     appReleases[0].play_store_link
                                          //   )
                                          // }
                                          class="bg-blue hover:bg-darkblue text-white  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200 "
                                        >
                                          <span className="text-[14px] font-normal mr-2">
                                            Play store
                                          </span>
                                          <FiExternalLink />
                                        </button>
                                      </div>
                                    </Popover>
                                  </div>
                                  {/* Mobile View */}
                                  {/* <div className="visible md:invisible md:ml-[-35px] md:h-0 ml-auto">
                                    <Menu
                                      as="div"
                                      className="relative inline-block text-left"
                                    >
                                      <div>
                                        <Menu.Button className="inline-flex justify-center hover:bg-[#eaeaea] px-3 py-3 rounded-full w-full text-sm font-medium text-gray-700 transition-color duration-200 ">
                                          <BsThreeDotsVertical className="h-[18px] w-[18px]" />
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
                                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                          <div className="py-1">
                                            <Menu.Item>
                                              {({ active }) => (
                                                <a
                                                  href="#"
                                                  className={classNames(
                                                    active
                                                      ? "bg-gray-100 text-gray-900"
                                                      : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                  )}
                                                  onClick={() =>
                                                    openInNewTab(
                                                      appReleases[0]
                                                        .app_store_link
                                                    )
                                                  }
                                                >
                                                  <div className="flex flex-row items-center">
                                                    <FiExternalLink />

                                                    <span className="ml-2">
                                                      App Store
                                                    </span>
                                                  </div>
                                                </a>
                                              )}
                                            </Menu.Item>
                                            <Popover
                                              content="Launches your Android App 🤖"
                                              trigger="click"
                                              open={androidOpen}
                                              onOpenChange={
                                                handleAndroidOpenChange
                                              }
                                              placement="top"
                                            >
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <a
                                                    href="#"
                                                    className={classNames(
                                                      active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                      "block px-4 py-2 text-sm"
                                                    )}
                                                  >
                                                    <div className="flex flex-row items-center">
                                                      <FiExternalLink />

                                                      <span className="ml-2">
                                                        Play Store
                                                      </span>
                                                    </div>
                                                  </a>
                                                )}
                                              </Menu.Item>
                                            </Popover>
                                          </div>
                                        </Menu.Items>
                                      </Transition>
                                    </Menu>
                                  </div> */}
                                </th>
                              </div>
                            </div>
                          )}
                        </tr>
                        {/* End row */}
                      </>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AppReleases;
