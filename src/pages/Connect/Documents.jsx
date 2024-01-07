import "../../_animations.scss";
import {
  SignedCard,
  SquarishCard,
  UploadedBranding,
} from "../../components/index";
import { projectData } from "../../data/DemoData";

const Documents = () => {
  return (
    <div className="page-animation">
      <div className="md:mt-10 md:ml-10 md:mr-10 mt-20 ml-5 mr-5">
        <div data-tour="20">
          <div className="flex flex-wrap lg:flex-nowrap ">
            <div className="flex flex-row items-center">
              <span className="text-[26px] dark:text-white font-bold">
                Documents
              </span>
              {/* <img className="ml-1 w-[23px] h-[23px]" src={File} alt="" /> */}
            </div>
          </div>
          <div className="row mt-1 text-[15px]">
            <span className="text-[#595959]	dark:text-[#B5B5B5]">
              Confidentiality is our top priority. Your project is protected by
              these contracts and we'll never share it with third parties.
            </span>

            <hr className="mt-4 mb-5 dark:border-[#353535]" />
          </div>

          {/* Area */}
          <div className="flex md:h-[280px] h-full bg-greyelement rounded-md dark:bg-section-dark">
            <div className="flex md:flex-row flex-col md:space-x-7 md:space-y-0 space-y-7 m-5">
              {/* Card */}
              <SquarishCard
                svg="https://media.publit.io/file/StockPics/Contract.svg"
                signed={projectData?.signed_contract == null ? false : true}
                title={"Master Contract"}
                desc={"Contract between you and Bloxat for your app."}
                contractFileDownload={projectData?.contract}
              />

              <SignedCard
                uploadedOnDate={projectData?.signed_contract_upload_date}
              />
            </div>
          </div>
        </div>

        {/* Second section */}
        <div data-tour="21" className="delay-4">
          <div className="mt-8">
            <span className="text-[26px] dark:text-white font-bold">
              Branding
            </span>
          </div>
          <span className="mt-1 text-gray-400	">
            Upload your brand identity file (PDF)
          </span>

          <div className="flex h-[280px] mt-5 bg-greyelement rounded-md mb-[50px] dark:bg-section-dark">
            <div className="flex flex-row space-x-7 m-5">
              {/* Upload Card*/}
              <UploadedBranding />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
