// import { IoMdHelpBuoy } from "react-icons/io";
import { useNavigate } from "react-router-dom";
// import TextIconBlueButton from "../Buttons/TextIconBlueButton";

const AddOnCard = (props) => {
  const { title } = props;
  const { description } = props;
  const { connected } = props;
  const { icon } = props;
  const { bgColor } = props;
  const { iconImg } = props;

  //   navigation
  const navigate = useNavigate();

  return (
    <>
      <div class="p-4 rounded-lg outline outline-2 outline-greyelement bg-white   dark:bg-section-dark dark:outline-[#202020]">
        <div className="flex flex-row items-center">
          {icon ? (
            <>
              <div
                className={`flex h-[45px] w-[45px] ${bgColor} p-1 rounded-lg items-center content-center justify-center`}
              >
                {icon}
              </div>
            </>
          ) : (
            <>{iconImg}</>
          )}

          <div className="flex flex-col ml-3">
            <span className="font-medium dark:text-white">{title}</span>
            <span className="text-[14px] text-[#8291AD] mt-[1px] dark:text-[#969696]">
              {description}
            </span>
          </div>
          {connected === true ? (
            <>
              {" "}
              <div className="ml-auto relative bg-[#EEF9E9] mb-[25px] rounded-lg dark:bg-[#7fdf59]">
                <span className="text-[#639C4D] text-[14px] px-2 dark:text-black dark:font-medium">
                  Connected
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="ml-auto relative  mb-[25px] rounded-lg">
                <button
                  onClick={() => navigate("/connect")}
                  class="outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-1.5 inline-flex rounded-md  items-center transition-color duration-200"
                >
                  <span className="text-[14px]">Connect</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddOnCard;
