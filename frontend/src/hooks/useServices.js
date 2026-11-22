import { useEffect, useState } from "react";
import { getServices } from "../services/serviceService.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export function useServices() {
  const { lang } = useLanguage();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getServices(lang).then((data) => {
      if (active) {
        setItems(data);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, [lang]);

  return { items, loading };
}
