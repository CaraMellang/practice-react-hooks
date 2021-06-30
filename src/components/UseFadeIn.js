import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

const UseFadeIn = () => {
  const fadeInSpan = useFadeIn(3, 5);
  const fadeInP = useFadeIn(10, 10);
  return (
    <div>
      <h1>useFadeIn</h1>
      <span {...fadeInSpan}>내가 나타나 볼게~ 얍!</span>
      <p {...fadeInP}> 거북이당</p>
    </div>
  );
};

export default UseFadeIn;
