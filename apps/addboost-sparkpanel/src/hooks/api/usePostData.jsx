import { useState } from "react";
import { postItem } from "@/lib/api";

export default function usePostData(options) {
  const { onSuccess = () => {}, onError = () => {} } = options;
  const [isLoading, setIsLoading] = useState(false);

  const postData = (options) => {
    const {
      endpoint,
      payload,
      onsuccess = () => {},
      onerror = () => {},
    } = options;
    setIsLoading(true);
    postItem(
      `${endpoint}`,
      payload,
      (result) => {
        onsuccess(result);
        onSuccess(result);
        setIsLoading(false);
      },
      (err) => {
        console.log(err, "error from post single item");
        onerror(err);
        onError(err);
        setIsLoading(false);
      }
    );
  };

  return {
    isLoading,
    postData,
  };
}
