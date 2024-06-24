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
    {name:"Bidya Bhaban", Year:"2005-2017", Percentage:"70.71%"},
    {name:"Behala High School", Year:"2017-2019", Percentage:"66.83%"},
    {name:"Behala College", Year:"2019-2022", Percentage:"8.392"},
    {name:"Heritage Institute of Technology", Year:"2022-2024", Percentage:"8.76"},
  ]
  return (
    <div className="bg-[#090909] flex flex-col h-[90vh] w-[100%] items-center justify-around">
      <div className="flex flex-col items-center w-[60vw]">
        <div className="text-4xl text-green-500">about me</div>
        <div>
          A Computer Science graduate with a strong foundation in web
          development technologies. Pro cient in HTML5, CSS3, JavaScript,
          React.js, Node.js, and Express.js. Experienced in building responsive
          and user-friendly web applications. Skilled in Git, and collaborative
          development. Passionate about writing clean, maintainable code and
          learning new technologies.
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl text-green-500">skills</div>
        <div className="flex">
          {skills.map((skill, key) => {
            return (
              <div key={key} className="p-2">
                <Button>
                  {skill.name} {skill.Icon}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl text-green-500">education</div>
        <div className="flex">
          {Education.map((E, key) => {
            return (
              <div key={key} className="p-2">
                <div className="text-2xl">{E.name}</div>
                <div className="">Year: {E.Year}</div>
                <div className="">Percentage/CGPA: {E.Percentage}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
