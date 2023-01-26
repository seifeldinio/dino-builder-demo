import React, { useState } from "react";
import useSound from "use-sound";
import { useStateContext } from "../../contexts/ContextProvider";
import startUp from "../../assets/sfx/startUp.mp3";
import clickA from "../../assets/sfx/clickA.mp3";
import { BsArrowRight } from "react-icons/bs";

const MobileStartModal = () => {
  const {
    // showStartTourModal,
    setShowMobileStart,
  } = useStateContext();
  const [soundPlayed, setSoundPlayed] = useState(false);

  // Play startup sound effect
  const [play] = useSound(startUp, { volume: 0.5 });
  const [playA] = useSound(clickA, { volume: 0.5 });

  const playStartUp = () => {
    if (soundPlayed === false) {
      play();
      setSoundPlayed(true);
    }
  };

  return (
    <>
      <div
        // onMouseEnter={() => {
        //   play();
        //   // play();
        // }}
        onMouseMoveCapture={() => {
          playStartUp();
        }}
        className="bg-half-transparent  w-screen fixed nav-item top-0 right-0 z-50 overflow-y-hidden "
      >
        <div className="flex h-screen  dark:text-gray-200 bg-half-transparent dark:[#484B52] w-full  p-5   overflow-y-hidden	items-center justify-center content-center ">
          <div className="fade-up">
            <div className="flex items-center justify-center content-center bg-white rounded-lg h-[400px] w-[360px]">
              <div className="flex h-full w-full ">
                <div className="absolute z-50 bottom-0 m-6">
                  <div className="flex flex-col z-50">
                    <span className="font-bold text-[20px] mb-1.5 text-black">
                      Better experience on desktop 👋
                    </span>
                    <span className="text-[#9e9e9e]  mb-4">
                      We recommend to use Bloxat Built on desktop to get the
                      full experience! 😄
                    </span>
                    <button
                      onClick={() => {
                        setShowMobileStart(false);
                        // play();
                        playA();
                      }}
                      class="bg-blue hover:bg-darkblue text-white w-[100px]  py-1.5 px-2.5 space-x-1 rounded-md inline-flex items-center transition-color duration-200 mb-1"
                    >
                      <span className="text-[14px] select-none">Continue</span>
                      <BsArrowRight />
                    </button>
                  </div>
                </div>

                <img
                  className="absolute h-[70px] right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[100px] z-50 w-auto items-center justify-center content-center"
                  src="https://media.publit.io/file/StockPics/console-light.webp"
                  alt=""
                />
                <img
                  className="object-cover w-full rounded-lg fade-in-tour"
                  src="https://media.publit.io/file/StockPics/gradient-bg-2.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileStartModal;
