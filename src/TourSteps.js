const steps = [
  {
    selector: '[data-tour="1"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal">
          ☝️ This is your development progress (updates automatically).
          <br />
          <span className="font-bold">Click on any progress indicator. 🖱️</span>
        </span>
      </div>
    ),
    highlightedSelectors: [".ReactModal__Content"],
    mutationObservables: [".ReactModal__Overlay"],
  },
  {
    selector: '[data-tour="2"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal">
          ☝️ Your updates' progress.
          <br />
          <span className="font-normal text-[#8d8d8d]">
            Progress from ... <br /> (Feature to Building to Done)
          </span>
        </span>
      </div>
    ),
  },
  {
    selector: '[data-tour="3"]',
    content: "☝️ Bug reports' status can be found here.",
  },
  {
    selector: '[data-tour="4"]',
    content: "👇 This is a list of all your app releases.",
  },
  { selector: '[data-tour="5"]', content: "Let's get to the fun part 🚀" },
  {
    selector: '[data-tour="6"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal">
          Here you'll find a simulation of your app running. 👉
          <br />
          <span className="font-normal text-[#8d8d8d]">
            You can interact with your simple built demo app!
          </span>
        </span>
      </div>
    ),
  },
  {
    selector: '[data-tour="7"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal">
          These nodes are the building 'Blox' of your app. ⛏️
          <br />
          <span className="font-normal text-[#8d8d8d]">
            Each node represents a page including its functionalities.
          </span>
        </span>
      </div>
    ),
  },
  { selector: '[data-tour="8"]', content: "Let's dive even deeper! 🥽" },
  {
    selector: '[data-tour="9"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal">
          By clicking on 'View' 👀
          <br />
          <span className="font-normal ">
            you can see the AR Products that are available in your app. 🔥{" "}
          </span>
        </span>
      </div>
    ),
    // content: " ",
  },
  {
    selector: '[data-tour="10"]',
    content:
      "You can switch between products 😄, and interact using your mouse. 🖱️",
  },
  { selector: '[data-tour="11"]', content: "Enable expanded view! 👀" },
  {
    selector: '[data-tour="12"]',
    content: "🖱️👆",
  },
  { selector: '[data-tour="13"]', content: "Click here to minimize. ☝️" },
  {
    selector: '[data-tour="14"]',
    content: "☝️ Click here to close the side panel.",
  },
  {
    selector: '[data-tour="15"]',
    content: "Click 'Start' to broadcast push notifications to your users! 🔔",
  },
  {
    selector: '[data-tour="16"]',
    content:
      "Type any text ⌨️ to see a preview of how it will look like on your users' phones. 👀",
  },
  {
    selector: '[data-tour="17"]',
    content: (
      <div className="flex flex-col ">
        <span className="font-normal ">
          You can find more options below.
          {/* <br /> */}
          {/* <span className="font-normal text-[#8d8d8d]">
            <span className="font-medium mr-1 text-black">Recents:</span> To
            check your recently sent notifications.
          </span>
          <br />
          <span className="font-normal text-[#8d8d8d]">
            <span className="font-medium mr-1 text-black">Devices:</span> To
            check the devices that uses your app.
          </span>
          <br />
          <span className="font-normal text-[#8d8d8d]">
            <span className="font-medium mr-1 text-black">Competition:</span> An
            AI Analysis to clone your competitors' notifications and offers.
          </span>
          <br />
          <span className="font-normal text-[#8d8d8d]">
            <span className="font-medium mr-1 text-black">Settings:</span> To
            enable automated notifications.
          </span> */}
        </span>
      </div>
    ),
    // content: "  Settings: To enable automated notifications.",
  },
  // {
  //   selector: '[data-tour="18"]',
  //   content: "Check the devices that uses your app",
  // },
  // {
  //   selector: '[data-tour="19"]',
  //   content: "Competition tab to clone notifications",
  // },
  // { selector: '[data-tour="20"]', content: "Abandoned cart settings" },
  { selector: '[data-tour="18"]', content: "We got you covered! 🙋‍♀️" },
  {
    selector: '[data-tour="19"]',
    content: "Dedicated support. 🙌",
  },
  { selector: '[data-tour="20"]', content: "Access documents from here. 📄" },
  {
    selector: '[data-tour="21"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal mr-1">
          Your Bloxat Built app is protected by a Master Contract <span> </span>
          <span className="font-normal text-[#8d8d8d]">
            that you can download, sign 🖋️ then upload. 👍
          </span>
        </span>
      </div>
    ),
    // content:
    //   "Your Bloxat Built app is protected by a Master Contract that you can download, sign 🖋️ then upload. 👍",
  },
  {
    selector: '[data-tour="22"]',
    // content: (
    //   <div className="flex flex-col">
    //     <span className="font-normal">
    //       Your Bloxat Built app is protected by a Master Contract <br />
    //       <span className="font-normal text-[#8d8d8d]">
    //         that you can download, sign 🖋️ then upload. 👍
    //       </span>
    //     </span>
    //   </div>
    // ),
    content:
      "Upload a ZIP file that contains your brand identity for App Store designs. 🎨",
  },
  { selector: '[data-tour="23"]', content: "An overview of your app. 💎" },
  {
    selector: '[data-tour="24"]',
    content: "Some basic information about your app. 👍",
  },
  {
    selector: '[data-tour="25"]',
    content: "Here's all the available features in your app. 👾",
  },
  { selector: '[data-tour="26"]', content: "Your Bloxat Built profile. 🦾" },
  {
    selector: '[data-tour="27"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal">
          You can check your account info 👔,
          <br />
          <span className="font-normal ">
            & if there's any new notifications 🔔.
          </span>
        </span>
      </div>
    ),
  },
  {
    selector: '[data-tour="28"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal mr-1">
          A list of expected feedbacks sent by your project manager
          <span> </span>
          <span className="font-normal text-[#8d8d8d]">
            to get your approval on the latest app release. 👍
          </span>
        </span>
      </div>
    ),
  },
  { selector: '[data-tour="29"]', content: "Your account's settings. ⚙️" },
  {
    selector: '[data-tour="30"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal ">
          <span className="text-[#8d8d8d]">
            Beside the quick access in the settings tab,
          </span>
          <br />
          <span className="font-normal text-black">
            Bloxat Built is a sight for sore eyes with <span> </span>
            <span className="font-medium">Light Mode</span> 👁️.
          </span>
          <br />
          <span className="font-normal text-black">
            Switch to <span className="font-medium">Dark Mode</span>
            <span> </span>
            when you want to turn off the lights 💡.
          </span>
        </span>
      </div>
    ),
    // content: "  Switch to Dark Mode when you want to turn on the lights 💡.",
  },
  {
    selector: '[data-tour="31"]',
    content: "These are the active add-ons in your account. 🎁",
  },

  {
    selector: '[data-tour="32"]',
    content: (
      <div className="flex flex-col">
        <span className="font-normal ">
          That's it! 🙌
          <br />
          <span className="font-normal text-[#8d8d8d]">
            You can <span> </span>
            <span className="font-medium mr-1 underline">explore around</span>
            <span> </span>
            by yourself in this demo without any commitment,
          </span>
          <br />
          <span className="font-normal ">
            when you're ready <span> </span>
            <span className="font-medium mr-1 text-black">
              book a free call to disscuss a suitabe plan for your business.
            </span>
            <span> </span>
          </span>
          <br />
          <span className="font-normal ">Got it? 😄</span>
          <br />
        </span>
      </div>
    ),
  },
];

export default steps;
