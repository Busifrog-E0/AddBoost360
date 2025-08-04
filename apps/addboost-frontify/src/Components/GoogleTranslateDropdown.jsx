import { useEffect, useRef, useState } from "react";
import Ukflag from "../assets/Ukflag.webp";
import Arabflag from "../assets/Arabflag.webp";

const languages = [
    {
        code: "en",
        name: "English",
        flag: Ukflag, // 🏳️ SVG image
    },
    {
        code: "ar",
        name: "Arabic",
        flag: Arabflag,
    },
];

const GoogleTranslateDropdown = ({ isReady }) => {
    const [selectedLang, setSelectedLang] = useState(() => {
        return localStorage.getItem("selectedLanguage") || "en";
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [dropUp, setDropUp] = useState(false);
    const buttonRef = useRef(null);

    const changeLanguage = (lang) => {
        const combo = document.querySelector(".goog-te-combo");
        if (combo) {
            combo.value = lang;
            combo.dispatchEvent(new Event("change"));
            localStorage.setItem("selectedLanguage", lang);  // Save to localStorage
            setSelectedLang(lang);
            setDropdownOpen(false);

            // Reload after a short delay
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    };
    // Detect scroll near bottom
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        const distanceFromBottom = documentHeight - (scrollY + windowHeight);
        setVisible(distanceFromBottom > 100);
    };

    // Detect drop direction on open
    useEffect(() => {
        if (dropdownOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            setDropUp(spaceBelow < 200); // open upward if less than 200px space below
        }
    }, [dropdownOpen]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const current = languages.find((l) => l.code === selectedLang);
    return (
        <div
            className={`notranslate fixed left-4 bottom-4 z-50 transition-opacity duration-500 ease-in-out ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="relative inline-block text-left" ref={buttonRef}>
                <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    disabled={!isReady}
                    className="inline-flex justify-between items-center gap-2 px-2 py-2 bg-white border rounded shadow hover:bg-gray-200 transition-all duration-300"
                >
                    <div className="w-10 h-7 overflow-hidden rounded-md" >
                        <img src={current.flag} alt={current.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="">{current.code.toUpperCase()}</span>
                </button>

                {dropdownOpen && (
                    <div
                        className={`absolute z-10 w-32 bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto p-2 flex flex-col gap-2 ${dropUp ? "bottom-full mb-2" : "mt-2"
                            }`}
                    >
                        {languages.map((lang) => (
                            <div
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className="cursor-pointer flex items-center gap-2"
                            >
                                <div className="w-10 h-7 overflow-hidden rounded-md" >
                                    <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover" />
                                </div>
                                <span>{lang.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoogleTranslateDropdown;
