// import DevTeamSVG from "../../assets/Illustrations/DevTeam.svg";
import useSound from "use-sound";
import { useStateContext } from "../../contexts/ContextProvider";
import clickA from "../../assets/sfx/clickA.mp3";

const BugKanbanCard = (props) => {
  const { icon } = props;
  const { title } = props;
  const { date } = props;
  const { data } = props;

  const { setViewBugSidePanel, setBugData } = useStateContext();

  const [play] = useSound(clickA, { volume: 0.5 });

  return (
    <div
      className="  h-[80px] rounded-lg  outline outline-2 outline-grey bg-white cursor-pointer dark:bg-button-dark dark:outline-[#2C2C2C]"
      onClick={() => {
        // OPEN VIEW TASK SIDE PANEL
        setViewBugSidePanel(true);
        setBugData(data);
        play();
      }}
    >
      <div className="p-2.5">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <img className="h-[18px] w-[18px] mr-2" src={icon} alt="" />

                <span className="font-normal line-clamp-1 dark:text-white">
                  {title}
                </span>
              </div>

              <span className="ml-[25px] text-[14px] text-[#878787]">
                Estimated date: {date}
              </span>
            </div>

            <img
              src="https://media.publit.io/file/StockPics/DevTeam-m.svg"
              className="ml-auto mt-[25px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugKanbanCard;
