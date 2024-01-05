import "../../_animations.scss";
import { useState } from "react";
import { Dropdown, Space } from "antd";

import {
  MdOutlineKeyboardArrowDown,
  // MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  // AddOnCard,
  Console,
  FeaturesTable,
  Main,
  SmallGreyButton,
  StoreVersion,
  TextIconBlueButton,
  // ProductPage,
  // TextIconBlueButton,
} from "../../components";
import { projectData } from "../../data/DemoData";
// import { FaAppStore, FaGooglePlay } from "react-icons/fa";
// import { BiNotification } from "react-icons/bi";
import { HiOutlineCubeTransparent } from "react-icons/hi";
// import { BsArrowRight } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import { FaAppStore, FaGooglePlay } from "react-icons/fa";
// import { BsCheck2 } from "react-icons/bs";
import Tree from "react-d3-tree";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ScreenCard from "../../components/AppPage/ScreenCard";
import LayoutAccordion from "../../components/AppPage/LayoutAccordion";
import ColorsAccordion from "../../components/AppPage/ColorsAccordion";
import FeaturesAccordion from "../../components/AppPage/FeaturesAccordion";
import { toast } from "react-toastify";

const Prototype = () => {
  const { currentMode } = useStateContext();

  // for dark mode conditions
  // const { currentMode } = useStateContext();

  // 👇️ open link in new tab
  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  // For navigation
  // const navigate = useNavigate();

  // To switch device preview
  const [device, setDevice] = useState("iOS");

  // Dropdown object
  const items = [
    {
      key: "1",
      label: <div onClick={() => setDevice("iOS")}>iOS</div>,
    },
    {
      key: "2",
      label: <div onClick={() => setDevice("Android")}>Android</div>,
    },
  ];

  // This is a simplified example of an org chart with a depth of 2.
  // Note how deeper levels are defined recursively via the `children` property.
  // For nodes/ blox
  const orgChart = {
    name: "Simple App",
    children: [
      {
        name: "Main (2 Blox)",
        attributes: {
          Blox: "2",
        },
        children: [
          {
            name: "Product Screen",
            // attributes: {
            //   department: "Fabrication",
            // },
            // children: [
            //   {
            //     name: "Payment",
            //   },
            // ],
          },
          {
            name: "Payment Screen",
            // attributes: {
            //   department: "Assembly",
            // },
            // children: [
            //   {
            //     name: "Worker",
            //   },
            // ],
          },
        ],
      },
    ],
  };

  // Here we're using `renderCustomNodeElement` to represent each node
  // as an SVG `rect` instead of the default `circle`.
  const renderRectSvgNodeDark = ({ nodeDatum, toggleNode }) => (
    <g>
      <rect
        width="20"
        height="20"
        x="-10"
        onClick={toggleNode}
        fill="#ddff55"
      />
      <text fill="white" strokeWidth="0" floodColor={"#ffff"} x="20">
        {nodeDatum.name}
      </text>

      {nodeDatum.attributes?.department && (
        <text fill="white" x="20" dy="20" strokeWidth="0">
          Department: {nodeDatum.attributes?.department}
        </text>
      )}
    </g>
  );

  // Light mode
  const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <rect
        width="20"
        height="20"
        x="-10"
        onClick={toggleNode}
        fill="#ddff55"
      />
      <text fill="black" strokeWidth="0" x="20">
        {nodeDatum.name}
      </text>

      {nodeDatum.attributes?.department && (
        <text fill="black" x="20" dy="20" strokeWidth="0">
          Department: {nodeDatum.attributes?.department}
        </text>
      )}
    </g>
  );

  // For navigation

  // const navigate = useNavigate();

  const Saved = () => {
    toast.success("Saved!", {
      autoClose: 1500,
    });
  };

  return (
    <div className="page-animation">
      <div className="flex flex-row h-full ">
        {/* Page content */}
        <div className="mt-10 md:ml-10 md:mr-10 ml-5 mr-5 w-3/5 ">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <div className="flex flex-wrap lg:flex-nowrap ">
                <div className="flex flex-row justify-center md:mt-0 mt-10">
                  <span className="text-[26px] font-bold dark:text-white">
                    {/* {project?.app_name} Cost */}
                    App
                  </span>
                </div>
              </div>
              <div className="row mt-1 text-[15px]">
                <span className="text-gray-400	">
                  Preview & customize your app.
                </span>
              </div>
            </div>
            {/* buttons */}
            <div className="flex flex-row items-center space-x-3">
              <button
                onClick={() => {}}
                class="bg-[#F2F3F7] hover:bg-[#E4E5EB] dark:bg-[#424242] hover:dark:bg-[#565656] text-black  py-1 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
              >
                <span className="text-[14px] dark:text-white mr-1.5">
                  Support
                </span>
                <FiHelpCircle />
              </button>

              <TextIconBlueButton
                onClick={() => {
                  Saved();
                }}
                text={"Save changes"}
              />
            </div>
          </div>

          <hr className="mt-4 mb-5" />
          <div className="delay-4 mb-12">
            {/* COLORS */}
            <ColorsAccordion />
            {/* LAYOUTS */}
            <LayoutAccordion />
            {/* FEATURES */}
            <FeaturesAccordion />
          </div>
        </div>
        {/* Side App Preview Panel */}
        <div className="fixed right-0 top-0 bottom-0 nav-item ">
          <div className="delay-1">
            <div
              data-tour="6"
              className=" h-full dark:text-gray-200 bg-white shadow-md dark:bg-section-dark w-[454px]	"
            >
              <div className="flex flex-col h-full  ">
                <div className="flex flex-col px-5 pb-5 pt-8">
                  <span className="text-[20px] font-semibold">Preview</span>
                  {/* Select */}
                  <div className="flex w-[50px] mt-2">
                    <Dropdown
                      menu={{
                        items,
                      }}
                    >
                      <div
                        className="text-gray-900 dark:text-white"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Space>
                          {device}
                          <MdOutlineKeyboardArrowDown />
                        </Space>
                      </div>
                    </Dropdown>
                  </div>
                  {/* Phone */}
                  <div className="flex flex-row items-center content-center justify-center mt-[60px] mb-10">
                    {/* Simulator Mockup */}
                    {device === "iOS" ? (
                      <LazyLoadImage
                        className="absolute z-50 select-none pointer-events-none "
                        src="https://media.publit.io/file/StockPics/ios-simulator.webp"
                      />
                    ) : (
                      <LazyLoadImage
                        className="absolute z-50 select-none pointer-events-none"
                        src="https://media.publit.io/file/StockPics/android-simulator.webp"
                      />
                    )}

                    {/* App content */}
                    <div className="flex flex-col bg-white w-[335px] h-[720px] pt-[25px] rounded-lg overflow-y-scroll overflow-x-hidden scroll-smooth ">
                      <div className="flex text-black  ">
                        <Main />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Console */}
                <Console />
              </div>

              {/* <select
                id="countries"
                class="mt-2 h-[25px] w-[85px] pl-2  bg-gray-50 border border-gray-300   text-gray-900 text-sm rounded-lg focus:ring-blue focus:border-blue block   dark:bg-[#303030] dark:border-[#272727] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                onChange={(e) => setDevice(e.target.value)}
              >
                <option class="block w-full">iOS</option>
                <option class="block w-full">Android</option>
              </select> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototype;

// <div className="delay-4">
//   <div className="mt-5 ">
//     <div
//       data-tour="7"
//       className="flex bg-greyelement rounded-lg w-[580px]  h-[300px] mb-5 dark:bg-section-dark"
//     >
//       <Tree
//         id="treeWrapper"
//         data={orgChart}
//         renderCustomNodeElement={
//           currentMode === "Light" ? renderRectSvgNode : renderRectSvgNodeDark
//         }
//         centeringTransitionDuration={true}
//         enableLegacyTransitions={true}
//         // rootNodeClassName="node__root"
//         // branchNodeClassName="node__branch"
//         // leafNodeClassName="node__leaf"
//         // dimensions={true}
//       />
//     </div>

//     <span className="text-[20px] font-normal dark:text-white">
//       Version {projectData?.app_releases[0]?.version}
//     </span>
//   </div>
//   {/* App Store Version Table */}
//   <StoreVersion />
//   <div className="flex flex-row items-center mt-5 mb-5">
//     <span className="text-[20px] font-normal dark:text-white">Store</span>
//     {/* <MdOutlineKeyboardArrowUp className="ml-auto dark:text-white text-black cursor-pointer h-[20px] w-[20px]" /> */}
//   </div>
//   <div className="flex flex-row items-center space-x-5">
//     {/* Card */}

//     <div class="p-4 w-[400px] rounded-lg outline outline-2 outline-greyelement bg-white   dark:bg-section-dark dark:outline-[#202020] ">
//       <div className="flex flex-row items-center">
//         <div
//           className={`flex h-[45px] w-[45px] bg-greyelement dark:bg-[#2C2C2C] p-1 rounded-lg items-center content-center justify-center`}
//         >
//           <HiOutlineCubeTransparent className="dark:text-white text-black h-[20px] w-[20px]" />
//         </div>

//         <div className="flex flex-col ml-3">
//           <span className="font-medium dark:text-white">AR Products</span>
//           <span className="text-[14px] text-[#8291AD] mt-[1px] dark:text-[#969696]">
//             View and manage your AR Products
//           </span>
//         </div>
//         <div className="ml-auto relative  mb-[25px] rounded-lg">
//           <button
//             onClick={() => navigate("/store")}
//             class="flex flex-row items-center outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-1.5 rounded-md  transition-color duration-200"
//           >
//             <span className="text-[14px]">Manage</span>
//             {/* <BsArrowRight className="ml-1" /> */}
//           </button>
//         </div>
//       </div>
//     </div>
//     {/* End Card */}
//   </div>
//   <div className="h-[314px]" />
// </div>;
