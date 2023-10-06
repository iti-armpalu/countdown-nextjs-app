"use client";

import React, { useMemo } from "react";

const DateTimeDisplay = ({ value, type }) => {

  // useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
  // The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. 
  // padStart(targetLength, padString)
  const padValue = useMemo(() => {
    return String(value).padStart(2, "0");
  }, [value]);

  return (
    <li>
      <span>{padValue}</span>
      {type}
    </li>
  );
};

export default DateTimeDisplay;
