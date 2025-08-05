import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
export default function HomePage() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      {/* <Hero />
      <AboutSection />
      <CoreValues />
      <ModularSection />
      <CTASection /> */}
      <Footer />
    </div>
  );
}
