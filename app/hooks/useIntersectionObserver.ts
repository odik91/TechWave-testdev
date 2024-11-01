import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (
  threshold: number = 0.1,
  triggerOne: boolean = true
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (triggerOne) {
            observer.disconnect();
          }
        } else if (!triggerOne) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOne]);

  return { isVisible, elementRef };
};

export default useIntersectionObserver;
