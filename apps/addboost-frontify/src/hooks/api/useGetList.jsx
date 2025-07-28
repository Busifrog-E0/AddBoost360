import { getItem } from "@/lib/api";
import { getNextId } from "@/lib/get-next-id";
import { jsonToQuery } from "@/lib/json-to-query";
import { runOnce } from "@/lib/run-once";
import { useEffect, useState } from "react";

export default function useGetList(options) {
  const {
    endpoint = "",
    extraParams = {},
    initialFilters = {},
    checkLeft = true,
    loadInitial = true,
    changeOnFilter = false,
    extraDependencies = [],
  } = options;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isPageDisabled, setIsPageDisabled] = useState(true);

  const [filters, setFilters] = useState({
    OrderBy: "Index",
    Keyword: "",
    Limit: 30,
    StartDate: null,
    EndDate: null,
    ...initialFilters,
  });

  function updateFilter(oby, kw, lt, sd, ed) {
    setFilters({
      OrderBy: oby,
      Keyword: kw,
      Limit: lt,
      StartDate: sd,
      EndDate: ed,
    });
  }

  function changeSingleFilter(key, value) {
    if (value === null) {
      let tempFilters = filters;
      delete tempFilters[key];
      setFilters(tempFilters);
    } else {
      setFilters({
        ...filters,
        [key]: value,
      });
    }
  }

  const setLoadingState = (temp, value) => {
    if (temp.length > 0) {
      setIsLoadingMore(value);
    } else {
      setIsLoading(value);
    }
  };
  const dependencies = changeOnFilter
    ? [filters, ...extraDependencies]
    : [...extraDependencies];

  const getList = runOnce((temp, fromUpdate = true) => {
    const query = `${endpoint}?${jsonToQuery({
      ...filters,
      ...extraParams,
    })}&NextId=${getNextId(temp)}`;
    setLoadingState(temp, true);
    getItem(
      query,
      (result) => {
        if (fromUpdate) {
          setData(result);
        } else {
          setData([...data, ...result]);
        }
        setLoadingState(temp, false);
      },
      (err) => {
        console.log(err, "error from get list");
        setLoadingState(temp, false);
      }
    );
  });

  const checkMoreLeft = runOnce((temp) => {
    const query = `${endpoint}?${jsonToQuery({
      ...filters,
      ...extraParams,
      Limit: 1,
    })}&NextId=${getNextId(temp)}`;
    getItem(
      query,
      (result) => {
        if (result?.length > 0) {
          setIsPageDisabled(false);
        } else {
          setIsPageDisabled(true);
        }
      },
      (err) => {
        console.log(err, "error from get list more");
        setIsPageDisabled(true);
      }
    );
  });

  useEffect(() => {
    if (loadInitial) {
      getList([]);
    }
  }, dependencies);

  useEffect(() => {
    if (checkLeft) {
      if (data.length > 0) checkMoreLeft(data);
    }
  }, [data]);

  return {
    data,
    setData,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    filters,
    setFilters,
    updateFilter,
    getList,
    changeSingleFilter,
  };
}
