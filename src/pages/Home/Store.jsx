import "../../_animations.scss";
// import Lottie from "lottie-react-web";
// import BoxSVG from "../../assets/Icons/Box.svg";
// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";
import {
  ARCard,
  // IconButton,
  NotificationsCard,
  // NullStoreView,
  PaymentTable,
  // SmallGreyButton,
  StoreManagerCard,
  // TextIconBlueButton,
  // UploadProductsCSV,
  // UploadRegionsCSV,
} from "../../components/index";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import { useStore } from "../../contexts/storeContext/StoreContext";
// import { useProjectByUserId } from "../../contexts/projectContext/ProjectByUserIdContext";
// import { RiFolderTransferLine } from "react-icons/ri";
// import OpenBoxSVG from "../../assets/Illustrations/OpenBox.svg";
// import ShippingSVG from "../../assets/Illustrations/Shipping.svg";
// import { useStateContext } from "../../contexts/ContextProvider";
// import { BsArrowRight } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { arProductData, projectData, storeData } from "../../data/DemoData";

const Store = () => {
  // GET CURRENT USER DATA
  // const { currentUser, fetchCurrentUser } = useCurrentUser();

  // GET STORE DATA
  // const { store, fetchStore, arProducts, fetchARProducts } = useStore();

  // GET PROJECT THAT BELONGS TO USER DATA
  // const { project, fetchProjectByUserId } = useProjectByUserId();

  // GET AR PRODUCTS

  // For navigation
  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetchCurrentUser();

  //   fetchProjectByUserId();

  //   fetchStore(project?.id);

  //   fetchARProducts(0);

  //   if (currentUser?.activated === false) {
  //     navigate("/activate");
  //   }
  // }, [currentUser?.activated, project?.id, store?.products_csv]);

  // console.log(store?.products_csv, store?.regions_fees_csv);

  // console.log("PROJECT ID", project?.id);

  return (
    <div className="page-animation">
      <div className="md:mt-10 md:ml-10 md:mr-10 h-full mt-10 ml-5 mr-5 ">
        <>
          {/* Store data is available */}
          <div className="flex flex-wrap lg:flex-nowrap ">
            <div className="flex flex-row items-center md:mt-0 mt-10">
              <span className="text-[26px] dark:text-white font-bold">
                Store
              </span>
              {/* <FiBox className="ml-2.5 w-[23px] h-[23px] dark:text-white" /> */}
              {/* <img className="ml-2.5 w-[23px] h-[23px]" src={BoxSVG} alt="" /> */}
            </div>
          </div>
          <div className="row mt-1 text-[15px]">
            <span className="text-gray-400	">
              Manage your AR Products, Payment methods, and more.
            </span>

            <hr className="mt-4 mb-5" />
          </div>
          <div className="flex md:flex-row flex-col md:space-x-7  md:space-y-0 space-y-7 items-start ">
            {/* h-[152px] */}
            {/* Cards */}
            <ARCard
              arProductsLimit={storeData?.ar_products_limit}
              arProductsCount={arProductData?.count}
            />

            <StoreManagerCard
              storeManagerLink={storeData?.store_manager_link}
              storeUsername={storeData?.store_username}
              storePassword={storeData?.store_password}
            />
            <NotificationsCard appStatus={projectData?.app_status} />
          </div>
          {/* Payment methods */}
          <div className="delay-4">
            <div className="mt-12">
              <span className="text-[26px] dark:text-white font-bold">
                In-app payment methods
              </span>
            </div>

            <div className="mt-7">
              {/* Table */}

              <PaymentTable
                projectId={projectData?.id}
                paymentRecoveryBool={storeData?.payment_recovery}
              />
            </div>

            {/* Space */}
            <div className="mb-[50px]" />
          </div>
        </>
      </div>
    </div>
  );
};

export default Store;
