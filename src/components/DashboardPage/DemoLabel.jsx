// import React, { useState } from "react";
import { BsLaptop } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const DemoLabel = () => {
  const { setShowStartTourModal } = useStateContext();

  //   for navigation
  const navigate = useNavigate();

  return (
    <>
      {/* For desktop */}
      <div
        onClick={() => {
          navigate("/dashboard");
          setShowStartTourModal(true);
        }}
        className="md:visible invisible fixed z-50 right-0 bottom-0 bg-section-dark m-4 py-0.5 px-0.5 rounded-md  cursor-pointer hover:scale-105 transition-all duration-200"
      >
        <div className="flex flex-row items-center ml-1.5 mr-1.5  space-x-2 text-white">
          <BsLaptop />
          <span className="text-[14px]">Start tour</span>
        </div>
      </div>
      {/* For mobile */}
      {/* <div className="md:hidden fixed z-50 right-0 bottom-0 bg-section-dark m-4 rounded-md  cursor-pointer">
        <div className="flex flex-row items-center ml-1.5 mr-1.5  space-x-2 text-white">
          <BsLaptop />
          <span className="text-[14px]">Demo</span>
        </div>
      </div> */}
    </>
  );
};

export default DemoLabel;
