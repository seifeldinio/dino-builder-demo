// import { RiInformationFill } from "react-icons/ri";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import { useEffect } from "react";
import { BarChartRecovery, CampaignsTable, LeftCard } from "../../components";

const PaymentRecovery = () => {
  // for navigation
  const navigate = useNavigate();

  // Temporary data to display in the chart
  const data = [
    {
      month: "Jan",
      recovered_charges: 4000,
      failed_charges: 2400,
      // amt: 2400,
    },
    {
      month: "Feb",
      recovered_charges: 3000,
      failed_charges: 1398,
      // amt: 2210,
    },
    {
      month: "Mar",
      recovered_charges: 9800,
      failed_charges: 2000,
      // amt: 2290,
    },
    {
      month: "Apr",
      recovered_charges: 2780,
      failed_charges: 3908,
      // amt: 2000,
    },
    {
      month: "May",
      recovered_charges: 1890,
      failed_charges: 4800,
      // amt: 2181,
    },
    {
      month: "Jun",
      recovered_charges: 2390,
      failed_charges: 3800,
      // amt: 2500,
    },
    {
      month: "Jul",
      recovered_charges: 3490,
      failed_charges: 4300,
      // amt: 2100,
    },
    {
      month: "Aug",
      recovered_charges: 3490,
      failed_charges: 4300,
      // amt: 2100,
    },
    {
      month: "Sep",
      recovered_charges: 3490,
      failed_charges: 4300,
      // amt: 2100,
    },
    {
      month: "Oct",
      recovered_charges: 3490,
      failed_charges: 5000,
      // amt: 2100,
    },
    {
      month: "Nov",
      recovered_charges: 3490,
      failed_charges: 100,
      // amt: 2100,
    },
    {
      month: "Dec",
      recovered_charges: 3490,
      failed_charges: 200,
      // amt: 2100,
    },
  ];

  return (
    <div className="page-animation">
      <div className="md:mt-10 md:ml-10 md:mr-10 h-full mt-20 ml-5 mr-5 md:overflow-x-visible overflow-x-hidden">
        <div className="flex flex-wrap lg:flex-nowrap ">
          <div className="flex flex-row items-center">
            {/* Back button */}
            <button
              onClick={() => {
                navigate("/store");
              }}
              className="flex h-[40px] w-[40px] justify-center content-center hover:dark:bg-[#323232] dark:text-white cursor-pointer hover:bg-[#eaeaea] mt-[1px] px-3 py-3 rounded-full  transition-color duration-200  mr-[7px]"
            >
              <HiOutlineArrowLeft className="scale-110" />
            </button>
            {/* Title */}
            <span className="text-[27px] dark:text-white">
              Payment recovery
            </span>
          </div>
        </div>

        {/* Page content */}
        <div className="flex md:flex-row flex-col md:space-x-7 md:space-y-0 space-y-7  mt-7">
          {/* Lifetime numbers and bar chart row */}
          {/* Lifetime numbers data card */}
          <div className="md:w-1/3 w-full">
            <div className="md:h-[425px] h-auto rounded-lg outline outline-2 outline-[#F5F5F5] overflow-y-clip dark:bg-section-dark dark:outline-[#202020]">
              <LeftCard />
              {/* Content */}
              {/* <CommunicateCard
                titleOnChange={(e) => setTitle(e.target.value)}
                messageOnChange={(e) => setMessage(e.target.value)}
              /> */}
            </div>
          </div>
          {/* Bar Chart card */}
          <div className="w-full">
            <div className="h-[425px] rounded-lg outline outline-2 outline-[#F5F5F5] overflow-y-clip dark:outline-[#202020] dark:bg-section-dark">
              <div className="flex flex-col p-4 ">
                {/* Card title */}
                <div className="flex flex-row items-center">
                  <span className="text-[18px] dark:text-white">This year</span>
                  <span className="ml-1.5 text-gray-500 mr-1 dark:text-[#cdcdcd]">
                    Roboot's payment recovery made you over
                  </span>
                  <span className="font-medium text-gray-500 dark:text-[#cdcdcd]">
                    $417.57k
                  </span>
                </div>

                <hr className="mt-4 mb-7" />
                {/* Chart */}
                <BarChartRecovery data={data} />
              </div>
            </div>
          </div>
        </div>

        {/* Recent notifications table */}
        <div className="delay-5">
          <div className="mt-6">
            <CampaignsTable />

            <div className="mb-[115px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRecovery;
