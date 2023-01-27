import { AiOutlinePlus } from "react-icons/ai";

const ARImagePlaceHolder = (props) => {
  const { text } = props;
  const { onClick } = props;

  return (
    <>
      <div
        onClick={onClick}
        className="p-4 flex flex-col items-center justify-center  border-2 border-gray dark:border-[#414141] border-dashed rounded-lg  h-[150px] cursor-pointer"
      >
        <AiOutlinePlus className="w-[35px] h-auto dark:text-[#5d5d5d] text-[#CBCBCB]" />
        {/* <img src={AddGreySVG} alt="" /> */}
        <span className="text-[#CBCBCB] text-[14px] mt-[5px] dark:text-[#5d5d5d]">
          {text}
        </span>
      </div>
    </>
  );
};

export default ARImagePlaceHolder;
