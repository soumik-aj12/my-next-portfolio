"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import IconCloud from "../ui/icon-cloud";

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
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "python",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "firebase",
    "vercel",
    "git",
    "github",
    "visualstudiocode",
    "androidstudio",
    "figma",
  ];
  return (
    <div className="h-[100vh] w-[80vw] flex flex-col items-center justify-normal">
      <TypewriterEffectSmooth words={words} className="mb-10" />
      <div className="w-[90vw] lg:h-[50vh] flex flex-col lg:flex-row lg:justify-evenly items-center justify-center md:mt-5">
        <div className="text-2xl lg:text-6xl">
          <div>
            my name is <span className="text-green-500">soumik sil</span>.
          </div>
          <div className="text-base lg:text-sm">
            i am interested in exploring the web through AI.
          </div>
          <div className="lg:mt-0 mt-[10px]">
            <button className="text-[20px] px-2 py-1 rounded-md bg-green-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-green-500">
              Download Resume
            </button>
          </div>
        </div>
        <div className="h-15 w-15">
          <IconCloud iconSlugs={slugs}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
