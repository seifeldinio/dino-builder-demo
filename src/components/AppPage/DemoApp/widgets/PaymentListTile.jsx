import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const PaymentListTile = (props) => {
  const { icon } = props;
  const { title } = props;
  const { selected } = props;
  const { width } = props;
  const { mr } = props;
  const { onClick } = props;

  return (
    <>
      {/* List tile */}
      <div
        onClick={onClick}
        className="flex flex-row items-center cursor-pointer mt-2 mb-2 h-[30px]"
      >
        <img src={icon} alt="" className={`${width} h-auto ${mr}`} />
        <span className="ml-2 text-[#787878] text-[14px]">{title}</span>
        <div className="ml-auto">
          {selected === true ? (
            <BsCheckCircleFill className="h-[15px] w-[15px] text-green transition-all duration-200" />
          ) : (
            <div className="h-[15px] w-[15px]  border-2 border-[#dfdfdf] bg-white rounded-lg transition-all duration-200" />
          )}
        </div>
      </div>
      <hr className="border-[#e8e8e8] w-full" />
      {/* End List tile */}
    </>
  );
};

export default PaymentListTile;
