import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof calllback !== "function") {
    return;
  }
  // Confirm이 없는 경우 typeof검사에서 undefined처리되어 return되므로 아래꺼 써도됨
  // if(typeof onConfirm !== "function"){
  //   return
  // }
  if (onCancel && typeof onConfirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      //onCancel()이 없으면 프로그램이 터지므로 예외처리 해줌
      try {
        onCancel();
      } catch (e) {
        console.log(e);
        return;
      }
    }
  };
  return confirmAction;
};

const UseConfirmHooks = () => {
  const deleteWorld = () => console.log("삭제했음 ㅋㅋ");
  const abort = () => console.log("삭제 외않함?");
  const confirmDelete = useConfirm("진짜루?", deleteWorld, abort);
  return (
    <div>
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default UseConfirmHooks;
