import { useStateContext } from "../../contexts/ContextProvider";
import "../../_animations.scss";
// import ImageUploadPlaceHolder from "../Placeholders/ARUpload/ARImagePlaceHolder";
// import IconTextButton from "../Buttons/IconTextButton";
// import UploadBlueSVG from "../../assets/Icons/UploadBlue.svg";
import BackButton from "../Buttons/BackButton";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
// import { useStore } from "../../contexts/storeContext/StoreContext";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
import { useState } from "react";
import ARImagePlaceHolder from "../Placeholders/ARUpload/ARImagePlaceHolder";

// import { toast } from "react-toastify";
import ARfbxUpload from "../Placeholders/ARUpload/ARfbxUpload";
// import { currentUserData, projectData } from "../../data/DemoData";
import useSound from "use-sound";
import clickB from "../../assets/sfx/clickB.mp3";
import { Alert } from "antd";

const UploadARSidePanel = () => {
  // To 1. Close the side panel once the back button is clicked 2.get the downloadURL from the context state
  const {
    setUploadARSidePanel,
    // arFrontImg,
    // setArFrontImg,
    // arBackImg,
    // setArBackImg,
    // arRightImg,
    // setArRightImg,
    // arLeftImg,
    // setArLeftImg,
    // arFile,
    // setArFile,
  } = useStateContext();

  // GET PROJECT THAT BELONGS TO USER DATA
  // const { project, fetchProjectByUserId } = useProjectByUserId();

  // GET CURRENT USER DATA
  // const { currentUser, fetchCurrentUser, sendNotificationToPM } =
  //   useCurrentUser();

  // GET STORE DATA
  // const { store, fetchStore, addArProductMethod } = useStore();

  // useEffect(() => {
  //   fetchCurrentUser();

  //   fetchProjectByUserId();

  //   fetchStore(project?.id);
  // }, [project?.id]);

  // FOR INPUT FIELDS
  const [, setMeasurements] = useState("");
  const [, setProductName] = useState("");
  const [, setPrice] = useState("");
  const [, setCurrency] = useState("USD");
  const [, setSku] = useState("");
  const [placeholderClicked, setPlaceholderClicked] = useState(false);

  // const [fieldError, setFieldError] = useState(false);

  const [playB] = useSound(clickB, { volume: 0.5 });

  return (
    <div className="bg-half-transparent  w-screen fixed nav-item top-0 right-0">
      <div className="page-animation">
        <div className="float-right h-screen  dark:text-gray-200 bg-white dark:bg-section-dark w-400 p-5 overflow-y-scroll	">
          {/* Right Panel Context */}
          <div className="flex justify-between items-center ">
            <BackButton
              onClick={() => {
                setUploadARSidePanel(false);
                playB();
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="mt-8 text-[20px] font-bold">Product images</span>
            <span className="mt-1 font-normal text-[16px] text-[#8E8E8E]">
              Please upload 4 pictures of your product with different angles
              (Front, Back, Right, Left).
            </span>
            {/* Alert  */}
            {placeholderClicked && (
              <Alert
                message="Demo 💡: Enabled when you have a built app."
                type="warning"
                closable
                className="mt-3 mb-2 fade-down"
                onClose={() => {
                  setPlaceholderClicked(false);
                }}
              />
            )}

            {/* Image Upload Placeholder grid */}

            <div className="grid grid-cols-2 mt-4 gap-x-5 gap-y-5">
              <ARImagePlaceHolder
                onClick={() => {
                  setPlaceholderClicked(true);
                }}
                // onClick={warning}
                // appName={projectData?.app_name}
                // company={currentUserData?.company}
                // firstName={currentUserData?.first_name}
                // userId={currentUserData?.id}
                text={"Front"}
                // fileName={"front"}
                // elementId={"select-front"}
              />
              <ARImagePlaceHolder
                onClick={() => {
                  setPlaceholderClicked(true);
                }}
                // onClick={warning}
                // appName={projectData?.app_name}
                // company={currentUserData?.company}
                // firstName={currentUserData?.first_name}
                // userId={currentUserData?.id}
                text={"Back"}
                // fileName={"back"}
                // elementId={"select-back"}
              />
              <ARImagePlaceHolder
                onClick={() => {
                  setPlaceholderClicked(true);
                }}
                // onClick={warning}
                // appName={projectData?.app_name}
                // company={currentUserData?.company}
                // firstName={currentUserData?.first_name}
                // userId={currentUserData?.id}
                text={"Right"}
                // fileName={"right"}
                // elementId={"select-right"}
              />
              <ARImagePlaceHolder
                onClick={() => {
                  setPlaceholderClicked(true);
                }}
                // onClick={warning}
                // appName={projectData?.app_name}
                // company={currentUserData?.company}
                // firstName={currentUserData?.first_name}
                // userId={currentUserData?.id}
                text={"Left"}
                // fileName={"left"}
                // elementId={"select-left"}
              />
            </div>

            <span className="mt-5 font-normal text-[14px] text-[#25272E] dark:text-white">
              Already got a 3D file?
            </span>
            <div className="ml-[-5px] mt-2">
              <ARfbxUpload
                onClick={() => {
                  setPlaceholderClicked(true);
                }}
              />
            </div>
          </div>

          <hr className="mt-5 mb-5 dark:border-[#2C2C2C]" />

          {/* Details section */}

          <span className=" text-[20px]">Details</span>

          <div className="flex flex-col">
            <span className="mt-2 mb-2 font-normal text-[14px] text-[#25272E] dark:text-white">
              Product measurements:
            </span>

            <textarea
              id="measure"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue focus:border-blue dark:bg-[#2C2C2C] dark:border-[#2C2C2C] dark:placeholder-[#2C2C2C] dark:text-white dark:focus:ring-blue dark:focus:border-blue"
              onChange={(e) => setMeasurements(e.target.value)}
            ></textarea>

            <div className="flex flex-row items-center  mt-4 ">
              <span className="flex-2 mb-2 mr-4 font-normal text-[14px] text-[#25272E] dark:text-white">
                Product name:
              </span>

              <input
                type="text"
                id="small-input"
                class="flex-1  h-[25px] p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue focus:border-blue dark:bg-[#2C2C2C] dark:border-[#2C2C2C] dark:placeholder-[#2C2C2C] dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                onChange={(e) => setProductName(e.target.value)}
              ></input>
            </div>

            <div className="flex flex-row items-center mt-4">
              <span className="flex-2 mb-2 mr-4 font-normal text-[14px] text-[#25272E] dark:text-white">
                Price:
              </span>
              <input
                type="text"
                id="small-input"
                class="flex-1 mr-5 h-[25px] p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue focus:border-blue dark:bg-[#2C2C2C] dark:border-[#2C2C2C] dark:placeholder-[#2C2C2C] dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                onChange={(e) => setPrice(e.target.value)}
              ></input>
              <span className="flex-2 mb-2 mr-4 font-normal text-[14px] text-[#25272E] dark:text-white">
                Currency:
              </span>
              <select
                id="countries"
                class="flex-1 h-[25px] pl-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue focus:border-blue block w-full  dark:bg-[#2C2C2C] dark:border-[#2C2C2C] dark:placeholder-[#2C2C2C] dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option>USD</option>
                <option>EUR</option>
                <option>CAD</option>
                {/* <option>SAR</option> */}
              </select>
            </div>

            <div className="flex flex-row items-center  mt-4">
              <span className="flex-2  mb-2 mr-4 font-normal text-[14px] text-[#25272E] dark:text-white">
                SKU:
              </span>

              <input
                type="text"
                id="small-input"
                class="flex-1  h-[25px] p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue focus:border-blue dark:bg-[#2C2C2C] dark:border-[#2C2C2C] dark:placeholder-[#2C2C2C] dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                onChange={(e) => setSku(e.target.value)}
              ></input>
            </div>

            {/* Submit button */}

            <div className="mt-4">
              <TextIconBlueButton
                onClick={() => {
                  setPlaceholderClicked(true);
                }}
                text={"Add Product"}
              />
              {/* {fieldError === true && (
                <div className="mt-[12px] bg-[#ffeeee] w-[150px] rounded-lg dark:bg-[#ff3a3a]">
                  <span className=" text-red text-[14px] p-2 page-animation dark:text-white">
                    Please fill in all fields.
                  </span>
                </div>
              )} */}
            </div>
          </div>

          {/* End Right Panel Content */}
        </div>
      </div>
    </div>
  );
};

export default UploadARSidePanel;
