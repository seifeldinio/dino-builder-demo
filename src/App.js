import "./App.css";
import "react-circular-progressbar/dist/styles.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "reactjs-popup/dist/index.css";
import "react-toastify/dist/ReactToastify.css";
import "lion-player/dist/lion-skin.min.css";
import "react-loading-skeleton/dist/skeleton.css";
// import "intro.js/introjs.css";
// import "react-user-onboarding/dist/index.css";
// import "./custom-tree.css";
// import io from "socket.io-client";
import React, { useEffect, lazy, Suspense, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // useLocation,
  Navigate,
} from "react-router-dom";
// import { RiSettings3Line } from "react-icons/ri";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { toast } from "react-toastify";

import {
  DemoLabel,
  LoadingSkeleton,
  // ExpandedARView,
  MobileHeader,
  MobileSidebar,
  MobileStartModal,
  // NotConnectedBanner,
  Sidebar,
  StartTourModal,
  UploadARSidePanel,
  ViewARSidePanel,
  ViewBugSidePanel,
  ViewTaskSidePanel,
} from "./components";
// import {
//   // Signup,
//   // Connect,
//   // Documents,
//   // Prototype,
//   // Billing,
//   // Dashboard,
//   // Store,
//   // Guides,
//   // ProjectOverview,
//   // Profile,
//   // Login,
//   // Notifications,
//   // ForgotPassword,
//   OTP,
//   Reset,
//   // PushNotifications,
//   // PaymentRecovery,
//   // Settings,
//   // EditProfile,
// } from "./pages";

import { useStateContext } from "./contexts/ContextProvider";
// import { BsLaptop } from "react-icons/bs";
// import WelcomeModal from "./components/DashboardPage/WelcomeModal";
// import useSound from "use-sound";
// import startUp from "./assets/sfx/startUp.mp3";

// import NotActivated from "./pages/Auth/Activate";
// import Activate from "./pages/Auth/Activate";
// import jwt_decode from "jwt-decode";
// import OneSignal from "react-onesignal";
// import runOneSignalLocal from "./utils/OneSignalLocalHostSetup";

// const Signup = lazy(() => import("./pages/Auth/Signup"));
const Connect = lazy(() => import("./pages/Connect/Connect"));
const Documents = lazy(() => import("./pages/Connect/Documents"));
const Prototype = lazy(() => import("./pages/Connect/Prototype"));
// const Billing = lazy(() => import("./pages/Home/Billing"));
const Dashboard = lazy(() => import("./pages/Home/Dashboard"));
const Store = lazy(() => import("./pages/Home/Store"));
const Guides = lazy(() => import("./pages/Info/Guides"));
const ProjectOverview = lazy(() => import("./pages/Info/ProjectOverview"));
const Profile = lazy(() => import("./pages/Profile"));
// const Login = lazy(() => import("./pages/Auth/Login"));
const Notifications = lazy(() => import("./pages/Notifications"));
// const ForgotPassword = lazy(() => import("./pages/Auth/ForgotPassword"));
const PushNotifications = lazy(() => import("./pages/Home/PushNotifications"));
const PaymentRecovery = lazy(() => import("./pages/Home/PaymentRecovery"));
const Settings = lazy(() => import("./pages/Settings"));
const EditProfile = lazy(() => import("./pages/EditProfile"));

toast.configure();

