import React from "react";

const Skills = () => {
  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JS",
    "React",
    "NodeJS",
    "MongoDB",
  ];
  return (
    <div className="flex flex-col">
      <div className="text-4xl">about me</div>
      <div>
        
      </div>
      <div>
        {skills.map((skill, key) => {
          return <div key={key}>{skill}</div>;
        })}
      </div>
    </div>
  );
};

export default Skills;
