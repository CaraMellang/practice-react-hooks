import React, { useState } from "react";

export const useInput = (initialValue, validator) => {
  //커스텀 훅
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      //유효성 검증
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const UseInputHooks = () => {
  const maxLen = (value) => value.length <= 10;
  const circle = (value) => !value.includes("@"); //@가 없으면 true 리턴
  const name = useInput("Mr.", maxLen); //유효성 검증 포함
  const id = useInput("", circle);

  return (
    <div>
      <h1>여기는 useInput 구역 (UseState 사용)</h1>
      <input placeholder="Name" {...name} />{" "}
      {/*...은 스프레드 연산자
      value ={name.value onChange={name.onChange}와 같은 의미*/}
      <input placeholder="Id" value={id.value} onChange={id.onChange} />
    </div>
  );
};
export default UseInputHooks;
