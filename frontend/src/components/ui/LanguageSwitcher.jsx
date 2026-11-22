import { useLanguage } from "../../hooks/useLanguage";

export default function LanguageSwitcher() {
  const { lang, setLang, languages } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-sand/20 p-1"
      role="group"
      aria-label="Language switcher"
    >
      {languages.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors duration-200 ${
              active ? "bg-sand text-primary-dark" : "text-sand-light/60 hover:text-sand-light"
            }`}
            aria-pressed={active}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
