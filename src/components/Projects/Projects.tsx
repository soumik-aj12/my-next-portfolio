import React from 'react'
import { ProjectCard } from './ProjectCard'
import { ProjectsList } from '@/data/data'
const Projects = () => {
  return (
    <div className="flex flex-col lg:h-[90vh] items-center justify-around">
      <div className='text-4xl text-green-500'>projects</div>
      <div>{ProjectsList.map((project,index)=>{
        return (
          <div key={index}>
            <ProjectCard project={project}/>
          </div>
        )
      })}</div>
    </div>
  )
}

export default Projects