import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ScreenCard = ({ label, image, active }) => {
  return (
    <div
      className={`flex flex-col px-10 py-3 space-y-2 items-center rounded-md cursor-pointer hover:bg-[#fdfdfd] duration-200 transition-all ease-in-out ${
        active ? "bg-[#FAFAFA]" : "bg-transparent"
      }`}
    >
      <span>{label}</span>

      <div className="flex h-[200px] w-[100px]">
        <LazyLoadImage
          className="flex object-contain h-full w-full rounded-md border-[1px] border-black"
          src={image} // use normal <img> attributes as props
        />
      </div>
    </div>
  );
};

export default ScreenCard;
