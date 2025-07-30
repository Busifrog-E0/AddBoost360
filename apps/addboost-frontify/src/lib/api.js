import { USE_API } from "@/lib/env";
import {
  _clear,
  _retrieveData,
  CURRENTUSERDATA,
  _storeData,
} from "@/lib/local-storage";
import axios from "axios";

// Create a new Axios instance
const api = axios.create({
  baseURL: USE_API + "api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  mode: "no-cors",
});

// Function to refresh the token
const refreshToken = async () => {
  const currentUserData = _retrieveData(CURRENTUSERDATA)
    ? JSON.parse(_retrieveData(CURRENTUSERDATA))
    : {};
  const tokenToBeRefreshed = currentUserData ? currentUserData.Token : null;
  const refreshToken = currentUserData ? currentUserData.RefreshToken : null;

  try {
    const response = await axios.post(
      USE_API + "api/" + "RefreshToken",
      {
        Token: tokenToBeRefreshed,
        RefreshToken: refreshToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${tokenToBeRefreshed}`,
        },
        mode: "no-cors",
      }
    );
    _storeData(
      CURRENTUSERDATA,
      JSON.stringify({ ...currentUserData, ...response.data })
    );

    return response.data.Token; // Return the new token
  } catch (err) {
    if (
      err.response &&
      (err.response.status === 445 || err.response.status === 401)
    ) {
      _clear();
      window.location.reload();
    }
    return null; // Return null if refresh fails
  }
};

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = _retrieveData(CURRENTUSERDATA)
      ? JSON.parse(_retrieveData(CURRENTUSERDATA)).Token
      : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const newToken = await refreshToken();
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest); // Retry the original request with the new token
      }
    } else if (error.response && error.response.status === 445) {
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

// API functions
export const postItem = async (url, data, successCallback, errorCallback) => {
  try {
    const response = await api.post(url, data);
    successCallback(response.data);
  } catch (err) {
    if (err.response) {
      errorCallback(err.response.data);
    } else {
      errorCallback("Something happened!");
    }
  }
};

export const patchItem = async (url, data, successCallback, errorCallback) => {
  try {
    const response = await api.patch(url, data);
    successCallback(response.data);
  } catch (err) {
    if (err.response) {
      errorCallback(err.response.data);
    } else {
      errorCallback("Something happened!");
    }
  }
};

export const deleteItem = async (url, data, successCallback, errorCallback) => {
  try {
    const response = await api.delete(url, { data });
    successCallback(response.data);
  } catch (err) {
    if (err.response) {
      errorCallback(err.response.data);
    } else {
      errorCallback("Something happened!");
    }
  }
};

export const getItem = async (url, successCallback, errorCallback) => {
  try {
    const response = await api.get(url);
    successCallback(response.data);
  } catch (err) {
    if (err.response) {
      errorCallback(err.response.data);
    } else {
      errorCallback("Something happened!");
    }
  }
};
