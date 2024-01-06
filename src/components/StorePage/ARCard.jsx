import Lottie from "lottie-react-web";
import React from "react";
import SmallGreyButton from "../Buttons/SmallGreyButton";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import ARLottie from "../../assets/Lotties/ar.json";
import { useStateContext } from "../../contexts/ContextProvider";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import useSound from "use-sound";
import clickA from "../../assets/sfx/clickA.mp3";

const ARCard = (props) => {
  const { setUploadARSidePanel, setViewARSidePanel, currentMode, tourStarted } =
    useStateContext();

  const { arProductsLimit } = props;
  const { arProductsCount } = props;

  const [play] = useSound(clickA, { volume: 0.5 });

  return (
    <>
      <div
        data-tour="9"
        className="flex-1  rounded-lg  outline outline-1.5 outline-greyelement bg-white dark:bg-section-dark dark:outline-[#202020] hover:shadow-md transition-all duration-200"
      >
        <div className="p-3">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <span className="text-[20px] dark:text-white ">AR Products</span>
              {currentMode === "Light" ? (
                <div className="h-[40px] w-[40px] ml-1 ">
                  <Lottie
                    options={{
                      animationData: ARLottie,
                      loop: false,
                    }}
                  />
                </div>
              ) : (
                <>
                  <HiOutlineCubeTransparent className="text-white w-[22px] h-auto ml-1.5" />
                </>
              )}
            </div>
            <span className="text-[14px] text-[#9A9A9A] mt-1">
              View & Upload AR Products available in your app.
              {/* Our engine will convert your static image to a 3D VR product display
            in your app. */}
            </span>
            <div className="flex flex-wrap mt-2 dark:mt-4">
              <div className="ml-auto">
                <div className="flex flex-row mt-1">
                  <div className="mr-2">
                    <SmallGreyButton
                      onClick={() => {
                        setViewARSidePanel(true);
                        play();
                      }}
                      text={"View"}
                    />
                  </div>

                  {/* If client has reached the limit .. has 10 AR prdocuts live and his limit is 10 */}
                  {arProductsLimit === arProductsCount ? (
                    <>
                      {/* <TooltipComponent
                          className="tooltip-box"
                          content={`You reached your maximum AR Products limit (${arProductsLimit} Products). Connect with us to upgrade.`}
                          target="#tooltip"
                        > */}
                      <div id="tooltip">
                        <button class="bg-lightblue  text-white  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200">
                          <span className="text-[14px]">Upload</span>
                        </button>
                      </div>
                      {/* </TooltipComponent> */}
                    </>
                  ) : (
                    <TextIconBlueButton
                      onClick={() => {
                        if (tourStarted === false) {
                          setUploadARSidePanel(true);
                          play();
                        } else if (tourStarted === true) {
                        }
                      }}
                      text={"Upload"}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ARCard;
