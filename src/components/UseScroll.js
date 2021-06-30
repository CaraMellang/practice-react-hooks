import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    console.log("y : ", window.scrollY);
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return state;
};

const UseScroll = () => {
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1>useScroll</h1>
      <span style={{ position: "fixed", color: y > 100 ? "red " : "blue" }}>
        내가 색이 바꿔볼게~ 얍!
      </span>
    </div>
  );
};

export default UseScroll;
