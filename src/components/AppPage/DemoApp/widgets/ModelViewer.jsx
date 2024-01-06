import React from "react";
// import { BsHeart } from "react-icons/bs";

const ModelViewer = (props) => {
  const { glb } = props;

  return (
    <div className="z-1 flex content-center justify-center items-center bg-[#F8F8F8] h-[180px] w-[295px]">
      {/* Favorites Button */}
      {/* <span className="fixed z-50 ml-[275px] mb-[150px] cursor-pointer">
        <BsHeart className="text-[#656565]" />
      </span> */}
      <model-viewer
        // alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src={glb} // AR Android
        ios-src={glb} // AR iOS
        // src="https://firebasestorage.googleapis.com/v0/b/newapp-873cd.appspot.com/o/glb%2Fhelmet.glb?alt=media&token=0dfe48f3-885a-4fdf-bf48-d4eeb29c8f1f"
        auto-rotate
        // ar
        // environment-image="shared-assets/environments/moon_1k.hdr"
        // poster="shared-assets/models/NeilArmstrong.webp"
        shadow-intensity="1"
        camera-controls
        style={{
          width: "100%",
          height: "100%",
          // backgroundColor: "#F8F8F8",
          backgroundColor: "#F8F8F8",

          borderRadius: "10px",
        }}
        // slot="progress-b ar"
        // touch-action="pan-y"
      ></model-viewer>
    </div>
  );
};

export default ModelViewer;
