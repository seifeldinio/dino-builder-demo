import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  // Navigation
  const navigate = useNavigate();
  return (
    <div className="page-animation">
      <div className="flex  h-screen  w-full justify-center content-center items-center">
        <div className="flex flex-col items-center mb-[100px]">
          <div className="h-[70px] w-[70px]">
            <img
              src="https://media.publit.io/file/StockPics/ThinkingEmoji.webp"
              alt=""
            />
          </div>
          <span className="text-[20px] font-medium mt-[10px]">
            Reset password
          </span>

          <div className="flex flex-col items-start mt-[25px] w-[240px]">
            {/* New password */}
            <div class="relative z-0   w-[240px]  group  ">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[2px] border-[#DEDEE0] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#DEDEE0] peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                New password
              </label>
            </div>
            {/* Confirm new password */}
            <div class="relative z-0   w-[240px]  group mt-[22px] mb-[15px]">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[2px] border-[#DEDEE0] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#DEDEE0] peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm new password
              </label>
            </div>
          </div>
          {/* Button */}
          <button className="flex w-[240px] h-[40px] bg-blue mt-[15px] rounded-lg cursor-pointer items-center hover:scale-105 transition-all duration-200 hover:bg-darkblue">
            <span className="items-center content-center justify-center w-full text-white ">
              Confirm
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

export default Reset;
