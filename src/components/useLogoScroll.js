import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocoScroll = () => {
  useEffect(() => {
    const scrollEl = document.querySelector("#main-container");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smoothMobile: true,
      inertia: 0.75,
    });

    // Fix for white top gap
    window.scrollTo(0, 0);
    locoScroll.scrollTo(0, { duration: 0 });

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);
};
