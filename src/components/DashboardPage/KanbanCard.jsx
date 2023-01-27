// import DevTeamSVG from "../../assets/Illustrations/DevTeam.svg";
import { Avatar } from "antd";
import { useStateContext } from "../../contexts/ContextProvider";
import useSound from "use-sound";
import clickA from "../../assets/sfx/clickA.mp3";

const KanbanCard = (props) => {
  const { icon } = props;
  const { title } = props;
  // const { date } = props;
  const { data } = props;

  const { setViewTaskSidePanel, setTaskData, tourStarted } = useStateContext();

  const [play] = useSound(clickA, { volume: 0.5 });

  return (
    <div
      className="  h-[80px] rounded-lg  outline outline-2 outline-grey bg-white cursor-pointer dark:bg-button-dark dark:outline-[#2C2C2C]"
      onClick={() => {
        if (tourStarted === false) {
          // OPEN VIEW TASK SIDE PANEL
          setViewTaskSidePanel(true);
          setTaskData(data);
          play();
        } else if (tourStarted === true) {
        }
      }}
    >
      <div className="p-2.5">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <img
                  className="h-[18px] w-[18px] mr-2 rounded-md"
                  src={icon}
                  alt=""
                />

                <span className="font-normal line-clamp-1 dark:text-white">
                  {title}
                </span>
              </div>
              <div className="flex flex-row items-center">
                <span className="ml-[25px] text-[14px] text-[#878787] mr-1">
                  {/* Estimated date: {date} */}
                  Estimated date:
                </span>
                <span className="text-[14px] text-[#878787]">
                  {/* Estimated date: {date} */}
                  {new Date().toLocaleString("en-US", { month: "2-digit" })}/
                  {new Date().toLocaleString("en-US", { day: "2-digit" })}/
                  {new Date().getFullYear()}
                </span>
              </div>
            </div>

            {/* <img
              src="https://media.publit.io/file/StockPics/DevTeam-m.svg"
              className="ml-auto mt-[25px]"
              alt=""
            /> */}

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
