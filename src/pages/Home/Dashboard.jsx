import "../../_animations.scss";
import React, { useEffect } from "react";
import AppStatus from "../../components/DashboardPage/AppStatus";
import { useStateContext } from "../../contexts/ContextProvider";
import { BsArrowRight } from "react-icons/bs";
// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";
import {
  // KanbanCard,
  // EmptyKanbanCard,
  // TextIconBlueButton,
  // DoneKanbanCard,
  UpdateStatus,
  BugFixesStatus,
  AppReleases,
  // AppStatusDuplicate,
  // SyncButton,
  MobileAppStatus,
  MobileUpdateStatus,
  MobileBugFixesStatus,
  // BackButton,
  ExpandedBugCarousel,
  StartTourModal,
} from "../../components/index";
// import BugSVG from "../../assets/Icons/Bug.svg";
// import ReportSVG from "../../assets/Icons/Report.svg";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
import { useState } from "react";
// import NotActivated from "../Auth/Activate";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
import { useNavigate } from "react-router-dom";
// import useSocketSetup from "../../socket/UseSocketSetup";
// import socket from "../../socket/Socket";
// import { AiOutlineSync } from "react-icons/ai";
import { pagesSearch } from "../../utils/Constants";
import { currentUserData, projectData } from "../../data/DemoData";
import useSound from "use-sound";
import progressSFX from "../../assets/sfx/progress.mp3";
// import Tour from "reactour";

// const AppStatus = React.lazy(() =>
//   import("../../components/DashboardPage/AppStatus")
// );

