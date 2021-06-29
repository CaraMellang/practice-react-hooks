import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle); //마우스가 떠나면 핸들 실행
    return () => document.removeEventListener("mouseleave", handle);
    //언마운트할때  리스너 삭제
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (e) => {
    // console.log(e);
    const { clientY } = e;
    // if (clientY <= 0) {
    //   onBefore();
    // }
    const vv = "clientY값:" + clientY;
    onBefore(vv);
  };
};

const UseBeforeLeave = () => {
  const begForLife = (vv) => {
    window.alert("나가지마 마우스 멈춰! 안나가면 맥북줌");
    console.log(vv);
  };
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>useBeforeLeave</h1>
    </div>
  );
};

export default UseBeforeLeave;
