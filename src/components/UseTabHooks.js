import React, { useState } from "react";

const contents = [
  {
    tab: "Section 1",
    content: "제 1 구역입니다",
  },
  {
    tab: "Section 2",
    content: "제 2 구역입니다",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  //Array.isArray()메서드는 해당인자가 Array인지 알려줌
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const UseTabHooks = () => {
  const { currentItem, changeItem } = useTabs(0, contents); //2번째 인자가 없으면 에러

  return (
    <div>
      <h1>UseTab 구역입니다.</h1>
      {contents.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default UseTabHooks;
