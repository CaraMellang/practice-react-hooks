import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      //return은 componentUnMount용도
      //useEffect의 return값은 해당 effect가 더이상 실행필요가 없을때 청소하는 용도
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); //unmount하게 하려면 빈 배열로 넘겨야함
  //https://jsdev.kr/t/react-useeffect-return/5676
  if (typeof onClick !== "function") {
    return;
  }
  return element;
};

const UseClickHooks = () => {
  //   const bhc = useRef();
  //reference는 컴포넌트의 어떤 부분을 선택하는 방법
  //document.getElementById()와 동등
  //리액트에 있는 모든 컴포넌트는 reference element를 가지고있음(reference prop)

  //   setTimeout(() => bhc.current.focus(), 5000);
  //  ㄴ> [Cannot read property 'focus' of undefined 오류 해결 방법 2가지]
  // 첫 번째 방법: potato.current.focus()를 -> potato.current?.focus()로 변경해주기

  // 두 번째 방법: useEffect를 이용해서 마운트가 끝난 후 focus해주기
  // useEffect(() => {
  // setTimeout(() => {
  // potato.current.focus();
  // }, 5000);
  // });

  const Hi = () => console.log("HIHIHI");
  const bhc = useClick(Hi);
  return (
    <div>
      <h1>UseClick입니다.(useEffect)</h1>
      <span ref={bhc} style={{ background: "violet" }}>
        나를 클릭해줘
      </span>
      <br />
      <span>콘솔창에 뭐 나올거임</span>
    </div>
  );
};

export default UseClickHooks;
