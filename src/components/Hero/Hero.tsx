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
    <div className="lg:h-[100vh] w-[80vw] flex flex-col items-center justify-center">
      <div className="w-[90vw] lg:h-[50vh] flex flex-col lg:flex-row lg:justify-evenly items-center justify-center md:mt-5">
        <div className="lg:w-[40vw] m-2 text-center">
          <div className="text-2xl lg:text-5xl text-green-600 font-bold mb-2">
            WELCOME TARNISHED,<div>to the Abyss Of Coding.</div>
          </div>
          <div className="text-base lg:text-sm text-justify">
            You stand at the dawn of your journey, where challenges of arcane
            bugs and cryptic syntax await. Armed with fresh knowledge, embrace
            the trials ahead—each error is a lesson, each line of code a step
            toward mastery. Rise, young developer, and let your creations shine
            in the vast expanse of the internet.{" "}
          </div>
          <div className="lg:mt-0 mt-[10px] font-bold">
            Forge your legacy in this digital realm.
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
