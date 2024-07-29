"use client";
import Link from "next/link";
import { MagicCard } from "../ui/magic-card2";
import { Button } from "../ui/button";
export function ProjectCard({ project }: any) {
  return (
    <MagicCard className="">
      <div className="flex flex-col items-center justify-between p-8">
        <div className="mb-4 text-sm text-center lg:text-2xl">{project.name}</div>
        <div className="text-justify text-sm">{project.description}</div>
        <div className="grid grid-cols-2 md:flex flex-row">
          {project.technology.map((tech:String,index:any)=>{
            return (
              <div key={index} className="p-2 w-full">
                {tech}
              </div>
            )
          })}
        </div>
        <div className="flex justify-between w-[100%]">
          <div>Live</div>
          <div><Link href={project.github}>Github</Link></div>
        </div>
      </div>
    </MagicCard>
  );
}
