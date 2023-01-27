import { Popover } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

const BugScreenshotPlaceholder = () => {
  return (
    <>
      <Popover
        placement="bottom"
        title={"Demo 💡"}
        content={"Enabled when you have a Bloxat Built app."}
        trigger="click"
      >
        <button className="flex bg-white h-[170px] w-[170px] rounded-lg  border-2 border-gray border-dashed cursor-pointer items-center justify-center ">
          <AiOutlinePlus className="h-[20px] w-[20px] text-[#c0c0c0]" />
        </button>
      </Popover>
    </>
  );
};

export default BugScreenshotPlaceholder;
