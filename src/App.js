import "./App.css";
import "react-circular-progressbar/dist/styles.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "reactjs-popup/dist/index.css";
import "react-toastify/dist/ReactToastify.css";
// import "lion-player/dist/lion-skin.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  DemoLabel,
  LoadingSkeleton,
  MobileHeader,
  MobileSidebar,
  MobileStartModal,
  Sidebar,
  StartTourModal,
  UploadARSidePanel,
  ViewARSidePanel,
  ViewBugSidePanel,
  ViewTaskSidePanel,
} from "./components";

import { useStateContext } from "./contexts/ContextProvider";

const Connect = lazy(() => import("./pages/Connect/Connect"));
const Documents = lazy(() => import("./pages/Connect/Documents"));
const Prototype = lazy(() => import("./pages/Connect/Prototype"));
// const Billing = lazy(() => import("./pages/Home/Billing"));
const Dashboard = lazy(() => import("./pages/Home/Dashboard"));
const Store = lazy(() => import("./pages/Home/Store"));
const Guides = lazy(() => import("./pages/Info/Guides"));
const ProjectOverview = lazy(() => import("./pages/Info/ProjectOverview"));
const Profile = lazy(() => import("./pages/Profile"));
const Notifications = lazy(() => import("./pages/Notifications"));
const PushNotifications = lazy(() => import("./pages/Home/PushNotifications"));
const PaymentRecovery = lazy(() => import("./pages/Home/PaymentRecovery"));
const Settings = lazy(() => import("./pages/Settings"));
const EditProfile = lazy(() => import("./pages/EditProfile"));

toast.configure();

const App = () => {
  // Connect to socket.io
  // useSocketSetup();

  const {
    uploadARSidePanel,
    viewARSidePanel,
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

    // Get saved theme and set it and if there's none then make it light mode by default in localstorage
    if (localStorage.getItem("robootThemeMode") === null) {
      localStorage.setItem("robootThemeMode", "Light");
    } else if (localStorage.getItem("robootThemeMode") === "Dark" || "Light") {
      setCurrentMode(localStorage.getItem("robootThemeMode"));
    }

    // Disable Right click
    // const handleContextmenu = (e) => {
    //   e.preventDefault();
    // };
    // document.addEventListener("contextmenu", handleContextmenu);
    // return function cleanup() {
    //   document.removeEventListener("contextmenu", handleContextmenu);
    // };
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative select-none dark:bg-main-dark overflow-x-hidden">
          {/* Demo Label */}
          <DemoLabel />
          {/* Left menu */}
          {/* sidebar */}
          <div className="invisible w-0 md:w-[252px] md:visible md:fixed dark:bg-main-dark dark:border-r   dark:border-[#2C2C2C] bg-[#FAFAFA]">
            <Sidebar />
          </div>
          <div
            className={`bg-white min-h-screen w-full dark:bg-main-dark md:ml-[252px]`}
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
