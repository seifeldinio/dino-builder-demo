import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStateContext } from "../../contexts/ContextProvider";

const ThemeCard = (props) => {
  // THEME STATE CONTEXT
  const { setMode, currentMode } = useStateContext();

  return (
    <div className="flex flex-row items-center mt-4 space-x-6">
      {/* Light mode radio */}
      <div class="p-3 rounded-lg outline outline-2 outline-greyelement bg-white  dark:bg-section-dark dark:outline-[#2C2C2C] cursor-pointer">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label
              htmlFor="light"
              className="ml-2 text-[14px] cursor-pointer dark:text-white"
            >
              Light
            </label>
          </div>
          <LazyLoadImage
            className="h-[60px] w-auto mt-3"
            src="https://media.publit.io/file/StockPics/LightMode.webp"
            effect="blur"
            placeholderSrc="https://media.publit.io/file/StockPics/LightMode.webp"
          />
          {/* <img
            className="h-[60px] w-auto mt-3"
            src="https://media.publit.io/file/StockPics/LightMode.webp"
            alt=""
          /> */}
        </div>
      </div>
      {/* Dark mode radio */}
      <div class="p-3 rounded-lg outline outline-2 outline-greyelement bg-white   dark:bg-section-dark dark:outline-[#2C2C2C] cursor-pointer">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label
              htmlFor="dark"
              className="ml-2 text-md cursor-pointer dark:text-white"
            >
              Dark
            </label>
          </div>
          <LazyLoadImage
            className="h-[60px] w-auto mt-3"
            src="https://media.publit.io/file/StockPics/DarkMode.webp"
            effect="blur"
            placeholderSrc="https://media.publit.io/file/StockPics/DarkMode.webp"
          />
          {/* <img
            className="h-[60px] w-auto mt-3"
            src="https://media.publit.io/file/StockPics/DarkMode.webp"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
