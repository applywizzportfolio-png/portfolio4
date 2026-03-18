import React,{useState} from 'react'
import { portfolioData } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import up from '../assets/up.png'
import down from '../assets/down.png'
const DisplayProjects = () => {
  const { projects } = portfolioData;
  const [show, setshow] = useState(false);
  const size = projects.length;
  const showProjects = () => {
    show?setshow(false):setshow(true)
  };



  return (
    <div >
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8'>
          {
            (show ? projects : projects.filter(c => c.id <= 3) )
              .map((project)=>(
                <ProjectCard key={project.id}   image={project.image} techStack={project.techStack} name={project.name} description={project.description}  github={project.github} id={project.id}/>
              ))
}
      </div>
      <div className={`flex justify-end mt-5 ${size >3?"block":"hidden"}`}>
        <div className='text-white px-2 py-1 lg:text-xl font-bold lg:px-3 flex gap-2 justify-center items-center hover:scale-[1.05] hover:bg-white/20 transition-all duration-300 bg-white/20 rounded'>
          <button  onClick={showProjects}>{show?"Show less":"Show more"}</button>
          {show?<img className='w-3 h-4' src={up}/>:<img className='w-3 h-4' src={down}/>}
        </div>
      </div>
        
    </div>

  )
}
//   {
//   return (
//     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
//             {projects.map((project)=>(
//                 <ProjectCard key={project.id} image={project.image} techStack={project.techStack} name={project.name} description={project.description}  github={project.github}/>
//             ))}
//     </div>
//   )
// }

export default DisplayProjects