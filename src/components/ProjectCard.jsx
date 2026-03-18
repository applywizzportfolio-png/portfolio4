import React from 'react'
import git from '../assets/icons8-github-logo.gif'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const ProjectCard = (props) => {
    const navigate = useNavigate();
    const handleProjectDetails =(id)=>{
        console.log(props.id);
        navigate(`/project/${id}`);

    }
    

  return (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}   // before appearing
        whileInView={{ opacity: 1, y: 0 }} // when in viewport
        viewport={{ once: true ,margin:'-80px'}}          // animate only once
        transition={{ duration: 1, ease: "easeOut" }}
        className='flex flex-col relative overflow-hidden rounded-xl bg-[#292929b3] border border-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20'>
        <div>
            <img src={props.image} />
        </div>
        <div className='p-6'>
            <div className='flex flex-wrap gap-2 text-white text-sm'>
                {props.techStack.map((tech,index)=>(
                    <span
                        key={index}
                        className='bg-white/10 px-2 py-1 rounded hover:bg-white/5'
                    >
                        {tech}
                    </span>
                ))}
                {/* <div className='bg-white/10 px-2 py-1 rounded hover:bg-white/5'>ReactJs</div>
                <div className='bg-white/10 px-2 py-1 rounded hover:bg-white/5'>TailwindCSS</div>
                <div className='bg-white/10 px-2 py-1 rounded hover:bg-white/5'>i18next</div> */}
            </div>
            <h1 className='text-white font-poppins font-bold text-lg mt-2'>{props.name}</h1>
            <p className='mt-1 text-[#9ca3af] font-roboto text-sm'>{props.description}</p>
            <div className='flex justify-between'>
                <div className='bg-white py-1 px-2 rounded mt-5 w-fit flex gap-2'>
                <img src={git} className='w-4' />
                <a target="_blank" rel="noopener noreferrer" href={props.github} className='text-sm'>Github</a>
                </div>
                <div>
                    <button onClick={()=>handleProjectDetails(props.id)} className='bg-white py-1 px-2 rounded mt-5 w-fit flex gap-2'>Details</button>
                </div>
                
            </div>
            
        </div>
        
    </motion.div>
  )
}

export default ProjectCard