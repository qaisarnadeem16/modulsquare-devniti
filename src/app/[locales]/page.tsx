import Features from "@/components/common/features";
import Section from "@/components/common/section";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Section
        title="Nos modules pour tous vos besoins"
        description="Bureau, salle de classe, base vie ou espace médical, nos solutions sont adaptées à chaque activité."
        image="/images/module-1.jpg"
      />
      <Section
        title="Installation rapide et efficace"
        description="Nos équipes livrent et installent vos bâtiments modulaires en un temps record, partout à l'île Maurice."
        image="/images/module-2.jpg"
        reverse
      />
      <Features />
      <Footer />
    </>
  );
}
