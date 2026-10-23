import React, { useState, useEffect } from "react";

const useServerCall = (value: boolean) => {
  const [val, setVal] = useState(false);
  useEffect(() => {
    setVal(value);
  }, [value]);

  console.log("Value", value);
  console.log("Val", val);

  return val ? {} : [];
};

export default useServerCall;
