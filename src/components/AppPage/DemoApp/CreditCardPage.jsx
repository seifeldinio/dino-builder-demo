import { Alert } from "antd";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import useSound from "use-sound";
import { useStateContext } from "../../../contexts/ContextProvider";
import PaymentListTile from "./widgets/PaymentListTile";
// import clickA from "../../../assets/sfx/clickA.mp3";
import clickB from "../../../assets/sfx/clickB.mp3";

const CreditCardPage = () => {
  const {  setDemoAppPage } = useStateContext();
  const [selectedTile, setSelectedTile] = useState("Visa");
  const [alertVisible, setAlertVisible] = useState(false);

  // const [playA] = useSound(clickA, { volume: 0.5 });
  const [playB] = useSound(clickB, { volume: 0.5 });

  return (
    <div className="page-animation flex flex-col mt-5 ">
      <div className="flex flex-row items-center bg-white shadow-sm py-1">
        {/* Back button */}
        <button
          onClick={() => {
            setDemoAppPage("main");
            playB();
          }}
          className="flex ml-5 h-[40px] w-[40px] justify-center content-center  cursor-pointer hover:bg-[#eaeaea] mt-[1px] px-3 py-3 rounded-full  transition-color duration-200  mr-[7px]"
        >
          <HiOutlineArrowLeft className="" />
        </button>
        <span className="font-medium text-[18px]">Payment</span>
      </div>
      {/* Content */}
      <div className="flex flex-col w-[335px] pl-5 pr-5 pb-5 space-y-4">
        {/* <div className="flex justify-center items-center content-center mt-4 ">
          <LazyLoadImage
            src={"https://media.publit.io/file/StockPics/demo-visa.webp"}
          />
        </div> */}
        <span className="mt-[25px] mb-[12px] font-medium text-[#1f1f1f]">
          Choose a payment method:{" "}
        </span>
        {/* List tiles */}
        <PaymentListTile
          icon={"https://media.publit.io/file/StockPics/visa.webp"}
          title={"Visa"}
          selected={selectedTile === "Visa" ? true : false}
          onClick={() => {
            setSelectedTile("Visa");
          }}
          width={"w-[32px]"}
          // mr={"mr-5"}
          mr={"mr-1"}
        />
        <PaymentListTile
          icon={"https://media.publit.io/file/StockPics/mastercard.webp"}
          title={"Mastercard"}
          selected={selectedTile === "Mastercard" ? true : false}
          onClick={() => {
            setSelectedTile("Mastercard");
          }}
          width={"w-[32px]"}
          // mr={"mr-5"}
          mr={"mr-1"}
        />
        <PaymentListTile
          icon={"https://media.publit.io/file/StockPics/apple-pay.webp"}
          title={"Apple Pay"}
          selected={selectedTile === "Apple Pay" ? true : false}
          onClick={() => {
            setSelectedTile("Apple Pay");
          }}
          width={"w-[40px]"}
          mr={"mr-1"}
        />
        <PaymentListTile
          icon={"https://media.publit.io/file/StockPics/g-pay.webp"}
          title={"Google Pay"}
          selected={selectedTile === "Google Pay" ? true : false}
          onClick={() => {
            setSelectedTile("Google Pay");
          }}
          width={"w-[40px]"}
          mr={"mr-1"}
        />
        <div className="h-[3px]" />
        {/* Proceed button */}
        <div
          onClick={() => {
            setAlertVisible(true);
            // playA();
          }}
          className="flex items-center content-center justify-center bg-white rounded-lg border-2 border-black hover:border-b-4 cursor-pointer "
        >
          <span className="text-black font-bold p-2 select-none">Proceed</span>
          <BsArrowRight />
        </div>
        {alertVisible && (
          <div className="fade-down">
            <Alert
              message="Bloxat Simulator: No need to enter your payment details, due to it being just a simple demo app."
              banner
              closable
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreditCardPage;
