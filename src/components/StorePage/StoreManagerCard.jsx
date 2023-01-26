// import EditSVG from "../../assets/Icons/Edit.svg";
import IconButton from "../Buttons/IconButton";
// import LinkSVG from "../../assets/Icons/Link.svg";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineAppstoreAdd, AiOutlineEdit } from "react-icons/ai";
import { FiExternalLink, FiUser } from "react-icons/fi";
import { IoMdKey } from "react-icons/io";
import { toast } from "react-toastify";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const StoreManagerCard = (props) => {
  // const { storeManagerLink } = props;
  // const { storeUsername } = props;
  // const { storePassword } = props;

  // // 👇️ open link in new tab
  // const openInNewTab = (url) => {
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };

  // // Copied to clipboard toast
  // const notify = () => {
  //   toast.success("📋 Copied to clipboard!", {
  //     autoClose: 1500,
  //   });
  // };

  // for navigation
  const navigate = useNavigate();

  return (
    <div className="md:flex hidden h-auto flex-1 rounded-lg shadow-md outline outline-1.5 outline-greyelement bg-white dark:bg-section-dark dark:outline-[#202020]">
      <div className="p-3">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <span className="text-[20px] dark:text-white">App manager</span>
            <AiOutlineAppstoreAdd className="dark:text-white w-[22px] h-auto ml-1.5" />
            {/* <img
                    src={EditSVG}
                    className="h-[22px] w-[22px] ml-2.5"
                    alt=""
                  /> */}
          </div>
          <span className="text-[14px] text-[#9A9A9A] mt-1">
            Go to your app manager to check your Bloxat Built app's health and
            performance status.
          </span>
          <div className="flex flex-wrap ">
            <div className="ml-auto flex flex-row items-center space-x-3 mt-2.5">
              <TextIconBlueButton
                onClick={() => navigate("/app")}
                icon={<BsArrowRight className="h-[18px] w-[18px] ml-1" />}
                text={"Manage"}
                // iconSize={"18px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreManagerCard;
