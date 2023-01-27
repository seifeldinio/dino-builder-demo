import { Switch } from "@headlessui/react";
// import React, { useState } from "react";
import useSound from "use-sound";
import { useStateContext } from "../../contexts/ContextProvider";
import clickB from "../../assets/sfx/clickB.mp3";
import clickA from "../../assets/sfx/clickB.mp3";

const NotificationsSettingsTab = () => {
  const { cartNotifEnabled, setCartNotifEnabled } = useStateContext();

  const [playA] = useSound(clickA, { volume: 0.5 });
  const [playB] = useSound(clickB, { volume: 0.5 });

  return (
    <div className="page-animation">
      <span className="text-[20px] font-normal dark:text-white">Settings</span>
      <div class="overflow-x-auto relative mt-5 outline outline-2 outline-[#F2F3F7] rounded-lg p-3.5 dark:outline-[#202020] dark:bg-section-dark">
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <span className="dark:text-white">
              Abandoned cart notifications
            </span>
            <span className="text-[14px] text-gray-400">
              Allows you to automatically send push notifications to people who
              added a product to their cart but didn't check out.
            </span>
          </div>
          <div className="ml-auto">
            {/* Toggle button */}

            <Switch
              onClick={() => {
                if (cartNotifEnabled === true) {
                  playB();
                } else if (cartNotifEnabled === false) {
                  playA();
                }
              }}
              checked={cartNotifEnabled}
              onChange={setCartNotifEnabled}
              className={`${
                cartNotifEnabled ? "bg-green" : "bg-gray-400 dark:bg-[#464646]"
              }
          relative inline-flex h-[24px] w-[49px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${
                  cartNotifEnabled ? "translate-x-6" : "translate-x-0"
                }
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSettingsTab;
