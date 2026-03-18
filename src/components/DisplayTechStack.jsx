import React from 'react'
import { portfolioData } from '../data/portfolioData'
import TechStackCard from './TechStackCard'
export const DisplayTechStack = () => {
  const { techStack } = portfolioData;
  return (
    <div className='grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 mt-8 gap-5'>
        {techStack.map((tech)=>(
            <TechStackCard key={tech.id} image={tech.image} name={tech.name}/>
        ))}
    </div>
  )
}
