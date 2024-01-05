import { CircularProgressbar } from "react-circular-progressbar";
import { useStateContext } from "../../contexts/ContextProvider";
import CircularAnimation from "./CircularAnimation";

const CircularProgress = (props) => {
  const { progress } = props;
  const { title } = props;

  const { currentMode } = useStateContext();

  return (
    <div className="h-[100px] w-[100px] ">
      <CircularAnimation valueStart={0} valueEnd={progress}>
        {(progress) => (
          <>
            {currentMode === "Light" ? (
              // If Light mode
              <CircularProgressbar
                value={progress}
                text={title}
                styles={{
                  trail: {
                    strokeLinecap: "butt",
                    transform: "rotate(-180deg)",
                    transformOrigin: "center center",
                    stroke: "#EAEAEA",
                  },
                  path: {
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.7s ease 0s",
                    transform: "rotate(-180deg)",
                    transformOrigin: "center center",
                    stroke: "#01D95A",
                  },

                  text: { fill: "#000", fontSize: "20px", fontWeight: "bold" },
                }}
                strokeWidth={4}
              />
            ) : (
              // If Dark mode

              <CircularProgressbar
                value={progress}
                text={title}
                styles={{
                  trail: {
                    strokeLinecap: "butt",
                    transform: "rotate(-180deg)",
                    transformOrigin: "center center",
                    stroke: "#272727",
                  },
                  path: {
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.7s ease 0s",
                    transform: "rotate(-180deg)",
                    transformOrigin: "center center",
                    stroke: "#01D95A",
                  },

                  text: { fill: "#ffffff", fontSize: "13px" },
                }}
                strokeWidth={4}
              />
            )}
          </>
        )}
      </CircularAnimation>
    </div>
  );
};

export default CircularProgress;
