import React, { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import BackButton from "../Buttons/BackButton";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { BiCheck } from "react-icons/bi";

// import { useStore } from "../../contexts/storeContext/StoreContext";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
import ARLottie from "../../assets/Lotties/ar.json";
import TestingLottie from "../../assets/Lotties/TestingModel.json";
// import { BsArrowsAngleExpand } from "react-icons/bs";
import Lottie from "lottie-react-web";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import ExpandButton from "../Buttons/ExpandButton";
import ExpandedARView from "./ExpandedARView";
import { arProductData } from "../../data/DemoData";
import useSound from "use-sound";
// import clickA from "../../assets/sfx/clickA.mp3";
import clickB from "../../assets/sfx/clickB.mp3";

const ViewARSidePanel = () => {
  const { setViewARSidePanel, setUploadARSidePanel, expandedARView } =
    useStateContext();

  // GET STORE DATA
  // const { arProducts, fetchARProducts } = useStore();

  // To set next and previous pages
  const [page, setPage] = useState(0);

  const [currentArProduct, setCurrentArProduct] = useState(
    arProductData.rows[0]
  );

  // const currentArProduct = arProductData.rows[0];

  // useEffect(() => {
  //   fetchARProducts(page);

  //   // fetchARProducts(store?.id);
  // }, []);

  function nextPage() {
    if (page !== arProductData?.count - 1) {
      setPage(page + 1);
      setCurrentArProduct(arProductData.rows[page + 1]);
      // fetchARProducts(page + 1);
    }
  }

  function previousPage() {
    if (page >= 1) {
      setPage(page - 1);
      setCurrentArProduct(arProductData.rows[page - 1]);

      // fetchARProducts(page - 1);
    }

    // setPage(function (prevCount) {
    //   return prevCount - 1;
    // });
    // fetchARProducts(page);
  }

  // console.log("AR PRODUCT HERE:", arProducts?.rows[0]);

  // console.log("MAX PAGES:", arProducts?.count);

  // console.log("PAGE:", page);

  // const { scene } = useGLTF(store?.glb);

  // const [playA] = useSound(clickA, { volume: 0.5 });
  const [playB] = useSound(clickB, { volume: 0.5 });

  return (
    <div className="bg-half-transparent  w-screen fixed nav-item top-0 right-0">
      <div className="page-animation">
        <div className="float-right h-screen  dark:text-gray-200 bg-white dark:bg-section-dark w-400 p-5 overflow-y-scroll	">
          {/* Right Panel Context */}
          <div className="flex justify-between items-center ">
            <div data-tour="14">
              <BackButton
                onClick={() => {
                  setViewARSidePanel(false);
                  playB();
                }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            {arProductData?.count === 0 ? (
              <>
                {/* There's no AR Products yet */}
                <span className="mt-8 text-[20px] font-bold">AR Products</span>
                <span className="mt-1 font-normal text-[14px] text-[#8E8E8E]">
                  View your converted AR Products that are displayed in your
                  app.
                </span>
                <div className="flex h-[180px] w-full rounded-lg bg-greyelement dark:bg-section-dark mt-3 items-center justify-center content-center">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#edf6ff]  rounded-lg h-[55px] w-[55px] p-1">
                      <Lottie
                        options={{
                          animationData: ARLottie,
                          loop: false,
                        }}
                      />
                    </div>
                    <span className="font-medium text-[14px] mt-2">
                      No AR Products yet.
                    </span>
                    <span className="font-normal text-[13px]  mb-2">
                      Add images of your product or a 3D file
                    </span>
                    <TextIconBlueButton
                      onClick={() => {
                        setViewARSidePanel(false);
                        setUploadARSidePanel(true);
                      }}
                      text={"Add"}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* There is AR Products to display */}
                <div className="mt-8 flex flex-row items-center space-x-1">
                  <span className=" text-[20px] font-bold">AR Products</span>
                  <span className="text-[20px] font-light">(17)</span>
                </div>

                <span className="mt-1 font-normal text-[16px] text-[#8E8E8E]">
                  View your converted AR Products displayed in your built app.
                </span>
                <div data-tour="10" className="flex flex-col">
                  {/* 3d viewer area */}
                  <div className="h-[160px]  rounded-lg mt-[15px] ">
                    {currentArProduct === null ? (
                      // Uploaded AR Product but it's not live yet
                      <>
                        <div className="flex h-[140px] w-full rounded-lg bg-greyelement mt-3 items-center justify-center content-center">
                          <div className=" rounded-lg h-[70px] w-[70px] p-1">
                            <Lottie
                              options={{
                                animationData: TestingLottie,
                                loop: true,
                              }}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Expanded AR 3D Model View */}
                        {expandedARView && (
                          <ExpandedARView
                            arModel={currentArProduct?.glb}
                            productName={currentArProduct?.product_name}
                            measurements={currentArProduct?.measurements}
                          />
                        )}
                        {/* Expand button */}
                        <div
                          data-tour="11"
                          className="absolute z-50 right-[35px] mt-2 "
                        >
                          <ExpandButton />
                        </div>
                        {/* Viewer Port */}
                        <model-viewer
                          // alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                          src={currentArProduct?.glb} // AR Android
                          ios-src={currentArProduct?.glb} // AR iOS
                          // src="https://firebasestorage.googleapis.com/v0/b/newapp-873cd.appspot.com/o/glb%2Fhelmet.glb?alt=media&token=0dfe48f3-885a-4fdf-bf48-d4eeb29c8f1f"
                          auto-rotate
                          // ar
                          // environment-image="shared-assets/environments/moon_1k.hdr"
                          // poster="shared-assets/models/NeilArmstrong.webp"
                          shadow-intensity="1"
                          camera-controls
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                          }}
                          // slot="progress-b ar"
                          // touch-action="pan-y"
                        ></model-viewer>
                      </>
                    )}
                  </div>
                  {/* Product title and switcher */}
                  <div className="flex flex-row items-center mt-[15px]">
                    <span className="font-medium text-[18px]">
                      {currentArProduct?.product_name}
                    </span>
                    <div className="ml-auto">
                      <div class="inline-flex ">
                        <button
                          onClick={() => previousPage()}
                          // disabled={!canPreviousPage}
                          class="bg-[#F2F3F7] hover:bg-[#dfdfdf] dark:bg-[#373737] hover:dark:bg-[#414141]  py-[4px] px-[10px] rounded-l transition-all duration-200"
                        >
                          <MdOutlineArrowBackIos />
                        </button>

                        <button
                          onClick={() => nextPage()}
                          // disabled={!canNextPage}
                          class="bg-[#F2F3F7] hover:bg-[#dfdfdf] dark:bg-[#373737] hover:dark:bg-[#414141]  py-[4px] px-[10px] rounded-r transition-all duration-200"
                        >
                          <MdOutlineArrowForwardIos />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Space */}
                  <div className="mt-2" />
                  {/* Show if it's available in app or not */}
                  {arProductData?.rows[0].glb === null ? (
                    <div className="flex flex-col">
                      {/* Status */}
                      <div class="bg-[#adadad] text-white  w-[148px] py-0.5 px-2.5 rounded-md inline-flex items-center justify-center content-center">
                        <div className="flex flex-row items-center ">
                          <span className="text-[14px]">
                            Refining and Testing
                          </span>
                        </div>
                      </div>
                      {/* Caption info */}
                      <span className="text-[14px] mt-1.5 text-[#757575]">
                        You'll get notified once it's available in your app.
                      </span>
                    </div>
                  ) : (
                    <div class="bg-[#D7F7C2] text-[#006908]  w-[168px] py-1 px-1 rounded-md inline-flex items-center justify-center content-center">
                      <div className="flex flex-row items-center ">
                        <span className="text-[14px]">
                          Available in your app
                        </span>
                        <BiCheck className="h-[20px] w-[20px]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* End Right Panel Content */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewARSidePanel;
