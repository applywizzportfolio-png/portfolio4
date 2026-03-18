import React from 'react'
import { portfolioData } from '../data/portfolioData'

const Footer = () => {
  return (
    <div className='bg-[#292929b3] flex justify-center items-center text-white font-poppins py-3 text-[12px] md:text-lg'>© 2026 {portfolioData.profile.name}. All rights reserved.
</div>
  )
}

export default Footer