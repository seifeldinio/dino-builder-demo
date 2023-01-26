import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { storage } from "../../utils/FirebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import moment from "moment";

import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStateContext } from "../../contexts/ContextProvider";
import { Tooltip } from "antd";

const ProfilePicture = (props) => {
  // const { updateProfilePic, fetchCurrentUser } = useCurrentUser();

  const { avatarUrl } = props;
  // const { userId } = props;
  // const { email } = props;
  // const { firstName } = props;
  // const { appName } = props;
  // const { company } = props;
  const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");
  // FIle
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState(null);
  // Progress
  const [progressPercent, setProgressPercent] = useState(null);
  // Progress Toast
  const toastId = useRef(null);

  const { tourStarted, profilePicture, setProfilePicture } = useStateContext();

  // const ProgressToast = () => {
  //   toast.loading(`Uploading ${progressPercent}%`);
  // };

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(
        storage,
        `demo/profile_pics/demo_time:${currentDate}`
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
          if (toastId.current === null) {
            toastId.current = toast.loading(
              `Upload in Progress ${progress.toFixed(0)}%`,
              progressPercent
            );
          } else {
            toast.update(toastId.current, {
              render: `Upload in Progress ${progress.toFixed(0)}%`,
            });
            // toast.update({
            //   id: toastId.current,
            //   content: `Upload in Progress ${progress}%`,
            // });
          }
          // if () {
          //   toast.loading(`Uploading ${progress}%`);
          // } else {
          //   toast.dismiss();
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
            // PUT REQUEST --> Update Profile picture
            // updateProfilePic(downloadURL);
            setProfilePicture(downloadURL);
            // Done with toast dismiss it
            // toast.success(toastId.current, "Uploaded!", {
            //   autoClose: 1500,
            // });
            toast.dismiss();
            // fetchCurrentUser();
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

  function pickedHandler(event) {
    let pickedFile;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  }

  // Upload function
  const uploadFile = (e) => {
    document.getElementById("select-file").click();

    setFile(e.target.files[0]);

    if (file !== null) {
      // put file to storage
      let fileRef = ref(storage, `demo/profile_pics/demo_time:${currentDate}`);

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
      {/* Change profile picture overlay button */}
      {tourStarted ? (
        <Tooltip placement="bottom" title={"Finish your tour first! 😊"}>
          <button
            // onClick={uploadFile}
            disabled={progressPercent !== null && progressPercent < 100}
            className="z-50 absolute md:mt-[80px] md:ml-[85px] mt-[100px] ml-[65px] justify-center items-center content-center shadow-sm outline outline-3 outline-white   rounded-full  h-[30px] w-[30px] bg-blue cursor-pointer hover:scale-110 transition-all duration-200 dark:outline-0"
          >
            <div className="flex justify-center items-center content-center  h-[30px] w-[30px]">
              <AiOutlineCloudUpload className="w-[20px] h-[20px] text-white " />
            </div>
          </button>
        </Tooltip>
      ) : (
        <button
          onClick={uploadFile}
          disabled={progressPercent !== null && progressPercent < 100}
          className="z-50 absolute md:mt-[80px] md:ml-[85px] mt-[100px] ml-[65px] justify-center items-center content-center shadow-sm outline outline-3 outline-white   rounded-full  h-[30px] w-[30px] bg-blue cursor-pointer hover:scale-110 transition-all duration-200 dark:outline-0"
        >
          <div className="flex justify-center items-center content-center  h-[30px] w-[30px]">
            <AiOutlineCloudUpload className="w-[20px] h-[20px] text-white " />
          </div>
        </button>
      )}

      <input
        id="select-file"
        type="file"
        class="hidden"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      {/* Profile picture */}
      <div className="h-[90px] w-[90px] md:h-[120px] md:w-[120px] md:mt-0 mt-10 ">
        <LazyLoadImage
          className="z-1 rounded-full h-[90px] w-[90px]  md:h-[120px] md:w-[120px] object-cover	 border-[5px] shadow-md border-white"
          src={previewUrl != null ? previewUrl : profilePicture}
          effect="blur"
          placeholderSrc={avatarUrl}
        />
        {/* <img
          className="rounded-full h-[90px] w-[90px]  md:h-[120px] md:w-[120px] object-cover	 border-[5px] shadow-md border-white"
          src={previewUrl != null ? previewUrl : avatarUrl}
          alt=""
        /> */}
      </div>
    </>
  );
};

export default ProfilePicture;
