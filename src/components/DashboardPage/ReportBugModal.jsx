import { useRef, useState } from "react";
import { AiOutlineFlag } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
// import IconTextButton from "../Buttons/IconTextButton";
// import UploadBlueSVG from "../../assets/Icons/UploadBlue.svg";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import { MdSend } from "react-icons/md";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
// import { storage } from "../../utils/FirebaseConfig";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import moment from "moment";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
import { toast } from "react-toastify";
import { BsUpload } from "react-icons/bs";

// import { useStateContext } from "../../contexts/ContextProvider";
import BlueCheckLottie from "../../assets/Lotties/BlueCheck.json";
import Lottie from "lottie-react-web";
import BugScreenshotPlaceholder from "./BugScreenshotUpload/BugScreenshotPlaceholder";
// import { currentUserData, projectData } from "../../data/DemoData";

const ReportBugModal = (props) => {
  const { close } = props;

  const [bugTitle, setBugTitle] = useState("");
  const [, setBriefDescription] = useState("");
  const [, setPriority] = useState("Medium");

  const [bugSent, setBugSent] = useState(false);

  // For the selector's state
  const [selected, setSelected] = useState("Medium");
  const [selectorOpen, setSelectorOpen] = useState(false);
  const selectorRef = useRef(null);

  // For uploading multiple images to firebasestorage
  // const [images, setImages] = useState([]);
  // const [urls, setUrls] = useState([]);
  // const [progress, setProgress] = useState(0);
  // const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");

  // To hide dropdown selector card once clicked outside
  const closeOpenMenus = (e) => {
    if (
      selectorRef.current &&
      selectorOpen &&
      !selectorRef.current.contains(e.target)
    ) {
      setSelectorOpen(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);

  // Toasts
  const RequiredFields = () => {
    toast.error("Fill in all fields!", {
      autoClose: 1500,
    });
  };

  return (
    <div className="h-auto bg-white">
      {bugSent === true ? (
        <>
          {" "}
          <div className="flex  flex-row items-center pt-3 pr-3.5 pl-3 pb-2">
            <div className="flex flex-1">
              <div className="ml-auto">
                <GrClose
                  className="close cursor-pointer hover:scale-110 transition-all duration-200"
                  onClick={close}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-[100px] w-[100px]">
              <Lottie
                options={{
                  animationData: BlueCheckLottie,
                  loop: false,
                }}
              />
            </div>
            <span className="font-medium ">Sent successfully!</span>
            <span className="mb-[25px]">
              Our team will review the issue and fix it shortly.
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="flex  flex-row items-center pt-3 pr-3.5 pl-3 pb-2">
            <div className="flex  flex-col ">
              <span className="text-[20px] text-[#25272E]">
                Report a bug 🐞
              </span>
              <div className="mt-1 ">
                <span className=" text-[14px] text-[#767676] font-normal ">
                  Report any issue you've encountered and we'll fix it right
                  away.
                </span>
              </div>
            </div>

            <div className="flex flex-1">
              <div className="ml-auto">
                <GrClose
                  className="close cursor-pointer hover:scale-110 transition-all duration-200"
                  onClick={close}
                  // onClick={close}
                  // onClick={() => {
                  //   window.top.location.href = `http://localhost:3000/dashboard`;
                  // }}
                />
              </div>
            </div>
          </div>

          <hr className="mt-3 " />

          <div className="flex flex-col pt-3 pb-3 pr-2.5 pl-2.5">
            <div className="flex flex-row items-center">
              <div className="flex flex-col">
                {/* Title */}
                <span className="flex-2 mb-2 mr-4 font-normal  text-[#25272E]">
                  Title
                </span>

                <input
                  type="text"
                  id="small-input"
                  class="w-[200px]  h-[30px] p-2  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue focus:border-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                  onChange={(e) => setBugTitle(e.target.value)}
                ></input>
              </div>

              {/* Set priority */}

              <div className="flex flex-row items-center mt-5 ml-auto  ">
                <AiOutlineFlag className="text-[14px] mr-[5px]" />
                <div className="mr-[15px]">Priority</div>
                {/* Select component  */}

                <button
                  onClick={() => {
                    if (selectorOpen === false) {
                      setSelectorOpen(true);
                    } else if (selectorOpen === true) {
                      setSelectorOpen(false);
                    }
                  }}
                  className="w-[90px] h-[30px] bg-white rounded-md outline outline-2 outline-[#eaeaea] cursor-pointer "
                >
                  <div className="flex flex-row  h-full  pr-2 pl-1 pb-[2px] items-center">
                    <span className="flex-1 text-[14px] mr-1">{selected}</span>
                    <div>
                      {selectorOpen === false ? (
                        <div className="ml-auto">
                          <MdOutlineKeyboardArrowDown />
                        </div>
                      ) : (
                        <MdOutlineKeyboardArrowUp />
                      )}
                    </div>
                  </div>
                </button>
                <div className="w-[1.5px] h-full rounded-lg bg-[#dcdcdc] ml-4 mr-4 " />

                {/* Selector Card */}
                {selectorOpen && (
                  <>
                    <div
                      ref={selectorRef}
                      className="absolute right-[46px] mt-[180px] fade-down-lessons"
                    >
                      <div className="flex flex-col h-auto w-[90px] bg-[#f9f9f9] shadow-lg mt-[10px] pt-1 pb-1  rounded-md">
                        {/* Option button */}
                        <div
                          onClick={() => {
                            setSelected("Urgent");
                            setPriority("Urgent");
                            setSelectorOpen(false);
                          }}
                          className=" hover:bg-[#f0f0f0] cursor-pointer pl-1 pt-1 pb-1 pr-2 mb-1"
                        >
                          <div className="h-auto w-[60px] rounded-md bg-[#ffdcdc]">
                            <span className="text-[14px] text-red p-2">
                              Urgent
                            </span>
                          </div>
                        </div>
                        {/* Option button */}

                        <div
                          onClick={() => {
                            setSelected("High");
                            setPriority("High");

                            setSelectorOpen(false);
                          }}
                          className=" hover:bg-[#f0f0f0] cursor-pointer pl-2  pt-1 pb-1  pr-2 mb-1"
                        >
                          <span className="text-[14px] text-red">High</span>
                        </div>
                        {/* Option button */}

                        <div
                          onClick={() => {
                            setSelected("Medium");
                            setPriority("Medium");

                            setSelectorOpen(false);
                          }}
                          className=" hover:bg-[#f0f0f0] cursor-pointer pl-2   pt-1 pb-1 pr-2 mb-1"
                        >
                          <span className="text-[14px]">Medium</span>
                        </div>
                        {/* Option button */}

                        <div
                          onClick={() => {
                            setSelected("Low");
                            setPriority("Low");

                            setSelectorOpen(false);
                          }}
                          className="  hover:bg-[#f0f0f0] cursor-pointer pl-2   pt-1 pb-1 pr-2 "
                        >
                          <span className="text-[14px] text-[#707070]">
                            Low
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {/* End Selector Card */}
              </div>
            </div>

            {/* Explain the issue */}

            <div className="flex flex-col h-auto  overflow-y-scroll mt-2">
              <span className="mt-2 mb-2 font-normal text-[#25272E]">
                Explain the issue
              </span>
              <textarea
                id="measure"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue focus:border-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                onChange={(e) => setBriefDescription(e.target.value)}
              ></textarea>
              <div className="flex flex-row items-center mt-[20px]">
                <BsUpload className="mr-2 h-[15px] w-[15px]" />

                <span className="">Upload screenshots</span>
              </div>
              {/* Upload screenshots */}

              <div className="flex flex-row items-center mt-[20px] mb-[50px]">
                <BugScreenshotPlaceholder
                // appName={projectData?.app_name}
                // company={currentUserData?.company}
                // firstName={currentUserData?.first_name}
                // userId={currentUserData?.id}
                // bugTitle={bugTitle}
                // fileName={"bug1"}
                // elementId={"select-bug-1"}
                />
                <div className="mr-4" />
                <BugScreenshotPlaceholder
                // appName={projectData?.app_name}
                // company={currentUserData?.company}
                // firstName={currentUserData?.first_name}
                // userId={currentUserData?.id}
                // bugTitle={bugTitle}
                // fileName={"bug1"}
                // elementId={"select-bug-1"}
                />

                <div className="mr-4" />
                <BugScreenshotPlaceholder
                // appName={projectData?.app_name}
                // company={currentUserData?.company}
                // firstName={currentUserData?.first_name}
                // userId={currentUserData?.id}
                // bugTitle={bugTitle}
                // fileName={"bug1"}
                // elementId={"select-bug-1"}
                />

                <div className="mr-4" />
                <BugScreenshotPlaceholder
                // appName={projectData?.app_name}
                // company={currentUserData?.company}
                // firstName={currentUserData?.first_name}
                // userId={currentUserData?.id}
                // bugTitle={bugTitle}
                // fileName={"bug1"}
                // elementId={"select-bug-1"}
                />
              </div>
              {/* Send button */}
              <div className="absolute bottom-[20px] right-[20px]">
                <TextIconBlueButton
                  onClick={() => {
                    if (bugTitle === "") {
                      RequiredFields();
                    } else {
                      setBugSent(true);
                    }
                    // if (
                    //   bugTitle === "" ||
                    //   briefDescription === "" ||
                    //   priority === "" ||
                    //   bugURLs === []
                    // ) {
                    //   RequiredFields();
                    // } else {
                    //   reportBugMethod(
                    //     project?.id,
                    //     bugTitle,
                    //     briefDescription,
                    //     priority,
                    //     // bugURLs.join(", ")
                    //     // JSON.stringify(JSON.stringify(bugURLs))
                    //     // JSON.stringify(bugURLs).replace(/\\"/g, '"')
                    //     JSON.stringify(bugURLs)
                    //   );
                    //   // Send notification to project manager
                    //   sendNotificationToPM(
                    //     project?.project_manager_id,
                    //     "Bug Fix Request",
                    //     `Bug fix waiting for approval from ${project?.app_name}`,
                    //     project?.app_name,
                    //     project?.app_icon,
                    //     "Bug"
                    //   );
                    //   // console.log(
                    //   //   project?.id,
                    //   //   bugTitle,
                    //   //   briefDescription,
                    //   //   priority,
                    //   //   JSON.stringify(bugURLs)
                    //   //   // bugURLs.join(", ")
                    //   // );
                    // }
                  }}
                  text={"Send"}
                  reactIcons={true}
                  icon={<MdSend className="ml-1" />}
                  // ml={""}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ReportBugModal;
