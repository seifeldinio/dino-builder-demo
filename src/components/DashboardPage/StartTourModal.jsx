import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
// import { GrClose } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";
// import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import { useTour } from "@reactour/tour";
import useSound from "use-sound";
import startUp from "../../assets/sfx/startUp.mp3";
import clickA from "../../assets/sfx/clickA.mp3";
import clickB from "../../assets/sfx/clickB.mp3";
import { useNavigate } from "react-router-dom";

const StartTourModal = () => {
  const {
    // showStartTourModal,
    setShowStartTourModal,
    // tourStarted,
    setTourStarted,
  } = useStateContext();
  const [soundPlayed, setSoundPlayed] = useState(false);

  // For the tour to start
  const { setIsOpen } = useTour();

  // Play startup sound effect
  const [play] = useSound(startUp, { volume: 0.5 });
  const [playA] = useSound(clickA, { volume: 0.5 });
  const [playB] = useSound(clickB, { volume: 0.5 });

  const playStartUp = () => {
    if (soundPlayed === false) {
      play();
      setSoundPlayed(true);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tour-modal-popped", "true");
  }, []);

  // useEffect(() => play(), [play]);

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
            <div className="flex items-center justify-center content-center bg-white rounded-lg h-[400px] w-[500px]">
              <MdClose
                onClick={() => {
                  setShowStartTourModal(false);
                  playB();
                }}
                className="absolute z-50 right-0 top-0 m-5 cursor-pointer text-[#696969] text-[18px]"
              />

              <div className="flex h-full w-full ">
                <div className="absolute z-50 bottom-0 m-6">
                  <div className="flex flex-col z-50">
                    <span className="font-bold text-[20px] mb-1.5 text-black">
                      New to Bloxat Built? 👋
                    </span>
                    <span className="text-[#9e9e9e]  mb-4">
                      Click on "Start Tour" for a quick walkthrough! 😄
                    </span>
                    <button
                      onClick={() => {
                        setShowStartTourModal(false);
                        navigate("/tour");
                        setTourStarted(true);
                        setIsOpen(true);
                        // play();
                        playA();
                      }}
                      class="bg-blue hover:bg-darkblue text-white w-[105px]  py-1.5 px-2.5 space-x-1 rounded-md inline-flex items-center transition-color duration-200 mb-1"
                    >
                      <span className="text-[14px] select-none">
                        Start Tour
                      </span>
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowStartTourModal(false);
                    playB();
                  }}
                  className="absolute right-7 bottom-8 z-50 text-[#989898] text-[14px]"
                >
                  Skip
                </button>

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

export default StartTourModal;
