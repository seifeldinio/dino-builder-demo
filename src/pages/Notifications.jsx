import Lottie from "lottie-react-web";
import React from "react";
import { NotificationTile } from "../components";
// import { useCurrentUser } from "../contexts/userContext/UserContext";
import { notificationsData } from "../data/DemoData";
import NoNotificationsLottie from "../assets/Lotties/NoNotifications.json";

const Notifications = () => {
  // console.log(notifications);

  const unReadNotifications = notificationsData?.filter(
    (notification) => notification?.read === false
  );

  return (
    <div className="page-animation">
      <div className="md:mt-10 md:ml-10 md:mr-10 mt-20 ml-5 mr-5 overflow-y-hidden overflow-x-hidden">
        <div className="flex flex-wrap lg:flex-nowrap ">
          <div className="flex flex-col w-full">
            <span className="text-[27px] dark:text-white">Notifications</span>
            <div className="row mt-1 text-[15px]">
              <span className="text-gray-400	">
                {unReadNotifications?.length == 0 ? (
                  <>No new notifications.</>
                ) : unReadNotifications?.length == 1 ? (
                  <>{unReadNotifications?.length} New notification.</>
                ) : (
                  <>{unReadNotifications?.length} New notifications.</>
                )}
              </span>
            </div>
            <hr className="w-full mt-[18px] dark:border-[#2C2C2C] " />

            {notificationsData?.length == 0 ? (
              <>
                {/* Empty no notifications sent at all yet */}
                <div className="flex-1 w-full items-center content-center justify-center  ">
                  <div className="flex flex-col justify-center items-center content-center">
                    <div className="h-[70px] w-[70px] mt-[60px]">
                      <div className="absolute h-[15px] w-[15px] bg-red rounded-full ml-[44px] mt-[12px] z-50" />

                      <Lottie
                        options={{
                          animationData: NoNotificationsLottie,
                          loop: false,
                        }}
                      />
                    </div>

                    <span className="font-medium dark:text-white">
                      No notifications yet.
                    </span>
                    <span className="text-[14px] text-[#6f6f6f]">
                      Check back later for updates.
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {notificationsData?.map((item, i) => (
                  <NotificationTile
                    onClick={() => {
                      window.location.href = `${item?.route}`;
                      // updateNotificationToRead(item?.id, item?.route);
                    }}
                    fromName={item?.from_name}
                    fromProfilePic={item?.from_profile_pic}
                    title={item?.title}
                    body={item?.body}
                    timestamp={item?.createdAt}
                    read={item?.read}
                    route={item?.route}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <div className="mb-[40px]" />
      </div>
    </div>
  );
};

export default Notifications;
