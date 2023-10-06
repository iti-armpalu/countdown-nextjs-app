"use client";

import { useEffect, useState } from "react";

const useGenerateColor = () => {
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    const hue = Math.random() * 360;
    const saturation = Math.random() * 100;
    // omit dark colors & very light colors
    const lightness = Math.random() * 40;
    const generateRandomColor = `hsl(${hue}, ${saturation}%, ${50 + lightness}%)`;

    setRandomColor(generateRandomColor)
  }, []);

  return { randomColor };
};

export { useGenerateColor };
