import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Features = dynamic(() => import("@/components/Features"));
const Projects = dynamic(() => import("@/components/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <div className="section-optimize"><Services /></div>
      <div className="section-optimize"><Features /></div>
      <div className="section-optimize"><Testimonials /></div>
      <div className="section-optimize"><Projects /></div>
      <div className="section-optimize"><Contact /></div>
      <Footer />
    </main>
  );
}
