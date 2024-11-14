import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(
    "down"
  );
  const threshold = 2;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (scrollY === 0) {
        setScrollDirection("down");
      } else if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > threshold
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY || 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}
