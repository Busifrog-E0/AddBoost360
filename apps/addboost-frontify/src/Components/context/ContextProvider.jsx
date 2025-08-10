
import { createContext, useContext, useState } from "react";
import { _retrieveData, _storeData, CURRENTLANGUAGE } from "../../lib/local-storage";

const Context = createContext();


const getLocalLang = () => {
  const raw = _retrieveData(CURRENTLANGUAGE);
  console.log(raw)
  if (!raw) return "en";
  try {
    return (raw);
  } catch (e) {

    console.warn("Malformed language data in localStorage", e);
    return "en";
  }
};
export const ContextProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState(getLocalLang());
  const [selectedLanguageHistory, setSelectedLanguageHistory] = useState(() => [selectedLang]); // start with current lang in history

  const updateCurrentLang = async (lang) => {
    setSelectedLang(lang);
    _storeData(CURRENTLANGUAGE, lang);

    setSelectedLanguageHistory((prevHistory) => {
      // Add new lang at the end
      let newHistory = [...prevHistory];

      // If the last selected language is same as new, no need to add duplicate
      if (newHistory[newHistory.length - 1] === lang) {
        return newHistory;
      }

      newHistory.push(lang);

      // Keep only last 3 items
      if (newHistory.length > 3) {
        newHistory = newHistory.slice(newHistory.length - 3);
      }

      return newHistory;
    });
  };
  const value = {
    selectedLang,
    updateCurrentLang,
    selectedLanguageHistory
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useLangContext = () => {
  return useContext(Context);
};