import { useEffect, useState } from "react";
import GoogleTranslateDropdown from "./GoogleTranslateDropdown";
import GoogleTranslateLoader from "./GoogleTranslateLoader";

import Ukflag from "../assets/Flags/Ukflag.png";
import Arabflag from "../assets/Flags/Arabflag.webp";
import Germany from "../assets/Flags/Germany.jpg";
import Spain from "../assets/Flags/Spain.png";
import India from "../assets/Flags/India.png";
import Japan from "../assets/Flags/Japan.png";
import Korea from "../assets/Flags/Korea.png";
import Indonesia from "../assets/Flags/Indonesia.png";
import China from "../assets/Flags/China.png";
import France from "../assets/Flags/France.png";
import Italy from "../assets/Flags/Italy.png";
import Poland from "../assets/Flags/Poland.png";
import Philippines from "../assets/Flags/Philippines.jpeg";
import Vietnam from "../assets/Flags/Vietnam.png";
import { useLangContext } from "./context/ContextProvider";
export const languages = [
  {
    code: "en",
    name: "English",
    flag: Ukflag,
  },
  {
    code: "ar",
    name: "Arabic",
    flag: Arabflag,
  },
  {
    code: "de",
    name: "German",
    flag: Germany,
  },
  {
    code: "ja",
    name: "Japanese",
    flag: Japan,
  },
  {
    code: "hi",
    name: "Hindi",
    flag: India,
  },
  {
    code: "ko",
    name: "Korean",
    flag: Korea,
  },
  {
    code: "id",
    name: "Bahasa Indonesia",
    flag: Indonesia,
  },

  {
    code: "fr",
    name: "French",
    flag: France,
  },
  {
    code: "es",
    name: "Spanish",
    flag: Spain,
  },
  {
    code: "it",
    name: "Italian",
    flag: Italy,
  },
  {
    code: "pl",
    name: "Polish",
    flag: Poland,
  },
  {
    code: "tl",
    name: "Tagalog ",
    flag: Philippines,
  },
  {
    code: "vi",
    name: "Vietnamese ",
    flag: Vietnam,
  },
  {
    code: "zh-CN",
    name: "Chinese",
    flag: China,
  },
];
const GoogleTranslate = ({ }) => {

  const { selectedLang, updateCurrentLang } = useLangContext()
  const [isComboReady, setIsComboReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const pageLang = document.documentElement.lang;
      console.log(pageLang)
      updateCurrentLang(pageLang)
    }, 1000);
  }, [])
  return (
    <>
      <GoogleTranslateLoader onReady={setIsComboReady} languages={languages} />
      <GoogleTranslateDropdown

        isReady={isComboReady}
        languages={languages}
      />
    </>
  );
};

export default GoogleTranslate;
