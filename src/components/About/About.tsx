import React from "react";
import RetroGrid from "../ui/retro-grid";
import Roadmap from "./Roadmap";
import { SiMongodb } from "react-icons/si";
import { AnimatePresence } from "framer-motion";
import { skills } from "./skill";
import Image from "next/image";
import { ProjectsList } from "@/data/data";
import { ProjectCard } from "./ProjectCard";
const Skills = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:h-[100vh] w-[100%] items-center justify-around mb-6"
    >
      <div className="relative lg:w-[80%] flex flex-col lg:flex-row lg:items-center lg:justify-around">
        <div>
          <div className="flex flex-col items-center justify-center m-4">
            <div className="text-4xl text-green-500 lg:mb-6"><span className="text-white">//</span>education<span className="text-white">//</span></div>
            <div className="flex flex-col lg:flex-row">
              <Roadmap />
            </div>
          </div>
        </div>
        <div className="lg:h-[100vh] flex flex-col lg:justify-evenly items-center">
          <div className="flex flex-col items-center w-[60vw] lg:w-[30vw]">
            <div className="text-4xl text-green-500 lg:mb-6"><span className="text-white">//</span>about me<span className="text-white">//</span></div>
            <div className="text-justify">
              A Computer Science graduate with a strong foundation in web
              development technologies. Pro cient in HTML5, CSS3, JavaScript,
              React.js, Node.js, and Express.js. Experienced in building
              responsive and user-friendly web applications. Skilled in Git, and
              collaborative development. Passionate about writing clean,
              maintainable code and learning new technologies.
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl text-green-500 lg:mb-6"><span className="text-white">//</span>skills<span className="text-white">//</span></div>
            <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4">
              {skills.map((skill: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="m-1 p-2 rounded-md border-solid border-white flex justify-center items-center"
                  >
                    <div className="mr-1">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        height="28"
                        width="28"
                        className={skill.name === "Express"?`bg-white p-1 rounded-full`:""}
                      />
                    </div>
                    <div>{skill.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
          <div className="text-4xl text-green-500 lg:mb-6">projects</div>
              <div className="flex flex-col lg:flex-row gap-4">
                {ProjectsList.map((project, index) => {
                  return <ProjectCard key={index} project={project}/>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Skills;
