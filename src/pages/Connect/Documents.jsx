import "../../_animations.scss";

// import File from "../../assets/Icons/File.svg";
import {
  DocUpload,
  SignedCard,
  SquarishCard,
  // TextIconBlueButton,
  UploadedBranding,
} from "../../components/index";
// import ContractSVG from "../../assets/Icons/Contract.svg";
// import UploadSVG from "../../assets/Icons/Upload.svg";
// import Lottie from "lottie-react-web";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
// import { useEffect } from "react";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
import BrandingUpload from "../../components/DocumentsPage/BrandingUpload";
// import { useNavigate } from "react-router-dom";
import { currentUserData, projectData } from "../../data/DemoData";

const Documents = () => {
  // GET CURRENT USER DATA
  // const { currentUser, fetchCurrentUser } = useCurrentUser();

  // GET PROJECT THAT BELONGS TO USER DATA
  // const { project, fetchProjectByUserId } = useProjectByUserId();

  // For navigation
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetchCurrentUser();
  //   fetchProjectByUserId();

  //   if (currentUser?.activated === false) {
  //     navigate("/activate");
  //   }
  // }, [currentUser?.activated]);

  return (
    <div className="page-animation">
      <div className="md:mt-10 md:ml-10 md:mr-10 mt-20 ml-5 mr-5">
        <div data-tour="21">
          <div className="flex flex-wrap lg:flex-nowrap ">
            <div className="flex flex-row items-center">
              <span className="text-[27px] dark:text-white">Documents</span>
              {/* <img className="ml-1 w-[23px] h-[23px]" src={File} alt="" /> */}
            </div>
          </div>
          <div className="row mt-1 text-[15px]">
            <span className="text-gray-400	">
              Confidentiality is our top priority. Your Bloxat Built app is
              protected by these contracts and we'll never share it with third
              parties.
            </span>
          </div>

          {/* Area */}
          <div className="flex md:h-[280px] h-full mt-5 bg-greyelement rounded-md dark:bg-section-dark">
            <div className="flex md:flex-row flex-col md:space-x-7 md:space-y-0 space-y-7 m-5">
              {/* Card */}
              <SquarishCard
                svg="https://media.publit.io/file/StockPics/Contract.svg"
                signed={projectData?.signed_contract == null ? false : true}
                title={"Master Contract"}
                desc={"Contract between you and Bloxat for your app."}
                contractFileDownload={projectData?.contract}
              />

              {/* Upload Card*/}
              {projectData?.signed_contract === null ? (
                <DocUpload
                  title={"Upload your signed contract"}
                  loop={true}
                  appName={projectData?.app_name}
                  company={currentUserData?.company}
                  firstName={currentUserData?.first_name}
                  userId={currentUserData?.id}
                />
              ) : (
                <>
                  <SignedCard
                    uploadedOnDate={projectData?.signed_contract_upload_date}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Second section */}
        <div data-tour="22" className="delay-4">
          <div className="mt-5">
            <span className="text-[20px] font-normal dark:text-white">
              Branding
            </span>
          </div>
          <span className="mt-1 text-gray-400	">
            Upload your brand identity files (Logo, and color scheme) in a ZIP
            file to be used in your app.
          </span>

          <div className="flex h-[280px] mt-5 bg-greyelement rounded-md mb-[50px] dark:bg-section-dark">
            <div className="flex flex-row space-x-7 m-5">
              {/* Upload Card*/}
              {projectData?.brand_docs === null ? (
                <BrandingUpload
                  signedContractUploaded={
                    projectData?.signed_contract === null ? false : true
                  }
                  appName={projectData?.app_name}
                  company={currentUserData?.company}
                  firstName={currentUserData?.first_name}
                  userId={currentUserData?.id}
                  title={"Upload your branding files"}
                  loop={false}
                />
              ) : (
                <>
                  <UploadedBranding />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
