// import socket from "../../socket/Socket";
// import GreenCheckSVG from "../../assets/Icons/GreenCheck.svg";
// import IconButton from "../Buttons/IconButton";
// import AddSVG from "../../assets/Icons/Add.svg";
// import Popup from "reactjs-popup";
// import CreditCardSVG from "../../assets/Icons/CreditCard.svg";
// import { GrClose } from "react-icons/gr";
// import GreenCheck from "../../assets/Icons/GreenCheck.svg";
// import PaymentItem from "./PaymentItem";
// import { useStore } from "../../contexts/storeContext/StoreContext";
// import { useEffect } from "react";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsCheck2 } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStateContext } from "../../contexts/ContextProvider";
import { paymentMethodsData } from "../../data/DemoData";

const PaymentTable = () => {
  // const { projectId } = props;

  // const { paymentRecoveryBool } = props;

  // const { paymentMethods, fetchPaymentMethods } = useStore();

  // console.log(`PaymentTable`, paymentMethods);

  // for navigation
  // const navigate = useNavigate();

  const { currentMode } = useStateContext();

  return (
    <>
      <div class="overflow-x-auto relative outline outline-2 outline-grey rounded-lg dark:outline-[#2C2C2C]">
        <table class="w-full  text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead class=" text-gray-700  bg-gray-50 dark:bg-main-dark dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Method
              </th>
              <th scope="col" class="py-3 px-6">
                <span className="ml-[400px]">Status</span>
              </th>
              <div className="flex flex-wrap ">
                <div className="ml-auto mr-20">
                  <th scope="col" class="py-3">
                    Scan
                  </th>
                </div>
              </div>
            </tr>
          </thead>
          <tbody>
            {paymentMethodsData?.map((item, i) => (
              <tr class="bg-white border-t dark:bg-main-dark dark:border-[#2C2C2C]">
                <th
                  scope="row"
                  class=" py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <LazyLoadImage
                    className="rounded-lg h-[20px]"
                    src={currentMode === "Light" ? item?.icon : item?.icon_dark} // use normal <img> attributes as props
                    effect="blur"
                    placeholderSrc={
                      currentMode === "Light" ? item?.icon : item?.icon_dark
                    }
                  />
                  {/* <img src={item?.icon} className="rounded-lg" alt="" /> */}
                </th>
                <td class="py-4 px-6">
                  <div className="flex flex-row items-center ml-[380px]">
                    <span className="text-green">Functional</span>
                    <BsCheck2 className="w-[20px] h-[20px] ml-2 text-green" />
                    {/* <img
                        src={GreenCheckSVG}
                        className="w-[20px] h-[20px] ml-2"
                        alt=""
                      /> */}
                  </div>
                </td>
                <div className="flex flex-wrap ">
                  <div className="ml-auto mr-10 mt-3">
                    <th scope="col" class="py-3">
                      <span className="text-[#797979] font-normal">
                        {" "}
                        No bugs detected.
                      </span>
                    </th>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="ml-auto">
          <div className="mt-5">
            {/* Add a new payment method button */}
            {/* Go to payment recovery page */}
            {/* {paymentRecoveryBool && (
              <button
                onClick={() => navigate("/store/payment-recovery")}
                class="mr-[15px] outline outline-1 outline-blue hover:bg-darkblue hover:text-white text-blue  py-0.5 px-2.5 rounded-md inline-flex items-center transition-color duration-200"
              >
                <span className="text-[14px] mr-1">Payment recovery</span>
                <BsArrowRight />
              </button>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentTable;

// Add a new payment method button
// <Popup
//   trigger={
//     <button>
//       <IconButton icon={AddSVG} />
//     </button>
//   }
//   closeOnDocumentClick={false}
//   nested={false}
//   modal
// >
//   <div className="h-auto p-3.5">
//     <div className="flex flex-row items-center">
//       <span className="text-[20px] text-[#25272E]">Add a new method</span>

//       <img src={CreditCardSVG} className="ml-2 h-[20px] w-[20px]" alt="" />

//       <div className="flex flex-1">
//         <div className="ml-auto">
//           <GrClose
//             className="cursor-pointer"
//             onClick={() => {
//               window.top.location.href = `http://localhost:3000/store`;
//             }}
//           />
//         </div>
//       </div>
//     </div>
//     <div className="mt-1">
//       <span className=" text-[14px] text-[#767676] font-normal ">
//         Request to add a new payment method in your app for your customers to
//         use in their checkout process.
//       </span>
//     </div>

//     {/* Payment items status */}

//     <PaymentItem
//       status={"Added"}
//       logo={
//         "https://firebasestorage.googleapis.com/v0/b/ipn-project.appspot.com/o/roboot.io%20temp%20imgs%2FMastercard.png?alt=media&token=3e78f140-3f88-4fc5-9227-88aade6271bf"
//       }
//     />

//     <PaymentItem
//       status={"Progress"}
//       date={"25/11/2023"}
//       logo={
//         "https://firebasestorage.googleapis.com/v0/b/ipn-project.appspot.com/o/roboot.io%20temp%20imgs%2FPaypal.png?alt=media&token=a19b577e-f562-4126-8d57-d7aae7371f2e"
//       }
//     />

//     <PaymentItem
//       status={"NotAdded"}
//       cost={"$200"}
//       logo={
//         "https://firebasestorage.googleapis.com/v0/b/ipn-project.appspot.com/o/roboot.io%20temp%20imgs%2FAmerican.png?alt=media&token=86b72fa8-a61d-4d48-a636-24faf1c17cc8"
//       }
//     />
//   </div>
// </Popup>;
