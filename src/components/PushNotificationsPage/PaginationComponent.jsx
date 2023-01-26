import React from "react";

const PaginationComponent = () => {
  return (
    <nav aria-label="" className="mt-5 absolute right-[-10px] scale-90">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-button-dark dark:border-[#2C2C2C] dark:text-[#969696] dark:hover:bg-[#323232] dark:hover:text-white transition-all duration-200"
          >
            <span class="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-button-dark dark:border-[#2C2C2C] dark:text-[#969696] dark:hover:bg-[#323232] dark:hover:text-white transition-all duration-200"
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-button-dark dark:border-[#2C2C2C] dark:text-[#969696] dark:hover:bg-[#323232] dark:hover:text-white transition-all duration-200"
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:bg-button-dark dark:border-[#2C2C2C] dark:text-[#969696] dark:hover:bg-[#323232] dark:hover:text-white transition-all duration-200"
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-button-dark dark:border-[#2C2C2C] dark:text-[#969696] dark:hover:bg-[#323232] dark:hover:text-white transition-all duration-200"
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-button-dark dark:border-[#2C2C2C] dark:text-[#969696] dark:hover:bg-[#323232] dark:hover:text-white transition-all duration-200"
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-button-dark dark:border-[#2C2C2C] dark:text-[#969696] dark:hover:bg-[#323232] dark:hover:text-white transition-all duration-200"
          >
            <span class="sr-only">Next</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;
