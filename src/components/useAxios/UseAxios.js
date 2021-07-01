import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  //axios는 약간의 custimization , configuration을 허용
  //ex) 디폴트 url , 자동 헤더 설정 허용
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        //configuration 전달(opts)
        setState({
          ...state,
          loading: false,
          data, //data는 object
        });
      })
      .catch((e) => {
        setState({ ...state, loading: false, e });
      });
  }, [trigger]);
  if (!opts.url) {
    return;
  }

  return { ...state, refetch };
  //state안에 있는거 풀어줌
};

export default useAxios;
