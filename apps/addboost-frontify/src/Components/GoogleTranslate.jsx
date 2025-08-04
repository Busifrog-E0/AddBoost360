import { useState } from "react";
import GoogleTranslateDropdown from "./GoogleTranslateDropdown";
import GoogleTranslateLoader from "./GoogleTranslateLoader";

const GoogleTranslate = ({ }) => {
    const [isComboReady, setIsComboReady] = useState(false);
    return (
        <>
            <GoogleTranslateLoader onReady={setIsComboReady} />
            <GoogleTranslateDropdown isReady={isComboReady} />
        </>
    );
};

export default GoogleTranslate;
