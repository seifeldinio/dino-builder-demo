import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { RiInformationFill } from "react-icons/ri";

const LeftCard = () => {
  return (
    <div className="flex flex-col p-4">
      {/* Card title */}
      <span className="text-[18px] dark:text-white">Overall</span>
      <hr className="mt-4 mb-4 dark:border-[#3a3a3a]" />
      {/* Failed charges  */}
      <div className="flex flex-row items-center text-gray-500">
        <span className="mr-1.5 dark:text-[#cdcdcd]">Failed charges</span>
        <TooltipComponent
          className="tooltip-box"
          content="The total amount of money your payment gateways couldn't process."
          target="#tooltip"
        >
          <div className="scale-125" id="tooltip">
            <RiInformationFill className="dark:text-[#cdcdcd]" />
          </div>
        </TooltipComponent>
      </div>
      <span className="text-[18px] mt-1.5 font-medium text-purple">
        $902,295.46
      </span>
      <hr className="mt-4 mb-4 dark:border-[#3a3a3a]" />
      {/* Recovered charges */}
      <div className="flex flex-row items-center text-gray-500">
        <span className="mr-1.5 dark:text-[#cdcdcd]">Recovered charges</span>
        <TooltipComponent
          className="tooltip-box"
          content="The total amount of failing charges Roboot.io has recovered for you"
          target="#tooltip"
        >
          <div className="scale-125" id="tooltip">
            <RiInformationFill className="dark:text-[#cdcdcd]" />
          </div>
        </TooltipComponent>
      </div>
      <span className="text-[18px] mt-1.5 font-medium text-green">
        $417,571.63
      </span>
      <hr className="mt-4 mb-4 dark:border-[#3a3a3a]" />
      {/* Recovered charges */}
      <div className="flex flex-row items-center text-gray-500">
        <span className="mr-1.5 dark:text-[#cdcdcd]">Recovery rate</span>
        <TooltipComponent
          className="tooltip-box"
          content="The percent of your failing charges that we've been able to recover for you."
          target="#tooltip"
        >
          <div className="scale-125" id="tooltip">
            <RiInformationFill className="dark:text-[#cdcdcd]" />
          </div>
        </TooltipComponent>
      </div>
      <span className="text-[18px] mt-1.5 font-medium text-black dark:text-white">
        46.28%
      </span>
      <hr className="mt-4 mb-4 dark:border-[#3a3a3a]" />
      {/* Recovery prediction */}
      <div className="flex flex-row items-center text-gray-500">
        <span className="mr-1.5 dark:text-[#cdcdcd]">Recovery prediction</span>
        <TooltipComponent
          className="tooltip-box "
          content="Based on our historical recovery rate, this is how much we believe we'll be able to recover for you."
          target="#tooltip"
        >
          <div className="scale-125" id="tooltip">
            <RiInformationFill className="dark:text-[#cdcdcd]" />
          </div>
        </TooltipComponent>
      </div>
      <span className="text-[18px] mt-1.5 font-medium text-black dark:text-white">
        $230.64
      </span>
    </div>
  );
};

export default LeftCard;
