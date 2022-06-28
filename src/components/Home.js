import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
      <button
        onClick={() =>
          setTimeout(() => {
            console.log("나 뭐게?", count);
          }, 5000)
        }
      >
        실행하자
      </button>
      <h1>홈입니다</h1>
    </div>
  );
};
export default Home;
