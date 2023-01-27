// import React from "react";
import { BsCheck2 } from "react-icons/bs";
import EmptyKanbanCard from "./EmptyKanbanCard";
import KanbanCard from "./KanbanCard";

const MobileUpdateStatus = (props) => {
  const { doneFeatures } = props;

  return (
    <div className="md:invisible md:h-0 md:w-0 visible mt-4 md:mt-0">
      <span className="text-[20px] font-normal dark:text-white">
        Update’s Status
      </span>

      {/* Update's kanban area */}

      <div className="h-auto mt-5 bg-greyelement rounded-lg dark:bg-section-dark">
        {/* Titles */}

        <div className="flex flex-row items-center  pt-3 pl-5 pb-3">
          <div className="flex-1">
            <div className="flex flex-row items-center ">
              <BsCheck2 className="mr-1 text-green" />
              <span className="dark:text-white">Done</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-7 pl-5 pb-5 pr-5">
          <div className="flex-1 flex flex-col space-y-7">
            {/* Done */}
            {doneFeatures?.length == 0 ? (
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

export default MobileUpdateStatus;
