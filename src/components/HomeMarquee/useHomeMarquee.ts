import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const useHomeMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (marqueeRef.current) {
      const marqueeElement = marqueeRef.current;
      const totalWidth = marqueeElement.scrollWidth;

      gsap.set(marqueeElement, { x: 0 });
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(marqueeElement, {
        x: -totalWidth / 2,
        duration: 15,
        ease: "linear",
      });
    }
  }, []);
  return { marqueeRef };
};

export default useHomeMarquee;
