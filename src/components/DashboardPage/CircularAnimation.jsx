import { useEffect, useState } from "react";

const CircularAnimation = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart);

  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

export default CircularAnimation;
