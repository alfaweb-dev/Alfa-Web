import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import Container from "../../layout/Container.jsx";
import Input from "../../common/Input.jsx";
import Button from "../../common/Button.jsx";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";
import { contactSchema } from "../../../utils/validators.js";
import { sendContactMessage } from "../../../services/contactService.js";

export default function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values) => {
    await sendContactMessage(values);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-paper">
      <Container className="max-w-xl">
        <div className="text-center mb-10">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-navy">{t("contact.title")}</h2>
          <p className="text-gray-600 mt-3">{t("contact.desc")}</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl border border-black/5 p-8 space-y-5"
        >
          <Input
            label={t("contact.name")}
            placeholder="Yasmine Belkacem"
            error={errors.name && t(errors.name.message)}
            {...register("name")}
          />
          <Input
            label={t("contact.email")}
            type="email"
            placeholder="you@example.com"
            error={errors.email && t(errors.email.message)}
            {...register("email")}
          />
          <Input
            as="textarea"
            rows={5}
            label={t("contact.message")}
            placeholder="…"
            error={errors.message && t(errors.message.message)}
            {...register("message")}
          />

          <Button type="submit" variant="primary" className="w-full justify-center" disabled={isSubmitting}>
            <Send size={16} />
            {isSubmitting ? "…" : t("contact.submit")}
          </Button>

          {sent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-sm text-emerald-600 font-accent justify-center"
            >
              <CheckCircle2 size={16} /> {t("contact.success")}
            </motion.p>
          )}
        </motion.form>
      </Container>
    </section>
  );
}
