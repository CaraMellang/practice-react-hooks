import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    //해당 윈도우가 Notofication을 지원하지 않으면 여기서 검증
    return;
  }

  const fireNotif = () => {
    //notification api로 퍼미션 요청
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const UseNotification = () => {
  const triggerNotif = useNotification("어맛", { body: "랜섬웨어 설치완료 ㅋㅋ ㅅㄱ" });
  return (
    <div>
      <h1>useNotification</h1>
      <button onClick={triggerNotif}>Notification Button</button>
    </div>
  );
};

export default UseNotification;
