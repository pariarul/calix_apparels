import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Values from "@/components/Values";
import Products from "@/components/Products";
import Certifications from "@/components/Certifications";
import Market from "@/components/Market";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Values />
      <Products />
      <Certifications />
      <Market />
      <Process />
      <CTA />
    </main>
  );
}
