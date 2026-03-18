import React from 'react'
import { motion } from "framer-motion";
import { portfolioData } from '../data/portfolioData';

const AboutSection = () => {
  const { about, profile } = portfolioData;

  return (
    <section id="about" className='bg-white relative rounded-4xl overflow-hidden   md:py-20  -mt-20 md:-mt-22 lg:-mt-58 z-20 px-8 lg:px-20 py-12'>
        <div className='grid gap-5 md:grid-cols-2'>
            <motion.div
                initial={{ opacity: 0, x: -120 }}   // before appearing
                whileInView={{ opacity: 1, x: 0 }} // when in viewport
                viewport={{ once: false }}          // animate only once
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className='text-black font-bold text-xl font-roboto lg:text-3xl '>{profile.name}</h1>
                <p className='text-black font-extrabold text-2xl font-poppins lg:text-6xl'>{about.title} <span className='text-red-500 '><br className='hidden md:block ' />{about.titleHighlight}</span></p>
                <p className='font-roboto pt-5 lg:text-2xl'>{about.description}</p>

                 
            </motion.div>
            <motion.div
                className='flex justify-center items-center overflow-hidden rounded-xl hover:scale-[1.02] transiton-all duration-300'
                initial={{ opacity: 0, x: 120 }}   // before appearing
                whileInView={{ opacity: 1, x: 0 }} // when in viewport
                viewport={{ once: false }}          // animate only once
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <img className=' rounded-xl outline-12 outline-gray-100 w-9/10 lg:max-w-120 sm:max-w-40 md:max-w-54' src={profile.avatar} alt="img" />
            </motion.div>
            
        </div>
            
    </section>
  )
}

export default AboutSection