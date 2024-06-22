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
      <BackgroundBeams/>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
