import { deleteItem } from "@/lib/api";
import { useState } from "react";

export default function useDeleteData(options) {
  const { endpoint = "", onSuccess = () => {}, onError = () => {} } = options;
  const [isLoading, setIsLoading] = useState(false);

  const deleteData = (options = {}) => {
    const {
      endPoint = "",
      payload = {},
      onsuccess = () => {},
      onerror = () => {},
    } = options;
    const api = endPoint ? endPoint : endpoint;
    setIsLoading(true);
    console.log(payload);
    deleteItem(
      `${api}`,
      payload,
      (result) => {
        onsuccess(result);
        onSuccess(result);
        setIsLoading(false);
      },
      (err) => {
        console.log(err, "error from delete single item");
        onerror(err);
        onError(err);
        setIsLoading(false);
      }
    );
  };
  return {
    isLoading,
    deleteData,
  };
}
