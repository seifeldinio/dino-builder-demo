import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import { RiFolderTransferLine } from "react-icons/ri";
// import { useStateContext } from "../../contexts/ContextProvider";
// import { useStore } from "../../contexts/storeContext/StoreContext";
import UploadProductsCSV from "./UploadProductsCSV";
import UploadRegionsCSV from "./UploadRegionsCSV";

const NullStoreView = (props) => {
  const { appName } = props;
  const { company } = props;
  const { firstName } = props;
  const { userId } = props;
  const { projectId } = props;

  // To get the state once the CSV Files got uploaded
  // const { csvFiles } = useStateContext();

  //   To update CSV Files
  // const { updateCSVFiles } = useStore();

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row items-center">
        <span className="text-[27px]">Transfer your data</span>
        <RiFolderTransferLine className="h-[20px] w-[20px] ml-[10px]" />
      </div>
      {/* Upload CSV Products Card */}
      <UploadProductsCSV
        appName={appName}
        company={company}
        firstName={firstName}
        userId={userId}
      />
      {/* Upload regions and fees card */}
      <UploadRegionsCSV
        appName={appName}
        company={company}
        firstName={firstName}
        userId={userId}
        projectId={projectId}
      />
    </div>
  );
};

export default NullStoreView;
