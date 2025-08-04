import { useState } from "react";
import GoogleTranslateDropdown from "./GoogleTranslateDropdown";
import GoogleTranslateLoader from "./GoogleTranslateLoader";

import Ukflag from "../assets/Ukflag.webp";
import Arabflag from "../assets/Arabflag.webp";

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
];

const GoogleTranslate = ({ }) => {
    const [selectedLang, setSelectedLang] = useState(localStorage.getItem("selectedLanguage") || "en");
    const [isComboReady, setIsComboReady] = useState(false);
    return (
        <>
            <GoogleTranslateLoader
                onReady={setIsComboReady}
                languages={languages} />
            <GoogleTranslateDropdown
                selectedLang={selectedLang}
                setSelectedLang={setSelectedLang}
                isReady={isComboReady}
                languages={languages} />
        </>
    );
};

export default GoogleTranslate;
