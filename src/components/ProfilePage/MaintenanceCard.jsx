import React from "react";
import { BsCheck2 } from "react-icons/bs";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import GreeenCheckSVG from "../../assets/Icons/GreenCheck.svg";

const MaintenanceCard = (props) => {
  const { dateDifference } = props;

  return (
    <div class="flex-1 p-4 rounded-lg border-2 border-[#F2F3F7] shadow-sm bg-white dark:bg-section-dark dark:border-[#202020] ">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="h-[55px] w-[55px] rounded-lg">
            {/* <LazyLoadImage
              src="https://media.publit.io/file/RobootIcons/Hammer.webp" // use normal <img> attributes as props
              effect="blur"
              placeholderSrc="https://media.publit.io/file/RobootIcons/Hammer.webp"
            /> */}
            {/* <LazyLoadImage
              src="https://media.publit.io/file/RobootIcons/Hammer.webp" // use normal <img> attributes as props
            /> */}
            <img
              className="rounded-lg"
              src="https://media.publit.io/file/RobootIcons/Hammer.webp"
              loading="lazy"
              alt=""
            />
          </div>

          <div className="flex flex-col ml-[15px] space-y-2">
            <span class="text-[#676767]  leading-tight dark:text-[#9a9a9a]">
              Maintenance status
            </span>
            <div className="flex flex-row">
              <p class="text-green text-[16px] font-medium  leading-tight">
                Active
              </p>
              <BsCheck2 className="text-green" />
              {/* <img src={GreeenCheckSVG} alt="" /> */}
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;


  // {
  //   dateDifference < 0 ? (
  //     <p class="text-red text-[16px] font-medium  leading-tight">Expired</p>
  //   ) : (
  //     <div className="flex flex-row">
  //       <p class="text-green text-[16px] font-medium  leading-tight">Active</p>
  //       <BsCheck2 className="text-green" />
  //       {/* <img src={GreeenCheckSVG} alt="" /> */}
  //     </div>
  //   );
  // }