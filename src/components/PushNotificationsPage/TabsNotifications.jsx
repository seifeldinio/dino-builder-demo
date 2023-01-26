import React, { useState } from "react";
import CompetitionTable from "./CompetitionTable";
import DevicesTable from "./DevicesTable";
import NotificationsSettingsTab from "./NotificationsSettingsTab";
import RecentTable from "./RecentTable";

const TabsNotifications = () => {
  // Tabs state
  const [recentsTab, setRecentsTab] = useState(true);
  const [devicesTab, setDevicesTab] = useState(false);
  const [competitionTab, setCompetitionTab] = useState(false);
  const [settingsTab, setSettingsTab] = useState(false);

  //   Make this one a global state
  //   const [sendNotificationTab, setSendNotificationTab] = useState(false);
  return (
    <>
      {" "}
      <div class="mb-4 border-b border-gray-200 dark:border-[#2C2C2C] mt-4">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="myTabContent"
          role="tablist"
        >
          {/* Recents Tab Button */}
          <li class="mr-2" role="presentation">
            <button
              class={
                recentsTab === true
                  ? "md:inline-block hidden p-4 rounded-t-lg border-b-2 border-blue transition-all duration-200 dark:text-white "
                  : "md:inline-block hidden inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 hover:dark:text-white hover:dark:border-[#424242] dark:text-[#bdbdbd]  transition-all duration-200"
              }
              onClick={() => {
                setRecentsTab(true);
                setDevicesTab(false);
                setSettingsTab(false);
                setCompetitionTab(false);
              }}
              id="profile-tab"
              data-tabs-target="profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Recents
            </button>
          </li>
          {/* Devices Tab Button */}
          <li class="mr-2" role="presentation">
            <button
              class={
                devicesTab === true
                  ? "inline-block p-4 rounded-t-lg border-b-2 border-blue transition-all duration-200 dark:text-white"
                  : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 hover:dark:text-white hover:dark:border-[#424242] dark:text-[#bdbdbd]  transition-all duration-200"
              }
              onClick={() => {
                setDevicesTab(true);
                setRecentsTab(false);
                setSettingsTab(false);
                setCompetitionTab(false);
              }}
              id="dashboard-tab"
              data-tabs-target="dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Devices
            </button>
          </li>
          {/* Competition Tab Button */}
          <li class="mr-2" role="presentation">
            <button
              class={
                competitionTab === true
                  ? "inline-block p-4 rounded-t-lg border-b-2 border-blue transition-all duration-200 dark:text-white"
                  : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 hover:dark:text-white hover:dark:border-[#424242] dark:text-[#bdbdbd]  transition-all duration-200"
              }
              onClick={() => {
                setCompetitionTab(true);
                setSettingsTab(false);
                setDevicesTab(false);
                setRecentsTab(false);
              }}
              id="dashboard-tab"
              data-tabs-target="dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Competition
            </button>
          </li>
          {/* Settings Tab Button */}
          <li class="mr-2" role="presentation">
            <button
              class={
                settingsTab === true
                  ? "inline-block p-4 rounded-t-lg border-b-2 border-blue transition-all duration-200 dark:text-white"
                  : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 hover:dark:text-white hover:dark:border-[#424242] dark:text-[#bdbdbd]  transition-all duration-200"
              }
              onClick={() => {
                setSettingsTab(true);
                setDevicesTab(false);
                setRecentsTab(false);
                setCompetitionTab(false);
              }}
              id="dashboard-tab"
              data-tabs-target="dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Settings
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        {/* Recent Tab Content*/}
        <div
          class={recentsTab === false ? "hidden" : ""}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {/* Recent notifications table */}

          <RecentTable />
        </div>

        {/* Devices Tab Content */}
        <div
          class={devicesTab === false ? "hidden" : ""}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          {/* Devices table */}

          <DevicesTable />
        </div>
        {/* Competition Tab Content */}
        <div
          class={competitionTab === false ? "hidden" : ""}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          {/* Devices table */}

          <CompetitionTable />
        </div>
        {/* Settings Tab Content */}
        <div
          class={settingsTab === false ? "hidden" : ""}
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          {/* Devices table */}

          <NotificationsSettingsTab />
        </div>
      </div>
    </>
  );
};

export default TabsNotifications;
