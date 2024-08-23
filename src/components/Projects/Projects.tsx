import React from "react";

import ExpandableProjects from "./ExpandableProjects";
import Link from "next/link";
const Projects = () => {
  return (
    <div className="flex flex-col md:h-[100vh] w-[85vw] md:w-[50vw] items-center justify-evenly">
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl text-green-500 lg:mb-6">projects</div>
        <div className="flex flex-col lg:flex-row gap-4 text-justify">
          <ExpandableProjects />
        </div>
        <Link href="http://www.github.com/soumik-aj12?tab=repositories" target="_blank" className="hover:underline hover:font-semibold">See more</Link>
      </div>
    </div>
  );
};
2;

export default Projects;
