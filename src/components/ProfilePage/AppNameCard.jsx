import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AppNameCard = (props) => {
  const { icon } = props;
  const { title } = props;
  const { info } = props;

  return (
    <div class="flex-1 p-4  rounded-lg border-2 border-[#F2F3F7] shadow-sm bg-white dark:bg-section-dark dark:border-[#202020]">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="h-[55px] w-[55px] rounded-lg">
            <LazyLoadImage
              className="h-[55px] w-[55px] rounded-lg object-cover"
              src={icon}
              effect="blur"
              placeholderSrc={icon}
            />
            {/* <LazyLoadImage
              className="rounded-lg"
              src={icon} // use normal <img> attributes as props
            /> */}
            {/* <img className="rounded-lg" src={icon} alt="" /> */}
          </div>

          <div className="flex flex-col ml-[15px] space-y-2">
            <span class="text-[#676767]  leading-tight dark:text-[#9a9a9a]">
              {title}
            </span>
            <p class="text-[#000000] text-[16px] font-medium  leading-tight dark:text-white">
              {info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNameCard;
