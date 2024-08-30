"use client";
import React from "react";
import Image from "next/image";

import Roadmap from "./Roadmap";

import { skills } from "./skill";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensure the animation triggers every time the section comes into view
    threshold: 0.3, // Adjust as needed to trigger when a portion of the section is visible
  });
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };
  return (
    <div
      id="about"
      className="flex flex-col w-[100%] items-center justify-around mb-6"
    >
      <div className="relative lg:w-[80%] flex flex-col lg:flex-row lg:items-center lg:justify-around">
        <div>
          <div className="flex flex-col items-center justify-center m-4">
            <div className="text-4xl text-green-500 lg:mb-6">
              <span className="text-white">#</span>education
            </div>
            <div className="flex flex-col lg:flex-row">
              <Roadmap/>
            </div>
          </div>
        </div>
        <div
          className="lg:h-[100vh] flex flex-col lg:justify-evenly items-center"
        >
          <div className="flex flex-col items-center w-[80vw] lg:w-[30vw]">
            <div className="text-4xl text-green-500 lg:mb-6">
              <span className="text-white">#</span>about me
            </div>
            <div className="text-justify">
              Hey! My name is Soumik Sil. I am a Computer Science graduate with
              a strong foundation in web development technologies. Proficient in
              HTML5, CSS3, JavaScript, React.js, Node.js, and Express.js.
              Skilled in Git, and collaborative development. Passionate about
              writing clean, maintainable code and learning new technologies. I
              also love playing video games and learning about music.
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl text-green-500 mt-6 lg:mb-6">
              <span className="text-white">#</span>skills
            </div>
            <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4">
              {skills.map((skill: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="m-1 p-2 rounded-md border-solid border-white flex justify-center items-center"
                  >
                    <motion.div className="mr-1" variants={iconVariants}>
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        height="28"
                        width="28"
                        className={
                          skill.name === "Express" || skill.name === "NextJs"
                            ? `bg-white p-1 rounded-full`
                            : ""
                        }
                      />
                    </motion.div>
                    <div>{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
