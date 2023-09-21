import { useState, useEffect } from "react";

const useScrollPosition = (): [number, (position: number) => void] => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrollPosition, setScrollPosition];
};

export default useScrollPosition;