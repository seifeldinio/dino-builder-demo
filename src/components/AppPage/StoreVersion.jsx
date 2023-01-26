import { Popover } from "antd";
import React, { useState } from "react";

const StoreVersion = () => {
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
    <div className=" flex h-auto w-[400px] outline  outline-2 outline-[#ECECEC] rounded-lg mt-5 py-3 dark:outline-[#2C2C2C]">
      <div className="flex flex-col w-full ml-3 mr-3 ">
        {/* App store */}
        <div className="flex  w-full  flex-row items-center ">
          <div className="h-[40px] w-[40px] mr-[10px]">
            <img
              className="h-[40px] w-[40px]"
              src="https://media.publit.io/file/StockPics/AppStore.webp"
              alt=""
            />
          </div>
          <span className="dark:text-white">App Store (iOS)</span>
          <Popover
            content="Launches your iOS App 🍏"
            trigger="click"
            open={iosOpen}
            onOpenChange={handleIOSOpenChange}
            placement="top"
          >
            <div className="ml-auto">
              <div class="mr-[2px] outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200 cursor-pointer">
                <span className="text-[14px]">Launch</span>
              </div>
            </div>
          </Popover>
        </div>
        <hr className="mt-3 mb-3 dark:border-[#2C2C2C]" />
        {/* Play store */}
        <div className="flex flex-row items-center">
          <div className="h-[40px] w-[40px] mr-[10px]">
            <img
              className="h-[40px] w-[40px]"
              src="https://media.publit.io/file/StockPics/PlayStore.webp"
              alt=""
            />
          </div>
          <span className="dark:text-white">Play Store (Android)</span>
          <Popover
            content="Launches your Android App 🤖"
            trigger="click"
            open={androidOpen}
            onOpenChange={handleAndroidOpenChange}
            placement="top"
          >
            <div className="ml-auto">
              <div class="mr-[2px] outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200 cursor-pointer">
                <span className="text-[14px]">Launch</span>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default StoreVersion;
