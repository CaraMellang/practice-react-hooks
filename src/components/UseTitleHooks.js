import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const UseTitleHooks = () => {
  const titleUpdater = useTitle("Loading..."); //기본값
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div>
      <h1>UseTitle입니다. (useEffect)</h1>
      <span>탭의 타이틀이 5초뒤에 바뀝니다.</span>
    </div>
  );
};

export default UseTitleHooks;
