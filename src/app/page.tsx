"use client";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import RetroGrid from "@/components/ui/retro-grid";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useState, useEffect } from "react";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  const loadingStates = [
    {
      text: "Booting neural interface",
    },
    {
      text: "Rendering neon-lit cityscape",
    },
    {
      text: "Syncing biochip data",
    },
    {
      text: "Calibrating retinal displays",
    },
    {
      text: "System online",
    },
  ];
  return (
    <>
      {loading ? (
        <MultiStepLoader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
      ) : (
        <div>
          <Navbar />
          <RetroGrid />
          <Sidebar />
          <div className="flex flex-col items-center">
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
