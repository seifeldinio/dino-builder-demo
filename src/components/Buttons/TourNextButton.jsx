import React from "react";
import { BsArrowRight } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const TourNextButton = (props) => {
  const { onClick } = props;
  const { lastStep } = props;
  const { currentStep } = props;

  const {
    setTourStarted,
    setViewARSidePanel,
    setExpandedARView,
    setGoToApp,
    setGoToStore,
    setGoToPush,
    // setGoToConnect,
    setGoToDocs,
    setGoToOverview,
    setGoToProfile,
    setGoToSettings,
  } = useStateContext();

  // for navigation
  // const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        if (lastStep) {
          setTourStarted(false);
          setGoToSettings(false);
          onClick();
        } else if (currentStep === 4) {
          setGoToApp(true);
          setTimeout(() => {
            onClick();
          }, 500);
        } else if (currentStep === 7) {
          setGoToApp(false);
          setGoToStore(true);
          setTimeout(() => {
            onClick();
          }, 500);
        } else if (currentStep === 8) {
          setViewARSidePanel(true);
          onClick();
        } else if (currentStep === 10) {
          setExpandedARView(true);
          onClick();
        } else if (currentStep === 12) {
          setExpandedARView(false);
          onClick();
        } else if (currentStep === 13) {
          setViewARSidePanel(false);
          onClick();
        } else if (currentStep === 14) {
          setGoToStore(false);
          setGoToPush(true);
          setTimeout(() => {
            onClick();
          }, 1000);
        } else if (currentStep === 18) {
          setGoToPush(false);
          setGoToDocs(true);
          setTimeout(() => {
            onClick();
          }, 500);
        } else if (currentStep === 21) {
          setGoToDocs(false);
          setGoToOverview(true);
          setTimeout(() => {
            onClick();
          }, 500);
        } else if (currentStep === 24) {
          setGoToOverview(false);
          setGoToProfile(true);
          setTimeout(() => {
            onClick();
          }, 500);
        } else if (currentStep === 27) {
          setGoToProfile(false);
          setGoToSettings(true);
          setTimeout(() => {
            onClick();
          }, 500);
        } else {
          onClick();
        }
      }}
      // onClick={() => {
      //   if (currentStep === 5) {
      //     onClick();
      //     // navigate("/app");
      //   } else {
      //     onClick();
      //   }
      // }}
      class="ml-auto outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
    >
      <span className="text-[14px]">{lastStep ? "Got it! 😊" : "Next"}</span>
      {lastStep ? null : <BsArrowRight className="ml-1 text-[14px]" />}
    </button>
  );
};

export default TourNextButton;
