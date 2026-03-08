import React from 'react'
import { useNavigate } from 'react-router-dom'
import not from "../assets/404-error.png"
import { motion } from 'motion/react'
const NotExists = () => {
  const navigate = useNavigate();
  const handleNotFound=()=>{
    navigate("/")
  }
  return (
    <div className='font-roboto   h-screen p-5 flex flex-col justify-center items-center'>
        <div className='w-42 md:w-64'>
          <img className='w-fit' src={not} />
        </div>
        <div className='flex flex-col justify-center items-center px-3 gap-5'>
        <div className='text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center'>We Lost this page</div>
        <div className='text-gray-400 md:text-lg lg:text-xl  text-center'>We searched high and low but couldn't find what you're looking for.<br /> Let's find a better place for you to go</div>
        <div>
          
          <motion.button
                              className="bg-[#292929b3] px-1.5 rounded-xl w-44 h-10 text-lg lg:w-64 text-white  lg:h-16 text-center flex justify-center items-center"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              initial={{ opacity: 0, y: 50 }}   // before appearing
                              whileInView={{ opacity: 1, y: 0 }} // when in viewport
                              viewport={{ once: true }}          // animate only once
                              transition={{ duration: 1, ease: "easeOut" }}
                              onClick={handleNotFound}
                              
                            >
                              GO TO HOME
                </motion.button>
        </div>
        </div>
    </div>

  )
}

export default NotExists