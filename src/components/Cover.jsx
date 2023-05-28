import React from 'react'
import coverPage from '../assets/cover.jpg'
import lines from '../assets/lines.png'
import '../css/Cover.css'
import { motion } from "framer-motion"


const Cover = () => {
  return (
    <>
        <div className="cont-img-cover">
          <img src={coverPage} alt="Presenación" className='img-cover'/>
        </div>
        <div className="cont-text-cover">
            <div className="header-text-cover">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                 <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                <h3 className='h3-text-cover'>SOMOS</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
            </div>
            <motion.h1 initial={{ x: 300 }} animate={{ x:0 }} transition={{ delay: 1 }} className='logoName-text-cover'>KRUX</motion.h1>
            <div className="header-text-cover">
                <img src={lines} alt="" width={18}/>
                <h3>SERVICIO</h3>
                |
                <h3>DISEÑO</h3>
                |
                <h3>BUILD</h3>
                <img src={lines} alt="" width={18}/>
            </div>
            <br />
            <div className="header-text-cover">
                <h3>corporation</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
                <h3>success</h3>
            </div>
        </div>
    </>

  )
}

export default Cover
