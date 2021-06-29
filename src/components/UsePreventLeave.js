import React from "react";

//버튼을 누르면 addEventListener로 인해 window는 beforeunload라는 이벤트를 갖고
// ㄴ> beforeunload는 window가 닫히기 전 function이 실행되는걸 허락함 (listener 매개변수 실행)
//후에 listener로 prevent하여 나갈때 물어봄
//새로고침하면 버튼다시 클릭ㅎ새서 리스너를 추가해야함

const usePreventLeave = (onLeave) => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = ""; //이게 있어야 나갈때 물어봄 <= 왜일까 찾아보자
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const UsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <h1>UsePreventLeave</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};

export default UsePreventLeave;
