import "../../_animations.scss";

// import MSTeamsSVG from "../../assets/Illustrations/MSTeams.svg";
import { TextIconBlueButton } from "../../components/index";
// import Link from "../../assets/Icons/Link.svg";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import { useEffect } from "react";
// import NotActivated from "../Auth/Activate";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
// import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiExternalLink } from "react-icons/fi";
import { Popover } from "antd";
import { useState } from "react";
// import { projectData } from "../../data/DemoData";

const Connect = () => {
  //Get current user
  // const { currentUser, fetchCurrentUser } = useCurrentUser();
  // GET PROJECT THAT BELONGS TO USER DATA
  // const { project, fetchProjectByUserId } = useProjectByUserId();

  // For navigation
  // const navigate = useNavigate();

  // const activated = currentUser?.activated;

  // 👇️ open link in new tab
  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  // For pop over
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <>
      <div className="page-animation">
        <div
          data-tour="19"
          className="flex  h-screen  w-full justify-center content-center items-center"
        >
          <div className="flex flex-col items-center mb-[100px]">
            {/* MS Teams Icon */}
            <LazyLoadImage
              className="w-[110px] h-[110px]"
              src="https://media.publit.io/file/StockPics/MSTeams.svg"
              effect="blur"
              placeholderSrc="https://media.publit.io/file/StockPics/MSTeams.svg"
            />
            {/* <img src={MSTeamsSVG} className="w-[110px] h-[110px]" alt="" /> */}
            {/* Sub text */}
            <span className="text-[14px] text-[#616161] mt-2 mb-3 text-center dark:text-white">
              Communicate directly with your project manager, and get 1 : 1
              support
            </span>
            {/* Button to launch MS Teams */}
            <Popover
              content={
                <div className="flex flex-col">
                  <span>You get direct access to your project manager.</span>
                  <button onClick={hide} className="text-blue mt-1.5">
                    Ok
                  </button>
                </div>
              }
              title="Unlimited 1:1 Support 👩‍💻"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
              placement="bottom"
            >
              <div>
                <TextIconBlueButton
                  onClick={() => {}}
                  text={"Connect"}
                  icon={<FiExternalLink className="ml-2" />}
                  // ml={"ml-2"}
                />
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
