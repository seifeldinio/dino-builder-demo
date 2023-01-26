import { Popover } from "antd";
import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
// import TeamsSVG from "../../assets/Illustrations/MSTeams.svg";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
// import LinkSVG from "../../assets/Icons/Link.svg";

const ConnectCard = (props) => {
  // const { onClick } = props;

  // For pop over
  const [supportOpen, setSupportOpen] = useState(false);

  // const hide = () => {
  //   setOpen(false);
  // };
  const handleSupportOpenChange = (newOpen) => {
    setSupportOpen(newOpen);
  };

  return (
    <div class="flex-1 p-4 rounded-lg border-2 border-[#F2F3F7] shadow-sm bg-white dark:bg-section-dark dark:border-[#202020]">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <div className="h-[60px] w-[60px] rounded-lg">
            <img
              src="https://media.publit.io/file/StockPics/MSTeams.svg"
              alt=""
              loading="lazy"
            />
            {/* <LazyLoadImage
              src={TeamsSVG} // use normal <img> attributes as props
              effect="blur"
              placeholderSrc={TeamsSVG}
            /> */}
            {/* <img className="rounded-lg" src={icon} alt="" /> */}
          </div>

          <div className="flex flex-col ml-[15px] space-y-2">
            <span class="text-[#676767]  leading-tight dark:text-[#9a9a9a]">
              Connect with us
            </span>
            <div className="w-auto">
              <Popover
                content={
                  <div className="flex flex-col">
                    <span>Unlimited 1:1 Support 👩‍💻 </span>
                  </div>
                }
                // title="Unlimited 1:1 Support 👩‍💻"
                trigger="click"
                open={supportOpen}
                onOpenChange={handleSupportOpenChange}
                placement="bottom"
              >
                <TextIconBlueButton
                  // onClick={onClick}
                  text={"Connect"}
                  icon={<FiExternalLink className="ml-1" />}
                  // ml={"ml-2"}
                />
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;
