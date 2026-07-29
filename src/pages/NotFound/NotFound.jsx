import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import { useLanguage } from "../../hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="py-32 md:py-40">
      <Container className="flex flex-col items-center text-center gap-6">
        <span className="font-display text-7xl text-sand/15">404</span>
        <h1 className="font-display text-3xl text-sand-light">{t("notfound.title")}</h1>
        <p className="text-sand-light/60 max-w-md">{t("notfound.text")}</p>
        <Button to="/" variant="primary">
          {t("notfound.cta")}
        </Button>
      </Container>
    </div>
  );
}