const App = () => {
  // Connect to socket.io
  // useSocketSetup();

  const {
    // activeMenu,
    uploadARSidePanel,
    viewARSidePanel,
    // expandedARView,
    // errorConnectingToSocket,
    mobileSidebar,
    viewBugSidePanel,
    viewTaskSidePanel,
    setCurrentMode,
    currentMode,
    showStartTourModal,
    setShowStartTourModal,
    showMobileStart,
    setShowMobileStart,
    goToApp,
    goToStore,
    goToPush,
    goToConnect,
    goToDocs,
    goToOverview,
    goToProfile,
    goToSettings,
  } = useStateContext();

  // Fetch current user to see if the account is activated or not
  // const { currentUser } = useCurrentUser();

  // Get user_id from token
  // var decoded = jwt_decode(token);

  // useEffect(() => {}, []);

  // const activated = currentUser?.activated;

  // console.log(activated);

  // const {  } = useStateContext;
  // useEffect(() => {
  //   setTimeout(() => setShowStartTourModal(true), 1000);
  // }, []);

  // To check if it's opened on a phone or not
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  // Get local storage data
  // If start tour modal has been shown
  const tourModalPopped = localStorage.getItem("tour-modal-popped");
  const mobileModalPopped = localStorage.getItem("mobile-modal-popped");

  useEffect(() => {
    // Use OneSignal to recieve & send notifications
    // const runOneSignal = async () => {
    //   await OneSignal.init({ appId: "23986baf-6455-4a72-b1eb-26778cf4ae6f" });
    // };
    // runOneSignal();
    // runOneSignalLocal();

    // Start the tour
    // Show start tour modal
    window.addEventListener("resize", handleWindowSizeChange);
    if (width > 768 && tourModalPopped !== "true") {
      // Desktop pop up to start tour
      setTimeout(() => setShowStartTourModal(true), 300);
    } else if (width < 768 && mobileModalPopped !== "true") {
      // Mobile pop up
      setTimeout(() => setShowMobileStart(true), 300);
    }

    // setIsOpen(true);

    // Get saved theme and set it and if there's none then make it light mode by default in localstorage
    if (localStorage.getItem("robootThemeMode") === null) {
      localStorage.setItem("robootThemeMode", "Light");
    } else if (localStorage.getItem("robootThemeMode") === "Dark" || "Light") {
      setCurrentMode(localStorage.getItem("robootThemeMode"));
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative select-none dark:bg-main-dark">
          {/* Demo Label */}
          <DemoLabel />
          {/* Left menu */}
          <div className="invisible w-0 md:w-72 md:visible md:fixed sidebar dark:bg-main-dark dark:border-r   dark:border-[#2C2C2C] bg-white ">
            <Sidebar />
          </div>
          <div
            className={`bg-white min-h-screen w-full dark:bg-main-dark md:ml-72`}
          >
            {/* Header visible only on mobile */}
            {<MobileHeader />}
            <div>
              {/* Right Side Panels */}
              {/* Upload AR Side Panel */}
              {uploadARSidePanel && <UploadARSidePanel />}
              {/* View AR Side Panel */}
              {viewARSidePanel && <ViewARSidePanel />}
              {/* View Bug Details Side Panel */}
              {viewBugSidePanel && <ViewBugSidePanel />}
              {/* View Task Details Side Panel */}
              {viewTaskSidePanel && <ViewTaskSidePanel />}
              {/* Expanded AR 3D Model View */}
              {/* {expandedARView && <ExpandedARView />} */}
              {/* If there's an error connecting to Websocket display banner that user isn't connected */}
              {/* {errorConnectingToSocket && <NotConnectedBanner />} */}
              {/* Mobile sidebar opened */}
              {mobileSidebar && <MobileSidebar />}
              {showStartTourModal && <StartTourModal />}
              {showMobileStart && <MobileStartModal />}

              {goToApp && (
                <>
                  <Suspense fallback={<LoadingSkeleton />}>
                    <Prototype />
                  </Suspense>
                </>
              )}
              {goToStore && (
                <>
                  <Suspense fallback={<LoadingSkeleton />}>
                    <Store />
                  </Suspense>
                </>
              )}
              {goToPush && (
                <>
                  <Suspense fallback={<LoadingSkeleton />}>
                    <PushNotifications />
                  </Suspense>
                </>
              )}
              {goToConnect && (
                <>
                  <Suspense fallback={<LoadingSkeleton />}>
                    <Connect />
                  </Suspense>
                </>
              )}
              {goToDocs && (
                <>
                  <Suspense fallback={<LoadingSkeleton />}>
                    <Documents />
                  </Suspense>
                </>
              )}
              {goToOverview && (
                <>
                  <Suspense fallback={<LoadingSkeleton />}>
                    <ProjectOverview />
                  </Suspense>
                </>
              )}
              {goToProfile && (
                <>
                  <Suspense fallback={<LoadingSkeleton />}>
                    <Profile />
                  </Suspense>
                </>
              )}
              {goToSettings && (
                <>
                  <Suspense fallback={<LoadingSkeleton />}>
                    <Settings />
                  </Suspense>
                </>
              )}

              <Suspense fallback={<LoadingSkeleton />}>
                <Routes>
                  {/* Home */}
                  <Route
                    path="/"
                    element={<Navigate replace to="/dashboard" />}
                    // element={<Dashboard />}
                  />
                  {/* These conditions are to make sure that demo navigation state isn't active */}
                  <Route
                    path="/tour"
                    element={
                      goToApp ||
                      goToStore ||
                      goToPush ||
                      goToConnect ||
                      goToDocs ||
                      goToOverview ||
                      goToProfile ||
                      goToSettings ? null : (
                        <Dashboard />
                      )
                    }
                  />

                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/store" element={<Store />} />

                  <Route
                    path="/store/push-notifications"
                    element={<PushNotifications />}
                  />
                  <Route
                    path="/store/payment-recovery"
                    element={<PaymentRecovery />}
                  />
                  {/* <Route path="/billing" element={<Billing />} /> */}
                  {/* Connect */}
                  <Route path="/connect" element={<Connect />} />
                  <Route path="/app" element={<Prototype />} />
                  <Route path="/documents" element={<Documents />} />
                  {/* Info */}
                  <Route path="/overview" element={<ProjectOverview />} />
                  <Route path="/guides" element={<Guides />} />
                  {/* Bottom */}
                  <Route path="/profile" element={<Profile />} />
                  {/* Settings */}
                  <Route path="/settings" element={<Settings />} />
                  {/* Notifications */}
                  <Route path="/notifications" element={<Notifications />} />

                  {/* Edit Profile Page */}
                  <Route path="/edit" element={<EditProfile />} />
                  {/* Auth */}
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
