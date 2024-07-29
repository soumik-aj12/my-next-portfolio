import React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectsList } from "@/data/data";
const Projects = () => {
  return (
    <div className="flex flex-col lg:h-[90vh] items-center justify-evenly">
      <div className="text-4xl text-green-500 mb-4">projects</div>
      <div className="grid grid-cols-1 w-[60vw] lg:w-[50vw] lg:grid-cols-2 gap-4">
        {ProjectsList.map((project, index) => {
          return (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
