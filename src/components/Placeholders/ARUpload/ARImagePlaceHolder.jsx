import { Popover, Tooltip } from "antd";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import moment from "moment";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
// import { HiPlus } from "react-icons/hi";
// import AddGreySVG from "../../../assets/Icons/AddGrey.svg";
import { useStateContext } from "../../../contexts/ContextProvider";
import { storage } from "../../../utils/FirebaseConfig";
import BugUploadProgress from "../../DashboardPage/BugScreenshotUpload/BugUploadProgress";

const ARImagePlaceHolder = (props) => {
  // const { appName } = props;
  // const { company } = props;
  // const { firstName } = props;
  // const { userId } = props;

  const { text } = props;
  // const { fileName } = props;
  const { elementId } = props;

  // const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");

  // To set the downloadURL into the context state
  // const { setArFrontImg, setArBackImg, setArRightImg, setArLeftImg } =
  //   useStateContext();

  // File
  // const [file, setFile] = useState(null);
  // const [ setPreviewUrl] = useState(null);

  // Progress
  // const [progressPercent, setProgressPercent] = useState(null);

  // useEffect(() => {
  //   const uploadFile = () => {
  //     const storageRef = ref(
  //       storage,
  //       `${appName}_${company}_${firstName}_userId:${userId}/ar_products/images/${fileName}_${currentDate}`
  //     );

  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     // Listen for state changes, errors, and completion of the upload.
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         // console.log("Upload is " + progress + "% done");
  //         setProgressPercent(progress);

  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //           default:
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         // Upload completed successfully, now we can get the download URL
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           // console.log("File available at", downloadURL);
  //           // PUT REQUEST --> Update signed contract in project

  //           if (fileName === "front") {
  //             setArFrontImg(downloadURL);
  //           } else if (fileName === "back") {
  //             setArBackImg(downloadURL);
  //           } else if (fileName === "right") {
  //             setArRightImg(downloadURL);
  //           } else if (fileName === "left") {
  //             setArLeftImg(downloadURL);
  //           }

  //           // updateSignedContract(downloadURL);
  //           // setBugURLs((urls) => [...urls, downloadURL]);

  //           // toast.dismiss();
  //           // window.location.reload();
  //         });
  //       }
  //     );
  //   };

  //   file && uploadFile();
  // }, [file]);

  // // Show preview image to immediately change state
  // useEffect(() => {
  //   if (!file) {
  //     return;
  //   }
  //   const fileReader = new FileReader();
  //   fileReader.onload = () => {
  //     setPreviewUrl(fileReader.result);
  //   };
  //   fileReader.readAsDataURL(file);
  // }, [file]);

  // Pick file
  // function pickedHandler(event) {
  //   let pickedFile;

  //   if (event.target.files && event.target.files.length === 1) {
  //     pickedFile = event.target.files[0];
  //     setFile(pickedFile);
  //   }
  // }

  // // Upload function
  // const uploadFile = (e) => {
  //   document.getElementById(`${elementId}`).click();

  //   setFile(e.target.files[0]);

  //   // if (file !== null) {
  //   //   // put file to storage
  //   //   let fileRef = ref(
  //   //     storage,
  //   //     `${appName}_${company}_${firstName}_userId:${userId}/ar_products/images/${fileName}_${currentDate}`
  //   //   );

  //   //   const uploadTask = uploadBytesResumable(fileRef, file);

  //   //   uploadTask.on("state_changed", (snapshot) => {
  //   //     const progress =
  //   //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //   //     console.log("Upload is" + progress + "% done");
  //   //   });
  //   // } else {
  //   //   return;
  //   // }
  // };

  

  return (
    <>
        <div
          // onClick={() => {}}
          className="p-4 flex flex-col items-center justify-center  border-2 border-gray dark:border-[#414141] border-dashed rounded-lg  h-[150px] cursor-pointer"
        >
          <AiOutlinePlus className="w-[35px] h-auto dark:text-[#5d5d5d] text-[#CBCBCB]" />
          {/* <img src={AddGreySVG} alt="" /> */}
          <span className="text-[#CBCBCB] text-[14px] mt-[5px] dark:text-[#5d5d5d]">
            {text}
          </span>
        </div>
    </>
  );
};

export default ARImagePlaceHolder;
