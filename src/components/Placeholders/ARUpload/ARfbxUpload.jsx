// import React, { useEffect, useState } from "react";
import IconTextButton from "../../Buttons/IconTextButton";
// import UploadBlueSVG from "../../../assets/Icons/UploadBlue.svg";
// import { useStateContext } from "../../../contexts/ContextProvider";
// import moment from "moment";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from "../../../utils/FirebaseConfig";
// import UploadCircularProgress from "../../DocumentsPage/UploadCircularProgress";
// import { CircularProgressbar } from "react-circular-progressbar";
// import CircularAnimation from "../../DashboardPage/CircularAnimation";
import { HiUpload } from "react-icons/hi";

const ARfbxUpload = (props) => {
  const { onClick } = props;
 

  return (
    <IconTextButton
      onClick={onClick}
      icon={<HiUpload className="mr-1" />}
      // mr={"mr-1"}
      text={"Upload 3D file"}
      // text={"Upload FBX file"}
    />
  );
};

export default ARfbxUpload;
