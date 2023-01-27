import "../_animations.scss";
// import socket from "../socket/Socket";
import { useRef, useState } from "react";
// import ProfileCard from "../components/ProfilePage/AppNameCard";
// import {
// useProjectById,
// useProjectByUserId,
// } from "../contexts/projectContext/ProjectByUserIdContext";
// import { useCurrentUser } from "../contexts/userContext/UserContext";
// import { format } from "date-fns";
import moment from "moment";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import GreeenCheckSVG from "../assets/Icons/GreenCheck.svg";
// import TeamsSVG from "../assets/Illustrations/MSTeams.svg";
import {
  // CardNotifications,
  ConnectCard,
  DisabledNotificationsButton,
  DotsDropDown,
  // ExpectedFeedbackList,
  FeedbackListTile,
  // LogoutButton,
  MaintenanceCard,
  NotificationsButton,
  NotificationsDropDown,
  ProfilePicture,
  // TextIconBlueButton,
} from "../components";
import AppNameCard from "../components/ProfilePage/AppNameCard";
// import { AiOutlineCloudUpload } from "react-icons/ai";
// import BellSVG from "../assets/Icons/Bell.svg";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import {
  currentUserData,
  expectedFeedbacksData,
  notificationsData,
  projectData,
} from "../data/DemoData";
const Profile = () => {
  // for dark mode condition
  const { currentMode, firstName, lastName, profilePicture } =
    useStateContext();

  // Notifications card state
  const notificationsRef = useRef(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // To hide notifications card once clicked outside
  const closeOpenMenus = (e) => {
    if (
      notificationsRef.current &&
      notificationsOpen &&
      !notificationsRef.current.contains(e.target)
    ) {
      setNotificationsOpen(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  // For navigation
  const navigate = useNavigate();

  // UNREAD NOTIFICATIONS
  // Unread notifications
  const unReadNotifications = notificationsData?.filter(
    (notification) => notification?.read === false
  );

  // CHECK IF LAST DATE MAINTENANCE PAYMENT EXCEEDS THIS YEAR (EXPIRED)
  // CURRENT DATE
  // var current_date = format(new Date(), "dd/mm/yyyy");
  var current_date = new Date();

  // console.log("Today", current_date);

  // LAST DATE PAID
  var paid_date = currentUserData?.date_last_annual;

  // console.log("Last paid date", new Date(paid_date));

  // ONE YEAR FROM NOW
  var oneYearFromNow = moment(paid_date, "DD/MM/YYYY")
    .add(1, "year")
    .toString()
    .split("00:00:00");

  // console.log("One Year from Paid date", oneYearFromNow);

  // DIFFERENCE
  // 👇️ Difference between paid_date and next year
  function getMonthDifference(startDate, endDate) {
    return (
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    );
  }

  var dateDifference = getMonthDifference(
    new Date(current_date),
    new Date(oneYearFromNow)
  );

  // console.log("NOTIFICATIONS IN PROFILE PAGE", notifications);

  return (
    <div data-tour="27" className="page-animation">
      <div className="flex h-[210px] bg-[#FAFAFA] dark:bg-section-dark">
        {/* <div></div> */}
        <div className="mt-auto mb-auto md:ml-10 ml-5 mr-10 ">
          <div className="flex flex-row items-center">
            {/* Profile picture component */}
            <ProfilePicture
              // appName={projectData?.app_name}
              // company={currentUserData?.company}
              avatarUrl={profilePicture}
              // firstName={currentUserData?.first_name}
              // email={currentUserData?.email}
              // userId={currentUserData?.id}
            />

            <div className="flex flex-col ml-5 md:mt-0 mt-10">
              <div className="flex flex-row items-center ">
                <span className="text-[24px] mr-2 dark:text-white">
                  {firstName}
                </span>
                <span className="text-[24px] dark:text-white">{lastName}</span>
              </div>
              <span className="text-[16px] text-[#767676] font-normal dark:text-[#979797]">
                {currentUserData?.email}
              </span>
            </div>
            <div className="flex flex-row items-center">
              {/* Notifications */}
              <div className="absolute right-[110px] ">
                {notificationsOpen === false ? (
                  <>
                    <NotificationsButton
                      newNotifications={
                        unReadNotifications?.length > 0 ? true : false
                      }
                      onClick={() => {
                        setNotificationsOpen(true);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <DisabledNotificationsButton
                      newNotifications={
                        unReadNotifications?.length > 0 ? true : false
                      }
                    />
                  </>
                )}
              </div>
              {/* Notifications dropdown card */}
              {notificationsOpen === true && (
                <div
                  ref={notificationsRef}
                  className=" absolute right-[115px] mt-[407px] h-[350px] w-[550px] bg-white dark:bg-divider-dark dark:outline-[#2C2C2C] outline outline-2 outline-greyelement shadow-lg rounded-lg overflow-y-scroll overflow-x-clip "
                >
                  <NotificationsDropDown ref={notificationsRef} />
                </div>
              )}

              <div className="absolute right-0 md:mr-[50px] md:mt-0 mt-3 mr-[10px]">
                {/* Dots dropdown button */}
                <DotsDropDown />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/* First overview info section */}
      <div className="mt-10 md:ml-10 md:mr-10 ml-5 mr-5">
        <div className="flex flex-col md:flex-row  md:space-x-7  md:space-y-0 space-y-7 md:items-center mt-7 ">
          {/* Cards */}
          {/* App name card */}
          <AppNameCard
            icon={projectData?.app_icon}
            title={"App name"}
            info={projectData?.app_name}
          />
          {/* Maintenance Card */}
          <MaintenanceCard dateDifference={dateDifference} />
          {/* Connect card */}
          <ConnectCard
          //  onClick={() => openInNewTab(projectData?.teams_url)}
          />
        </div>
        {/* Details section */}
        <div className="mt-9">
          <span className="text-[20px] font-normal dark:text-white">
            Your details
          </span>
        </div>
        <div className="flex flex-col">
          {/* Fist name */}
          <div className="flex flex-row mt-[25px]">
            <span className="text-[#7A7A7A] font-normal mr-[40px]">
              First name
            </span>
            <span className="text-blue font-normal">
              {currentUserData?.first_name}
            </span>
          </div>
          {/* Last name */}
          <div className="flex flex-row mt-[25px]">
            <span className="text-[#7A7A7A] font-normal mr-[40px]">
              Last name
            </span>
            <span className="text-blue font-normal">
              {currentUserData?.last_name}
            </span>
          </div>
          {/* Business */}
          <div className="flex flex-row mt-[25px]">
            <span className="text-[#7A7A7A] font-normal mr-[50px]">
              Business
            </span>
            <span className="text-blue font-normal">
              {currentUserData?.company}
            </span>
          </div>
          {/* App status */}
          <div className="flex flex-row mt-[25px]">
            <span className="text-[#7A7A7A] font-normal mr-[38px]">
              App status
            </span>
            <span className="text-blue font-normal">
              {projectData?.app_status}
            </span>
          </div>
        </div>
        {/* Expected Feedback List */}

        <div className="md:flex hidden mt-[45px] mb-[50px]  h-[350px]  rounded-md outline outline-2 outline-[#ECECEC] dark:outline-[#2C2C2C] overflow-y-scroll overflow-x-clip">
          <div data-tour="28" className="relative w-full ">
            <div className="fixed backdrop-blur-md bg-white/90 dark:backdrop-blur-2xl dark:bg-black/80 md:left-[40px] md:right-[46px] left-[20px] right-[26px] rounded-md h-[60px]">
              <div className="flex flex-col">
                <span className=" text-[20px] font-normal ml-[15px] mt-[13px] dark:text-white">
                  Expected feedback
                </span>
                <hr className="mt-[16px] ml-2 mr-2 dark:border-[#2C2C2C]" />
              </div>
            </div>
            <div className="mt-[75px]" />
            {/*  List Tiles */}
            {expectedFeedbacksData?.length == 0 ? (
              <>
                {/* No expected feedback yet (Empty state) */}
                <div className="flex w-full h-[200px]  items-center justify-center content-center">
                  <div className="flex flex-col items-center">
                    <div className="w-[200px] delay-4">
                      {currentMode === "Light" ? (
                        <img
                          src="https://media.publit.io/file/StockPics/EmptyFeedback.webp"
                          alt=""
                        />
                      ) : (
                        <img
                          src="https://media.publit.io/file/StockPics/DarkEmptyExpectedFeedback.webp"
                          alt=""
                        />
                      )}
                    </div>

                    <span className="text-[#6f6f6f] delay-5 text-center md:text-[16px] text-[14px]">
                      No prototypes or app releases are available yet.
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {expectedFeedbacksData?.map((item, i) => (
                  <FeedbackListTile
                    title={item?.title}
                    // expectedDate={item?}
                    approved={item?.approved}
                    expectedDate={item?.expected_feedback_date}
                    approveOnClick={() => {
                      // Approve of it
                    }}
                    viewOnClick={() => {
                      navigate(`${item?.route}`);
                    }}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
