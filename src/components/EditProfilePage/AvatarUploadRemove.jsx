import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";
import { useStateContext } from "../../contexts/ContextProvider";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
import { storage } from "../../utils/FirebaseConfig";

const AvatarUploadRemove = (props) => {
  const { avatarUrl } = props;
  const { onClickRemove } = props;

  // const { updateProfilePic } = useCurrentUser();
  // const { updateProfilePic, fetchCurrentUser } = useCurrentUser();

  //   const { avatarUrl } = props;
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

  const { profilePicture, setProfilePicture } = useStateContext();

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
            // Done with toast dismiss it
            setProfilePicture(downloadURL);
            // toast.success(toastId.current, "Uploaded!", {
            //   autoClose: 1500,
            // });
            // fetchCurrentUser();

            toast.dismiss();
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
    <div className="flex flex-row items-center mt-6 space-x-4">
      <LazyLoadImage
        className="rounded-full object-cover w-[80px] h-[80px] transition-color duration-200 shadow-md outline outline-4 outline-white"
        src={previewUrl != null ? previewUrl : profilePicture}
        effect="blur"
        placeholderSrc={avatarUrl}
      />
      {/* <img
            src={currentUser?.avatar_url}
            className="rounded-full object-cover w-[80px] h-[80px] transition-color duration-200 shadow-md outline outline-4 outline-white"
            alt=""
          /> */}
      {/* Upload another profile picture button */}
      <button
        onClick={uploadFile}
        class="outline outline-2 outline-blue hover:bg-[#eaf4ff] text-blue dark:hover:bg-[#2C2C2C]  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200 "
      >
        <span className="text-[14px]">Upload</span>
      </button>
      <input
        id="select-file"
        type="file"
        class="hidden"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      {/* Remove button */}
      <button
        onClick={onClickRemove}
        class="outline outline-2 outline-[#C2C2C2] dark:outline-[#717171] dark:hover:bg-[#717171] hover:bg-[#C2C2C2] text-[#C2C2C2] hover:text-white  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200 "
      >
        <span className="text-[14px]">Remove</span>
      </button>
    </div>
  );
};

export default AvatarUploadRemove;
