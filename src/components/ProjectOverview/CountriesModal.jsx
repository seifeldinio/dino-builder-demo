import React from "react";
import { GrClose } from "react-icons/gr";
import { BsCheckCircleFill } from "react-icons/bs";

const CountriesModal = (props) => {
  const { countries } = props;
  return (
    <div className="h-auto ">
      <div className="flex  flex-row items-center pt-3 pr-5 pl-3 pb-2">
        <div className="flex  flex-col ">
          <span className="text-[20px] font-medium text-[#25272E]">
            Countries
          </span>
          <div className="mt-1 ">
            <span className=" text-[14px] text-[#767676] font-normal ">
              Your app is distributed in these countries.
            </span>
          </div>
        </div>

        <div className="flex flex-1">
          <div className="ml-auto">
            <GrClose
              className="cursor-pointer hover:scale-110 transition-all duration-200"
              onClick={() => {
                window.location.reload();
              }}
            />
          </div>
        </div>
      </div>

      <hr className="mt-1 " />

      <div className="flex flex-col h-auto  overflow-y-scroll">
        {/* Countries table */}

        <div class="overflow-x-auto relative outline outline-2 outline-grey rounded-lg">
          <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class=" text-gray-700  bg-white border-b-1 border-[#e7e7e7] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Country
                </th>
                <th scope="col" class="py-3 px-6">
                  <span className="ml-[200px]">Currency</span>
                </th>
                <th scope="col" class="py-3 px-6">
                  Language
                </th>
                <th scope="col" class="py-3 px-10">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Map countries */}
              {countries?.map((item, i) => (
                <>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <span className="text-blue font-normal">
                        {item?.name}
                      </span>
                    </th>
                    <td class="py-4 px-6">
                      <div className="flex flex-row items-center ml-[215px]">
                        <span>{item?.currency}</span>
                        {/* <span className="text-green">Functional</span>
                    <BsCheckCircleFill /> */}
                      </div>
                    </td>
                    <th scope="col" class="py-3">
                      <span className="text-[#797979] font-normal ml-[32px]">
                        {" "}
                        {item?.language}
                      </span>
                    </th>
                    {item?.enabled === true ? (
                      <th scope="col" class="py-3">
                        <span className="text-[#797979] font-normal">
                          <div className="flex flex-row items-center ml-[25px]">
                            <span className="text-green">Available</span>
                            <BsCheckCircleFill className="text-green ml-2" />
                          </div>
                        </span>
                      </th>
                    ) : (
                      <th scope="col" class="py-3">
                        <span className="text-[#797979] font-normal">
                          <div className="flex flex-row items-center ml-[25px]">
                            <span className="text-green">Adding</span>
                            {/* <BsCheckCircleFill className="text-green ml-2" /> */}
                          </div>
                        </span>
                      </th>
                    )}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CountriesModal;
