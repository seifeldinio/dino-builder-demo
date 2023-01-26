import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartRecovery = (props) => {
  const { data } = props;

  // Custom tooltip for barchart
  const CustomToolTip = (props) => {
    const { active, payload, label } = props;
    if (!active || !payload) {
      return null;
    }
    return (
      <div className="backdrop-blur-xl bg-white/90 p-2 rounded-lg dark:backdrop-blur-xl dark:bg-black/50 dark:text-white">
        <p>
          <strong>{label}</strong>
        </p>
        {payload.map((item, i) => (
          <p key={i}>
            <span className="capitalize mr-1.5 dark:text-white">
              {item.name.replace("_", " ")}:
            </span>
            {/* Here add the currency */}
            <strong>{item.value.toLocaleString()} USD</strong>
          </p>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Desktop View */}
      <div className="md:h-[330px] h-0 md:w-full md:visible invisible">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              // top: 5,
              right: 30,
              left: 10,
              bottom: 5,
            }}
            barSize={10}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="month"
              stroke="#c0c0c0"
              strokeDasharray="5 5"
              dot={false}
              tickMargin={10}
            />
            {/* Place currency here */}
            <YAxis
              tickFormatter={(tick) => `${Math.floor(tick).toLocaleString()}`}
              unit="$"
              stroke="#c0c0c0"
              strokeDasharray="5 5"
              dot={false}
              tickMargin={10}
              // width={80}
              tick={{ fontSize: "14px" }}
            />
            <Tooltip content={<CustomToolTip />} />
            {/* <Tooltip
                        formatter={(value) =>
                          new Intl.NumberFormat("en").format(value)
                        }
                      /> */}
            {/* <Legend /> */}
            <Bar dataKey="failed_charges" fill="#706fe6" />
            <Bar dataKey="recovered_charges" fill="#01D95A" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Mobile view */}
      <div className="md:h-[330px] h-[310px] w-full md:invisible visible">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            // margin={{
            //   // top: 5,
            //   right: 30,
            //   left: 30,
            //   bottom: 5,
            // }}
            barSize={10}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="month" />
            {/* Place currency here */}
            {/* <YAxis unit="USD" /> */}
            <Tooltip content={<CustomToolTip />} />
            {/* <Tooltip
                        formatter={(value) =>
                          new Intl.NumberFormat("en").format(value)
                        }
                      /> */}
            {/* <Legend /> */}
            <Bar dataKey="failed_charges" fill="#706fe6" />
            <Bar dataKey="recovered_charges" fill="#01D95A" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default BarChartRecovery;
