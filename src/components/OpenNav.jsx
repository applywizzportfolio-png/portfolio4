import React from 'react'
import { portfolioData } from '../data/portfolioData'

const OpenNav = (props) => {
  return (
    <div className='absolute bg-white/20 backdrop-blur-md md:hidden  right-5 z-20 top-17 w-1/2 py-5 rounded-4xl items-end '>
        {/* AI_EDITABLE_START */}
        <ul className='flex flex-col font-roboto text-sm justify-center items-center text-white gap-4 lg:gap-6 '>
              {portfolioData.nav.map((item, index) => (
                <a key={index} href={item.href} onClick={props.close} className='hover:text-blue-600'><li>{item.label.toUpperCase()}</li></a>
              ))}
        </ul>
        {/* AI_EDITABLE_END */}
    </div>
  )
}

export default OpenNav