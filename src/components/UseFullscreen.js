import React, { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      //각 브라우저마다 fullscreen하는게 다름.
      //if(element.current.mozRequestFullscreen){
      //모질라는 mozRequestFullscreen()}
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      //전체화면 아닐때 누르면 오류, 검증해야함
      document.exitFullscreen();
      //풀스크린을 빠져나올땐 document로 빠져나옴, 이건 왜이런지 모른다고함
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, triggerFull, exitFull };
};

const UseFullscreen = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "풀풀" : "개작아");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div style={{ height: "1000vh" }}>
      <h1>useFullscreen</h1>
      <div ref={element}>
        <img src="http://placeimg.com/300/100/tech" />
        <button onClick={triggerFull}>풀스크린</button>
        <button onClick={exitFull}>풀스크린 나가!!</button>
      </div>
    </div>
  );
};
export default UseFullscreen;
