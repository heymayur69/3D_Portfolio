import { useState, useEffect } from "react";

export const useResponsive = () => {
  const [width, setWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 1200; // Server-side default
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobile: width <= 640,
    isTablet: width > 640 && width <= 1024,
    isSmallLaptop: width > 1024 && width <= 1366,
    isMediumLaptop: width > 1366 && width <= 1600,
    isLargeDesktop: width > 1600,
    isDesktop: width > 1024,
  };
};
