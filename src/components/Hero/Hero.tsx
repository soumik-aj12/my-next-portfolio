"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { GlobeComponent } from "../GlobeComponent";

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
    <div className="lg:h-[80vh] h-[40vh] w-[80vw] flex flex-col items-center justify-normal">
      <TypewriterEffectSmooth words={words} className="mb-10" />
      <div className="w-[90vw] lg:h-[50vh] flex flex-col lg:flex-row lg:justify-evenly items-center justify-center md:mt-5">
        <div className="text-xl lg:text-4xl">
          <div>
            my name is <span className="text-green-500">soumik sil</span>.
          </div>
          <div className="text-base lg:text-sm">
            i am interested in exploring the web through AI.
          </div>
          <div className="mt-[10px]">
            <button className="text-[20px] px-2 py-1 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Download Resume
            </button>
          </div>
        </div>
        <div className="lg:h-[35rem] lg:w-[45rem]">
          <GlobeComponent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
