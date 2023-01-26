import React, { useContext, useState } from "react";
// import AuthWebP from "../../assets/Illustrations/Auth.webp";
// import UnderlineSVG from "../../assets/Illustrations/Underline.svg";
import { login } from "../../contexts/authContext/apiCalls";
import { AuthContext } from "../../contexts/authContext/AuthContext";
// import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);

  // for dark mode conditions
  const { currentMode } = useStateContext();

  // Toasts
  const RequiredFields = () => {
    toast.error("Fill in all fields!", {
      autoClose: 1500,
    });
  };

  const Progress = () => {
    toast.loading("Hold on a second.");
  };

  // Navigation
  const navigate = useNavigate();

  return (
    <div className="flex flex-row h-screen content-center justify-center items-center  ml-[100px] mr-[100px] xl:ml-[250px] xl:mr-[250px]">
      <div className="flex-1 fade-up">
        <div className="flex flex-col w-[350px]">
          <span className="text-[35px] font-medium dark:text-white">
            Login to your account.
          </span>
          <span className="text-[#ACACAC]">
            Welcome back, kindly enter your details
          </span>
          {/* Form */}

          <form className="space-y-8">
            <div class="relative z-0   group mt-[60px]">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[2px] border-[#DEDEE0] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#DEDEE0] peer"
                placeholder=" "
                required
                onChange={(e) => setEmail(e.target.value)}
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

          {/* Remember me */}

          <div className="flex flex-row  items-center ">
            <div class="flex items-center mt-[30px] ">
              <input
                checked
                id="checked-checkbox"
                type="checkbox"
                value=""
                class="w-[15px] h-[15px] text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checked-checkbox"
                class="ml-2 text-[13px] font-normal text-[#ACACAC] dark:text-gray-500"
              >
                Remember me
              </label>
            </div>
            {/* Forgot Password? */}
            <button
              onClick={() => {
                navigate("/forgot-password");
              }}
              className="ml-auto mt-[25px]"
            >
              <span className="text-[13px] cursor-pointer	hover:underline  underline-offset-3 dark:text-white">
                Forgot password?
              </span>
            </button>
          </div>
          {/* Login button */}
          <button
            type="button"
            class="text-white bg-[#1d1d1d] hover:bg-[#2a2a2a] dark:bg-white dark:text-black dark:font-medium hover:dark:bg-[#ebebeb] font-normal rounded-lg text-sm px-5 py-3 mt-[35px] mb-2 transition-color duration-200"
            onClick={() => {
              if (email === "" || password === "") {
                RequiredFields();
              } else {
                Progress();
                login(email, password, dispatch).then(() => {
                  toast.dismiss();
                  navigate("/dashboard", { replace: true });
                });
              }
            }}
          >
            Log in
          </button>

          {/* Don't have an account? */}
          <div className="flex flex-row items-center mt-[5px] ml-[20px] mr-[20px] content-center justify-center">
            <span className="text-[14px] font-medium text-[#ACACAC]">
              Don't have an account?
            </span>

            <div
              className="flex flex-col items-center mt-[10px] dark:mt-0 dark:ml-2 cursor-pointer"
              onClick={() => {
                navigate("/signup");
              }}
            >
              <span className="text-[14px] font-medium dark:text-white">
                Sign up for free
              </span>
              {/* {currentMode === "Light" && (
                <img className="" src={UnderlineSVG} alt="" />
              )} */}
            </div>
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

export default Login;
