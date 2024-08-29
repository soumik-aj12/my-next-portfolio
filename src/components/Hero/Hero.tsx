"use client";
import React from "react";
import IconCloud from "../ui/icon-cloud";

import { Cover } from "../ui/cover";

const Hero = () => {
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
    <div className="lg:h-[100vh] w-[80vw] mt-8 flex flex-col items-center justify-center">
      <div className="lg:h-[50vh] flex flex-col lg:flex-row lg:justify-evenly items-center justify-center md:mt-5">
        <div className="lg:w-[40vw] m-2 text-center">
          <div className="text-2xl lg:text-5xl font-bold mb-2">Hello there! I am <Cover className="text-green-600">Soumik</Cover></div>
          <div className="text-2xl lg:text-4xl text-center font-bold text-green-600">FULL STACK DEVELOPER</div>
          <div className="lg:mt-0 mt-[10px] italic">
          Lead thy life as thou seest fit - Hawkeye Gough, Dark Souls
          </div>
        </div>
        <div className="h-15 w-15">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
