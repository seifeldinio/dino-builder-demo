// import RobootViewerSVG from "../../assets/roboot-viewer.svg";
import { useStateContext } from "../../contexts/ContextProvider";
// import BackButton from "../Buttons/BackButton";
import { CgMinimizeAlt } from "react-icons/cg";
// import { MdOutlineHelp } from "react-icons/md";
import { useState } from "react";
// import { VscChromeMinimize } from "react-icons/vsc";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import clickB from "../../assets/sfx/clickB.mp3";
import useSound from "use-sound";

import SmallLogo from "../../assets/images/small-logo.webp";

const ExpandedARView = (props) => {
  const { setExpandedARView } = useStateContext();

  const { arModel } = props;
  const { productName } = props;
  const { measurements } = props;

  const [showControlsHelp, setShowControlsHelp] = useState(false);

  const [playB] = useSound(clickB, { volume: 0.5 });

  return (
    <div
      data-tour="12"
      className="bg-half-transparent  w-screen fixed nav-item top-0 right-0"
    >
      <div className="page-animation">
        <div className="float-right h-screen  dark:text-gray-200 bg-black dark:[#484B52] w-full overflow-y-clip">
          {/* Right Panel Context */}
          {/* Minimize Button */}
          <button
            data-tour="13"
            onClick={() => {
              setExpandedARView(false);
              playB();
            }}
            className=" absolute right-7 top-7 z-50 bg-[#2c2c2c] hover:bg-[#323232] p-2 rounded-lg ml-auto cursor-pointer transition-all duration-200"
          >
            <CgMinimizeAlt className=" text-[18px] text-white" />
          </button>
          {/* Main content */}
          <div className="absolute z-50  left-7 top-7 ">
            <div className="flex flex-col space-y-3">
              <img src={SmallLogo} className="h-[50px] w-[50px]" alt="" />
              <div className="flex flex-row items-center text-white">
                <span className="mr-1.5">Product Name:</span>
                <span className="font-medium">{productName}</span>
              </div>
              <div className="flex flex-row items-center text-white">
                <span className="mr-1.5">Measurements:</span>
                <span className="font-medium line-clamp-1">{measurements}</span>
              </div>
              {/* Show controls button */}
              <button
                className="bg-[#2c2c2c] hover:bg-[#323232] w-[100px] items-center content-center justify-center rounded-lg  md:visible invisible"
                onClick={() => {
                  setShowControlsHelp(!showControlsHelp);
                }}
              >
                <div className="flex flex-row items-center  cursor-pointer px-2 py-1">
                  <span className="text-white">Controls</span>
                  {showControlsHelp ? (
                    <MdOutlineKeyboardArrowUp className="text-white ml-1.5" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="text-white ml-1.5" />
                  )}
                </div>
              </button>

              <div className="h-[2px]" />
              {showControlsHelp && (
                <div className="space-y-3 fade-down">
                  {" "}
                  <div className="flex flex-row items-center">
                    <img
                      className="h-[40px] w-[40px]"
                      src="https://media.publit.io/file/StockPics/left-hold.webp"
                      alt=""
                    />
                    <span className="text-white ml-2">
                      Rotate: Hold left click and drag.
                    </span>
                  </div>
                  <div className="flex flex-row items-center">
                    <img
                      className="h-[40px] w-[40px]"
                      src="https://media.publit.io/file/StockPics/right-hold.webp"
                      alt=""
                    />
                    <span className="text-white ml-2">
                      Move: Hold right click and drag.
                    </span>
                  </div>
                  <div className="flex flex-row items-center">
                    <img
                      className="h-[40px] w-[40px]"
                      src="https://media.publit.io/file/StockPics/scroll.webp"
                      alt=""
                    />
                    <span className="text-white ml-2">Zoom in: Scroll up.</span>
                  </div>
                  <div className="flex flex-row items-center">
                    <img
                      className="h-[40px] w-[40px]"
                      src="https://media.publit.io/file/StockPics/scroll.webp"
                      alt=""
                    />
                    <span className="text-white ml-2">
                      Zoom out: Scroll down.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Viewer Port */}
          <model-viewer
            // alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
            src={arModel} // AR Android
            ios-src={arModel} // AR iOS
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
              backgroundColor: "#000",
            }}
            // slot="progress-b ar"
            // touch-action="pan-y"
          ></model-viewer>
        </div>
      </div>
    </div>
  );
};

export default ExpandedARView;
