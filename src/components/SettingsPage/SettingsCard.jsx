// import React from "react";
// import { HiUser } from "react-icons/hi";
// import { RiUser3Fill, RiUserFill } from "react-icons/ri";

const SettingsCard = (props) => {
  const { icon } = props;
  const { title } = props;
  const { description } = props;
  const { onClick } = props;

  return (
    <div
      onClick={onClick}
      class="p-4 rounded-lg outline outline-2 outline-greyelement bg-white  cursor-pointer dark:bg-section-dark dark:outline-[#202020] hover:shadow-md transition-all duration-200"
    >
      <div className="flex flex-row items-center">
        <div className="flex h-[60px] w-[60px] bg-[#F8F9FD] dark:bg-divider-dark dark:text-white rounded-lg items-center content-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col ml-3">
          <span className="font-medium dark:text-white">{title}</span>
          <span className="text-[14px] text-[#8291AD] mt-[1px] dark:text-[#969696]">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
