import { useState } from "react";
import { patchItem } from "@/lib/api";

export default function useUpdateData(options) {
  const { onSuccess = () => {}, onError = () => {} } = options;
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const updateData = (options) => {
    const {
      endpoint,
      payload,
      onsuccess = () => {},
      onerror = () => {},
    } = options;
    setIsLoadingMore(true);
    patchItem(
      `${endpoint}`,
      payload,
      (result) => {
        onsuccess(result);
        onSuccess(result);
        setIsLoadingMore(false);
      },
      (err) => {
        console.log(err, "error from patch single item");
        onerror(err);
        onError(err);
        setIsLoading(false);
      }
    );
  };

  return {
    isLoadingMore,
    updateData,
  };
}
