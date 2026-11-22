import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import ServicesPreview from "./ServicesPreview";
import PortfolioPreview from "./PortfolioPreview";
import ContactCta from "./ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <ContactCta />
    </>
  );
}
