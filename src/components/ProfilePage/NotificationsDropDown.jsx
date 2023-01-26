import "../../_animations.scss";
import React from "react";
// import { useCurrentUser } from "../../contexts/userContext/UserContext";
// import NotificationTile from "../NotificationsPage/NotificationTile";
import SmallNotificationTile from "./SmallNotificationTile";
import Lottie from "lottie-react-web";
import NoNotificationsLottie from "../../assets/Lotties/NoNotifications.json";
import { notificationsData } from "../../data/DemoData";

const NotificationsDropDown = (props) => {
  // GET NOTIFICATIONS OF CURRENT USER
  // const { notifications, fetchNotifications, updateNotificationToRead } =
  //   useCurrentUser();

  // useEffect(() => {
  //   fetchNotifications();
  // }, []);

  // console.log(notifications);

  const unReadNotifications = notificationsData?.filter(
    (notification) => notification?.read === false
  );
  return (
    <>
      <div className="fixed backdrop-blur-md bg-white/90 w-[544px] rounded-lg z-50 dark:backdrop-blur-md dark:bg-black/10 ">
        <div className="flex flex-col ml-4 mt-3 mb-3 notifications-card-animation">
          <span className="text-[18px] dark:text-white">Notifications</span>
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
        </div>

        <hr className="w-full mt-[5px] dark:border-[#323232]" />
      </div>
      <div className="flex flex-col  mt-[75px] delay-4">
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
              <SmallNotificationTile
                onClick={() => {
                  // updateNotificationToRead(item?.id, item?.route);
                  window.location.href = `${item?.route}`;
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
    </>
  );
};

export default NotificationsDropDown;

// bg - white / 90;
