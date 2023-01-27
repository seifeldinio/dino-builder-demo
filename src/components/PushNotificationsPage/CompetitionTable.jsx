import React, { useState } from "react";
// import PaginationComponent from "./PaginationComponent";
import { aiAnalyticsData } from "../../utils/AIAnalyticsData";
import { FaRegClone } from "react-icons/fa";
import { useStateContext } from "../../contexts/ContextProvider";
import { Alert } from "antd";

const CompetitionTable = () => {
  const [searchString, setSearchString] = useState("");

  const searchFiltered = aiAnalyticsData?.filter((item) =>
    item?.body.includes(searchString.toLowerCase())
  );

  const [firstLimit, setFirstLimit] = useState(0);
  const [lastLimit, setLastLimit] = useState(4);

  // To show the alert limit
  const [showAlert, setShowAlert] = useState(false);

  const {
    // pushNotificationTitle,
    setPushNotificationTitle,
    // pushNotificationBody,
    setPushNotificationBody,
  } = useStateContext();

  return (
    <div className="page-animation">
      <div className="flex flex-row items-center">
        <div className="flex flex-col">
          <div className="text-[20px] font-normal dark:text-white">
            Competitors’ notifications
          </div>
          <span className="text-[14px] text-[#939393]">
            AI analysis of the top performing notifications from the App Store &
            Play Store.
          </span>
        </div>
        <div className="ml-auto">
          {/* Search bar */}
          <form class="flex items-center ml-auto">
            <div class="relative md:w-[240px] invisible md:visible">
              <input
                type="text"
                id="voice-search"
                class="bg-white border border-gray-300  text-gray-900 text-sm rounded-full hover:bg-[#f9f9f9] dark:bg-[#2C2C2C] dark:border-[#323232] dark:text-white block w-full pl-10 p-1.5  transition-all duration-200"
                placeholder="Search"
                required
                autocomplete="off"
                onChange={(e) => {
                  setSearchString(e.target.value);
                  // fetchGuide(e.target.value);
                }}
              />
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
      {showAlert && (
        <div className="fade-down mt-2.5">
          <Alert
            message="Demo limits the data displayed, create an account to get the full experience."
            type="warning"
            showIcon
            closable
          />
        </div>
      )}

      <div class="overflow-x-auto relative mt-5 outline outline-2 outline-[#F2F3F7] rounded-lg dark:outline-[#2C2C2C]">
        <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700  bg-[#fafbfd]   dark:text-[#929292] dark:bg-main-dark">
            <tr>
              <th scope="col" class="py-3 px-6">
                Notification
              </th>
              <th scope="col" class="py-3 px-6">
                Impressions
              </th>
              <th scope="col" class="py-3 px-6">
                Tap rate
              </th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>

          <tbody>
            {searchString === "" ? (
              <>
                {searchFiltered?.slice(firstLimit, lastLimit).map((item, i) => (
                  <>
                    {/* Item */}
                    <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
                      <th
                        scope="row"
                        class="py-4 px-6  whitespace-nowrap dark:text-white"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item?.title}
                          </span>
                          <span className="font-normal">{item?.body}</span>
                        </div>
                      </th>
                      <td class="py-4 px-6">{item?.impressions}</td>
                      <td class="py-4 px-6">{item?.tapRate}</td>
                      <td class="py-4 ">
                        {/* Clone Button */}
                        <button
                          onClick={() => {
                            setPushNotificationTitle(item?.title);
                            setPushNotificationBody(item?.body);
                          }}
                          // onClick={() => navigate("/store/push-notifications/ai-analytics")}
                          class="outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
                        >
                          <span className="text-[14px] mr-1">Clone</span>
                          <FaRegClone className="h-[13px] w-[13px]" />
                        </button>
                      </td>
                    </tr>
                    {/* End item */}
                  </>
                ))}
              </>
            ) : (
              <>
                {searchFiltered?.map((item, i) => (
                  <>
                    {/* Item */}
                    <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
                      <th
                        scope="row"
                        class="py-4 px-6  whitespace-nowrap dark:text-white"
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item?.title}
                          </span>
                          <span className="font-normal">{item?.body}</span>
                        </div>
                      </th>
                      <td class="py-4 px-6">{item?.impressions}</td>
                      <td class="py-4 px-6">{item?.tapRate}</td>
                      <td class="py-4 ">
                        {/* Clone Button */}
                        <button
                          onClick={() => {
                            setPushNotificationTitle(item?.title);
                            setPushNotificationBody(item?.body);
                          }}
                          // onClick={() => navigate("/store/push-notifications/ai-analytics")}
                          class="outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
                        >
                          <span className="text-[14px] mr-1">Clone</span>
                          <FaRegClone className="h-[13px] w-[13px]" />
                        </button>
                      </td>
                    </tr>
                    {/* End item */}
                  </>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav aria-label="" className="mt-5 absolute right-[-10px] scale-90">
        <ul class="inline-flex items-center -space-x-px">
          <li
            onClick={() => {
              if (firstLimit !== 0) {
                setFirstLimit(firstLimit - 4);
                setLastLimit(lastLimit - 4);
              }
            }}
          >
            <button class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-button-dark dark:border-[#2C2C2C] dark:text-[#969696] dark:hover:bg-[#323232] dark:hover:text-white transition-all duration-200 cursor-pointer">
              <span class="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li
            onClick={() => {
              if (lastLimit !== 8) {
                setFirstLimit(firstLimit + 4);
                setLastLimit(lastLimit + 4);
              } else {
                setShowAlert(true);
              }

              //   console.log(lastLimit);
            }}
          >
            <button class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-button-dark dark:border-[#2C2C2C] dark:text-[#969696] dark:hover:bg-[#323232] dark:hover:text-white transition-all duration-200 cursor-pointer">
              <span class="sr-only">Next</span>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CompetitionTable;
