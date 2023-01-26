import "../../_animations.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const IOSPreview = (props) => {
  const { appName } = props;
  const { appIcon } = props;
  const { title } = props;
  const { message } = props;

  return (
    <div className="flex flex-row items-center justify-center content-center  mt-[60px] fade-up">
      <div className="w-[300px] h-[300px] ">
        {/* iOS Notification preview component */}
        <div className="absolute mt-[195px] ml-[35px] h-auto w-[230px] rounded-lg bg-[#d2cfea] p-1.5 z-50">
          <div className="flex flex-row items-center  ">
            <div className="flex flex-row items-center">
              <div className="h-[15px] w-[15px] rounded-lg mr-1">
                <LazyLoadImage
                  className="h-[15px] w-[15px] rounded-md object-cover"
                  src={appIcon} // use normal <img> attributes as props
                />
                {/* <img className="rounded-lg" src={icon} alt="" /> */}
              </div>
              <span className="text-[12px] text-[#77809f]">{appName}</span>
            </div>

            <span className="ml-auto items-center text-[10px] text-[#8789a2]">
              now
            </span>
          </div>
          {/* Notification content */}
          <div className="flex flex-col  ">
            {/* Title */}
            {title === "" ? (
              <span className="text-[13px] w-[230px] mt-1 font-medium truncate text-ellipsis">
                Title
              </span>
            ) : (
              <span className="text-[13px] w-[230px] mt-1 font-medium truncate text-ellipsis">
                {title}
              </span>
            )}
            {/* Message */}
            {message === "" ? (
              <span className="text-[12px] w-[230px] truncate text-ellipsis">
                Message
              </span>
            ) : (
              <span className="text-[12px] w-[220px] text-ellipsis">
                {message}
              </span>
            )}
          </div>
        </div>

        {/* Device */}
        <LazyLoadImage
          className="z-1"
          key={"iOS"}
          src="https://media.publit.io/file/StockPics/iOSPreview.webp"
          effect="blur"
          placeholderSrc="https://media.publit.io/file/StockPics/iOSPreview.webp"
        />
      </div>
    </div>
  );
};

export default IOSPreview;
