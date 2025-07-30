import { useEffect, useState } from "react";
import { runOnce } from "@/lib/run-once";
import { getItem } from "@/lib/api";

export default function useGetData(options) {
  const {
    endpoint,
    onSuccess = () => {},
    onError = () => {},
    fetchOnRender = true,
  } = options;

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(fetchOnRender);

  const getData = runOnce((options = {}) => {
    const { endPoint = "", onsuccess = () => {}, onerror = () => {} } = options;
    const query = endPoint !== "" ? endPoint : endpoint;
    setIsLoading(true);
    getItem(
      query,
      (result) => {
        setData(result);
        onsuccess(result);
        onSuccess(result);
        setIsLoading(false);
      },
      (err) => {
        console.log(err, "error from get list");
        onError(err);
        onerror(err);
        setIsLoading(false);
      }
    );
  });

  useEffect(() => {
    if (fetchOnRender === true) {
      getData();
    }
  }, []);

  return {
    data,
    isLoading,
    getData,
    setData,
    setIsLoading,
  };
}
