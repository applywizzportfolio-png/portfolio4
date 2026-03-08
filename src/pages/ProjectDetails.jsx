import React from 'react'
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects'
const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = projects.find((p)=>p.id=== Number(projectId));

    if(!project){
    return <h2 className='flex justify-center items-center h-[100vh]'>Project not found</h2>
  }

  return (
    <div className='flex justify-center items-center h-[100vh]'>
        {project.id}
    </div>
  )
}

export default ProjectDetails