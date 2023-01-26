import "../../_animations.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RiArrowDownSLine, RiNotification2Fill } from "react-icons/ri";

const AndroidPreview = (props) => {
  const { appName } = props;
  // const { appIcon } = props;
  const { title } = props;
  const { message } = props;

  return (
    <div className="flex flex-row items-center justify-center content-center  mt-[60px] fade-up">
      <div className="w-[300px] h-[300px] ">
        {/* iOS Notification preview component */}
        <div className="absolute mt-[195px] ml-[35px] h-auto w-[230px] rounded-lg backdrop-blur-2xl bg-black/40  p-1.5 z-50">
          <div className="flex flex-row items-center justify-center content-center">
            <div className="flex flex-row items-center justify-center content-center">
              <RiNotification2Fill className="h-[9px] w-[9px] rounded-lg mr-1 text-[#9082fd]" />

              <span className="text-[12px] text-[#9082fd]">{appName}</span>
            </div>

            <span className="ml-2 items-center text-[10px] text-[#a4a4a2]">
              now
            </span>
            <RiArrowDownSLine className="ml-auto text-white" />
          </div>
          {/* Notification content */}
          <div className="flex flex-col  ">
            {/* Title */}
            {title === "" ? (
              <span className="text-[13px] w-[230px] text-white mt-1 font-medium truncate text-ellipsis">
                Title
              </span>
            ) : (
              <span className="text-[13px] w-[230px] text-white mt-1 font-medium truncate text-ellipsis">
                {title}
              </span>
            )}
            {/* Message */}
            {message === "" ? (
              <span className="text-[12px] w-[230px]  text-[#adafac] truncate text-ellipsis">
                Message
              </span>
            ) : (
              <span className="text-[12px] w-[220px] text-[#adafac] ">
                {message}
              </span>
            )}
          </div>
        </div>

        {/* Device */}
        <LazyLoadImage
          className="z-1"
          key={"iOS"}
          src="https://media.publit.io/file/StockPics/AndroidPreview.webp"
          effect="blur"
          placeholderSrc="https://media.publit.io/file/StockPics/AndroidPreview.webp"
        />
      </div>
    </div>
  );
};

export default AndroidPreview;
