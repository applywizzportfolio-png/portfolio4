import React, { useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import Logo from './Logo'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import OpenNav from './OpenNav';
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='bg-[#292929b3] absolute top-0 left-0 right-0 h-12 md:h-14 z-100 px-5 py-2 flex justify-between items-center'>
          <Logo />
          {open?<IoClose onClick={()=>setOpen(false)} className='md:hidden text-white' />:<GiHamburgerMenu onClick={()=>setOpen(true)} className='md:hidden text-white' />}
          
          <div className='hidden md:block'>
            {/* AI_EDITABLE_START */}
            <ul className='flex font-roboto text-sm md:text-lg font-semibold text-white/90 gap-4 lg:gap-16 '>
              {portfolioData.nav.map((item, index) => (
                <a key={index} href={item.href} className='hover:text-blue-600'><li>{item.label}</li></a>
              ))}
            </ul>
            {/* AI_EDITABLE_END */}
          </div>
          {open&& <OpenNav close={()=>setOpen(false)}/>}
         
    </nav> 
  )
}

export default Navbar