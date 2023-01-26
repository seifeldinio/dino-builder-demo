import { BsArrowLeft } from "react-icons/bs";
// import BackLeftSVG from "../../assets/Icons/BackLeft.svg";

const BackButton = (props) => {
  const { onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      <div className="flex flex-row items-center bg-[#F2F3F7] hover:bg-[#E3E3E3] rounded-lg pt-1 pb-1 pr-1.5 pl-1.5 transition-color duration-200 dark:bg-[#373737] hover:dark:bg-[#414141]">
        <BsArrowLeft className="h-[17px] w-auto mr-2 dark:text-white" />
        {/* <img src={BackLeftSVG} className="mr-2 dark:text-white" alt="" /> */}
        <span className="text-[14px]">Back</span>
      </div>
    </button>
  );
};

export default BackButton;
