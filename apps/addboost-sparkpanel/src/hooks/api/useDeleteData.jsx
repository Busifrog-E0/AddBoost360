import { deleteItem } from "@/lib/api";
import { useState } from "react";

export default function useDeleteData(options) {
  const { onSuccess = () => {}, onError = () => {} } = options;
  const [isLoading, setIsLoading] = useState(false);

  const deleteData = (options = {}) => {
    const {
      endpoint = "",
      payload = {},
      onsuccess = () => {},
      onerror = () => {},
    } = options;
    const api = endpoint;
    setIsLoading(true);
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
