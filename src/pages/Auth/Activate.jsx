import "../../_animations.scss";
// import LookingGIF from "../../assets/Gifs/Looking.gif";
// import { TextIconBlueButton } from "../../components";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import { useCurrentUser } from "../../contexts/userContext/UserContext";
import { useNavigate } from "react-router-dom";

const Activate = () => {
  const { fetchCurrentUser, currentUser } = useCurrentUser();

  // For navigation
  const navigate = useNavigate();

  useEffect(() => {
    fetchCurrentUser();

    if (currentUser?.activated === true) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="flex flex-col h-screen  items-center overflow-x-hidden overflow-y-hidden dark:bg-white">
      <div className="flex-1">
        <div className="z-40 absolute bg-white h-[50px] w-[600px] mt-[320px]"></div>

        <div className="fade-down">
          <img
            className=" brightness-105 mt-[-200px]"
            src="https://media.publit.io/file/StockPics/Looking.gif"
            alt=""
          />
        </div>
      </div>
      <div className="mb-[150px] ">
        <div className="flex flex-col items-center mt-[90px]">
          <span className="text-[22px] font-medium">
            Your account is not activated yet.
          </span>
          <span className="text-[#686868]">
            Book a demo to activate your account.
          </span>
          <div />

          <div className="flex flex-wrap mt-[15px]">
            <button class="ml-auto mr-[2px] outline outline-1 outline-blue hover:bg-darkblue  hover:text-white hover:scale-110 text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200">
              <span className="text-[14px]">Book a demo</span>
              <AiOutlineArrowRight className="ml-[4px]" />
            </button>
          </div>

          <div />
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Activate;
