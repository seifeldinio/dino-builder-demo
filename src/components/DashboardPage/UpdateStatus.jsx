// import { BsCheck2, BsListUl } from "react-icons/bs";
// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import EmptyKanbanCard from "./EmptyKanbanCard";
import KanbanCard from "./KanbanCard";
// import AddSVG from "../../assets/Icons/Add.svg";
// import SmallGreyButton from "../Buttons/SmallGreyButton";
import DisabledButton from "../Buttons/DisabledButton";
import Popup from "reactjs-popup";
// import { GrClose } from "react-icons/gr";

// import PaymentItem from "../StorePage/PaymentItem";
import AddFeatureModal from "./AddFeatureModal";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";

const UpdateStatus = (props) => {
  const { toDoFeatures } = props;
  const { buildingFeatures } = props;
  const { doneFeatures } = props;
  const { progress } = props;

  const { tourStarted } = useStateContext();

  return (
    <div
      data-tour="3"
      className="md:visible invisible md:mt-10 mt-0 md:h-auto h-0"
    >
      <div className="flex flex-row items-center justify-between">
        <span className="text-[26px] dark:text-white font-bold">
          Feature status
        </span>

        <div className="flex flex-wrap ">
          <div className="ml-auto">
            {progress === 4 && tourStarted === false ? (
              <>
                <Popup
                  trigger={
                    <TextIconBlueButton
                      text={"Add feature"}
                      icon={<AiOutlinePlus className="ml-1.5" />}
                      // icon={AddSVG}
                      // ml={"ml-1.5"}
                    />
                  }
                  closeOnDocumentClick={false}
                  nested={false}
                  modal
                >
                  {(close) => (
                    <>
                      {/* Add a new feature modal */}
                      <AddFeatureModal close={close} />
                    </>
                  )}
                </Popup>
              </>
            ) : (
              <>
                {/* Disabled button because the project isn't done yet to add more features */}
                {/* <TooltipComponent
                  className="tooltip-box"
                  content="You can add additional features once your app is live."
                  target="#tooltip"
                > */}
                <div id="tooltip">
                  <DisabledButton
                    text={"Add a new feature"}
                    icon={<AiOutlinePlus className="ml-1.5" />}
                    ml={"ml-1.5"}
                  />
                </div>
                {/* </TooltipComponent> */}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Update's kanban area */}

      <div className="h-auto mt-5 bg-greyelement rounded-lg dark:bg-section-dark">
        {/* Titles */}

        <div className="flex flex-row items-center  pt-3 pl-5 pb-3">
          <div className="flex-1 ">
            <div className="flex flex-row items-center ">
              {/* <BsListUl className="mr-2 dark:text-white" /> */}
              <span className="dark:text-white">🔨 Feature</span>
            </div>
          </div>

          <div className="flex-1 dark:text-white">
            <span>👨‍💻 Building</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-row items-center dark:text-white">
              {/* <BsCheck2 className="mr-1 text-green" /> */}
              {/* <img src={GreenCheckSVG} className="mr-1" alt="" /> */}
              <span>✅ Done</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-7 pl-5 pb-5 pr-5">
          <div className="flex-1 flex flex-col space-y-7">
            {/* Features */}

            {toDoFeatures?.length === 0 ? (
              <EmptyKanbanCard />
            ) : (
              <>
                {toDoFeatures?.map((item, i) => (
                  <KanbanCard
                    title={item?.task_title}
                    date={item?.due_date}
                    icon={item?.task_icon}
                    data={item}
                  />
                ))}
              </>
            )}

            {/* <EmptyKanbanCard /> */}
          </div>

          <div className="flex-1 flex flex-col space-y-7">
            {/* Building */}
            {buildingFeatures?.length === 0 ? (
              <EmptyKanbanCard />
            ) : (
              <>
                {buildingFeatures?.map((item, i) => (
                  <KanbanCard
                    title={item?.task_title}
                    date={item?.due_date}
                    icon={item?.task_icon}
                    data={item}
                  />
                ))}
              </>
            )}
          </div>

          <div className="flex-1 flex flex-col space-y-7">
            {/* Done */}
            {doneFeatures?.length === 0 ? (
              <EmptyKanbanCard />
            ) : (
              <>
                {doneFeatures?.map((item, i) => (
                  <KanbanCard
                    title={item?.task_title}
                    date={item?.due_date}
                    icon={item?.task_icon}
                    data={item}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatus;
