import {
  _clear,
  _retrieveData,
  _storeData,
  CURRENTUSERDATA,
} from "@/lib/local-storage";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const getLocalUser = () => {
  const raw = _retrieveData(CURRENTUSERDATA);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    console.warn("Malformed user data in localStorage");
    return null;
  }
};
export const AuthProvider = ({ children }) => {
  const [currentUserData, setCurrentUserData] = useState(getLocalUser);

  // useEffect(() => {
  //   const storedUserData = _retrieveData(CURRENTUSERDATA);
  //   if (storedUserData) {
  //     setCurrentUserData(JSON.parse(storedUserData));
  //   }
  // }, []);

  const updateCurrentUser = async (userData) => {
    setCurrentUserData(userData);
    _storeData(CURRENTUSERDATA, JSON.stringify(userData));
  };

  const logout = () => {
    setCurrentUserData(null);
    _clear();
    window.location.reload();
  };

  const value = {
    currentUserData,
    updateCurrentUser,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};