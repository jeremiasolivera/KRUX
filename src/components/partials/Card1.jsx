import React, { useEffect } from 'react'
import '../../css/Card1.css'
import { useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Card1 = ({title,img}) => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once:true});

  const mainControls = useAnimation()

  useEffect(()=>{
    if(isInView){
      mainControls.start('visible')
    }
  },[isInView])

  return (
    <motion.div ref={ref} className='card1-cont' 
      variants={{
        hidden: {opacity: 0, x:200},
        visible: {opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration:0.5, delay: 0.25}}
    >
      <img src={img} alt={title} className='card1-img'/>
      <div className="card1-line"></div>
      <h1 className='card1-title'>{title}</h1>
    </motion.div>
  )
}

export default Card1
