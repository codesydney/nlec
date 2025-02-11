"use client";

import { useEffect, useState } from "react";

function getWindowWidth() {
  if (typeof window !== "undefined") {
    const { innerWidth: width } = window;
    return width;
  }
}

export default function useCheckWidth() {
  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => setWidth(getWindowWidth());

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
}
