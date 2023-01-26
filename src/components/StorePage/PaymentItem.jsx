// import Lottie from "lottie-react-web";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
// import GreenCheck from "../../assets/Icons/GreenCheck.svg";
// import AddBlueSVG from "../../assets/Icons/AddBlue.svg";

const PaymentItem = (props) => {
  const { logo } = props;
  const { status } = props;
  const { cost } = props;
  const { date } = props;

  return (
    <>
      <hr className="mt-2.5 " />

      <div className="flex flex-row items-center mt-5">
        <div className="flex flex-row items-center">
          <img src={logo} alt="" />
          {status === "Progress" && (
            <div className="ml-2 text-[#767676]  font-normal ">
              Estimated update date: {date}
            </div>
          )}

          {status === "NotAdded" && (
            <div className="ml-2 text-[#767676] font-normal">
              Cost to add: {cost}
            </div>
          )}
        </div>

        <div className="flex flex-1 ">
          <div className="ml-auto">
            {status === "Added" && (
              <div className="flex flex-row items-center">
                <div className="text-green mr-1">Added</div>
                <BsCheck2 className="text-green"/>
                {/* <img src={GreenCheck} alt="" /> */}
              </div>
            )}

            {status === "Progress" && (
              <div className="flex flex-row items-center">
                <div className="text-blue mr-1">In progress</div>
              </div>
            )}

            {status === "NotAdded" && (
              <div className="flex flex-row items-center cursor-pointer">
                <div className="text-blue mr-2 hover:text-darkblue">
                  Add payment method
                </div>
                <AiOutlinePlus className="ml-1.5" />
                {/* <img src={AddBlueSVG} alt="" /> */}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Space */}
      <div className="mb-4" />
    </>
  );
};

export default PaymentItem;
