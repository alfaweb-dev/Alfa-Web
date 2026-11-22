import { Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "../ui/SocialIcons";
import Container from "../common/Container";
import { useLanguage } from "../../hooks/useLanguage";
import { NAV_ROUTES, SOCIAL_LINKS, CONTACT_EMAIL, WHATSAPP_LINK } from "../../utils/constants";
import logoMark from "../../assets/images/logo-mark-light.png";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-sand-light">
      <Container className="py-16 grid gap-12 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={logoMark} alt="Alfa Web" className="h-8 w-auto" />
            <span className="font-display text-lg text-sand-light">Alfa Web</span>
          </div>
          <p className="text-sm text-sand-light/70 max-w-xs">{t("footer.tagline")}</p>
          <div className="flex items-center gap-3 pt-2">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="rounded-full border border-sand/25 p-2 hover:bg-sand hover:text-primary-dark transition-colors">
              <FacebookIcon size={16} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="rounded-full border border-sand/25 p-2 hover:bg-sand hover:text-primary-dark transition-colors">
              <InstagramIcon size={16} />
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              className="rounded-full border border-sand/25 p-2 hover:bg-sand hover:text-primary-dark transition-colors">
              <TikTokIcon size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand mb-4">
            {t("footer.quick_links")}
          </h3>
          <ul className="flex flex-col gap-3">
            {NAV_ROUTES.map((route) => (
              <li key={route.key}>
                <a href={route.path} className="text-sm text-sand-light/80 hover:text-sand-light transition-colors">
                  {t(`nav.${route.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sand mb-4">
            {t("footer.contact_title")}
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-sand-light/80">
            <li className="flex items-center gap-2">
              <Mail size={15} />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-sand-light transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="hover:text-sand-light transition-colors">
                {t("contact.whatsapp")}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-sand/15">
        <Container className="py-5 text-xs text-sand-light/60 flex justify-center">
          © {year} Alfa Web — {t("footer.rights")}
        </Container>
      </div>
    </footer>
  );
}
