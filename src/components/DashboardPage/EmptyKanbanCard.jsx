const EmptyKanbanCard = () => {
  return (
    <div className="  h-[80px] rounded-lg  outline outline-2 outline-grey bg-white dark:bg-button-dark dark:outline-[#2C2C2C]">
      <div className="p-2.5">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-center">
            <span className="mt-[20px] text-[#717171] text-[14px] font-normal ">
              Nothing to display.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyKanbanCard;
