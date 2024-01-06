import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useStateContext } from "../../contexts/ContextProvider";

const ColorsAccordion = () => {
  const [open, setOpen] = useState(false);
  const {
    primaryColor,
    setPrimaryColor,

    textColor,
    setTextColor,
    backgroundColor,
    setBackgroundColor,
  } = useStateContext();

  const [localColor, setLocalColor] = useState("#FCEB56");

  return (
    <>
      {/* Accordion header */}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex flex-row items-center justify-between w-full py-4 cursor-pointer"
      >
        <h2 className="text-[18px] font-semibold dark:text-white">Colors</h2>
        {open ? (
          <IoIosArrowUp className="dark:text-white" />
        ) : (
          <IoIosArrowDown className="dark:text-white" />
        )}
      </div>

      {open ? (
        <>
          {/* Accordion body */}
          <div className="pt-4 pb-5 flex flex-wrap items-center  border-b dark:border-[#393939] ">
            <div className="flex flex-row items-center mb-3 mr-3 space-x-2 px-2.5 py-2 rounded-md border-[1px] border-[#E1DFDD] dark:border-[#393939] w-fit dark:bg-[#202020]">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => {
                  setPrimaryColor(`${e.target.value}`);
                  // console.log(`${e.target.value}`);
                }}
              />
              <span className="dark:text-white">Primary color</span>
            </div>
            <div className="flex flex-row items-center mb-3 mr-3 space-x-2 px-2.5 py-2 rounded-md border-[1px] border-[#E1DFDD] dark:border-[#393939] w-fit dark:bg-[#202020]">
              <input
                type="color"
                value={localColor}
                onChange={(e) => {
                  setLocalColor(`${e.target.value}`);
                  // console.log(`${e.target.value}`);
                }}
              />
              <span className="dark:text-white">Secondary color</span>
            </div>
            <div className="flex flex-row items-center mb-3 mr-3 space-x-2 px-2.5 py-2 rounded-md border-[1px] border-[#E1DFDD] dark:border-[#393939] w-fit dark:bg-[#202020]">
              <input
                type="color"
                value={textColor}
                onChange={(e) => {
                  setTextColor(`${e.target.value}`);
                  // console.log(`${e.target.value}`);
                }}
              />
              <span className="dark:text-white">Text color</span>
            </div>
            <div className="flex flex-row items-center mb-3 mr-3 space-x-2 px-2.5 py-2 rounded-md border-[1px] border-[#E1DFDD] dark:border-[#393939] w-fit dark:bg-[#202020]">
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => {
                  setBackgroundColor(`${e.target.value}`);
                  // console.log(`${e.target.value}`);
                }}
              />
              <span className="dark:text-white">Background color</span>
            </div>
          </div>
        </>
      ) : (
        <hr className="mt-2 mb-4 dark:border-[#393939] " />
      )}
    </>
  );
};

export default ColorsAccordion;
