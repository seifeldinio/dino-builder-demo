import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {};

export const ContextProvider = ({ children }) => {
  // Maine left side menu's state
  const [activeMenu, setActiveMenu] = useState(true);
  //   Store's AR Side panel to upload AR Products
  const [uploadARSidePanel, setUploadARSidePanel] = useState(false);
  // Store's AR view side panel
  const [viewARSidePanel, setViewARSidePanel] = useState(false);
  // View bug's detail side panel
  const [viewBugSidePanel, setViewBugSidePanel] = useState(false);
  // Set bug data by kanban's bug id to display in the view bug side panel
  const [bugData, setBugData] = useState(null);
  // Expanded bug carousel
  const [expandedBugCarousel, setExpandedBugCarousel] = useState(false);
  // View task's detail side panel
  const [viewTaskSidePanel, setViewTaskSidePanel] = useState(false);
  // Set task data by kanban's task id to display in the view task side panel
  const [taskData, setTaskData] = useState(null);
  // Expanded 3D Product Model View
  const [expandedARView, setExpandedARView] = useState(false);
  // Mobile sidebard state panel
  const [mobileSidebar, setMobileSidebar] = useState(false);
  //   Screenshots url of bug report
  const [bugURLs, setBugURLs] = useState([]);
  // State is the bug report sent or not to switch the modal UI accrodingly
  const [bugSent, setBugSent] = useState(false);
  // Product and Regions csv uploaded state
  // const [csvFiles, setCsvFiles] = useState([]);
  // AR Product Front Image
  // const [arFrontImg, setArFrontImg] = useState(null);
  // AR Product Back Image
  // const [arBackImg, setArBackImg] = useState(null);
  // AR Product Right Image
  // const [arRightImg, setArRightImg] = useState(null);
  // AR Product Left Image
  // const [arLeftImg, setArLeftImg] = useState(null);
  // AR 3d file upload
  // const [arFile, setArFile] = useState(null);
  // FOR ABANDOMENT CART NOTIFICATIONS
  const [cartNotifEnabled, setCartNotifEnabled] = useState(true);
  // Project Progress (State in demo to change its state in the walkthrough)
  const [projectProgress, setProjectProgress] = useState(0);
  const [projectStatus, setProjectStatus] = useState("Under development");
  // Demo App Page changes
  const [demoAppPage, setDemoAppPage] = useState("main");
  const [demoAppProudctId, setDemoAppProudctId] = useState(1);
  // PUSH NOTIFICATION TITLE AND MESSAGE STATES
  const [pushNotificationTitle, setPushNotificationTitle] = useState("");
  const [pushNotificationBody, setPushNotificationBody] = useState("");
  // SHOW START TOUR MODAL
  const [showStartTourModal, setShowStartTourModal] = useState(false);
  const [tourStarted, setTourStarted] = useState(false);
  const [showMobileStart, setShowMobileStart] = useState(false);
  const [goToApp, setGoToApp] = useState(false);
  const [goToStore, setGoToStore] = useState(false);
  const [goToPush, setGoToPush] = useState(false);
  const [goToConnect, setGoToConnect] = useState(false);
  const [goToDocs, setGoToDocs] = useState(false);
  const [goToOverview, setGoToOverview] = useState(false);
  const [goToProfile, setGoToProfile] = useState(false);
  const [goToSettings, setGoToSettings] = useState(false);
  // A state variable to show if the user is connected to websocket or not
  // const [errorConnectingToSocket, setErrorConnectingToSocket] = useState(false);
  // Temporary profile data
  const [profilePicture, setProfilePicture] = useState(
    "https://media.publit.io/file/StockPics/DefaultProfilePic-h.webp"
  );
  const [firstName, setFirstName] = useState("Seif");
  const [lastName, setLastName] = useState("Radwane");
  // THEME (DARK MODE/ LIGHT MODE)
  const [currentMode, setCurrentMode] = useState("Light");

  // Theme setter functions
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("robootThemeMode", e.target.value);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        uploadARSidePanel,
        setUploadARSidePanel,
        viewARSidePanel,
        setViewARSidePanel,
        viewBugSidePanel,
        setViewBugSidePanel,
        bugData,
        setBugData,
        expandedBugCarousel,
        setExpandedBugCarousel,
        viewTaskSidePanel,
        setViewTaskSidePanel,
        taskData,
        setTaskData,
        expandedARView,
        setExpandedARView,
        bugURLs,
        setBugURLs,
        bugSent,
        setBugSent,
        // csvFiles,
        // setCsvFiles,
        // arFrontImg,
        // setArFrontImg,
        // arBackImg,
        // setArBackImg,
        // arRightImg,
        // setArRightImg,
        // arLeftImg,
        // setArLeftImg,
        // arFile,
        // setArFile,
        pushNotificationTitle,
        setPushNotificationTitle,
        pushNotificationBody,
        setPushNotificationBody,
        // errorConnectingToSocket,
        // setErrorConnectingToSocket,
        mobileSidebar,
        setMobileSidebar,
        currentMode,
        setCurrentMode,
        setMode,
        projectProgress,
        setProjectProgress,
        projectStatus,
        setProjectStatus,
        demoAppPage,
        setDemoAppPage,
        demoAppProudctId,
        setDemoAppProudctId,
        cartNotifEnabled,
        setCartNotifEnabled,
        showStartTourModal,
        setShowStartTourModal,
        tourStarted,
        setTourStarted,
        showMobileStart,
        setShowMobileStart,
        goToApp,
        setGoToApp,
        goToStore,
        setGoToStore,
        goToPush,
        setGoToPush,
        goToConnect,
        setGoToConnect,
        goToDocs,
        setGoToDocs,
        goToOverview,
        setGoToOverview,
        goToProfile,
        setGoToProfile,
        goToSettings,
        setGoToSettings,
        profilePicture,
        setProfilePicture,
        firstName,
        setFirstName,
        lastName,
        setLastName,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
