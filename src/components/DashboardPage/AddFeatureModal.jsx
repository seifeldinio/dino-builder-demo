import { GrClose } from "react-icons/gr";
import { RiAddFill } from "react-icons/ri";
// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";
import { BsCheck2 } from "react-icons/bs";
import { featuresData } from "../../data/DemoData";
import { useStateContext } from "../../contexts/ContextProvider";
// import { useStateContext } from "../../contexts/ContextProvider";

const AddFeatureModal = (props) => {
  const { close } = props;

  const { requestedFeature, setRequestedFeature } = useStateContext();

  return (
    <div className="h-auto dark:bg-black">
      <div className="flex  flex-row items-center pt-3 pr-3.5 pl-3 pb-2">
        <div className="flex  flex-col ">
          <span className="text-[20px] font-bold text-[#25272E]">
            Add feature
          </span>
          <div className="mt-1 ">
            <span className=" text-[14px] text-[#767676] font-normal ">
              Request to add a new feature in your app.
            </span>
          </div>
        </div>

        <div className="flex flex-1">
          <div className="ml-auto">
            <GrClose
              className="close cursor-pointer hover:scale-110 transition-all duration-200"
              onClick={close}
            />
          </div>
        </div>
      </div>

      <hr className="mt-3 " />

      <div className="flex flex-col h-[400px]  overflow-y-scroll">
        {/* Map features */}
        {featuresData?.map((item, i) => (
          <>
            {/* Feature items */}

            <div className="flex flex-row items-center mt-3.5 ml-3 mr-2">
              <div className="flex flex-col">
                <span className="text-[16px]">{item?.feature_title}</span>
                <span className="text-[14px] text-[#5f5f5f]">
                  {item?.description}
                </span>
              </div>

              {item?.added ? (
                <>
                  <div className="flex flex-row items-center ml-auto mr[2px]">
                    <span className="text-[14px] text-green">Added</span>
                    <BsCheck2 className="h-[20px] w-[20px] ml-1 text-green" />
                    {/* <img
                      src={GreenCheckSVG}
                      className="h-[20px] w-[20px] ml-1"
                      alt=""
                    /> */}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => {
                    if (requestedFeature === false) {
                      setRequestedFeature(true);
                    } else {
                    }
                    // Request feature then Add task backed in that method
                  }}
                  class={
                    requestedFeature === false
                      ? "ml-auto mr-[2px] outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
                      : "ml-auto mr-[2px] outline outline-1 outline-green  text-green  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
                  }
                >
                  {requestedFeature ? (
                    <>
                      <span className="text-[14px]">Requested</span>
                      <BsCheck2 className="ml-[4px]" />
                    </>
                  ) : (
                    <>
                      <span className="text-[14px]">Request feature</span>
                      <RiAddFill className="ml-[4px]" />
                    </>
                  )}
                </button>
              )}
            </div>
            <hr className="mt-3 ml-3 mr-3" />
            {/* End feature item */}
          </>
        ))}
      </div>
    </div>
  );
};

export default AddFeatureModal;
