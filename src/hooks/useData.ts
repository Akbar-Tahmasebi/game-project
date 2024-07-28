import { useEffect, useState } from "react";
import api from "../services/api";
import { AxiosRequestConfig } from "axios";

interface IData<T> {
  count: number;
  results: T[];
}

export default function useGenres<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      api
        .get<IData<T>>(endpoint, { ...requestConfig })
        .then((result) => {
          setData(result.data.results);
          setIsLoading(false);
        })
        .catch((error) => console.log(error.massage));
    },
    deps ? [...deps] : []
  );
  
  return { data, isLoading };
}
