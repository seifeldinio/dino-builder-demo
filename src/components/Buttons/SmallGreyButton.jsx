import React from "react";

const SmallGreyButton = (props) => {
  const { text } = props;
  const { onClick } = props;

  return (
    // <div className='flex h-[20px] w-[80px] bg-blue rounded-md items-center'>

    <button
      onClick={onClick}
      class="bg-[#F2F3F7] hover:bg-[#E4E5EB] dark:bg-[#424242] hover:dark:bg-[#565656] text-black  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
    >
      <span className="text-[14px] dark:text-white">{text}</span>
    </button>

    // </div>
  );
};

export default SmallGreyButton;
