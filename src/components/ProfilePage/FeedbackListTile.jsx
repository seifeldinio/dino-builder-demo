import { Menu, Transition } from "@headlessui/react";
import { BsCheck2, BsThreeDotsVertical } from "react-icons/bs";
import { Fragment } from "react/cjs/react.production.min";
// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const FeedbackListTile = (props) => {
  const { approved } = props;
  const { title } = props;
  const { expectedDate } = props;
  const { approveOnClick } = props;
  const { viewOnClick } = props;

  return (
    <>
      <div className="flex flex-col ml-[15px] mr-[15px] mt-[15px] ">
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <span className="md:text-[16px] text-[14px] dark:text-white">
              {title}
            </span>
            <span className="text-[14px] text-[#828282]">
              Expected feedback date: {expectedDate}
            </span>
          </div>
          {approved ? (
            <div className="ml-auto">
              <div className="flex flex-row items-center">
                <span className="text-[14px] text-green mr-1">Approved</span>
                <BsCheck2 className="h-[20px] w-[20px] text-green" />
                {/* <img src={GreenCheckSVG} className="h-[20px] w-[20px]" alt="" /> */}
              </div>
            </div>
          ) : (
            <>
              {/* For desktop */}
              <div className="invisible md:visible ml-auto">
                <button
                  onClick={viewOnClick}
                  class="mr-[15px] outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
                >
                  <span className="text-[14px]">View</span>
                </button>

                <button
                  onClick={approveOnClick}
                  class="outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
                >
                  <span className="text-[14px]">Approve</span>
                </button>
              </div>
              {/* For mobile */}
              <div className="visible md:invisible md:ml-[-35px] ml-auto">
                <Menu as="div" className="relative inline-block text-left">
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
                              onClick={viewOnClick}
                            >
                              <div className="flex flex-row items-center">
                                <span className="">View</span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
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
                              onClick={approveOnClick}
                            >
                              <div className="flex flex-row items-center">
                                <span className="">Approve</span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </>
          )}
        </div>
      </div>
      <hr className="mt-[16px] ml-2 mr-2 dark:border-[#2C2C2C]" />
    </>
  );
};

export default FeedbackListTile;
