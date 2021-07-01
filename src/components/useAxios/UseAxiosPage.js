import React from "react";
import useAxios from "./UseAxios";

const UseAxiosPage = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading : ${loading}\nError : ${error}\nData : ${JSON.stringify(data)}`
  );
  return (
    <div>
      <h1>useAxios</h1>
      <h2>{loading && "Loading"}</h2>
      <span>{data && data.status}</span>
      <br />
      <span> 상태가 200이면 정상출력!</span>
      <br />
      <button onClick={refetch}>리패치 버툰</button>
    </div>
  );
};

export default UseAxiosPage;
