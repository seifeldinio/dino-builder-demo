import "../../_animations.scss";
import { BsApple } from "react-icons/bs";
import { MdAndroid } from "react-icons/md";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
// import PaginationComponent from "./PaginationComponent";
import { useState } from "react";
import { Popover } from "antd";

const DevicesTable = () => {
  // For pop over
  const [open, setOpen] = useState(false);

  // const hide = () => {
  //   setOpen(false);
  // };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <div className="page-animation">
      {/* <span className="text-[20px] font-normal dark:text-white">Devices</span> */}

      <div class="overflow-x-auto relative mt-7 outline outline-2 outline-[#F2F3F7] rounded-lg dark:outline-[#2C2C2C]">
        <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead class="text-md font-light text-gray-700  bg-[#FAFAFA]   dark:text-[#929292] dark:bg-main-dark">
            <tr>
              <th scope="col" class="py-3 px-6">
                Device
              </th>
              <th scope="col" class="py-3 px-6">
                Last active
              </th>
              <th scope="col" class="py-3 px-6">
                Usage Duration
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-row items-center">
                  <BsApple className="h-[20px] w-[20px]" />{" "}
                  <span className="ml-1">iPhone 14</span>{" "}
                </div>
              </th>
              <td class="py-4 px-6"> 01/09/23, 7:52:29 pm</td>
              <td class="py-4 px-6">3.6 hours</td>
            </tr>
            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-row items-center">
                  <BsApple className="h-[20px] w-[20px]" />{" "}
                  <span className="ml-1">iPhone XR</span>{" "}
                </div>{" "}
              </th>
              <td class="py-4 px-6">01/04/23, 6:30:11 pm</td>
              <td class="py-4 px-6">7.9 hours</td>
            </tr>
            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-row items-center">
                  <MdAndroid className="h-[20px] w-[20px] text-green" />
                  <span className="ml-1">Redmi Note 9 Pro</span>
                </div>
              </th>
              <td class="py-4 px-6">01/07/23, 1:59:12 pm</td>
              <td class="py-4 px-6">9.1 hours</td>
            </tr>
            <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-row items-center">
                  <MdAndroid className="h-[20px] w-[20px] text-green" />
                  <span className="ml-1">SM-A525F</span>{" "}
                </div>{" "}
              </th>
              <td class="py-4 px-6">01/05/23, 9:38:16 pm</td>
              <td class="py-4 px-6">11 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Export button */}
      <Popover
        content={
          <div className="flex flex-col">
            <span>
              Export a CSV Report of the devices that installed your app. 📊
            </span>
          </div>
        }
        // title="Unlimited 1:1 Support 👩‍💻"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
        placement="right"
      >
        <div className="mt-5 absolute">
          <TextIconBlueButton text={"Export CSV"} />
        </div>
      </Popover>
      {/* Pagination */}
      {/* <PaginationComponent /> */}
    </div>
  );
};

export default DevicesTable;
