import React from "react";
import { BsLaptop } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const DemoLabel = () => {
  const { setShowStartTourModal } = useStateContext();

  //   for navigation
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/dashboard");
        setShowStartTourModal(true);
      }}
      className="fixed z-50 right-0 bottom-0 bg-section-dark m-4 rounded-md  cursor-pointer"
    >
      <div className="flex flex-row items-center ml-1.5 mr-1.5  space-x-2 text-white">
        <BsLaptop />
        <span className="text-[14px]">Demo</span>
      </div>
    </div>
  );
};

export default DemoLabel;
