import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); //웹사이트가 온라인인지 아닌지 확인
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine); //online이면 true
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const UseNetwork = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "온라인" : "오프라인");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>useNetwork</h1>
      <span>{onLine ? "Online" : "Offline"}</span>
      <p>개발자 도구에 네트워크 탭에서 상태 바꿀수이씅ㅁ</p>
    </div>
  );
};

export default UseNetwork;
