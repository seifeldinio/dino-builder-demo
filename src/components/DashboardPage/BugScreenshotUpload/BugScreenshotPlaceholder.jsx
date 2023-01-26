import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import moment from "moment";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-toastify";
// import AddGreySVG from "../../../assets/Icons/AddGrey.svg";
import { useStateContext } from "../../../contexts/ContextProvider";
import { storage } from "../../../utils/FirebaseConfig";
// import UploadCircularProgress from "../../DocumentsPage/UploadCircularProgress";
import BugUploadProgress from "./BugUploadProgress";

const BugScreenshotPlaceholder = (props) => {
  // To set urls in array
  const {  setBugURLs } = useStateContext();

  const { appName } = props;
  const { company } = props;
  const { firstName } = props;
  const { userId } = props;
  const { bugTitle } = props;
  const { fileName } = props;
  const { elementId } = props;

  const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");

  // File
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Progress
  const [progressPercent, setProgressPercent] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(
        storage,
        `${appName}_${company}_${firstName}_userId:${userId}/bugs_screenshots/${bugTitle}_${fileName}_${currentDate}`
      );

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log("Upload is " + progress + "% done");
          setProgressPercent(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            // PUT REQUEST --> Update signed contract in project
            // updateSignedContract(downloadURL);
            setBugURLs((urls) => [...urls, downloadURL]);

            // toast.dismiss();
            // window.location.reload();
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  // Show preview image to immediately change state
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  // Pick file
  function pickedHandler(event) {
    let pickedFile;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  }

  // Upload function
  const uploadFile = (e) => {
    document.getElementById(`${elementId}`).click();

    setFile(e.target.files[0]);

    if (file !== null) {
      // put file to storage
      let fileRef = ref(
        storage,
        `${appName}_${company}_${firstName}_userId:${userId}/bugs_screenshots/${bugTitle}_${fileName}_${currentDate}`
      );

      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is" + progress + "% done");
      });
    } else {
      return;
    }
  };

  // Toasts
  const RequiredBugTitle = () => {
    toast.error("Please, fill in all fields first.", {
      autoClose: 1500,
    });
  };

  return (
    <>
      <button
        onClick={() => {
          if (bugTitle === "") {
            RequiredBugTitle();
          } else if (bugTitle !== "") {
            uploadFile();
          }
        }}
        className="flex bg-white h-[170px] w-[170px] rounded-lg  border-2 border-gray border-dashed cursor-pointer items-center justify-center "
      >
        {file === null ? (
          <AiOutlinePlus className="h-[20px] w-[20px] text-[#c0c0c0]" />
        ) : (
          // <img src={AddGreySVG} alt="" />
          <>
            <div className=" flex flex-row items-center">
              <div />
              <div className="flex ml-auto mr-auto text-[25px] mt-[18px] items-center justify-center ">
                {progressPercent !== null ? (
                  <>
                    <div className=" absolute mb-[18px]  backdrop-blur-md bg-black/20 h-[170px] w-[170px] rounded-lg ">
                      <div className="flex items-center justify-center h-[160px]">
                        <BugUploadProgress
                          progress={progressPercent.toFixed(0)}
                          title={progressPercent.toFixed(0) + "%"}
                        />{" "}
                      </div>
                    </div>

                    <img
                      className="overflow-y-clip w-auto h-[170px] mb-[18px] "
                      src={previewUrl}
                      alt=""
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div />
            </div>
          </>
        )}
      </button>
      <input
        id={elementId}
        type="file"
        class="hidden"
        accept=".png, .jpg, .jpeg"
        onChange={pickedHandler}
      />
    </>
  );
};

export default BugScreenshotPlaceholder;
