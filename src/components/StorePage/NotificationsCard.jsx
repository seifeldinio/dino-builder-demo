import Lottie from "lottie-react-web";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
// import LinkSVG from "../../assets/Icons/Link.svg";
import NotificationLottie from "../../assets/Lotties/notification.json";
// import ArrowSVG from "../../assets/Icons/Arrow.svg";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { BiNotification } from "react-icons/bi";
import clickA from "../../assets/sfx/clickA.mp3";
import useSound from "use-sound";

const NotificationsCard = () => {
  // const { appStatus } = props;

  const { currentMode, tourStarted } = useStateContext();

  // Navigation
  const navigate = useNavigate();

  const [playA] = useSound(clickA, { volume: 0.5 });

  return (
    <div
      data-tour="15"
      className="flex-1 h-full rounded-lg outline outline-1.5 outline-greyelement bg-white dark:bg-section-dark dark:outline-[#202020] hover:shadow-md transition-all duration-200"
    >
      <div className="p-3">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <span className="text-[20px] dark:text-white">
              Push notifications
            </span>

            {currentMode === "Light" ? (
              <div className="ml-1 h-[40px] w-[40px]">
                <Lottie
                  options={{
                    animationData: NotificationLottie,
                    loop: false,
                  }}
                />
              </div>
            ) : (
              <>
                <BiNotification className="dark:text-white w-[22px] h-auto ml-1.5" />
              </>
            )}
          </div>
          <span className="text-[14px] text-[#9A9A9A] mt-1">
            Send push notifications to your users.
          </span>
          <div className="flex flex-wrap mt-auto">
            <div className="ml-auto">
              <div className="flex flex-row mt-2.5">
                <TextIconBlueButton
                  onClick={() => {
                    if (tourStarted === false) {
                      navigate("/store/push-notifications");
                      playA();
                    } else if (tourStarted === true) {
                    }
                  }}
                  text={"Start"}
                  icon={<HiOutlineArrowRight className="ml-1" />}
                  ml={"ml-1"}
                  iconSize={"15px"}
                  reactIcons={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;

// {
//   appStatus === "Live" ? (
//     <>
//       {/* App is live and they can go to this page to send notifications to their users */}
//       <TextIconBlueButton
//         onClick={() => {
//           navigate("/store/push-notifications");
//         }}
//         text={"Manage"}
//         icon={<HiOutlineArrowRight />}
//         ml={"ml-1"}
//         iconSize={"15px"}
//         reactIcons={true}
//       />
//     </>
//   ) : (
//     <>
//       {/* App is not live yet and the button is disabled */}
//       <TooltipComponent
//         className="tooltip-box"
//         content="Available once your app is live."
//         target="#tooltip"
//       >
//         <button
//           id="tooltip"
//           class="bg-lightblue  text-white  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
//         >
//           <span className="text-[14px]">Manage</span>
//           <HiOutlineArrowRight className="ml-1 h-[15px] w-[15px]" />
//         </button>
//       </TooltipComponent>
//     </>
//   );
// }
