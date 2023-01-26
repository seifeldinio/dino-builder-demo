import { Avatar } from "antd";
import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStateContext } from "../../contexts/ContextProvider";
import BackButton from "../Buttons/BackButton";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import clickA from "../../assets/sfx/clickA.mp3";
import clickB from "../../assets/sfx/clickB.mp3";
import useSound from "use-sound";

const ViewBugSidePanel = () => {
  const {
    // viewBugSidePanel,
    setViewBugSidePanel,
    bugData,
    setBugData,
    // expandedBugCarousel,
    setExpandedBugCarousel,
  } = useStateContext();

  const [playA] = useSound(clickA, { volume: 0.5 });
  const [playB] = useSound(clickB, { volume: 0.5 });

  return (
    <>
      <div className="bg-half-transparent  w-screen fixed nav-item top-0 right-0">
        <div className="page-animation">
          <div className="float-right h-screen  dark:text-gray-200 bg-white  w-400 p-5 overflow-y-scroll dark:bg-section-dark	">
            {/* Right Panel Context */}
            <div className="flex justify-between items-center ">
              <BackButton
                onClick={() => {
                  setViewBugSidePanel(false);
                  setBugData(null);
                  playB();
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center mt-8 ">
                <span className=" text-[20px] ">{bugData?.bug_title}</span>
                <div className="bg-[#BFBFBF] px-1.5 rounded-lg ml-auto dark:bg-[#505050] mr-1.5">
                  <span className="text-[14px] text-white">
                    {bugData?.priority}
                  </span>
                </div>
                <Avatar.Group
                  maxCount={3}
                  // maxPopoverTrigger="click"
                  size="small"
                  maxStyle={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer",
                  }}
                >
                  <Avatar src="https://media.publit.io/file/StockPics/team-member-1.webp" />
                  <Avatar src="https://media.publit.io/file/StockPics/kloud.webp" />
                  <Avatar src="https://media.publit.io/file/StockPics/dp-demo.webp" />
                </Avatar.Group>
                {/* <img
                  className=""
                  src="https://media.publit.io/file/StockPics/DevTeam-m.svg"
                  alt=""
                /> */}
              </div>
              <span className="mt-1 font-normal text-[14px] text-[#8E8E8E] dark:text-[#a9a9a9]">
                {bugData?.brief_description}
              </span>

              <hr className="mt-5 mb-5 dark:border-[#2C2C2C]" />
              {/* Screenshots section */}
              {bugData?.progress === 2 ? (
                <>
                  {/* Bug is done .. Fix screenshots */}
                  <div className="flex flex-row items-center">
                    <span className=" text-[20px]">Fix screenshots</span>
                    <div className="ml-auto md:visible invisible">
                      {/* Expand button */}
                      <TextIconBlueButton
                        text={"Expand"}
                        onClick={() => {
                          setExpandedBugCarousel(true);
                          setViewBugSidePanel(false);
                          playA();
                        }}
                        reactIcons={true}
                        icon={
                          <BsArrowsAngleExpand className="h-[12px] w-[12px] ml-1" />
                        }
                        // ml={"ml-2"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5 mt-5">
                    {JSON.parse(bugData?.screenshots)?.map((item, i) => (
                      <>
                        <LazyLoadImage
                          className="rounded-lg outline outline-1 outline-[#DFDFDF] dark:outline-[#2C2C2C]"
                          src={item}
                          effect="blur"
                          placeholderSrc={item}
                        />
                        {/* <img
                          src={item}
                          className="rounded-lg outline outline-1 outline-[#DFDFDF] dark:outline-[#2C2C2C]"
                          alt=""
                        /> */}
                      </>
                    ))}
                  </div>
                </>
              ) : (
                bugData?.screenshots !== "[]" && (
                  <>
                    {/* Bug todo, doing .. Uploaded screenshots */}
                    <div className="flex flex-row items-center">
                      <span className=" text-[20px]">Uploaded screenshots</span>
                      <div className="ml-auto">
                        {/* Expand button */}
                        <TextIconBlueButton
                          text={"Expand"}
                          onClick={() => {
                            setExpandedBugCarousel(true);
                            setViewBugSidePanel(false);
                          }}
                          reactIcons={true}
                          icon={
                            <BsArrowsAngleExpand className="h-[12px] w-[12px] ml-1" />
                          }
                          // ml={"ml-2"}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-5">
                      {JSON.parse(bugData?.screenshots)?.map((item, i) => (
                        <>
                          <LazyLoadImage
                            className="rounded-lg outline outline-1 outline-[#DFDFDF] dark:outline-[#2C2C2C]"
                            src={item}
                            effect="blur"
                            placeholderSrc={item}
                          />
                          {/* <img
                            src={item}
                            className="rounded-lg outline outline-1 outline-[#DFDFDF] dark:outline-[#2C2C2C]"
                            alt=""
                          /> */}
                        </>
                      ))}
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBugSidePanel;
