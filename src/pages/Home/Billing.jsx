import "../../_animations.scss";

// import BillingIcon from "../../assets/Icons/Billing.svg";
import { MaintenanceTable } from "../../components";
import AppCost from "../../components/BillingPage/AppCost";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import {
//   // useProjectById,
//   useProjectByUserId,
// } from "../../contexts/projectContext/ProjectByUserIdContext";
// import { useEffect } from "react";
// import { format } from "date-fns";
import moment from "moment";
// import { useNavigate } from "react-router-dom";
import { currentUserData, projectData } from "../../data/DemoData";

const Billing = () => {
  // GET CURRENT USER DATA
  // const { currentUser, fetchCurrentUser } = useCurrentUser();

  // GET PROJECT THAT BELONGS TO USER DATA
  // const { project, fetchProjectByUserId } = useProjectByUserId();

  // For navigation
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetchCurrentUser();
  //   fetchProjectByUserId();

  //   if (currentUser?.activated === false) {
  //     navigate("/activate");
  //   }
  // }, [currentUser?.activated]);

  // CHECK IF LAST DATE MAINTENANCE PAYMENT EXCEEDS THIS YEAR (EXPIRED)
  // CURRENT DATE
  // var current_date = format(new Date(), "dd/mm/yyyy");
  // var current_date = new Date();

  // console.log("Today", current_date);

  // LAST DATE PAID
  var paid_date = currentUserData?.date_last_annual;

  // console.log("Last paid date", new Date(paid_date));

  // ONE YEAR FROM NOW
  var oneYearFromNow = moment(paid_date, "DD/MM/YYYY")
    .add(1, "year")
    .toString()
    .replace("00:00:00", "")
    .replace("GMT+0200", "");

  // console.log("One Year from Paid date", oneYearFromNow);

  // DIFFERENCE
  // 👇️ Difference between paid_date and next year
  // function getMonthDifference(startDate, endDate) {
  //   return (
  //     endDate.getMonth() -
  //     startDate.getMonth() +
  //     12 * (endDate.getFullYear() - startDate.getFullYear())
  //   );
  // }

  // var dateDifference = getMonthDifference(
  //   new Date(current_date),
  //   new Date(oneYearFromNow)
  // );

  // console.log("Months left for renwal:", dateDifference + " Months");

  return (
    <div className="page-animation">
      <div className="mt-10 md:ml-10 md:mr-10 ml-5 mr-5">
        <div className="flex flex-wrap lg:flex-nowrap ">
          <div className="flex flex-row justify-center md:mt-0 mt-10">
            <span className="text-[27px] dark:text-white">
              {/* {project?.app_name} Cost */}
              Billing
            </span>

            {/* <img
              src={BillingIcon}
              className="ml-1.5 mt-1 dark:text-white dark:fill-white"
              alt=""
            /> */}
          </div>
        </div>
        <AppCost
          totalProjectCost={
            projectData?.project_cost.toLocaleString() +
            " " +
            currentUserData?.currency
          }
          amountPaid={
            projectData?.deposit.toLocaleString() +
            " " +
            currentUserData?.currency
          }
          amountRemaining={
            projectData?.remaining_amount.toLocaleString() +
            " " +
            currentUserData?.currency
          }
          // dateDifference={dateDifference}
          renewalDate={oneYearFromNow}
        />

        <div className="mt-5">
          <span className="text-[20px] font-normal dark:text-white">
            Maintenance plan
          </span>
        </div>
        {/* Table */}

        <MaintenanceTable
          // dateDifference={dateDifference}
          nextPaymentDate={oneYearFromNow}
          maintenanceCost={
            projectData?.annual_maintenance_cost.toLocaleString() +
            " " +
            currentUserData?.currency
          }
        />
      </div>
    </div>
  );
};

export default Billing;
