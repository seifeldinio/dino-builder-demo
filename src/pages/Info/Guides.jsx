import "../../_animations.scss";
// import PlayButtonSVG from "../../assets/Icons/PlayButton.svg";
// import { Disclosure } from "@headlessui/react";
// import { useGuide } from "../../contexts/guideContext/GuideContext";
// import { useEffect, useState } from "react";
// import { LionPlayer } from "lion-player";
// import PointingArrowLottie from "../../assets/Lotties/PointingArrow.json";
// import Lottie from "lottie-react-web";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import { useNavigate } from "react-router-dom";
// import { LoadingSkeleton } from "../../components";
const Guides = () => {
  return <div className="page-animation"></div>;
};

export default Guides;

// IF YOU WANT TO RESTORE THIS TO USE IT IN DEMO .. PLACE THIS PART INSIDE THE ABOVE <DIV CLASSNAME="PAGE-ANIMATION">

// <div className="md:mt-10 md:ml-10 md:mr-10 mt-20 ml-5 mr-5">
//   <div className="flex flex-wrap lg:flex-nowrap ">
//     <div className="flex flex-row w-full justify-center">
//       <span className="text-[27px] dark:text-white">Guides</span>
//       {/* Search bar */}
//       <form class="flex items-center ml-auto">
//         <div class="relative md:w-[300px] w-[200px]">
//           <input
//             type="text"
//             id="voice-search"
//             class="bg-white border border-gray-300  text-gray-900 text-sm rounded-full hover:bg-[#f9f9f9] dark:bg-[#2C2C2C] dark:border-[#323232] dark:text-white block w-full pl-10 p-2.5  transition-all duration-200"
//             placeholder="Search for guide tutorials"
//             required
//             onChange={(e) => {
//               // fetchGuide(e.target.value);
//             }}
//           />
//           <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//             <svg
//               aria-hidden="true"
//               class="w-5 h-5 text-gray-500 dark:text-gray-400"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                 clip-rule="evenodd"
//               ></path>
//             </svg>
//           </div>
//         </div>
//       </form>
//       {/* <div className="ml-auto">search</div> */}
//     </div>
//   </div>
//   {/* Page content */}
//   <div className="flex md:flex-row flex-col mt-[30px] ">
//     {/* Video player area */}
//     <div className="flex-1 md:mr-[25px] mr-0">
//       <div className="w-full   rounded-lg ">
//         {/* Place video player here */}
//         {activeLesson ? (
//           <LionPlayer
//             sources={[`${activeLesson?.lesson_video_url}`]}
//             autoplay={false}
//             activeColor={"#43a4ff"}
//             controls={true}
//             fluid={true}
//             playbackRates={[0.5, 1, 1.5, 2]}
//             nativeControlsForTouch={false}
//           />
//         ) : (
//           <>
//             <div className="flex md:h-[580px] h-[300px] outline-dashed outline-2 rounded-lg outline-[#e1e1e1] bg-white dark:bg-main-dark dark:outline-[#3d3d3d] items-center justify-center content-center">
//               <span className="text-[#797979] md:text-[18px] text-[0px] font-medium md:visible invisible ">
//                 Select a Guide from your playlist
//               </span>
//               <span className="text-[#797979] text-[18px] md:text-[0px] font-medium visible md:invisible">
//                 Select a Guide from your playlist 👇
//               </span>
//               <div className="md:visible invisible md:h-[100px] md:w-[100px] w-0 h-0">
//                 <Lottie
//                   options={{
//                     animationData: PointingArrowLottie,
//                     loop: true,
//                   }}
//                 />
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       <div className="flex flex-col mb-5">
//         <span className="mt-[15px] text-[20px] font-medium dark:text-white">
//           {activeLesson?.title}
//         </span>
//         {activeLesson && (
//           <hr className="w-full mt-[15px] dark:border-[#2C2C2C]" />
//         )}

//         {/* Description simplifed steps */}
//         <span className="mt-[10px] text-[16px] font-normal dark:text-white">
//           {activeLesson?.lesson_desc}
//           {/* Steps: <br />
//               1. Do this and this <br />
//               2. then do this <br /> 3. that's it .. done */}
//         </span>
//       </div>
//     </div>

//     {/* Playlist area */}

//     <div className="md:w-1/4 w-full mb-[50px]">
//       <div className=" h-[800px] w-full outline outline-2 outline-[#D9D9D9] dark:outline-[#2C2C2C] rounded-lg overflow-y-scroll overflow-x-hidden">
//         <div className="flex flex-col">
//           {/* Section accordion */}

//           {guide?.sections
//             ?.sort(
//               ({ section_order: previousID }, { section_order: currentID }) =>
//                 previousID - currentID
//             )
//             .map((section, i) => (
//               <Disclosure defaultOpen>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="mt-[10px] dark:text-white flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 transition-all duration-200">
//                       <span className="text-[16px]">{section?.title}</span>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className={`${
//                           open ? "rotate-180 transform" : ""
//                         } h-5 w-5 text-purple-500`}
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                         />
//                       </svg>
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="fade-down-lessons">
//                       {/* Playlist item */}
//                       {section?.lessons
//                         .sort(
//                           (
//                             { lesson_order: previousID },
//                             { lesson_order: currentID }
//                           ) => previousID - currentID
//                         )
//                         ?.map((lesson, i) => (
//                           <>
//                             {/* Playlist item */}
//                             <div
//                               key={lesson?.id}
//                               // ref={(el) =>
//                               //   (selectedRef.current[lesson?.id] = el)
//                               // }
//                               index={i}
//                               onClick={() => {
//                                 setActiveLesson(lesson);
//                               }}
//                               className="flex flex-row items-center  py-3  hover:bg-[#F7FBFF] hover:dark:bg-divider-dark transition-all duration-200 cursor-pointer"
//                             >
//                               <div className="h-[35px] w-[35px] mr-[15px] ml-[15px]">
//                                 <img
//                                   src="https://media.publit.io/file/StockPics/PlayButton.svg"
//                                   className="h-[35px] w-[35px] hover:scale-105 transition-all duration-200"
//                                   alt=""
//                                 />
//                               </div>
//                               <div className="flex flex-col">
//                                 <span className="text-[14px] dark:text-[#858585]">
//                                   {lesson?.lesson_duration}
//                                 </span>
//                                 <span className="text-[16px] dark:text-white">
//                                   {lesson?.title}
//                                 </span>
//                               </div>
//                             </div>
//                             <hr className="w-full dark:border-[#2C2C2C]" />
//                             {/* End Playlist Item */}
//                           </>
//                         ))}
//                     </Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
