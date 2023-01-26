import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import PaginationComponent from "../PushNotificationsPage/PaginationComponent";

const CampaignsTable = () => {
  return (
    <>
      <div className="mt-8 mb-7">
        <span className="text-[20px] font-normal dark:text-white">
          Automated campaigns
        </span>
      </div>

      <div class="overflow-x-auto relative outline outline-2 outline-grey rounded-lg dark:outline-[#2C2C2C]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class=" text-gray-700  bg-gray-50 dark:bg-main-dark dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Customer
              </th>
              <th scope="col" class="py-3 px-6">
                Status
              </th>
              <th scope="col" class="py-3 px-6">
                Campaign progress
              </th>
              <th scope="col" class="py-3 px-6">
                Next action
              </th>
              <th scope="col" class="py-3 px-6">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Table tile */}
            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6  text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col space-y-1">
                  <span className="font-medium">John Adam</span>
                  <span className="font-normal">john@gmail.com</span>
                </div>
              </th>
              <td class="py-4 px-6">
                <div className="flex flex-row items-center space-x-1 text-purple">
                  <span>Active</span>
                  {/* <BsFillCheckCircleFill /> */}
                </div>
              </td>
              <td class="py-4 px-6">
                <div className="flex flex-row items-center">
                  <span>1/3 notifications sent</span>
                  <div className="bg-[#eafff5] p-1 rounded-lg ml-1.5 dark:bg-main-dark">
                    <span className="text-green font-medium">Opened</span>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6">
                <span>in 2 days</span>
              </td>
              <td class="py-4 px-6">
                <span>$223.50</span>
              </td>
            </tr>

            {/* End of table tile */}
            {/* Table tile */}

            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6  text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col space-y-1">
                  <span className="font-medium">John Adam</span>
                  <span className="font-normal">john@gmail.com</span>
                </div>
              </th>
              <td class="py-4 px-6">
                <div className="flex flex-row items-center space-x-1 text-purple">
                  <span>Active</span>
                  {/* <BsFillCheckCircleFill /> */}
                </div>
              </td>
              <td class="py-4 px-6">
                <div className="flex flex-row items-center">
                  <span>2/3 notifications sent</span>
                  <div className="bg-gray-100 p-1 rounded-lg ml-1.5">
                    <span className="text-gray-400">Opened</span>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6">
                <span>tomorrow</span>
              </td>
              <td class="py-4 px-6">
                <span>$567</span>
              </td>
            </tr>
            {/* End of table tile */}
            {/* Table tile */}

            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6  text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col space-y-1">
                  <span className="font-medium">John Adam</span>
                  <span className="font-normal">john@gmail.com</span>
                </div>
              </th>
              <td class="py-4 px-6">
                <div className="flex flex-row items-center space-x-1 text-green">
                  <span>Recovered</span>
                  <BsFillCheckCircleFill />
                </div>
              </td>
              <td class="py-4 px-6">
                <div className="flex flex-row items-center">
                  <span>3/3 notifications sent</span>
                  <div className="bg-[#eafff5] p-1 rounded-lg ml-1.5 dark:bg-main-dark">
                    <span className="text-green font-medium">Opened</span>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6">
                <span>_</span>
              </td>
              <td class="py-4 px-6">
                <span className="text-green font-medium">$379</span>
              </td>
            </tr>
            {/* End of table tile */}
            {/* Table tile */}

            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6  text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col space-y-1">
                  <span className="font-medium">John Adam</span>
                  <span className="font-normal">john@gmail.com</span>
                </div>
              </th>
              <td class="py-4 px-6">
                <div className="flex flex-row items-center space-x-1 text-red">
                  <span>Expired</span>
                  {/* <BsFillCheckCircleFill /> */}
                </div>
              </td>
              <td class="py-4 px-6">
                <div className="flex flex-row items-center">
                  <span>3/3 notifications sent</span>
                  <div className="bg-[#eafff5] p-1 rounded-lg ml-1.5 dark:bg-main-dark">
                    <span className="text-green font-medium">Opened</span>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6">
                <span>_</span>
              </td>
              <td class="py-4 px-6">
                <span className="text-red">$297</span>
              </td>
            </tr>
            {/* End of table tile */}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <PaginationComponent />
    </>
  );
};

export default CampaignsTable;
