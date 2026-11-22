import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import Button from "../common/Button";
import { useLanguage } from "../../hooks/useLanguage";
import { NAV_ROUTES } from "../../utils/constants";
import logoMark from "../../assets/images/logo-mark-light.png";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-sand/10" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logoMark} alt="Alfa Web" className="h-9 w-auto" />
          <span className="font-display text-lg text-sand-light">Alfa Web</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ROUTES.map((route) => (
            <NavLink
              key={route.key}
              to={route.path}
              end={route.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? "text-sand" : "text-sand-light/55 hover:text-sand-light"
                }`
              }
            >
              {t(`nav.${route.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button to="/contact" variant="primary">
            {t("nav.contact")}
          </Button>
        </div>

        <button className="md:hidden text-sand-light" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden bg-bg border-t border-sand/10">
          <Container className="flex flex-col gap-5 py-6">
            {NAV_ROUTES.map((route) => (
              <NavLink
                key={route.key}
                to={route.path}
                end={route.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? "text-sand" : "text-sand-light/70"}`
                }
              >
                {t(`nav.${route.key}`)}
              </NavLink>
            ))}
            <LanguageSwitcher />
          </Container>
        </div>
      )}
    </header>
  );
}
