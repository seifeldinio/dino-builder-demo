import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { TourProvider } from "@reactour/tour";
import steps from "./TourSteps";
import { TourNextButton } from "./components";
// import { BsArrowRight } from "react-icons/bs";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <TourProvider
        steps={steps}
        startAt={0}
        // setCurrentStep={0}
        disableKeyboardNavigation={true}
        disableDotsNavigation={true}
        // closeWithMask={false}
        // disableInteraction={true}
        // disableInteraction={
        //   steps?.filter((item) => item.selector === '[data-tour="2"]') === true
        //     ? true
        //     : false
        // }
        // showButtons={!lockTour}
        onClickMask={() => {}}
        styles={{
          popover: (base) => ({
            ...base,
            "--reactour-accent": "#000",
            borderRadius: 10,
          }),
          maskArea: (base) => ({ ...base, rx: 10 }),
          // maskArea: (base) => ({ ...base }),
          // maskWrapper: (base) => ({ ...base }),

          maskWrapper: (base) => ({ ...base, color: "#000" }),
          // maskWrapper: (base) => ({ ...base, color: "transparent" }),

          badge: (base) => ({ ...base, left: "auto", right: "-0.8125em" }),
          // controls: (base) => ({ ...base, marginTop: 100 }),
          close: (base) => ({ ...base, left: "auto", right: 8, top: 8 }),
        }}
        // prevButton={({ currentStep, setCurrentStep, steps }) => {
        //   const first = currentStep === 0;
        //   return (
        //     <button
        //       onClick={() => {
        //         if (first) {
        //           setCurrentStep((s) => steps.length - 1);
        //         } else {
        //           setCurrentStep((s) => s - 1);
        //         }
        //       }}
        //     >
        //       Back
        //     </button>
        //   );
        // }}
        prevButton={() => {
          return <></>;
        }}
        nextButton={({
          Button,
          currentStep,
          stepsLength,
          setIsOpen,
          setCurrentStep,
          steps,
        }) => {
          const last = currentStep === stepsLength - 1;
          const thisStep = currentStep;
          return (
            <TourNextButton
              lastStep={last}
              currentStep={thisStep}
              onClick={() => {
                if (last) {
                  setIsOpen(false);
                } else {
                  setCurrentStep((s) => (s === steps?.length - 1 ? 0 : s + 1));
                }
              }}
            />
          );
        }}
        badgeContent={({ totalSteps, currentStep }) =>
          currentStep + 1 + "/" + totalSteps
        }
        showBadge={false}
        // showCloseButton={enabledParts.includes("close")}
        showCloseButton={false}
        showNavigation={true}
        showPrevNextButtons={true}
        showDots={false}
      >
        <App />
      </TourProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
