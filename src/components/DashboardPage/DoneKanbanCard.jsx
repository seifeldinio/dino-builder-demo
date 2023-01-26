// import GreenCheckRounded from "../../assets/Icons/GreenCheckRounded.svg";
// import ScreenshotSVG from "../../assets/Icons/Screenshot.svg";
// import DevTeamSVG from "../../assets/Illustrations/DevTeam.svg";
import { Avatar } from "antd";
import { RiScreenshot2Fill } from "react-icons/ri";
import useSound from "use-sound";
import { useStateContext } from "../../contexts/ContextProvider";
import clickA from "../../assets/sfx/clickA.mp3";

const DoneKanbanCard = (props) => {
  const { data } = props;
  const { title } = props;

  const { setViewBugSidePanel, setBugData, tourStarted } = useStateContext();

  const [play] = useSound(clickA, { volume: 0.5 });

  return (
    <div
      onClick={() => {
        if (tourStarted === false) {
          // OPEN VIEW BUG SIDE PANEL
          setViewBugSidePanel(true);
          setBugData(data);
          play();
        } else if (tourStarted === true) {
        }
      }}
      className="  h-[80px] rounded-lg  outline outline-2 outline-grey bg-white cursor-pointer dark:bg-button-dark dark:outline-[#2C2C2C]"
    >
      <div className="p-2.5">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <img
                  className="h-[20px] w-[20px] mr-2"
                  src="https://media.publit.io/file/StockPics/GreenCheckRounded.svg"
                  alt=""
                />

                <span className="font-normal line-clamp-1 dark:text-white">
                  {title}
                </span>
              </div>

              <div className="flex flex-row items-center  ">
                <span className="ml-[28px] text-[14px] text-[#43A4FF] ">
                  View screenshots
                </span>
                <RiScreenshot2Fill className="ml-1 h-[15px] w-[15px] text-[#43A4FF]" />
                {/* <img
                  src={ScreenshotSVG}
                  className="ml-1 h-[15px] w-[15px]"
                  alt=""
                /> */}
              </div>
            </div>
            <div className="ml-auto mt-[25px]">
              <Avatar.Group
                maxCount={3}
                // maxPopoverTrigger="click"
                size="small"
                maxStyle={{
                  color: "#f56a00",
                  backgroundColor: "#fde3cf",
                  cursor: "pointer",
                }}
              >
                <Avatar src="https://media.publit.io/file/StockPics/team-member-1.webp" />
                <Avatar src="https://media.publit.io/file/StockPics/kloud.webp" />
                <Avatar src="https://media.publit.io/file/StockPics/dp-demo.webp" />
              </Avatar.Group>
            </div>
            {/* <img
              src="https://media.publit.io/file/StockPics/DevTeam-m.svg"
              className="ml-auto mt-[25px]"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoneKanbanCard;
