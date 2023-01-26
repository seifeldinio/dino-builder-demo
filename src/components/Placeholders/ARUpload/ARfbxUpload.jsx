import React, { useEffect, useState } from "react";
import IconTextButton from "../../Buttons/IconTextButton";
// import UploadBlueSVG from "../../../assets/Icons/UploadBlue.svg";
import { useStateContext } from "../../../contexts/ContextProvider";
import moment from "moment";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../utils/FirebaseConfig";
// import UploadCircularProgress from "../../DocumentsPage/UploadCircularProgress";
import { CircularProgressbar } from "react-circular-progressbar";
import CircularAnimation from "../../DashboardPage/CircularAnimation";
import { HiUpload } from "react-icons/hi";

const ARfbxUpload = (props) => {
  const { appName } = props;
  const { company } = props;
  const { firstName } = props;
  const { userId } = props;

  const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");

  // To set the downloadURL into the context state
  // const { setArFile } = useStateContext();

  // File
  const [file, setFile] = useState(null);
  // TO GET FILE EXTENSION
  // function getExtension(filename) {
  //   return filename.split(".").pop();
  // }
  // const [ setExtension] = useState(null);

  // const [ setPreviewUrl] = useState(null);

  // // Progress
  // const [progressPercent, setProgressPercent] = useState(null);

  // useEffect(() => {
  //   const uploadFile = () => {
  //     const storageRef = ref(
  //       storage,
  //       `${appName}_${company}_${firstName}_userId:${userId}/ar_products/uploaded_3d_files/${currentDate}_${file.name}`
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

  //           setArFile(downloadURL);

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
  function pickedHandler(event) {
    let pickedFile;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  }

  // Upload function
  const uploadFile = (e) => {
    document.getElementById("select-three").click();

    setFile(e.target.files[0]);
    // setExtension(getExtension(e.target.files[0]["name"]).toLowerCase());

    // console.log("EXT:", extension);

    if (file !== null) {
      // put file to storage
      let fileRef = ref(
        storage,
        `${appName}_${company}_${firstName}_userId:${userId}/ar_products/uploaded_3d_files/${currentDate}_${file.name}`
      );

      // model_${currentDate}.${extension}

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
    <>
      {file === null ? (
        <IconTextButton
          onClick={() => uploadFile()}
          icon={<HiUpload className="mr-1" />}
          // mr={"mr-1"}
          text={"Upload 3D file"}
          // text={"Upload FBX file"}
        />
      ) : (
        <div
          // onClick={onClick}
          class=" text-green  rounded-md inline-flex items-center transition-color duration-200"
        >
          <span className="text-[14px]">Uploaded</span>
        </div>
      )}

      <input
        id="select-three"
        type="file"
        class="hidden"
        accept=".glb, .gltf, .obj, .fbx"
        onChange={pickedHandler}
      />
    </>
  );
};

export default ARfbxUpload;
