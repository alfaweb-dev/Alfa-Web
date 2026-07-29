import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations.js";

const LanguageContext = createContext(null);

const RTL_LANGS = ["ar"];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("alfa-lang") || "fr");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
    localStorage.setItem("alfa-lang", lang);
  }, [lang]);

  const t = (key) => translations[lang]?.[key] ?? translations.fr[key] ?? key;
  const isRTL = RTL_LANGS.includes(lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
