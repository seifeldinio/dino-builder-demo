import React, { useState } from "react";
import ScreenCard from "./ScreenCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const LayoutAccordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Accordion header */}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="flex flex-row items-center justify-between w-full py-4 cursor-pointer"
      >
        <h2 className="text-[18px] font-semibold dark:text-white">Layouts</h2>
        {open ? (
          <IoIosArrowUp className="dark:text-white" />
        ) : (
          <IoIosArrowDown className="dark:text-white" />
        )}
      </div>

      {open ? (
        <>
          {" "}
          {/* Accordion body */}
          <div className="pt-0 flex flex-col pb-8">
            <h3 className="text-[16px] text-[#595959] dark:text-[#B5B5B5]">
              Select the screen you want to edit.
            </h3>

            <div className="flex flex-row items-start space-x-12 w-full overflow-x-scroll mt-8 border-b pb-8 dark:border-[#393939]">
              <ScreenCard
                label={"Login"}
                image={"https://media.publit.io/file/screens/Log-In.webp"}
                active={false}
              />

              <ScreenCard
                label={"Signup"}
                image={"https://media.publit.io/file/screens/Sign-Up.webp"}
                active={false}
              />

              <ScreenCard
                label={"Home"}
                image={"https://media.publit.io/file/screens/Home.webp"}
                active={true}
              />

              <ScreenCard
                label={"Search"}
                image={"https://media.publit.io/file/screens/Search-List.webp"}
                active={false}
              />

              <ScreenCard
                label={"Profile"}
                image={"https://media.publit.io/file/screens/Profile.webp"}
                active={false}
              />
            </div>
          </div>
        </>
      ) : (
        <hr className="mt-2 mb-4 dark:border-[#393939]" />
      )}
    </>
  );
};

export default LayoutAccordion;