const Dashboard = () => {
  // GET CURRENT USER DATA
  // const { currentUser, fetchCurrentUser } = useCurrentUser();

  // GET PROJECT THAT BELONGS TO USER DATA
  // const { project, fetchProjectByUserId } = useProjectByUserId();

  const {
    expandedBugCarousel,
    projectProgress,
    setProjectProgress,
    projectStatus,
    setProjectStatus,
    firstName,
  } = useStateContext();

  // For navigation
  const navigate = useNavigate();

  // const activated = currentUser?.activated;

  // For tasks updates
  const toDoFeatures = projectData?.tasks.filter(
    (task) => task?.progress === 0
  );
  const buildingFeatures = projectData?.tasks.filter(
    (task) => task?.progress === 1
  );
  const doneFeatures = projectData?.tasks.filter(
    (task) => task?.progress === 2
  );

  // For bug updates
  const toDoBug = projectData?.bugs.filter((bug) => bug?.progress === 0);
  const fixingBug = projectData?.bugs.filter((bug) => bug?.progress === 1);
  const doneBug = projectData?.bugs.filter((bug) => bug?.progress === 2);

  //Last App releases
  const appReleases = projectData?.app_releases;

  // console.log("user", currentUser?.id);

  // Search setttings
  const [searchSettings, setSearchSettings] = useState("");

  const searchFiltered = pagesSearch?.filter((item) =>
    item?.keywords.includes(searchSettings.toLowerCase())
  );

  // const steps = [
  //   {
  //     selector: "button#draw-button",
  //     content: "Let's get started. Click to draw a round of cards.",
  //     stepInteraction: true,
  //   },
  //   {
  //     selector: "#cards-view",
  //     content: "Here is your draw. Now, KING is higher than JACK.",
  //   },
  //   {
  //     selector: "table.my-table",
  //     content:
  //       "Here you find all the rules, the actions you'll take or have others take when you win.",
  //   },
  //   {
  //     selector: "table.my-table tr#table-row3",
  //     content:
  //       "The KING is the higher card here. Now, now you do whatever the rule says.",
  //   },
  //   {
  //     selector: "button#draw-button",
  //     content: "Draw another round.",
  //     stepInteraction: true,
  //   },
  //   {
  //     selector: "#add-rule-modal",
  //     content:
  //       "A special card has been played. Whoever played the ACE must now assign a new rule to the lowest value card played that round.",
  //   },
  //   {
  //     selector: "#add-rule-input",
  //     content: "Set a new rule for the 9. Try: 'What are the odds?'",
  //   },
  //   {
  //     selector: "#add-rule-submit",
  //     content: "Alright, submit the rule.",
  //   },
  //   {
  //     selector: "html",
  //     content: "Okay, you got the hang of it. Have fun.",
  //     actionAfter: () => {
  //       window.location.href = "";
  //       window.location.pathname =
  //         "/redirect?to=/v1&title=Walkthrough%20completed!&description=Now%20off%20to%20the%20real%20thing&duration=3000";
  //     },
  //   },
  //   // ...
  // ];

  const [playbackRate, setPlaybackRate] = useState(2);
  const [play] = useSound(progressSFX, {
    playbackRate,
    volume: 0.5,
  });
  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <>
      {expandedBugCarousel && <ExpandedBugCarousel />}
      <div className="page-animation  overflow-x-clip">
        <div className="md:mt-10 md:ml-10 md:mr-10 mt-20 ml-5 mr-5 ">
          <div id="step1" className="flex flex-wrap lg:flex-nowrap ">
            <span className="text-[27px] dark:text-white">
              Welcome back, {firstName} 👋
            </span>
            {/* Search bar */}
            <form class="flex items-center ml-auto">
              <div class="relative md:w-[280px] invisible md:visible">
                <input
                  type="text"
                  id="voice-search"
                  class="bg-white border border-gray-300  text-gray-900 text-sm rounded-full hover:bg-[#f9f9f9] dark:bg-[#2C2C2C] dark:border-[#323232] dark:text-white block w-full pl-10 p-2.5  transition-all duration-200"
                  placeholder="Search"
                  required
                  autocomplete="off"
                  onChange={(e) => {
                    setSearchSettings(e.target.value);
                    // fetchGuide(e.target.value);
                  }}
                />
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </form>
            {/* Search suggestions results */}
            {searchSettings !== "" && (
              <div className="absolute right-[40px] mt-[60px] bg-greyelement dark:bg-[#323232] w-[280px] h-[193px] rounded-md z-50 overflow-y-scroll shadow-lg">
                <div className="flex flex-col ">
                  {searchFiltered?.length === 0 ? (
                    <>
                      <div className=" flex content-center justify-center mt-[60px]">
                        <div className="flex flex-col justify-center items-center content-center">
                          {/* <CgSearch className="h-[25px] w-[25px] text-[#979797]" /> */}
                          <span className="mb-1 text-[18px]">🤷</span>
                          <span className="text-[14px] text-[#979797]">
                            No results found
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      {searchFiltered?.map((item, i) => (
                        <>
                          {/* Item */}
                          <div
                            onClick={() => navigate(item?.slug)}
                            className="flex flex-row items-center  p-3 hover:bg-[#eeeeee] dark:hover:bg-[#454545] cursor-pointer duration-200 transition-all "
                          >
                            {item?.icon}
                            <span className="ml-2 dark:text-white">
                              {item?.name}
                            </span>
                            <BsArrowRight className="ml-auto text-[#7a7a7a]" />
                          </div>
                          <hr className="dark:border-[#4a4a4a]" />
                          {/* End Item */}
                        </>
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
            {/* END SEARCH */}
            {/* Sync button if there's a project progress update */}
            {/* <SyncButton /> */}
          </div>
          <div className="row md:mt-2 mt-[-30px] text-[15px] dark:text-white">
            <span>App status: </span>
            <span className="text-gray-400	">{projectStatus}</span>
          </div>

          {/* Desktop view App Status */}
          {/* <Suspense fallback={<div>Loading ...</div>}> */}
          <AppStatus
            progress={projectProgress}
            onClick={() => {
              if (projectProgress === 0) {
                setProjectProgress(1);
                handleClick();
              } else if (projectProgress === 1) {
                setProjectProgress(2);
                setProjectStatus("Beta");
                handleClick();
              } else if (projectProgress === 2) {
                setProjectProgress(3);
                handleClick();
              } else if (projectProgress === 3) {
                setProjectProgress(4);
                setProjectStatus("Live");
                handleClick();
              }
            }}
            // progress={
            //   projectProgress === 0
            //     ? project?.project_progress
            //     : projectProgress
            // }
            releaseDate={projectData?.release_date}
          />
          {/* </Suspense> */}
          {/* Mobile view App Status */}
          <MobileAppStatus
            progress={projectProgress}
            onClick={() => {
              if (projectProgress === 0) {
                setProjectProgress(1);
                handleClick();
              } else if (projectProgress === 1) {
                setProjectProgress(2);
                setProjectStatus("Beta");
                handleClick();
              } else if (projectProgress === 2) {
                setProjectProgress(3);
                handleClick();
              } else if (projectProgress === 3) {
                setProjectProgress(4);
                setProjectStatus("Live");
                handleClick();
              }
            }}
          />
          {/* Update's status */}

          <div className="delay-4">
            {/* Update Status Desktop View */}
            <UpdateStatus
              toDoFeatures={toDoFeatures}
              buildingFeatures={buildingFeatures}
              doneFeatures={doneFeatures}
              progress={projectData?.project_progress}
            />
            {/* Update Status Mobile View */}
            <MobileUpdateStatus doneFeatures={doneFeatures} />
          </div>

          {/* Bug Fixes Status */}
          <div className="delay-4">
            {/* Bug Fixes Status Desktop View */}
            <BugFixesStatus
              toDoBug={toDoBug}
              fixingBug={fixingBug}
              doneBug={doneBug}
              progress={projectData?.project_progress}
            />
            {/* Bug Fixes Status Mobile View */}
            <MobileBugFixesStatus doneBug={doneBug} />
          </div>

          {/* App releases */}

          <div className="delay-4">
            <AppReleases
              appReleases={appReleases}
              releaseDate={projectData?.release_date}
            />
          </div>

          {/* Bottom space */}
          <div className="mb-[70px]" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
