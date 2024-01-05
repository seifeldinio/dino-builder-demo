import { BsCheck2 } from "react-icons/bs";
// import SignedContractSVG from "../../assets/Icons/SignedContract.svg";
// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";

const SignedCard = (props) => {
  const { uploadedOnDate } = props;

  return (
    <div class="flex h-[230px] w-[230px]">
      <div class=" rounded-lg shadow-sm outline outline-2 outline-grey bg-white max-w-sm w-[230px] dark:bg-[#2C2C2C] dark:outline-[#2C2C2C]">
        <div className="flex-wrap ">
          <div className=" pt-2.5 pl-2.5 pr-2.5 ">
            <img
              className="absolute mt-[27px] ml-[80px]"
              src="https://media.publit.io/file/StockPics/SignedContract.svg"
              alt=""
            />

            <div className="h-[100px] w-auto  bg-[#FAFAFA] rounded-lg dark:bg-[#2C2C2C]"></div>
          </div>
        </div>

        <div class="p-2.5">
          <h5 class="text-gray-900 text-[18px]  dark:text-white">
            Signed Contract
          </h5>
          <p class="text-gray-700  text-[13px] mb-2 dark:text-[#a6a6a6]">
            Your signed contract, uploaded on {uploadedOnDate}
          </p>
          {/* BUTTON */}
          <div className="flex flex-warp">
            <div className="ml-auto">
              <div className="flex flex-row items-center">
                {/* <span className="text-[14px] text-black ">Uploaded</span> */}
                <div className="bg-[#D7F7C2] p-1 rounded-md">
                  <BsCheck2 className="text-[#006908]" />
                </div>

                {/* <img src={GreenCheckSVG} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedCard;
