import React, { useState } from 'react'
import proj from '../assets/icons8-projects-50.png'
import cer from '../assets/icons8-diploma-64.png'
import stack from '../assets/icons8-tech-stack-50.png'
import TechStackCard from './TechStackCard'
import ProjectCard from './ProjectCard'
import DisplayProjects from './DisplayProjects'
import { DisplayTechStack } from './DisplayTechStack'
import { motion } from "framer-motion";
import DisplayCertificate from './DisplayCertificate'
import { portfolioData } from '../data/portfolioData'

const ProjectSection = () => {
    const { projectSection } = portfolioData;
    const [active, setActive] = useState("Projects");
  return (
    <section id='projects' className='min-h-screen px-6 py-10 lg:px-36 '>
        <motion.h1 
            initial={{ opacity: 0, y: 30 }}   // before appearing
            whileInView={{ opacity: 1, y: 0 }} // when in viewport
            viewport={{ once: true }}          // animate only once
            transition={{ duration: 1, ease: "easeOut" }}
            className='text-2xl md:text-3xl lg:text-5xl poppins text-white font-bold text-center'>{projectSection.title}</motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 30 }}   // before appearing
            whileInView={{ opacity: 1, y: 0 }} // when in viewport
            viewport={{ once: true }}          // animate only once
            transition={{ duration: 1, ease: "easeOut" }}
            className=' text-gray-100 md:text-xl lg:text-2xl md:mt-5 text-center mt-3'>{projectSection.description}</motion.p>
        {/* AI_EDITABLE_START */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}   // before appearing
            whileInView={{ opacity: 1, y: 0 }} // when in viewport
            viewport={{ once: true }}          // animate only once
            transition={{ duration: 1, ease: "easeOut" }}
            className='bg-[#292929b3] h-24 mt-3 md:mt-5 rounded-2xl flex md:gap-2 justify-between px-4 py-2  text-white font-poppins '>
            <button
                className={`px-1 md:px-3 w-full rounded-2xl text-sm md:text-xl flex flex-col justify-center items-center gap-2
                    hover:bg-[#1b1b1b]/50
                    ${active === "Projects" ? "bg-[#1b1b1b]" : ""}
                `}
                onClick={() => setActive("Projects")}
                >
                <img className="md:w-10 w-7" src={proj} />
                {portfolioData.projectTabs.projects}
                </button>
 
                <button
                className={`px-1 md:px-3 w-full rounded-2xl text-sm md:text-xl flex flex-col justify-center items-center gap-2
                    hover:bg-[#1b1b1b]/50
                    ${active === "Certificates" ? "bg-[#1b1b1b]" : ""}
                `}
                onClick={() => setActive("Certificates")}
                >
                <img className="md:w-10 w-7" src={cer} />
                {portfolioData.projectTabs.certificates}
                </button>
 
                <button
                className={`px-1 md:px-3 w-full rounded-2xl text-sm md:text-xl flex flex-col justify-center items-center gap-2
                    hover:bg-[#1b1b1b]/50
                    ${active === "Tech" ? "bg-[#1b1b1b]" : ""}
                `}
                onClick={() => setActive("Tech")}
                >
                <img className="md:w-10 w-7" src={stack} />
                {portfolioData.projectTabs.techStack}
                </button>
 
        </motion.div>
        {/* AI_EDITABLE_END */}
        {active=="Projects"&& <DisplayProjects />}
        {active=="Certificates"&& <DisplayCertificate />}
        {active=="Tech"&& <DisplayTechStack />}

    </section>
  )
}

export default ProjectSection