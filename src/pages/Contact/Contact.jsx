import { useState } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "../../components/ui/SocialIcons";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";
import { useLanguage } from "../../hooks/useLanguage";
import { SOCIAL_LINKS, WHATSAPP_LINK } from "../../utils/constants";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  // Mock submit — swap for a POST /contact call once the backend is wired in.
  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 900);
  }

  return (
    <div className="py-20 md:py-28">
      <Container className="grid gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

          <Button href={WHATSAPP_LINK} variant="whatsapp" className="w-fit">
            <MessageCircle size={18} />
            {t("contact.whatsapp")}
          </Button>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-copper mb-4">
              {t("contact.follow")}
            </h3>
            <div className="flex items-center gap-3">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="rounded-full border border-sand/20 p-3 text-sand hover:bg-sand hover:text-primary-dark transition-colors">
                <FacebookIcon size={18} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="rounded-full border border-sand/20 p-3 text-sand hover:bg-sand hover:text-primary-dark transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="rounded-full border border-sand/20 p-3 text-sand hover:bg-sand hover:text-primary-dark transition-colors">
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-sand/10 bg-panel/50 p-8">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm text-sand-light/60">{t("contact.form.name")}</label>
            <input
              id="name" name="name" required value={form.name} onChange={handleChange}
              className="rounded-lg border border-sand/15 bg-bg px-4 py-2.5 text-sm text-sand-light outline-none focus:border-sand/50 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-sand-light/60">{t("contact.form.email")}</label>
            <input
              id="email" name="email" type="email" required value={form.email} onChange={handleChange}
              className="rounded-lg border border-sand/15 bg-bg px-4 py-2.5 text-sm text-sand-light outline-none focus:border-sand/50 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-sm text-sand-light/60">{t("contact.form.subject")}</label>
            <input
              id="subject" name="subject" value={form.subject} onChange={handleChange}
              className="rounded-lg border border-sand/15 bg-bg px-4 py-2.5 text-sm text-sand-light outline-none focus:border-sand/50 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-sand-light/60">{t("contact.form.message")}</label>
            <textarea
              id="message" name="message" rows={4} required value={form.message} onChange={handleChange}
              className="rounded-lg border border-sand/15 bg-bg px-4 py-2.5 text-sm text-sand-light outline-none focus:border-sand/50 transition-colors resize-none"
            />
          </div>

          <Button type="submit" variant="primary" className="mt-2 justify-center" disabled={status === "sending"}>
            {status === "sending" ? t("contact.form.sending") : t("contact.form.submit")}
          </Button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-sand">
              <CheckCircle2 size={16} />
              {t("contact.form.success")}
            </p>
          )}
        </form>
      </Container>
    </div>
  );
}
