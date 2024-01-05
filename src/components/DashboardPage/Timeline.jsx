import React from "react";

const TimelineComponent = () => {
  return (
    <div className="border-[1px] border-[#EBEBEB] flex  flex-col w-2/3 rounded-lg h-[430px] ">
      <div className="flex flex-row items-center space-x-1 text-[18px] w-full py-4 px-5">
        <h4>Remaining Time</h4>
        <span className="font-semibold">22 Weeks</span>
      </div>
      <div className="flex flex-row items-center w-full border-[1px] border-[#EBEBEB] text-[14px] font-semibold pl-5 ">
        <span className="mr-auto br-[1px] py-2">JAN</span>
        <div className=" border-l border-gray-300 h-full mx-4" />
        <span className="mr-auto">FEB</span>
        <div className=" border-l border-gray-300 h-full mx-4" />

        <span className="mr-auto">MAR</span>
        <div className=" border-l border-gray-300 h-full mx-4" />

        <span className="mr-auto">APR</span>
        <div className=" border-l border-gray-300 h-full mx-4" />

        <span className="mr-auto">MAY</span>
        <div className=" border-l border-gray-300 h-full mx-4" />

        <span className="mr-auto">JUN</span>
      </div>
      <div className="relative flex flex-col px-4 pt-4 space-y-5 ">
        {/* Event */}
        <div className=" bg-white hover:shadow-md transition-all duration-200 border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] border-t-[#EBEBEB] border-r-[#EBEBEB] border-b-[#EBEBEB] border-l-[#D7F7C2] rounded-md py-4 pl-4 pr-20 w-fit ">
          <span className="text-[14px] font-semibold">Roadmap</span>
        </div>
        {/* DATE INDICATOR */}
        {/* <div className="absolute left-60 bottom-[-82px] flex flex-col justify-center items-center">
                  <div className="flex flex-col items-start bg-white border-[1px] border-[#EBEBEB] shadow-md p-2 rounded-lg">
                    <span className="text-[12px] font-semibold">Delivery</span>
                    <span className="text-[12px] font-light">17 Jun 2023</span>
                  </div>

                  <div className="border-l border-gray-300 h-[260px] " />
                </div> */}
        {/* Event */}
        <div className="ml-20 bg-white hover:shadow-md transition-all duration-200 border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] border-t-[#EBEBEB] border-r-[#EBEBEB] border-b-[#EBEBEB] border-l-[#F6E6B9] rounded-md py-4 pl-4 pr-40 w-fit ">
          <span className="text-[14px] font-semibold">Design</span>
        </div>
        {/* Event */}
        <div className="ml-auto mr-80 bg-white hover:shadow-md transition-all duration-200 border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] border-t-[#EBEBEB] border-r-[#EBEBEB] border-b-[#EBEBEB] border-l-[#F6E6B9] rounded-md py-4 pl-4 pr-60 w-fit ">
          <span className="text-[14px] font-semibold">Prototype</span>
        </div>
        {/* Event */}
        <div className="flex flex-row space-x-0">
          <div className="absolute right-20 bottom-[-54px]  bg-white hover:shadow-md transition-all duration-200 border-t-[1px] border-r-[1px] border-b-[1px] border-l-[6px] border-t-[#EBEBEB] border-r-[#EBEBEB] border-b-[#EBEBEB] border-l-[#F6E6B9] rounded-md py-4 pl-4 pr-60 w-fit ">
            <span className="text-[14px] font-semibold">Full build</span>
          </div>
          {/* DATE INDICATOR */}
          <div className="absolute right-10 bottom-[-82px] flex flex-col justify-center items-center">
            <div className="flex flex-col items-start bg-white border-[1px] border-[#EBEBEB] shadow-md p-2 rounded-lg">
              <span className="text-[12px] font-semibold">Delivery</span>
              <span className="text-[12px] font-light">17 Jun 2023</span>
            </div>

            <div className="border-l border-gray-300 h-[260px] " />
          </div>
          {/* <div className="w-6" /> */}
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
