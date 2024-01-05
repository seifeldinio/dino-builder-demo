import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
import { approvedFeaturesData } from "../../data/DemoData";

const FeaturesTable = () => {
  // GET PROJECT THAT BELONGS TO USER DATA
  // const {
  //   project,
  //   fetchProjectByUserId,
  //   approvedFeatures,
  //   fetchApprovedFeatures,
  // } = useProjectByUserId();

  // useEffect(() => {
  //   fetchProjectByUserId();

  //   fetchApprovedFeatures(project?.id, "");
  // }, [project?.id]);

  const [query, setquery] = useState("");
  const handleChange = (e) => {
    setquery(e.target.value);
  };

  const results = approvedFeaturesData.filter((item) =>
    item.feature_title.toLowerCase().includes(query.toLowerCase())
  );
  // const filtered = approvedFeaturesData?.filter((item) => item.)

  return (
    <>
      {" "}
      <div className="flex flex-row items-center mt-5">
        <span className="text-[20px] font-normal dark:text-white">
          Features
        </span>
        {/* Search bar */}
        <form class="flex items-center ml-auto">
          <div class="relative w-[220px]">
            <input
              type="text"
              id="voice-search"
              class="bg-white border border-gray-300  text-gray-900 dark:bg-[#2C2C2C] dark:border-[#323232] dark:text-white text-sm rounded-lg hover:bg-[#f9f9f9] block w-full pl-10 p-1.5  transition-all duration-200"
              placeholder="Search"
              required
              value={query}
              onChange={handleChange}
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
      </div>
      <div className="flex-wrap mt-[20px] h-[350px] outline outline-2 outline-[#ECECEC] dark:outline-[#2C2C2C] rounded-md  overflow-y-scroll overflow-x-clip">
        <div className="flex  flex-col  ml-[15px] mr-[15px]">
          {results?.map((item, i) => (
            <>
              <div className="relative mt-[10px]">
                <div className="flex flex-row items-center  h-[60px]">
                  <div className="flex flex-col">
                    <span className="text-[16px] dark:text-white">
                      {item?.feature_title}
                    </span>
                    <span className="text-[#848484] font-normal line-clamp-2 md:text-[16px] text-[13px]">
                      {item?.description}
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div>
                      {item?.status === "Added" ? (
                        <BsFillCheckCircleFill className="text-green scale-110" />
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-[10px] dark:border-[#2C2C2C]" />

              {/* {features?.slice(-1) ? (
              <></>
            ) : (
              <hr className="mt-[10px] mb-[10px]" />
            )} */}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesTable;
