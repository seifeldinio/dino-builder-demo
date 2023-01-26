// import OpenBoxSVG from "../../assets/Illustrations/OpenBox.svg";
// import ShippingSVG from "../../assets/Illustrations/Shipping.svg";
import TextIconBlueButton from "../Buttons/TextIconBlueButton";
import { useEffect,  useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../utils/FirebaseConfig";
import moment from "moment";
import UploadCircularProgress from "../DocumentsPage/UploadCircularProgress";
import { useStateContext } from "../../contexts/ContextProvider";
// import { useStore } from "../../contexts/storeContext/StoreContext";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
const UploadRegionsCSV = (props) => {
  // To push the downloadURL into the state array
  const { csvFiles, setCsvFiles } = useStateContext();
  const { appName } = props;
  const { company } = props;
  const { firstName } = props;
  const { userId } = props;
  // const { projectId } = props;

  // const { updateCSVFiles } = useStore();

  const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");

  // FIle
  const [file, setFile] = useState(null);
  // Progress
  const [progressPercent, setProgressPercent] = useState(null);
  const [ setPreviewUrl] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(
        storage,
        `${appName}_${company}_${firstName}_userId:${userId}/store_csv/Regions_Fees_CSV_${currentDate}_${file.name}`
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
            setCsvFiles((urls) => [...urls, downloadURL]);

            // csvFiles;

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
    document.getElementById("select-productscsv").click();

    setFile(e.target.files[0]);

    if (file !== null) {
      // put file to storage
      let fileRef = ref(
        storage,
        `${appName}_${company}_${firstName}_userId:${userId}/store_csv/Regions_Fees_CSV_${currentDate}_${file.name}`
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
    <div className="flex flex-col  h-full w-full justify-center content-center items-center  overflow-y-hidden">
      <div className="mt-[40px]" />
      <div className="flex flex-col w-1/2 h-[250px] border-2 border-gray border-dashed rounded-lg items-center justify-center dark:border-[#434343]">
        {file === null ? (
          <>
            <LazyLoadImage
              className="h-[70px] w-[70px] mb-2"
              src="https://media.publit.io/file/StockPics/Shipping.svg"
              effect="blur"
              placeholderSrc="https://media.publit.io/file/StockPics/Shipping.svg"
            />
            {/* <img src={ShippingSVG} className="h-[70px] w-[70px] mb-2" alt="" /> */}
            <span className="text-[18px] font-medium dark:text-white text-center">
              Regions & Shipping fees
            </span>
            <span className="text-[#5a5a5a] mb-[10px] dark:text-[#838383]">
              Select your CSV file
            </span>
            <div className="hover:scale-105 transition-all duration-200">
              <TextIconBlueButton
                onClick={() => {
                  if (csvFiles.length > 0) {
                    uploadFile();
                  } else {
                    //ERROR TOAST
                    const errorNotify = () => {
                      toast.error("Upload your products CSV file first.", {
                        autoClose: 1500,
                      });
                    };
                    errorNotify();
                  }
                }}
                text={"Select a file"}
              />
            </div>
            <input
              id="select-productscsv"
              type="file"
              class="hidden"
              accept=".csv, .xls, .xlsx"
              onChange={pickedHandler}
            />
          </>
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
    </div>
  );
};

export default UploadRegionsCSV;
