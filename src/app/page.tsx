"use client";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects"
import About from "@/components/About/About";
import RetroGrid from "@/components/ui/retro-grid";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <RetroGrid />
      <div className="flex flex-col items-center">
        <Hero />
        <About />
        <Projects/>
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}
