import { useState } from "react";
import { patchItem } from "@/lib/api";

export default function useUpdateData(options) {
  const { onSuccess = () => {}, onError = () => {} } = options;
  const [updateLoading, setupdateLoading] = useState(false);

  const updateData = (options) => {
    const {
      endpoint,
      payload,
      onsuccess = () => {},
      onerror = () => {},
    } = options;
    setupdateLoading(true);
    patchItem(
      `${endpoint}`,
      payload,
      (result) => {
        onsuccess(result);
        onSuccess(result);
        setupdateLoading(false);
      },
      (err) => {
        console.log(err, "error from patch single item");
        onerror(err);
        onError(err);
        setupdateLoading(false);
      }
    );
  };

  return {
    updateLoading,
    updateData,
  };
}
