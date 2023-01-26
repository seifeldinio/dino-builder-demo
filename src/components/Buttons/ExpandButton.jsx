import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { useStateContext } from "../../contexts/ContextProvider";
import clickA from "../../assets/sfx/clickA.mp3";
import useSound from "use-sound";

const ExpandButton = () => {
  const { setExpandedARView } = useStateContext();
  const [playA] = useSound(clickA, { volume: 0.5 });

  return (
    <button
      onClick={() => {
        setExpandedARView(true);
        playA();
      }}
      className="bg-[#F2F3F7] hover:bg-[#dfdfdf]   p-2 rounded-lg cursor-pointer transition-all duration-200"
    >
      <BsArrowsAngleExpand className=" text-[12px] text-black" />
    </button>
  );
};

export default ExpandButton;
