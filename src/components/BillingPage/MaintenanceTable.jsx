// import GreenCheck from "../../assets/Icons/GreenCheck.svg";
import { BsCheck2 } from "react-icons/bs";

const MaintenanceTable = (props) => {
  // const { dateDifference } = props;
  const { nextPaymentDate } = props;
  const { maintenanceCost } = props;

  return (
    <>
      {" "}
      <div class="overflow-x-auto relative shadow-sm sm:rounded-lg mt-5 md:w-[500px] w-full outline outline-2 outline-grey dark:outline-[#2C2C2C]">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-main-dark dark:border-[#2C2C2C]  dark:hover:bg-[#272727] transition-all duration-200">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Current plan
              </th>
              <td class="py-4 px-6">
                <div className="flex flex-row items-center">
                  <span className="text-green">1 year maintenance</span>
                  <BsCheck2 className="h-[18px] w-[18px] ml-1 text-green" />
                  {/* <img
                      src={GreenCheck}
                      className="h-[20px] w-[20px] ml-1"
                      alt=""
                    /> */}
                </div>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-main-dark dark:border-[#2C2C2C] dark:hover:bg-[#272727] transition-all duration-200">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Next payment date
              </th>
              <td class="py-4 px-6">
                <span className="text-blue">{nextPaymentDate}</span>
              </td>
            </tr>
            <tr class="bg-white dark:bg-main-dark dark:border-[#2C2C2C] dark:hover:bg-[#272727] transition-all duration-200">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Maintenance cost
              </th>
              <td class="py-4 px-6">
                <span className="text-blue">{maintenanceCost}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MaintenanceTable;
