import Lottie from "lottie-react-web";
import React from "react";
import SmallGreyButton from "../Buttons/SmallGreyButton";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import ARLottie from "../../assets/Lotties/ar.json";
import { useStateContext } from "../../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
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
      {arProductsLimit === 0 ? (
        // No AR Products (Client didn't purchase AR Products with the package)
        <div className="flex-1  h-auto rounded-lg shadow-md outline outline-1.5 outline-greyelement bg-white dark:bg-section-dark">
          <TooltipComponent
            className="tooltip-box"
            content="Not available in your current plan."
            target="#tooltip"
          >
            <div id="tooltip" className="p-3">
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <span className="text-[20px] text-[#9A9A9A]">
                    AR Products
                  </span>
                  <div className="h-[40px] w-[40px] ml-1  opacity-50">
                    <Lottie
                      options={{
                        animationData: ARLottie,
                        loop: false,
                      }}
                    />
                  </div>
                </div>
                <span className="text-[14px] text-[#9A9A9A] mt-1">
                  Upload images of your product and it will be converted to a 3D
                  AR product available in your app.
                  {/* Our engine will convert your static image to a 3D VR product display
            in your app. */}
                </span>
                <div className="flex flex-wrap ">
                  <div className="ml-auto">
                    <div className="flex flex-row mt-1">
                      <div className="mr-2">
                        {/* Disabled View */}
                        <button class="bg-[#f8f8f8]  text-black  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200">
                          <span className="text-[14px] text-[#b4b4b4]">
                            View
                          </span>
                        </button>
                      </div>
                      {/* Disabled Upload */}
                      <button class="bg-lightblue  text-white  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200">
                        <span className="text-[14px]">Upload</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TooltipComponent>
        </div>
      ) : (
        // Client purchased AR product and they got a limit more than 0 (i.e 5, 10, 20, etc...)
        <div
          data-tour="9"
          className="flex-1  h-auto rounded-lg shadow-md outline outline-1.5 outline-greyelement bg-white dark:bg-section-dark dark:outline-[#202020]"
        >
          <div className="p-3">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <span className="text-[20px] dark:text-white ">
                  AR Products
                </span>
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
                Upload images of your product and it will be converted to a 3D
                AR product available in your app.
                {/* Our engine will convert your static image to a 3D VR product display
            in your app. */}
              </span>
              <div className="flex flex-wrap ">
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
                        <TooltipComponent
                          className="tooltip-box"
                          content={`You reached your maximum AR Products limit (${arProductsLimit} Products). Connect with us to upgrade.`}
                          target="#tooltip"
                        >
                          <div id="tooltip">
                            <button class="bg-lightblue  text-white  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200">
                              <span className="text-[14px]">Upload</span>
                            </button>
                          </div>
                        </TooltipComponent>
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
      )}
    </>
  );
};

export default ARCard;
