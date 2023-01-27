// import { useState, useEffect } from "react";
import { CircularProgress } from "../index";
// import Greenbar from "../../assets/Illustrations/Greenbar.svg";
// import Greencheck from "../../assets/Illustrations/Greencheck.svg";
// import Greybar from "../../assets/Illustrations/Greybar.svg";
import Spacer from "react-spacer";
// import { useEffect, useState } from "react";

const AppStatus = (props) => {
  const { progress } = props;
  // const { releaseDate } = props;
  const { onClick } = props;

  // const [projectProgress, setProjectProgress] = useState(progress);

  // Use effect listens to any changes that happens in the socket (Listens to event project_progress_int if admin changed the progress it emits this event afterwards)
  // useEffect(() => {
  //   // Listen to changes in event update_project_progress from webSocket
  //   socket.on("project_progress_int", (payload) => {
  //     setProjectProgress(payload);
  //     console.log("payload", payload);
  //   });

  // return () => {
  //   // before the component is destroyed
  //   // unbind all event handlers used in this component
  //   socket.off("project_progress_int", (payload) => {
  //     setProjectProgress(payload);
  //     console.log("payload", payload);
  //   });
  // };

  //   console.log("App progress", projectProgress);
  // }, [socket]);

  return (
    <div
      data-tour="1"
      className="md:visible invisible flex md:h-auto h-0   rounded-lg bg-greyelement mt-5 items-center dark:bg-section-dark cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-row space-x-3 w-full items-center  mr-5 ml-5 mt-5 mb-11">
        {/* Design */}
        <div className="flex-2">
          <div className="flex flex-col align-center">
            <CircularProgress
              progress={progress === 0 ? 50 : 100}
              title={"Design"}
            />
            <span className="absolute text-[12px] text-[#7E7E7E] mt-[107px] ml-[-5px]">
              Tailored UI/ UX Design
            </span>
          </div>
        </div>

        {/* Bar */}
        {progress === 0 ? (
          <>
            {/* Gery bar */}
            <div className="flex-1 ">
              <div className="h-[5px] w-auto bg-[#EAEAEA] rounded-lg dark:bg-hover-dark" />
            </div>
          </>
        ) : (
          <>
            {/* Green check bar */}
            <div className="flex-1 flex-col items-center justify-center content-center mb-10">
              <div />

              <img
                src="https://media.publit.io/file/StockPics/Greencheck.svg"
                className="ml-auto mr-auto items-center justify-center content-center"
                alt=""
              />
              <div />
              <div className="flex-1">
                <div className="h-[5px] w-auto bg-green rounded-lg "></div>
              </div>
            </div>
          </>
        )}

        <div className="flex-2">
          {/* Development  */}

          <div className="flex flex-col align-center">
            <CircularProgress
              progress={progress === 1 ? 50 : progress === 0 ? 0 : 100}
              title={"Development"}
            />
            <span className="absolute text-[12px] text-[#7E7E7E] mt-[107px] ml-[-5px]">
              Developing your app
            </span>
          </div>
        </div>

        {/* Bar */}
        {progress === 0 || progress === 1 ? (
          <>
            {/* Gery bar */}
            <div className="flex-1 ">
              <div className="h-[5px] w-auto bg-[#EAEAEA] rounded-lg dark:bg-hover-dark" />
            </div>
          </>
        ) : (
          <>
            {/* Green check bar */}
            <div className="flex-1 flex-col items-center justify-center content-center mb-10">
              <div />

              <img
                src="https://media.publit.io/file/StockPics/Greencheck.svg"
                className="ml-auto mr-auto items-center justify-center content-center"
                alt=""
              />
              <div />
              <div className="flex-1">
                <div className="h-[5px] w-auto bg-green rounded-lg "></div>
              </div>
            </div>
          </>
        )}

        {/* Beta */}
        <div className="flex-2">
          <div className="flex flex-col align-center">
            <CircularProgress
              progress={
                progress === 2
                  ? 50
                  : progress === 0
                  ? 0
                  : progress === 1
                  ? 0
                  : 100
              }
              title={"Beta"}
            />
            <span className="absolute text-[12px] text-[#7E7E7E] mt-[107px] ml-[-5px]">
              Beta releases to test
            </span>
          </div>
        </div>

        {/* Bar */}
        {progress === 0 || progress === 1 || progress === 2 ? (
          <>
            {/* Gery bar */}
            <div className="flex-1 ">
              <div className="h-[5px] w-auto bg-[#EAEAEA] rounded-lg dark:bg-hover-dark" />
            </div>
          </>
        ) : (
          <>
            {/* Green check bar */}
            <div className="flex-1 flex-col items-center justify-center content-center mb-10">
              <div />

              <img
                src="https://media.publit.io/file/StockPics/Greencheck.svg"
                className="ml-auto mr-auto items-center justify-center content-center"
                alt=""
              />
              <div />
              <div className="flex-1">
                <div className="h-[5px] w-auto bg-green rounded-lg "></div>
              </div>
            </div>
          </>
        )}

        {/* First release */}

        <div className="flex-2">
          <div className="flex flex-col align-center">
            <CircularProgress
              progress={
                progress === 3
                  ? 50
                  : progress === 0
                  ? 0
                  : progress === 1
                  ? 0
                  : progress === 2
                  ? 0
                  : 100
              }
              title={"First release"}
            />
            <span className="absolute text-[12px] text-[#7E7E7E] mt-[107px] ml-[5px]">
              Your app is live!
            </span>
          </div>
        </div>
      </div>

      {/* Spacer */}
      {/* <div className="flex flex-row relative ml-auto left-0 m-5"> */}

      {/* Vertical Divider */}

      <div className="flex flex-1 ml-[50px] mr-[50px] items-center justify-center">
        <div className="w-0.5 bg-[#EAEAEA] dark:bg-divider-dark h-28 rounded-lg items-center justify-center " />
      </div>

      {/* <div className="flex flex-row relative ml-auto left-0 m-5 " /> */}
      {/* Progress with release date */}

      <div className=" flex-1 ">
        <div className="flex flex-col mr-10   w-[150px] ">
          {/* Purple progress */}

          {progress === 0 ? (
            <div className="flex justify-center items-center w-[90px] h-[90px] bg-purple  rounded-full mt-1 ml-6">
              <span className="absolute z-99 font-bold  text-center ml-auto mr-auto text-[25px] text-[#fff]">
                10%
              </span>
            </div>
          ) : progress === 1 ? (
            <div className="flex justify-center items-center w-[90px] h-[90px] bg-purple  rounded-full mt-1 ml-6">
              <span className="absolute z-99 font-bold  text-center ml-auto mr-auto text-[25px] text-[#fff]">
                25%
              </span>
            </div>
          ) : progress === 2 ? (
            <div className="flex justify-center items-center w-[90px] h-[90px] bg-purple  rounded-full mt-1 ml-6">
              <span className="absolute z-99 font-bold  text-center ml-auto mr-auto text-[25px] text-[#fff]">
                50%
              </span>
            </div>
          ) : progress === 3 ? (
            <div className="flex justify-center items-center w-[90px] h-[90px] bg-purple  rounded-full mt-1 ml-6">
              <span className="absolute z-99 font-bold  text-center ml-auto mr-auto text-[25px] text-[#fff]">
                75%
              </span>
            </div>
          ) : (
            <div className="flex justify-center items-center w-[90px] h-[90px] bg-green  rounded-full mt-1 ml-6">
              <span className="absolute z-99 font-bold  text-center ml-auto mr-auto text-[25px] text-[#fff]">
                100%
              </span>
            </div>
          )}

          <Spacer height={"12px"} />

          <div className="flex flex-row align-center">
            <span className="text-[12px] text-[#7e7e7e]">Release date:</span>
            <Spacer width={"4px"} />
            <span className="text-[12px] dark:text-white">
              {/* {releaseDate} */}
              {new Date().toLocaleString("en-US", { month: "2-digit" })}/
              {new Date().toLocaleString("en-US", { day: "2-digit" })}/
              {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default AppStatus;
