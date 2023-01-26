import Lottie from "lottie-react-web";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import Upload from "../../assets/Lotties/upload.json";
import { useEffect, useState } from "react";
import { storage } from "../../utils/FirebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import moment from "moment";
// import SignedContractSVG from "../../assets/Icons/SignedContract.svg";
// import { toast } from "react-toastify";
// import CircularProgress from "../DashboardPage/CircularProgress";
import UploadCircularProgress from "../DocumentsPage/UploadCircularProgress";

const DocUpload = (props) => {
  // const { updateSignedContract } = useProjectByUserId();

  const { title } = props;
  const { loop } = props;
  const { appName } = props;
  const { company } = props;

  const { firstName } = props;
  const { userId } = props;
  // const { email } = props;
  const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");
  // For button input
  // FIle
  const [file, setFile] = useState(null);
  const [setPreviewUrl] = useState(null);
  // Progress
  const [progressPercent, setProgressPercent] = useState(null);
  // Progress Toast
  // const toastId = useRef(null);

  // const ProgressToast = () => {
  //   toast.loading(`Uploading ${progressPercent}%`);
  // };

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(
        storage,
        `${appName}_${company}_${firstName}_userId:${userId}/contracts/signed_contract_${currentDate}`
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
          // check if we already displayed a toast
          // if (toastId.current === null) {
          //   toastId.current = toast.loading(
          //     `Upload in Progress ${progress.toFixed(0)}%`,
          //     progressPercent
          //   );
          // } else {
          //   toast.update(toastId.current, {
          //     render: `Upload in Progress ${progress.toFixed(0)}%`,
          //   });

          // }

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

            // toast.dismiss();
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
    document.getElementById("select-signedContract").click();

    setFile(e.target.files[0]);

    if (file !== null) {
      // put file to storage
      let fileRef = ref(
        storage,
        `${appName}_${company}_${firstName}_userId:${userId}/contracts/signed_contract_${currentDate}`
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

  return (
    <div class="flex h-[230px] w-[230px]">
      <div class=" rounded-lg  border-dashed border-[1.5px]  border-[#D8D8D8] dark:border-[#4b4b4b]  max-w-sm w-[230px] transition-all duration-200 ">
        <div className="flex-wrap ">
          <div className=" pt-3 pl-3 pr-3 ">
            <div className="absolute mt-[10px] ml-[60px] h-[85px] w-[85px]  cursor-default  ">
              {file === null ? (
                <Lottie
                  options={{
                    animationData: Upload,
                    loop: loop,
                  }}
                />
              ) : (
                <>
                  <div className=" flex flex-row items-center">
                    <div />
                    <div className="ml-auto mr-auto text-[25px] mt-[18px]">
                      {progressPercent !== null ? (
                        <UploadCircularProgress
                          progress={progressPercent.toFixed(0)}
                          title={progressPercent.toFixed(0) + "%"}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div />
                  </div>
                </>
              )}
            </div>

            <div className="h-[100px] w-auto   rounded-lg"></div>
          </div>
        </div>
        <div class="flex flex-col p-3 items-center">
          {file === null ? (
            <>
              <div class="text-[#808080] text-[16px] font-medium  text-center	">
                {title}
              </div>
              <div class="text-[#888888]  text-[13px] text-center mt-1	">
                PDF, DOC, DOCX file
              </div>
              {/* <div class="text-[#888888]  text-[13px] mb-2 text-center	">
            or if you prefer...
          </div> */}
              <div className="mt-[20px]"></div>
              {/* BUTTON */}
              <div className="flex flex-warp">
                <div className="ml-auto">
                  <TextIconBlueButton
                    text={"Select a file"}
                    onClick={uploadFile}
                  />
                  <input
                    id="select-signedContract"
                    type="file"
                    class="hidden"
                    accept=".pdf, .doc, .docs, .docx"
                    onChange={pickedHandler}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-black text-[16px] mt-[25px]  dark:text-white">
                Uploading file
              </div>
              <div className="text-[#808080] text-[14px]">
                This may take a few seconds
              </div>
            </>
          )}
        </div>
      </div>
      {/* <input {...getInputProps} id="drop-signedContract" class="hidden" /> */}
    </div>
  );
};

export default DocUpload;
