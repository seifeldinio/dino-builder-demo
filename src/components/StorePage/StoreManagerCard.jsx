// import EditSVG from "../../assets/Icons/Edit.svg";
// import IconButton from "../Buttons/IconButton";
// import LinkSVG from "../../assets/Icons/Link.svg";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
// import { FiExternalLink, FiUser } from "react-icons/fi";
// import { IoMdKey } from "react-icons/io";
// import { toast } from "react-toastify";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import wooCommerceLogo from "../../assets/images/woocommerce.webp";
import { IoMdCheckmark } from "react-icons/io";

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
    <div 
    
    // className="md:flex hidden h-full w-full flex-1 rounded-lg outline outline-1.5 outline-greyelement bg-white dark:bg-section-dark dark:outline-[#202020] hover:shadow-md transition-all duration-200"
    className="flex-1  rounded-lg  border-[1px] border-[#E1DFDD] bg-white dark:bg-section-dark dark:border-[#202020] hover:shadow-md transition-all duration-200"

    >
      <div className="p-3 w-full">
        <div className="flex flex-col ">
          <div className="flex flex-row items-center ">
            <span className="text-[20px] dark:text-white">Store data</span>
            <img
              src={wooCommerceLogo}
              alt="WooCommerce Logo"
              className="w-auto h-5 ml-1.5"
            />
            {/* <AiOutlineAppstoreAdd className="dark:text-white w-[22px] h-auto ml-1.5" /> */}
            {/* <img
                    src={EditSVG}
                    className="h-[22px] w-[22px] ml-2.5"
                    alt=""
                  /> */}
          </div>
          <span className="text-[14px] text-[#9A9A9A] mt-1">
            WooCommerce integrated with your app.
          </span>
          <div className="flex flex-wrap mt-3">
            <div className="ml-auto flex flex-row items-center space-x-3 mt-2.5">
              <div
                // onClick={onClick}
                class="bg-[#F2F3F7] dark:bg-[#424242]  text-[#8E8E8E] dark:text-[#878787]  py-1 px-2.5 rounded-md inline-flex items-center "
              >
                <span className="text-[14px] select-none">Integrated</span>
                <IoMdCheckmark className="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreManagerCard;
