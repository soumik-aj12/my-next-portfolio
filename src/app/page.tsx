import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <BackgroundBeams />

      <Navbar />
      <div className="flex flex-col items-center">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
