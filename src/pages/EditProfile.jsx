import React, { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AvatarUploadRemove } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
// import { useProjectByUserId } from "../contexts/projectContext/ProjectByUserIdContext";
// import { useCurrentUser } from "../contexts/userContext/UserContext";
import { currentUserData, projectData } from "../data/DemoData";

const EditProfile = () => {
  // for navigation
  const navigate = useNavigate();

  // Toasts
  const RequiredFields = () => {
    toast.error("No changes! 🤷", {
      autoClose: 1500,
    });
  };

  const Saved = () => {
    toast.success("Saved!", {
      autoClose: 1500,
    });
  };

  const { setProfilePicture, firstName, setFirstName, lastName, setLastName } =
    useStateContext();

  // For inputs
  const [inputFirstName, setInputFirstName] = useState(firstName);
  const [inputLastName, setInputLastName] = useState(lastName);

  return (
    <div className="page-animation">
      <div className="md:mt-10 md:ml-10 md:mr-10 h-full mt-20 ml-5 mr-5 md:overflow-x-visible overflow-x-hidden">
        <div className="flex flex-wrap lg:flex-nowrap ">
          <div className="flex flex-row items-center">
            {/* Back button */}
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="flex h-[40px] w-[40px] justify-center content-center hover:dark:bg-[#323232] dark:text-white cursor-pointer hover:bg-[#eaeaea] mt-[1px] px-3 py-3 rounded-full  transition-color duration-200  mr-[7px]"
            >
              <HiOutlineArrowLeft className="scale-110" />
            </button>
            {/* Title */}
            <span className="text-[27px] dark:text-white">
              Profile Settings
            </span>
          </div>
        </div>
        {/* Page content */}
        <AvatarUploadRemove
          avatarUrl={currentUserData?.avatar_url}
          // userId={currentUserData?.id}
          // email={currentUserData?.email}
          // firstName={firstName}
          // appName={projectData?.app_name}
          // company={currentUserData?.company}
          onClickRemove={() => {
            setProfilePicture(
              "https://media.publit.io/file/StockPics/DefaultProfilePic-h.webp"
            );
            // updateProfilePic(
            //   "https://media.publit.io/file/StockPics/DefaultProfilePic-h.webp"
            // );
            // window.location.reload();
          }}
        />
        <hr className="border-[#F0F0F0] mt-7 mb-6 dark:border-[#2C2C2C]" />
        <div className="flex flex-row items-center space-x-4">
          {/* First name */}
          <div className="flex flex-col">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="inline-full-name"
              class="bg-gray-50 border border-gray-300 py-1.5 text-gray-900 dark:placeholder:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#272727] dark:border-[#272727] dark:placeholder-gray-900 placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={firstName}
              required
              onChange={(e) => {
                setInputFirstName(e.target.value);
              }}
            />
          </div>
          {/* Last name */}
          <div className="flex flex-col">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 py-1.5 text-gray-900 dark:placeholder:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#272727] dark:border-[#272727] dark:placeholder-gray-900 placeholder-gray-900 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={lastName}
              required
              onChange={(e) => {
                setInputLastName(e.target.value);
              }}
            />
          </div>
        </div>
        {/* Email Disabled */}
        <div className="flex flex-col mt-7">
          <div className="flex flex-row  items-center w-[180px]">
            <label
              for="first_name"
              class="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <span className="ml-auto text-[13px] text-gray-400">
              For logging in
            </span>
          </div>

          <input
            type="text"
            id="disabled-input"
            aria-label="disabled input"
            class="mb-6 bg-gray-100 border mt-2 border-gray-300 py-1.5 w-[180px] text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 cursor-not-allowed dark:bg-[#272727] dark:border-[#272727] dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={currentUserData?.email}
            disabled
          />
        </div>
        <div className="h-[20px]" />
        <div className="flex flex-row items-center space-x-4">
          {/* Change password button */}
          {/* <button
            // onClick={onClick}
            class="outline outline-2 outline-blue hover:bg-[#eaf4ff] text-blue dark:hover:bg-[#2C2C2C] py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200 "
          >
            <span className="text-[14px]">Change password</span>
          </button> */}
          {/* Save button */}
          <button
            onClick={() => {
              if (inputFirstName !== "" && inputLastName === "") {
                setFirstName(inputFirstName);
                setLastName(inputLastName);
                Saved();
              } else if (inputFirstName === "" && inputLastName !== "") {
                setFirstName(inputFirstName);
                setLastName(inputLastName);
                Saved();
              } else if (inputFirstName !== "" && inputLastName !== "") {
                setFirstName(inputFirstName);
                setLastName(inputLastName);
                Saved();
              } else {
                RequiredFields();
              }

              // navigate(-1);
              // if (firstName !== "" && lastName !== "") {
              //   updateUser(firstName, lastName);
              //   navigate("/profile");
              // } else if (firstName !== "") {
              //   updateUser(firstName, currentUser?.last_name);
              //   navigate("/profile");
              // } else if (lastName !== "") {
              //   updateUser(currentUser?.first_name, lastName);
              //   navigate("/profile");
              // } else {
              //   RequiredFields();
              // }
            }}
            class="bg-blue hover:bg-darkblue outline outline-2 outline-blue hover:outline-darkblue text-white  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200 "
          >
            <span className="text-[14px]">Save changes</span>
          </button>
          {/* <TextIconBlueButton text={"Save changes"} /> */}
        </div>
        <div className="h-[20px]" />
      </div>
    </div>
  );
};

export default EditProfile;
