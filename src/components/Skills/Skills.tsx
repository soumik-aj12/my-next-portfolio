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

  const Education = [
    {
      name: "Bidya Bhaban",
      Year: "2005-2017",
      CGPA: "",
      DGPA: "",
      Percentage: "70.71%",
      Board: "WBSSE",
    },
    {
      name: "Behala High School",
      Year: "2017-2019",
      Percentage: "66.83%",
      CGPA: "",
      DGPA: "",
      Board: "WBCHSE",
    },
    {
      name: "Behala College",
      Year: "2019-2022",
      CGPA: "8.392",
      DGPA: "",
      Percentage: "",
      Board: "University of Calcutta",
    },
    {
      name: "Heritage Institute of Technology",
      Year: "2022-2024",
      DGPA: "8.76",
      CGPA: "",
      Percentage: "",
      Board: "MAKAUT",
    },
  ];
  return (
    <div className="bg-[#090909] flex flex-col lg:h-[90vh] w-[100%] items-center justify-around">
      <RetroGrid />
      <div className="flex flex-col items-center w-[50vw]">
        <div className="text-4xl text-green-500 lg:mb-6">about me</div>
        <div className="text-justify">
          A Computer Science graduate with a strong foundation in web
          development technologies. Pro cient in HTML5, CSS3, JavaScript,
          React.js, Node.js, and Express.js. Experienced in building responsive
          and user-friendly web applications. Skilled in Git, and collaborative
          development. Passionate about writing clean, maintainable code and
          learning new technologies.
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl text-green-500 lg:mb-6">skills</div>
        <div className="grid grid-flow-row grid-cols-2 lg:grid-flow-col lg:grid-cols-none">
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

      <div className="flex flex-col items-center justify-center m-4">
        <div className="text-4xl text-green-500 lg:mb-6">education</div>
        <div className="flex flex-col lg:flex-row">
          {Education.map((E, key) => {
            return (
              <div key={key} className="p-2">
                <MagicCard className="flex h-[5rem] w-[15rem] lg:h-full lg:w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl transition ease-in-out delay-150 hover:scale-105">
                  <div className="text-xs lg:text-2xl">{E.name}</div>
                  <div className="text-xs lg:text-xl">{E.Board}</div>
                  <div className="text-xs lg:text-lg">Year: {E.Year}</div>
                  <div className="text-xs lg:text-lg text-zinc-400">
                    {E.Percentage.length > 0
                      ? "Percentage: " + E.Percentage
                      : ""}
                    {E.CGPA.length > 0 ? "CGPA: " + E.CGPA : ""}
                    {E.DGPA.length > 0 ? "DGPA: " + E.DGPA : ""}
                  </div>
                </MagicCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
