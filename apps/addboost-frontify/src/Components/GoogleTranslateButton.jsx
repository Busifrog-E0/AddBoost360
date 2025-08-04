import { useState, useEffect } from "react";

const GoogleTranslateButton = () => {
    const [isLoaded, setIsLoaded] = useState(true);
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false,
                includedLanguages: "en,ar",
            },
            "google_translate_element"
        );
    };

    useEffect(() => {
        if (!document.getElementById("google-translate-script")) {
            setIsLoaded(true);
            const addScript = document.createElement("script");
            addScript.id = "google-translate-script"; // Add ID to prevent re-adding
            addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(addScript);
            setIsLoaded(false);
        }

        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        const distanceFromBottom = documentHeight - (scrollY + windowHeight);

        // Hide if within 100px of bottom
        setVisible(distanceFromBottom > 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // check on mount

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div
            className={`fixed left-4 bottom-4 z-50 transition-opacity duration-500 ease-in-out ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* {!isLoaded && (
                <div className="bg-white px-4 py-2 rounded shadow text-sm font-medium">
                    Loading translator...
                </div>
            )} */}
            <div id="google_translate_element"></div>
        </div>
    )
}
export default GoogleTranslateButton;