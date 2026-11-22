import { createContext, useEffect, useState } from "react";
import { translations, languages } from "../data/translations";

export const LanguageContext = createContext(null);

const STORAGE_KEY = "alfaweb-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "fr";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) return saved;
  return "fr";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = current.dir;
    document.body.classList.toggle("lang-ar", lang === "ar");
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, current.dir]);

  /** Fetch a nested translation string by dot path, e.g. t("hero.title") */
  function t(path) {
    const parts = path.split(".");
    let node = translations[lang];
    for (const part of parts) {
      node = node?.[part];
    }
    return node ?? path;
  }

  const value = { lang, setLang, dir: current.dir, t, languages };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
