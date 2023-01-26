import "../../_animations.scss";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import { useState } from "react";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";

const OTP = () => {
  // Navigation
  const navigate = useNavigate();

  // Email variable
  // OTP Hash variable

  const [ setOTPCode] = useState(null);

  return (
    <div className="page-animation">
      <div className="flex  h-screen  w-full justify-center content-center items-center">
        <div className="flex flex-col items-center mb-[100px]">
          <div className="h-[100px] w-[100px]">
            <img
              src="https://media.publit.io/file/StockPics/VerifyEmail.webp"
              alt=""
            />
          </div>
          <span className="text-[20px] font-medium mt-[10px] dark:text-white">
            Verification
          </span>
          <span className="text-center mt-[5px] text-[14px] text-[#5e5e5e] dark:text-[#9c9c9c]">
            Enter OTP code sent to your email.
          </span>

          <div className="flex flex-col items-center mt-[10px] w-[260px]">
            <PinInput
              length={4}
              initialValue=""
              onChange={(value, index) => {
                // setOTPHash(value);
              }}
              type="numeric"
              inputMode="number"
              style={{ padding: "10px" }}
              inputStyle={{ borderColor: "#5e5e5e", borderRadius: "5px" }}
              inputFocusStyle={{ borderColor: "#706fe6" }}
              onComplete={(value, index) => {
                setOTPCode(value);
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
          {/* Button */}
          <button
            onClick={() => {
              navigate("/reset");
            }}
            className="flex w-[240px] h-[40px] bg-blue mt-[15px] rounded-lg cursor-pointer items-center hover:scale-105 transition-all duration-200 hover:bg-darkblue"
          >
            <span className="items-center content-center justify-center w-full text-white ">
              Continue
            </span>
          </button>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="flex flex-row items-center mt-[15px] cursor-pointer  "
          >
            <BiArrowBack className="text-[#8D8D8D] scale-110 mr-[7px]" />
            <span className="text-[#8D8D8D] text-[14px] ">Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;
