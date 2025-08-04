import { useEffect, useRef, useState } from "react";

const GoogleTranslateDropdown = ({ isReady, languages, selectedLang, setSelectedLang }) => {

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
            <div className="relative inline-block text-left w-full max-w-[200px]" ref={buttonRef}>
                <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    disabled={!isReady}
                    className="inline-flex justify-between items-center gap-2 sm:gap-3 w-full px-3 py-2 sm:px-4  bg-black/40 backdrop-blur-md shadow-md border border-white/10 rounded-md hover:bg-black/50 transition-all duration-300 text-white text-sm sm:text-base"
                >
                    <div className="w-8 h-5 sm:w-9 sm:h-6 overflow-hidden rounded-md">
                        <img src={current.flag} alt={current.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="flex-1 text-left">{current.code.toUpperCase()}</span>

                    {/* Arrow Icon */}
                    <svg
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.586l3.71-4.356a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {dropdownOpen && (
                    <div
                        className={`absolute z-20 bg-black/40 backdrop-blur-md shadow-lg text-white rounded-md border border-white/10 max-h-64 overflow-y-auto mt-2 sm:mt-3 flex flex-col gap-2 sm:gap-3 px-3 py-2 sm:px-4   ${dropUp ? "bottom-full mb-2" : ""}`}
                    >
                        {languages
                            .filter((lang) => lang.code !== current.code)
                            .map((lang) => (
                                <div
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className="cursor-pointer flex items-center gap-2 rounded"
                                >
                                    <div className="w-6 h-4 sm:w-8 sm:h-5 overflow-hidden rounded">
                                        <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-sm sm:text-base">{lang.name}</span>
                                </div>
                            ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default GoogleTranslateDropdown;
