import React from "react";
import {
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
import RetroGrid from "../ui/retro-grid";
import Roadmap from "./Roadmap";
const Skills = () => {
  const skills = [
    { name: "Java", Icon: <FaJava /> },
    { name: "Python", Icon: <FaPython /> },
    { name: "HTML", Icon: <FaHtml5 /> },
    { name: "CSS", Icon: <FaCss3 /> },
    { name: "JS", Icon: <FaJs /> },
    { name: "React", Icon: <FaReact /> },
    { name: "NodeJS", Icon: <FaNodeJs /> },
    { name: "MongoDB", Icon: <FaDatabase /> },
  ];

  return (
    <div className="bg-[#090909] flex flex-col lg:h-[90vh] w-[100%] items-center justify-around">
      <RetroGrid />
      <div className="relative lg:w-[70%] flex flex-col lg:flex-row lg:items-center lg:justify-around">
        <div>
          <div className="flex flex-col items-center justify-center m-4">
            <div className="text-4xl text-green-500 lg:mb-6">education</div>
            <div className="flex flex-col lg:flex-row">
              <Roadmap />
            </div>
          </div>
        </div>
        <div className="lg:h-[50vh] flex flex-col lg:justify-around items-center">
          <div className="flex flex-col items-center w-[60vw] lg:w-[30vw]">
            <div className="text-4xl text-green-500 lg:mb-6">about me</div>
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
            <div className="text-4xl text-green-500 lg:mb-6">skills</div>
            <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, key) => {
                return (
                  <div key={key} className="p-2">
                    <Button className="w-[7rem]">
                      {skill.name} {skill.Icon}
                    </Button>
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
