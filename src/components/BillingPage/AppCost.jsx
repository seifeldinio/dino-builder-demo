import "../../_animations.scss";
import { WideCard } from "../index";
import Money from "../../assets/Lotties/money.json";
import Invoice from "../../assets/Lotties/invoice.json";
import CreditHandLottie from "../../assets/Lotties/credithand.json";
// import Lottie from "lottie-react-web";
import { MdPayment } from "react-icons/md";
import { BsCash, BsCashCoin } from "react-icons/bs";

const AppCost = (props) => {
  // const { dateDifference } = props;
  const { renewalDate } = props;
  const { totalProjectCost } = props;
  const { amountPaid } = props;
  const { amountRemaining } = props;

  return (
    <div className="flex h-auto mt-5 bg-greyelement rounded-md dark:bg-section-dark">
      <div className="flex flex-col m-5 w-full ">
        <div className="flex flex-row">
          <span className="dark:text-white">1 year app maintenance:</span>
          <span className="text-green ml-1">Active</span>
        </div>

        <span className="text-[#595959] font-light dark:text-[#b0b0b0]">
          Next maintenance renewal date: {renewalDate}
        </span>

        <div className="flex md:flex-row flex-col  md:space-x-7 md:space-y-0 space-y-7 mt-4   ">
          <div className="flex-1">
            <div className="delay-1">
              <WideCard
                lottie={CreditHandLottie}
                title={"Total App Cost"}
                cost={totalProjectCost}
                darkModeIcon={
                  <MdPayment className="text-white w-[25px] h-auto mr-2" />
                }
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="delay-2">
              <WideCard
                lottie={Money}
                title={"Amount Paid"}
                cost={amountPaid}
                darkModeIcon={
                  <BsCashCoin className="text-white w-[25px] h-auto mr-2" />
                }
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="delay-3">
              <WideCard
                lottie={Invoice}
                title={"Amount Remaining"}
                cost={amountRemaining}
                darkModeIcon={
                  <BsCash className="text-white w-[25px] h-auto mr-2" />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCost;
