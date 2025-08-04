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
    const [isComboReady, setIsComboReady] = useState(false);
    return (
        <>
            <GoogleTranslateLoader onReady={setIsComboReady} languages={languages} />
            <GoogleTranslateDropdown isReady={isComboReady} languages={languages} />
        </>
    );
};

export default GoogleTranslate;
