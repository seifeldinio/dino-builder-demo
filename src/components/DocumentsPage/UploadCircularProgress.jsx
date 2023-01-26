import { CircularProgressbar } from "react-circular-progressbar";
import CircularAnimation from "../DashboardPage/CircularAnimation";

const UploadCircularProgress = (props) => {
  const { progress } = props;
  const { title } = props;

  return (
    <div className="h-[100px] w-[100px] ">
      <CircularAnimation valueStart={0} valueEnd={progress}>
        {(progress) => (
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
                stroke: "#75bcff",
              },

              text: { fill: "#000", fontSize: "13px" },
            }}
            strokeWidth={4}
          />
        )}
      </CircularAnimation>
    </div>
  );
};

export default UploadCircularProgress;
