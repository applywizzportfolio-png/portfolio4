import React from 'react'
import { useParams } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData'

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = portfolioData.projects.find((p)=>p.id=== Number(projectId));

    if(!project){
    return <h2 className='flex justify-center items-center h-[100vh]'>Project not found</h2>
  }

  return (
    <div className='flex justify-center items-center h-[100vh] text-white'>
        Project ID: {project.id} - {project.name}
    </div>
  )
}

export default ProjectDetails