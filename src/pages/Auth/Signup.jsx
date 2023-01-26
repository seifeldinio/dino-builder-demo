import React, { useContext, useState } from "react";
// import AuthWebP from "../../assets/Illustrations/Auth.webp";
import {  loginAfterSignUp } from "../../contexts/authContext/apiCalls";
import { AuthContext } from "../../contexts/authContext/AuthContext";
// import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../contexts/userContext/UserContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStateContext } from "../../contexts/ContextProvider";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessWebsiteURL, setBusinessWebsiteURL] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  // Context
  // For sign up
  const { signUpMethod } = useCurrentUser();
  // For login after signup
  const { dispatch } = useContext(AuthContext);

  // Timer to login after sign up
  function sleeper(ms) {
    return function (x) {
      return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    };
  }

  // TO change illustration based on theme
  const { currentMode } = useStateContext();

  // Toasts
  const RequiredFields = () => {
    toast.error("Fill in all fields!", {
      autoClose: 1500,
    });
  };

  // const Progress = () => {
  //   toast.loading("Hold on a second.");
  // };

  // Navigation
  const navigate = useNavigate();

  return (
    <div className="flex flex-row h-screen content-center justify-center items-center  ml-[100px] mr-[100px] xl:ml-[250px] xl:mr-[250px]">
      <div className="flex-1 fade-up">
        <div className="flex flex-col w-[350px]">
          <span className="text-[35px] font-medium dark:text-white">
            Create an account.
          </span>
          <span className="text-[#ACACAC]">Kindly enter your details</span>
          {/* Form */}

          <form className="space-y-8  mt-[40px]">
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0  w-full group">
                {/* First Name */}
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[2px] border-[#DEDEE0] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#DEDEE0] peer"
                  placeholder=" "
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div class="relative z-0  w-full group">
                {/* Last name */}
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[2px] border-[#DEDEE0] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#DEDEE0] peer"
                  placeholder=" "
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            {/* Business name */}
            <div class="relative z-0  w-full group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[2px] border-[#DEDEE0] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#DEDEE0] peer"
                placeholder=" "
                required
                onChange={(e) => setBusinessName(e.target.value)}
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Business Name
              </label>
            </div>
            {/* Business website URL */}
            <div class="relative z-0  w-full group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[2px] border-[#DEDEE0] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#DEDEE0] peer"
                placeholder=" "
                required
                onChange={(e) => setBusinessWebsiteURL(e.target.value)}
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Business website URL
              </label>
            </div>

            <div class="relative z-0   group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[2px] border-[#DEDEE0] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#DEDEE0] peer"
                placeholder=" "
                required
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div class="relative z-0 mb-6  group ">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[2px] border-[#DEDEE0] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#DEDEE0] peer"
                placeholder=" "
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
          </form>

          {/* Signup button */}
          <button
            type="button"
            class="text-white bg-[#1d1d1d] hover:bg-[#2a2a2a] dark:bg-white dark:text-black dark:font-medium hover:dark:bg-[#ebebeb] font-normal rounded-lg text-sm px-5 py-3 mt-[35px] mb-2 transition-color duration-200"
            onClick={() => {
              if (
                firstName === "" ||
                lastName === "" ||
                businessName === "" ||
                businessWebsiteURL === "" ||
                emailAddress === "" ||
                password === ""
              ) {
                RequiredFields();
              } else {
                signUpMethod(
                  firstName,
                  lastName,
                  businessName,
                  businessWebsiteURL,
                  emailAddress,
                  password
                )
                  .then(sleeper(2000))
                  .then(() => {
                    // console.log(accountCreated);
                    // if (accountCreated == true) {

                    loginAfterSignUp(emailAddress, password, dispatch).then(
                      () => {
                        toast.dismiss();
                        navigate("/dashboard", { replace: true });
                      }
                    );
                    // }
                  });
              }
            }}
          >
            Create account
          </button>

          {/* Already have an account?*/}
          <div className="flex flex-row items-center  mt-[10px]  ">
            <div />
            <div className="ml-auto mr-auto">
              <span className="text-[14px] font-medium text-[#ACACAC]">
                Already have an account?
              </span>
              <span
                onClick={() => {
                  navigate("/login");
                }}
                className="text-[14px] font-medium ml-[5px] cursor-pointer dark:text-white"
              >
                Log in
              </span>
            </div>

            <div />
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-warp">
          <div className="ml-auto">
            {currentMode === "Light" ? (
              <LazyLoadImage
                className="scale-125"
                src="https://media.publit.io/file/StockPics/Auth.webp"
                effect="blur"
                placeholderSrc="https://media.publit.io/file/StockPics/Auth.webp"
              />
            ) : (
              <LazyLoadImage
                className="scale-125"
                src="https://media.publit.io/file/StockPics/Auth-dark.webp"
                effect="blur"
                placeholderSrc="https://media.publit.io/file/StockPics/Auth-dark.webp"
              />
            )}

            {/* <img className="scale-125" src={AuthWebP} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
