import BackToTopButton from "@/components/common/back-to-top";
import Features from "@/components/common/features";
import Section from "@/components/common/section";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import LandingPage from "@/components/pages/home";

export default function HomePage() {
  return (
    <>
    <div className='sticky top-0 z-50'>
      <Navbar />
    </div>
    <div className="">
     <LandingPage/>
     <BackToTopButton/>
    </div>
    <div className="">
      <Footer />
    </div>
    </>
  );
}
