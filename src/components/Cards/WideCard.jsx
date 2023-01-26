import Lottie from "lottie-react-web";
import React from "react";
// import { MdPayment } from "react-icons/md";
// import Coins from "../../assets/Lotties/coins.json";
// import Invoice from "../../assets/Lotties/invoice.json";
import { useStateContext } from "../../contexts/ContextProvider";

const WideCard = (props) => {
  const { lottie } = props;
  const { title } = props;
  const { cost } = props;

  const { darkModeIcon } = props;

  const { currentMode } = useStateContext();

  return (
    <div class="p-4 rounded-lg shadow-md bg-white  dark:bg-button-dark">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          {currentMode === "Light" ? (
            <div className="h-[40px] w-[40px] ">
              <Lottie
                options={{
                  animationData: lottie,
                  loop: false,
                }}
              />
            </div>
          ) : (
            <>
              {darkModeIcon}
            </>
          )}

          <span class="text-[#676767]  leading-tight dark:text-white">
            {title}
          </span>
        </div>

        <p class="text-black font-medium ml-[6px] mt-[4px] text-[23px] dark:text-white">
          {cost}
        </p>
      </div>
    </div>
  );
};

export default WideCard;
