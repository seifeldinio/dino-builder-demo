import { BsCheck2 } from "react-icons/bs";
// import SignedContractSVG from "../../assets/Icons/SignedContract.svg";
// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";
// import BrandFilesSVG from "../../assets/Icons/BrandFiles.svg";

const UploadedBranding = () => {
  return (
    <div class="flex h-[230px] w-[230px]">
      <div class=" rounded-lg shadow-sm outline outline-2 outline-grey bg-white max-w-sm w-[230px] dark:outline-[#2C2C2C] dark:bg-divider-dark">
        <div className="flex-wrap ">
          <div className=" pt-2.5 pl-2.5 pr-2.5 ">
            <img
              className="absolute mt-[27px] ml-[80px]"
              src="https://media.publit.io/file/StockPics/BrandFiles.svg"
              alt=""
            />

            <div className="h-[100px] w-auto  bg-[#FAFAFA] rounded-lg dark:bg-[#2C2C2C]"></div>
          </div>
        </div>

        <div class="p-2.5">
          <h5 class="text-gray-900 text-[18px]  dark:text-white">Your brand</h5>
          <p class="text-gray-700  text-[13px] mb-2 dark:text-[#a6a6a6]">
            Brand identity to use as a branding guideline for your app.
          </p>
          {/* BUTTON */}
          <div className="flex flex-warp">
            <div className="ml-auto">
              <div className="flex flex-row items-center">
                {/* <span className="text-[14px] text-black ">Uploaded</span> */}
                <BsCheck2 className="text-green"/>
                {/* <img src={GreenCheckSVG} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadedBranding;
