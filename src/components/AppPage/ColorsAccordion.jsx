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
        <h2 className="text-[18px] font-semibold">Colors</h2>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {open ? (
        <>
          {/* Accordion body */}
          <div className="pt-4 pb-8 flex flex-wrap items-center space-x-5 border-b">
            <div className="flex flex-row items-center space-x-2 px-2.5 py-2 rounded-md border-[1px] border-[#E1DFDD] w-fit">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => {
                  setPrimaryColor(`${e.target.value}`);
                  // console.log(`${e.target.value}`);
                }}
              />
              <span>Primary color</span>
            </div>
            <div className="flex flex-row items-center space-x-2 px-2.5 py-2 rounded-md border-[1px] border-[#E1DFDD] w-fit">
              <input
                type="color"
                value={localColor}
                onChange={(e) => {
                  setLocalColor(`${e.target.value}`);
                  // console.log(`${e.target.value}`);
                }}
              />
              <span>Secondary color</span>
            </div>
            <div className="flex flex-row items-center space-x-2 px-2.5 py-2 rounded-md border-[1px] border-[#E1DFDD] w-fit">
              <input
                type="color"
                value={textColor}
                onChange={(e) => {
                  setTextColor(`${e.target.value}`);
                  // console.log(`${e.target.value}`);
                }}
              />
              <span>Text color</span>
            </div>
            <div className="flex flex-row items-center space-x-2 px-2.5 py-2 rounded-md border-[1px] border-[#E1DFDD] w-fit">
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => {
                  setBackgroundColor(`${e.target.value}`);
                  // console.log(`${e.target.value}`);
                }}
              />
              <span>Background color</span>
            </div>
          </div>
        </>
      ) : (
        <hr className="mt-2 mb-4" />
      )}
    </>
  );
};

export default ColorsAccordion;
