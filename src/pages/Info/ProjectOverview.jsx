import "../../_animations.scss";
// import socket from "../../socket/Socket";
import Lottie from "lottie-react-web";
import {
  AddFeatureModal,
  CountriesModal,
  DisabledButton,
  FeaturesTable,
  TextIconBlueButton,
} from "../../components";
import GlobeLottie from "../../assets/Lotties/globe.json";
import LocationLottie from "../../assets/Lotties/location.json";
// import LinkSVG from "../../assets/Icons/Link.svg";
import { BsApple } from "react-icons/bs";
// import AddSVG from "../../assets/Icons/Add.svg";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
// import { useEffect } from "react";
import Popup from "reactjs-popup";
import { MdAndroid } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../../contexts/ContextProvider";
import { MdOutlineLocationOn } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiOutlinePlus } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { countriesData, projectData } from "../../data/DemoData";
import { Popover } from "antd";
import { useState } from "react";

const ProjectOverview = () => {
  // GET CURRENT USER DATA
  // const { currentUser, fetchCurrentUser } = useCurrentUser();

  // GET PROJECT THAT BELONGS TO USER DATA
  // const { project, fetchProjectByUserId, countries, fetchCountries } =
  //   useProjectByUserId();

  // GET CURRENT USER DATA
  // const { currentUser, fetchCurrentUser } = useCurrentUser();

  // For state context
  const { currentMode } = useStateContext();

  // For navigation
  const navigate = useNavigate();

  // 👇️ open link in new tab
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // For pop over
  const [supportOpen, setSupportOpen] = useState(false);
  const [launchOpen, setLaunchOpen] = useState(false);

  // const hide = () => {
  //   setOpen(false);
  // };
  const handleSupportOpenChange = (newOpen) => {
    setSupportOpen(newOpen);
  };

  const handleLaunchOpenChange = (newOpen) => {
    setLaunchOpen(newOpen);
  };

  return (
    <div className="page-animation">
      <div className="md:mt-10 md:ml-10 md:mr-10 mt-20 ml-5 mr-5">
        <div data-tour="24">
          <div className="flex flex-wrap lg:flex-nowrap ">
            <div className="flex flex-row items-center">
              <span className="text-[27px] dark:text-white">Overview</span>
            </div>
          </div>
          <div className="row mt-1 text-[15px]">
            <span className="text-gray-400	">
              General overview of your project.
            </span>
          </div>

          {/* Area */}

          <div className="h-auto mt-5 bg-greyelement rounded-lg dark:bg-section-dark">
            <div className="flex md:flex-row md:space-x-7 md:space-y-0 flex-col space-y-7 p-5">
              {/* App name card */}
              <div className="flex-1  h-auto rounded-lg shadow-md outline outline-1.5 outline-greyelement bg-white dark:bg-button-dark dark:outline-[#2C2C2C]">
                <div className="p-2.5">
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                      <LazyLoadImage
                        className="mr-4 ml-[7px] mt-[5px] rounded-lg w-[70px] h-[70px]"
                        src={projectData?.app_icon}
                        effect="blur"
                        placeholderSrc={projectData?.app_icon}
                      />
                      {/* <img
                      className="mr-4 ml-[7px] mt-[5px] rounded-lg w-[70px] h-[70px]"
                      src={project?.app_icon}
                      alt=""
                    /> */}

                      <div className="flex flex-col">
                        <span className="text-[14px] text-[#A8A8A8] ">
                          App name
                        </span>
                        <span className="text-[20px] mb-1 dark:text-white">
                          {" "}
                          {projectData?.app_name}
                        </span>
                      </div>

                      <div className="h-[40px] w-[40px] ml-1 "></div>
                    </div>
                    <div className="flex flex-wrap ">
                      <div className="ml-auto">
                        <div className="flex flex-row mt-1">
                          {projectData?.app_status === "Live" && (
                            <Popover
                              content={
                                <div className="flex flex-col">
                                  <span>
                                    Launches your Bloxat Built App. 🚀
                                  </span>
                                </div>
                              }
                              // title="Unlimited 1:1 Support 👩‍💻"
                              trigger="click"
                              open={launchOpen}
                              onOpenChange={handleLaunchOpenChange}
                              placement="bottom"
                            >
                              <div>
                                <TextIconBlueButton
                                  text={"Launch App"}
                                  onClick={() => {}}
                                />
                              </div>
                            </Popover>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Countries */}
              <div className="flex-1  h-auto rounded-lg shadow-md outline outline-1.5 outline-greyelement bg-white dark:bg-button-dark dark:outline-[#2C2C2C]">
                <div className="p-2.5">
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                      <div className="mr-1 w-[70px] h-[70px]">
                        {currentMode === "Dark" ? (
                          <div className="absolute z-50 ml-[13px] mt-[13px] h-[44px] w-[44px] rounded-full outline outline-2 outline-blue" />
                        ) : (
                          <></>
                        )}
                        <Lottie
                          options={{
                            animationData: GlobeLottie,
                            loop: false,
                          }}
                        />
                      </div>

                      <div className="flex flex-col">
                        <span className="text-[14px] text-[#A8A8A8]  ">
                          Countries
                        </span>
                        <div className="flex flex-row items-center">
                          {countriesData?.length > 3 ? (
                            <>
                              {countriesData?.slice(0, 3).map((item, i) => (
                                <>
                                  <div className="flex rounded-full items-center justify-center content-center bg-[#f8f8f8] dark:bg-[#323232] h-[40px] w-[40px] mr-[10px] ">
                                    <span className="flex text-[18px] font-normal m-2 ">
                                      {item?.country_alpha_code}
                                    </span>
                                  </div>
                                </>
                              ))}
                              <div className="flex rounded-full items-center justify-center content-center bg-[#f8f8f8] dark:bg-[#323232] h-[40px] w-auto mr-[10px] ">
                                <span className="flex text-[18px] font-normal  m-2">
                                  + {countriesData?.length - 3}
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
                              {countriesData?.map((item, i) => (
                                <>
                                  {" "}
                                  <div className="flex rounded-full items-center justify-center content-center bg-[#f3f3f3] dark:bg-[#323232] dark:text-white h-[40px] w-[40px] mr-[10px] ">
                                    <span className="flex text-[18px] m-2 ">
                                      {item?.country_alpha_code}
                                    </span>
                                  </div>
                                </>
                              ))}
                            </>
                          )}
                        </div>

                        {/* US, EN, JP, + */}
                      </div>

                      <div className="h-[40px] w-[40px] ml-1 "></div>
                    </div>
                    <div className="flex flex-wrap ">
                      <div className="ml-auto">
                        <div className="md:visible invisible flex-row mt-1">
                          <Popup
                            trigger={<TextIconBlueButton text={"See all"} />}
                            closeOnDocumentClick={false}
                            nested={false}
                            modal
                          >
                            {/* Add a new feature modal */}
                            <CountriesModal countries={countriesData} />
                          </Popup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team location card */}
              <div className="flex-1  h-auto rounded-lg shadow-md outline outline-1.5 outline-greyelement bg-white dark:bg-button-dark dark:outline-[#2C2C2C]">
                <div className="p-2.5">
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                      {currentMode === "Light" ? (
                        <div className="mr-1 w-[70px] h-[70px]">
                          <Lottie
                            options={{
                              animationData: LocationLottie,
                              loop: false,
                            }}
                          />
                        </div>
                      ) : (
                        <>
                          <MdOutlineLocationOn className="mr-1 w-[50px] h-[70px] text-white" />
                        </>
                      )}

                      <div className="flex flex-col">
                        <span className="text-[14px] text-[#A8A8A8] ">
                          Team timezone
                        </span>
                        <span className="text-[20px] mb-1 dark:text-white">
                          {projectData?.team_timezone}
                        </span>
                      </div>

                      <div className="h-[40px] w-[40px] ml-1 "></div>
                    </div>
                    <div className="flex flex-wrap ">
                      <div className="ml-auto">
                        <div className="flex flex-row mt-1">
                          <Popover
                            content={
                              <div className="flex flex-col">
                                <span>Unlimited 1:1 Support 👩‍💻 </span>
                              </div>
                            }
                            // title="Unlimited 1:1 Support 👩‍💻"
                            trigger="click"
                            open={supportOpen}
                            onOpenChange={handleSupportOpenChange}
                            placement="bottom"
                          >
                            <div>
                              <TextIconBlueButton
                                onClick={() => {}}
                                // openInNewTab(projectData?.teams_url)
                                text={"Connect"}
                                icon={<FiExternalLink className="ml-1.5" />}
                                // ml={"ml-1.5"}
                              />
                            </div>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features */}

        <div data-tour="25">
          {/* Features table */}
          <FeaturesTable />
          {/* Add a new feature button */}
          <div className="flex flex-wrap">
            <div className="ml-auto mt-[15px]">
              {projectData?.project_progress === 4 ? (
                <>
                  <Popup
                    trigger={
                      <TextIconBlueButton
                        text={"Add a new feature"}
                        icon={<AiOutlinePlus className="ml-1.5" />}
                        ml={"ml-1.5"}
                      />
                    }
                    closeOnDocumentClick={false}
                    nested={false}
                    modal
                  >
                    {/* Add a new feature modal */}
                    <AddFeatureModal />
                  </Popup>
                </>
              ) : (
                <>
                  {/* Disabled button because the project isn't done yet to add more features */}
                  <TooltipComponent
                    className="tooltip-box"
                    content="You can add additional features once your app is live."
                    target="#tooltip"
                  >
                    <div id="tooltip">
                      <DisabledButton
                        text={"Add a new feature"}
                        icon={<AiOutlinePlus className="ml-1.5" />}
                        ml={"ml-1.5"}
                      />
                    </div>
                  </TooltipComponent>
                </>
              )}
            </div>
          </div>
          {/* Available on */}
          <div className="flex flex-col mt-[25px] mb-[10px] ">
            <span className="text-[20px] font-normal dark:text-white">
              Available on
            </span>
            <div className="flex mt-[10px]" />
            <div className="flex flex-row items-center mb-2">
              <BsApple className="text-[#585858] h-[18px] w-[18px] mr-2 dark:text-[#848484]" />
              <span className="text-[#585858] dark:text-[#848484]">
                iOS (iPhones)
              </span>
            </div>
            <div className="flex flex-row items-center">
              <MdAndroid className="text-[#585858] h-[18px] w-[18px] mr-2 dark:text-[#848484]" />
              <span className="text-[#585858] dark:text-[#848484]">
                Android (Phones)
              </span>
            </div>
          </div>
          {/* Description */}
          <div className="mt-[25px] mb-[10px]">
            <span className="text-[20px] font-normal dark:text-white">
              Description
            </span>
          </div>
          <span className="text-[#737373] dark:text-[#848484]">
            {/* {projectData?.description} */}
            With a big product range, top brands, easy payment plans, special
            sales and great deals, (My App) is the leading destination for
            superior online shopping. (My App) is the lifestyle shopping
            destination for the region, by the region. With the largest online
            selection of leading brands in categories such as electronics,
            fashion, health & beauty, fragrances, grocery, baby products and
            homeware, noon is the one stop shopping destination for all your
            needs.
          </span>
        </div>
        <div className="mb-[45px]" />
      </div>
    </div>
  );
};

export default ProjectOverview;
