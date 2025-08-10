import { useEffect } from "react";

const GoogleTranslateLoader = ({ onReady, languages, selectedLang }) => {

  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: languages.map((l) => l.code).join(","),
        },
        "google_translate_element"
      );
    };

    window.googleTranslateElementInit = googleTranslateElementInit;

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }
  }, []);
  // Monitor when the translate dropdown is ready
  useEffect(() => {
    const interval = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        onReady(true);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [onReady]);


  // useEffect(() => {
  //   const savedLang = localStorage.getItem("selectedLanguage") || "en";

  //   const setComboLanguage = () => {
  //     const combo = document.querySelector(".goog-te-combo");
  //     if (combo) {
  //       combo.value = savedLang;
  //       combo.dispatchEvent(new Event("change"));
  //     } else {
  //       // Retry a bit later if combo not yet loaded
  //       setTimeout(setComboLanguage, 500);
  //     }
  //   };

  //   setComboLanguage();
  // }, []);

  return (
    <div
      id="google_translate_element"
      style={{ position: "absolute", top: "-9999px", left: "-9999px" }}
    ></div>
  );
};

export default GoogleTranslateLoader;
