import "../../_animations.scss";
import AppStatus from "../../components/DashboardPage/AppStatus";
import { useStateContext } from "../../contexts/ContextProvider";
import { BsArrowRight } from "react-icons/bs";
import {
  UpdateStatus,
  BugFixesStatus,
  AppReleases,
  MobileAppStatus,
  MobileUpdateStatus,
  MobileBugFixesStatus,
  ExpandedBugCarousel,
  SearchBar,
  CircularProgress,
} from "../../components/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pagesSearch } from "../../utils/Constants";
import { projectData } from "../../data/DemoData";
import useSound from "use-sound";
import progressSFX from "../../assets/sfx/progress.mp3";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FiHelpCircle } from "react-icons/fi";
import TimelineComponent from "../../components/DashboardPage/Timeline";

const Dashboard = () => {
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
            <div className="flex flex-col">
              <div className="flex flex-wrap lg:flex-nowrap ">
                <div className="flex flex-row justify-center md:mt-0 mt-10">
                  <span className="text-[26px] font-bold dark:text-white">
                    {/* {project?.app_name} Cost */}
                    My App
                  </span>
                </div>
              </div>
              <div className="row mt-1 text-[15px]">
                <span className="text-[#595959]	dark:text-[#B5B5B5]">
                  Track your app's status and completion progress.
                </span>
              </div>
            </div>

            {/* Search bar */}
            {/* Search bar */}
            <SearchBar
              onChange={(e) => {
                setSearchSettings(e.target.value);
                // fetchGuide(e.target.value);
              }}
            />
            {/* Search suggestions results */}
            {searchSettings !== "" && (
              <div className="absolute right-[40px] mt-[64px] bg-greyelement dark:bg-[#323232] w-[240px] h-[193px] rounded-md z-50 overflow-y-scroll shadow-lg">
                <div className="flex flex-col ">
                  {searchFiltered?.length === 0 ? (
                    <>
                      <div className=" flex content-center justify-center mt-[60px]">
                        <div className="flex flex-col justify-center items-center content-center">
                          {/* <CgSearch className="h-[25px] w-[25px] text-[#979797]" /> */}
                          <span className="mb-1 text-[18px]">😐</span>
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
          <hr className="mt-4 mb-5 dark:border-[#353535]" />
          {/* <div className="row md:mt-2 mt-[-30px] text-[15px] dark:text-white">
            <span>App status: </span>
            <span className="text-gray-400	">{projectStatus}</span>
          </div> */}

          {/* Desktop view App Status */}
          {/* <Suspense fallback={<div>Loading ...</div>}> */}
          {/* <AppStatus
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
          /> */}
          {/* </Suspense> */}
          {/* Mobile view App Status */}
          {/* <MobileAppStatus
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
          /> */}
          {/* Update's status */}

          <div className="delay-3 flex flex-row items-start w-full space-x-4">
            <div className="border-[1px] border-[#EBEBEB] dark:border-[#2E2E2E] dark:bg-[#202020] flex flex-row w-1/2 2xl:w-[500px] px-4 py-8 items-center justify-center space-x-10 rounded-lg hover:shadow-md transition-all duration-200">
              {/* w-[500px] */}
              <LazyLoadImage
                className="flex object-contain h-[364px] w-auto"
                src="https://media.publit.io/file/screens/PLACE-YOUR-SCREEN-HERE-1.webp"
              />
              <div className="flex flex-col items-start space-y-7">
                <div className="flex flex-col items-start space-y-2">
                  <h3 className="text-[#595959] dark:text-[#9B9B9B]">
                    Project Progress
                  </h3>

                  <CircularProgress progress={70} title={"70%"} />
                </div>

                <div className="flex flex-col items-start space-y-0">
                  <h3 className="text-[#595959] dark:text-[#9B9B9B]">
                    Delivery{" "}
                  </h3>
                  <p className="text-[#1E1919] font-semibold dark:text-white">
                    17 Jun 2023
                  </p>
                </div>

                <div className="flex flex-col items-start space-y-0">
                  <h3 className="text-[#595959] dark:text-[#9B9B9B]">
                    Status{" "}
                  </h3>
                  <p className="text-[#1E1919] font-semibold dark:text-white">
                    Ongoing
                  </p>
                </div>

                <button
                  onClick={() => {}}
                  class="bg-[#F2F3F7] hover:bg-[#E4E5EB] dark:bg-[#424242] hover:dark:bg-[#565656] text-black  py-1 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
                >
                  <span className="text-[14px] dark:text-white mr-1.5">
                    Support
                  </span>
                  <FiHelpCircle className="dark:text-white" />
                </button>
              </div>
            </div>
            <TimelineComponent />
          </div>

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
          {/* <div className="delay-4"> */}
          {/* Bug Fixes Status Desktop View */}
          {/* <BugFixesStatus
              toDoBug={toDoBug}
              fixingBug={fixingBug}
              doneBug={doneBug}
              progress={projectData?.project_progress}
            /> */}
          {/* Bug Fixes Status Mobile View */}
          {/* <MobileBugFixesStatus doneBug={doneBug} /> */}
          {/* </div> */}

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
