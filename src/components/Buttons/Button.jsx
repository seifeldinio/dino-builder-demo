// import React from "react";

const Button = (props) => {
  const { text } = props;

  const { onClick } = props;

  return (
    // <div className='flex h-[20px] w-[80px] bg-blue rounded-md items-center'>

    <button
      onClick={onClick}
      class="bg-blue hover:bg-darkblue text-white  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
    >
      <span className="text-[14px]">{text}</span>
    </button>
  );
};

export default Button;
