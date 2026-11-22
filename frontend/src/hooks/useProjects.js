import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export function useProjects() {
  const { lang } = useLanguage();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    getProjects(lang).then((data) => {
      if (active) {
        setItems(data);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, [lang]);

  return { items, loading };
}
