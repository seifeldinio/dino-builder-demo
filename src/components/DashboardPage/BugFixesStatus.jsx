// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import DoneKanbanCard from "./DoneKanbanCard";
import EmptyKanbanCard from "./EmptyKanbanCard";
// import KanbanCard from "./KanbanCard";
// import ReportSVG from "../../assets/Icons/Report.svg";
// import BugSVG from "../../assets/Icons/Bug.svg";
import DisabledButton from "../Buttons/DisabledButton";
import Popup from "reactjs-popup";
import ReportBugModal from "./ReportBugModal";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import BugKanbanCard from "./BugKanbanCard";
import { BsCheck2 } from "react-icons/bs";
import { MdOutlineFlag } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";

const BugFixesStatus = (props) => {
  const { toDoBug } = props;
  const { fixingBug } = props;
  const { doneBug } = props;
  const { progress } = props;

  const { tourStarted } = useStateContext();

  return (
    <div
      data-tour="3"
      className="md:visible invisible md:mt-6 mt-0 md:h-auto h-0"
    >
      <span className="text-[20px] font-normal dark:text-white">
        Bug Fixes Status
      </span>

      {/* Bug fixes's kanban area */}

      <div className="h-auto mt-5 bg-greyelement rounded-lg dark:bg-section-dark">
        {/* Titles */}

        <div className="flex flex-row items-center  pt-3 pl-5 pb-3">
          <div className="flex-1 ">
            <span className="dark:text-white">🐞 Bug</span>
          </div>

          <div className="flex-1">
            <span className="mr-2">🔨</span>
            <span className="dark:text-white">Fixing</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-row items-center ">
              <BsCheck2 className="mr-1 text-green" />
              {/* <img src={GreenCheckSVG} className="mr-1" alt="" /> */}
              <span className="dark:text-white">Done</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-7 pl-5 pb-5 pr-5">
          <div className="flex-1 flex flex-col space-y-7">
            {/* Bug */}
            {toDoBug?.length === 0 ? (
              <EmptyKanbanCard />
            ) : (
              <>
                {toDoBug?.map((item, i) => (
                  <BugKanbanCard
                    title={item?.bug_title}
                    date={item?.due_date}
                    icon="https://media.publit.io/file/StockPics/Bug.svg"
                    data={item}
                  />
                ))}
              </>
            )}
          </div>

          <div className="flex-1 flex flex-col space-y-7">
            {/* Fixing */}
            {fixingBug?.length === 0 ? (
              <EmptyKanbanCard />
            ) : (
              <>
                {fixingBug?.map((item, i) => (
                  <BugKanbanCard
                    title={item?.bug_title}
                    date={item?.due_date}
                    icon="https://media.publit.io/file/StockPics/Bug.svg"
                    data={item}
                  />
                ))}
              </>
            )}
          </div>

          <div className="flex-1 flex flex-col space-y-7">
            {/* Done */}
            {doneBug?.length === 0 ? (
              <EmptyKanbanCard />
            ) : (
              <>
                {doneBug?.map((item, i) => (
                  <DoneKanbanCard title={item?.bug_title} data={item} />
                ))}
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="ml-auto pb-5 pr-5">
            {(progress === 2 && tourStarted === false) ||
            (progress === 3 && tourStarted === false) ||
            (progress === 4 && tourStarted === false) ? (
              <>
                <Popup
                  trigger={
                    <TextIconBlueButton
                      text={"Report a bug"}
                      icon={<MdOutlineFlag className="ml-1.5" />}
                      // ml={"ml-1.5"}
                    />
                  }
                  closeOnDocumentClick={false}
                  nested={false}
                  modal
                >
                  {(close) => (
                    <>
                      {/* Report a bug modal */}
                      <ReportBugModal close={close} />
                    </>
                  )}
                </Popup>
              </>
            ) : (
              <>
                {/* Disabled because there's no beta versions out yet to report a bug */}
                {/* <TooltipComponent
                  className="tooltip-box"
                  content="You can report bugs once there's a beta version available."
                  target="#tooltip"
                > */}
                {/* <div id="tooltip"> */}
                  <DisabledButton
                    text={"Report a bug"}
                    icon={<MdOutlineFlag className="ml-1.5" />}
                    // ml={"ml-1.5"}
                  />
                {/* </div> */}
                {/* </TooltipComponent> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugFixesStatus;
