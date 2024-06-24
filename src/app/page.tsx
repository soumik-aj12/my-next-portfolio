"use client"
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import RetroGrid from "@/components/ui/retro-grid";
export default function Home() {
  return (
    <div>
      <Navbar />
      <RetroGrid/>
      <div className="flex flex-col items-center">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
