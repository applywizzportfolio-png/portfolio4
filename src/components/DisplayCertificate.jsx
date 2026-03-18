import React ,{useState}from 'react'
import CertificateCard from './CertificateCard'
import { portfolioData } from '../data/portfolioData'
import up from '../assets/up.png'
import down from '../assets/down.png'
const DisplayCertificate = () => {
  const { certificates } = portfolioData;
  const [show, setshow] = useState(false);
  const showCertificates = () => {
    show?setshow(false):setshow(true)
  };



  return (
    <div >
      <div className='grid gap-8 sm:grid-cols-2  lg:grid-cols-3 mt-8'>
          {
            (show ? certificates : certificates.filter(c => c.id <= 3) )
              .map(certificate => (
                <CertificateCard
                  key={certificate.id}
                  image={certificate.image}
                  cname={certificate.cname}
                  issuedby={certificate.issuedby}
                  date={certificate.date}
                  Verify={certificate.Verify}
                />
              ))
          }
      </div>
      <div className={'flex justify-end mt-5 ${size>=3:"block":"hidden"}'}>
        <div className='text-white px-2 py-1 lg:text-xl font-bold lg:px-3 flex gap-2 justify-center items-center hover:scale-[1.05] hover:bg-white/20 transition-all duration-300 bg-white/20 rounded'>
          <button  onClick={showCertificates}>{show?"Show less":"Show more"}</button>
          {show?<img className='w-3 h-4' src={up}/>:<img className='w-3 h-4' src={down}/>}
        </div>
      </div>
        
    </div>

  )
}

export default DisplayCertificate