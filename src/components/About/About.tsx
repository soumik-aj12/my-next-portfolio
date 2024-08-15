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

import RetroGrid from "../ui/retro-grid";
import Roadmap from "./Roadmap";
import { SiMongodb } from "react-icons/si";
const Skills = () => {
  const skills = [
    { name: "Java", Icon: <FaJava />, color: "text-blue-600", bgColor:"bg-orange-300" },
    { name: "Python", Icon: <FaPython />, color: "text-[#f7cf47]", bgColor:"bg-[#366d9c]"  },
    { name: "HTML", Icon: <FaHtml5 />, color: "orange", bgColor:"bg-orange-300"  },
    { name: "CSS", Icon: <FaCss3 />, color: "orange", bgColor:"bg-orange-300"  },
    { name: "JS", Icon: <FaJs />, color: "orange", bgColor:"bg-orange-300"  },
    { name: "React", Icon: <FaReact />, color: "text-[#36c0da]", bgColor:"bg-white"  },
    { name: "NodeJS", Icon: <FaNodeJs />, color: "text-green-400", bgColor:"bg-gray-700"  },
    { name: "MongoDB", Icon: <SiMongodb />, color: "text-green-600", bgColor:"bg-white"  },
  ];

  return (
    <div className="flex flex-col lg:h-[90vh] w-[100%] items-center justify-around">
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
                    <button className={`w-[7rem] ${skill.bgColor} ${skill.color}`}>
                      {skill.name} {skill.Icon}
                    </button>
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
