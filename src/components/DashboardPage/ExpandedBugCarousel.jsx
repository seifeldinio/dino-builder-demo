import { useStateContext } from "../../contexts/ContextProvider";
// import BackButton from "../Buttons/BackButton";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useSound from "use-sound";
import clickB from "../../assets/sfx/clickB.mp3";

const ExpandedBugCarousel = () => {
  const {
    // viewBugSidePanel,
    setViewBugSidePanel,
    bugData,
    // setBugData,
    // expandedBugCarousel,
    setExpandedBugCarousel,
  } = useStateContext();

  const bugScreenshotsArray = JSON.parse(bugData?.screenshots);

  //   To switch image
  const [selected, setSelected] = useState(bugScreenshotsArray[0]);

  const [playB] = useSound(clickB, { volume: 0.5 });

  return (
    <>
      <div className="bg-half-transparent  w-screen fixed nav-item top-0 right-0 z-50 overflow-y-hidden ">
        <div className="page-animation">
          <div className="flex h-screen  dark:text-gray-200 bg-half-transparent dark:[#484B52] w-full  p-5   overflow-y-hidden	">
            {/* Right Panel Context */}

            {/* Minimize button */}
            <button
              type="button"
              className="absolute right-[55px]"
              onClick={() => {
                setViewBugSidePanel(true);
                setExpandedBugCarousel(false);
                playB();
              }}
            >
              {" "}
              <div className="absolute items-center bg-[#F2F3F7] hover:bg-[#E3E3E3] dark:bg-button-dark hover:dark:bg-[#323232] rounded-lg  pt-1 pb-1 pr-1.5 pl-1.5 transition-color duration-200">
                <TbArrowsDiagonalMinimize2 className="h-[23px] w-[23px]" />
              </div>
            </button>

            {/* Carousel */}
            <div className="flex flex-col w-full  items-center content-center justify-center">
              <div className="flex flex-row items-center">
                {/* Left */}
                <button
                  onClick={() => {
                    if (selected === bugScreenshotsArray[0]) {
                      setSelected(bugScreenshotsArray[3]);
                    } else if (selected === bugScreenshotsArray[1]) {
                      setSelected(bugScreenshotsArray[0]);
                    } else if (selected === bugScreenshotsArray[2]) {
                      setSelected(bugScreenshotsArray[1]);
                    } else if (selected === bugScreenshotsArray[3]) {
                      setSelected(bugScreenshotsArray[2]);
                    }

                    // setSelected(selected + 1);
                  }}
                  className="bg-[#4f4f4f] rounded-full w-auto h-auto mt-[-40px] mr-5  hover:scale-110 hover:bg-[#5d5d5d] transition-all duration-200"
                >
                  <MdKeyboardArrowLeft className="text-white h-[40px] w-[40px]  cursor-pointer " />
                </button>
                <div className="flex flex-col justify-center items-center content-center">
                  <LazyLoadImage
                    className="h-[700px] w-auto "
                    src={selected}
                    effect="blur"
                    placeholderSrc={selected}
                  />
                  {/* <img src={selected} className="h-[700px] w-auto " alt="" /> */}
                  <div className="flex flex-row items-center space-x-11 mt-5">
                    {bugScreenshotsArray?.map((item, i) => (
                      <>
                        {/* Selected indicator  */}
                        {selected === item ? (
                          <LazyLoadImage
                            className="h-[100px] rounded-lg cursor-pointer outline outline-2 outline-blue hover:scale-110 transition-all duration-200"
                            src={item}
                            effect="blur"
                            placeholderSrc={item}
                          />
                        ) : (
                          // <img
                          //   src={item}
                          //   className="h-[100px] rounded-lg cursor-pointer outline outline-2 outline-blue hover:scale-110 transition-all duration-200"
                          //   alt=""
                          // />
                          <LazyLoadImage
                            onClick={() => {
                              setSelected(item);
                            }}
                            className="h-[100px] rounded-lg cursor-pointer hover:scale-110 transition-all duration-200"
                            src={item}
                            effect="blur"
                            placeholderSrc={item}
                          />
                          // <img
                          //   src={item}
                          //   onClick={() => {
                          //     setSelected(item);
                          //   }}
                          //   className="h-[100px] rounded-lg cursor-pointer hover:scale-110 transition-all duration-200"
                          //   alt=""
                          // />
                        )}
                      </>
                    ))}
                  </div>
                </div>
                {/* Right */}

                <button
                  onClick={() => {
                    if (selected === bugScreenshotsArray[0]) {
                      setSelected(bugScreenshotsArray[1]);
                    } else if (selected === bugScreenshotsArray[1]) {
                      setSelected(bugScreenshotsArray[2]);
                    } else if (selected === bugScreenshotsArray[2]) {
                      setSelected(bugScreenshotsArray[3]);
                    } else if (selected === bugScreenshotsArray[3]) {
                      setSelected(bugScreenshotsArray[0]);
                    }

                    // setSelected(selected + 1);
                  }}
                  className="bg-[#4f4f4f] rounded-full w-auto h-auto mt-[-40px] ml-5  hover:scale-110 hover:bg-[#5d5d5d] transition-all duration-200"
                >
                  <MdKeyboardArrowRight className="text-white h-[40px] w-[40px]  cursor-pointer " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpandedBugCarousel;
