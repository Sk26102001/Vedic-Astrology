import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Process from "./sections/Process";
import WhatsInside from "./sections/WhyKundli";
import WhyChoose from "./sections/WhyChoose";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <WhatsInside />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
    </>
  );
}
