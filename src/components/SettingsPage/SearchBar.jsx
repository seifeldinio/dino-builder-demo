// import { Tooltip } from "antd";
// import React from "react";
// import { useStateContext } from "../../contexts/ContextProvider";

const SearchBar = (props) => {
  const { onChange } = props;

  // const { tourStarted } = useStateContext();

  return (
    <>
      <form class="flex items-center ml-auto">
        <div class="relative md:w-[280px] invisible md:visible">
          <input
            type="text"
            id="voice-search"
            class="bg-white border border-gray-300  text-gray-900 text-sm rounded-full hover:bg-[#f9f9f9] dark:bg-[#2C2C2C] dark:border-[#323232] dark:text-white block w-full pl-10 p-2.5  transition-all duration-200"
            placeholder="Search"
            required
            autocomplete="off"
            onChange={onChange}
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
    </>
  );
};

export default SearchBar;
