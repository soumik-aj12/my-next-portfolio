"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const Hero = () => {
  const words = [
    {
      text: "welcome",
    },
    {
      text: "to",
    },
    {
      text: "my",
    },
    {
      text: "world",
      className: "text-green-500 dark:text-green-500",
    },
  ];
  return (
    <div className="h-[80vh] container flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} className="mb-0" />
      <div>
        <div className="text-3xl">
          my name is <span className="text-green-500">soumik sil</span>.
        </div>
        <h2>About me</h2>
        <div className="w-[50%]">
          A MCA Graduate experienced in building responsive and user-friendly
          web applications. Skilled in Git, and collaborative development.
          Passionate about writing clean, maintainable code and learning new
          technologies.
        </div>
      </div>
    </div>
  );
};

export default Hero;
