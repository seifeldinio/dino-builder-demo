// import React from "react";

const DisabledButton = (props) => {
  const { text } = props;
  const { icon } = props;
  // const { reactIcons } = props;
  // const { iconSize } = props;
  // const { ml } = props;
  const { onClick } = props;

  return (
    // <div className='flex h-[20px] w-[80px] bg-blue rounded-md items-center'>

    <button
      onClick={onClick}
      class="bg-[#ABABAB]  text-white  py-0.5 px-2.5 dark:bg-hover-dark dark:text-[#757575] rounded-md inline-flex items-center transition-color duration-200"
    >
      <span className="text-[14px] ">{text}</span>
      {icon}
      {/* {reactIcons === true ? (
        <div className={`${ml} h-[${iconSize}] w-[${iconSize}]`}>{icon}</div>
      ) : (
        <img
          src={icon}
          className={`${ml} h-[${iconSize}] w-[${iconSize}]`}
          alt=""
        />
      )} */}
    </button>

    // </div>
  );
};

export default DisabledButton;
