import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export const useAxios = <T>(
  config: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): [T | undefined, string, () => void] => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");

  useEffect(() => {
    if (loadOnStart) sendRequest();
  }, []);

  const request = () => {
    sendRequest();
  };
  const sendRequest = () => {
    axios(config)
      .then((response) => {
        setError("");
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return [data, error, request];
};
