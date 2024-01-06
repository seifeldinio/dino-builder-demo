import "../../_animations.scss";
import React from "react";
// import PaginationComponent from "./PaginationComponent";
// import { Pagination } from "antd";
// import { BsArrowRight } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import Popup from "reactjs-popup";
// import AddFeatureModal from "../DashboardPage/AddFeatureModal";

const RecentTable = () => {
  // For navigation
  // const navigate = useNavigate();

  return (
    <div className="page-animation">
      {/* <div className="text-[20px] font-normal dark:text-white">
        Recent notifications
      </div> */}
      <div class="overflow-x-auto relative mt-7 outline outline-2 outline-[#F2F3F7] rounded-lg dark:outline-[#2C2C2C]">
        <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead class="text-md font-light text-gray-700  bg-[#FAFAFA]   dark:text-white dark:bg-[#202020]">
            <tr>
              <th scope="col" class="py-3 px-6">
                Notification
              </th>
              <th scope="col" class="py-3 px-6">
                Sent
              </th>
              <th scope="col" class="py-3 px-6">
                Impressions
              </th>
              <th scope="col" class="py-3 px-6">
                Tapped
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Buy 1, get 1 FREE & more 🙋‍♀️
                  </span>
                  <span className="font-normal">
                    Need to restock on all your beauty favorites? We've got you
                    covered with the best offers & prices 😉
                  </span>
                </div>
              </th>
              <td class="py-4 px-6">4 Days ago</td>
              <td class="py-4 px-6">391,947</td>
              <td class="py-4 px-6">90%</td>
            </tr>
            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Heads up! 👋
                  </span>
                  <span className="font-normal">
                    11.11 SALE ENDS TODAY! Don't waste time & start filling your
                    cart, RIGHT NOW 🛒💨
                  </span>
                </div>
              </th>
              <td class="py-4 px-6">11 days ago</td>
              <td class="py-4 px-6">427,981</td>
              <td class="py-4 px-6">92%</td>
            </tr>
            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Pay & save 💳
                  </span>
                  <span className="font-normal">
                    Get 20% off, up to $250 when you pay with your credit card
                    💸 Don't miss this, start shopping!
                  </span>
                </div>
              </th>
              <td class="py-4 px-6">2 week ago</td>
              <td class="py-4 px-6">310,451</td>
              <td class="py-4 px-6">89%</td>
            </tr>
            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Up to 75% OFF 😍
                  </span>
                  <span className="font-normal">
                    Explore the widest winterwear selection from LC Waikiki,
                    DeFacto & Adidas 🛍️ Start shopping 👀
                  </span>
                </div>
              </th>
              <td class="py-4 px-6">1 month ago</td>
              <td class="py-4 px-6">290,672</td>
              <td class="py-4 px-6">85%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <Pagination defaultCurrent={1} total={50} /> */}
      {/* <PaginationComponent /> */}
    </div>
  );
};

export default RecentTable;
