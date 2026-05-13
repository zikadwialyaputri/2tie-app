import Navbar from "../../components/visitor/Navbar";
import HeroSection from "../../components/visitor/HeroSection";
import AboutSection from "../../components/visitor/AboutSection";
import ProductSection from "../../components/visitor/ProductSection";
import TestimonialSection from "../../components/visitor/TestimonialSection";
import ContactSection from "../../components/visitor/ContactSection";
import Footer from "../../components/visitor/Footer";

export default function VisitorPage() {
  return (
    <main className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* About */}
      <section className="relative">
        <AboutSection />
      </section>

      {/* Products */}
      <section className="relative">
        <ProductSection />
      </section>

      {/* Testimonials */}
      <section className="relative">
        <TestimonialSection />
      </section>

      {/* Contact */}
      <section className="relative">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
