import React from 'react'
import Card1 from './partials/Card1'
import '../css/NuestroServicio.css'

//Sources
import Bombilla from '../assets/icons/bombilla.png'
import Diseno from '../assets/icons/Diseno.png'
import Idea from '../assets/icons/Idea.png'
import Logro from '../assets/icons/Logro.png'
import Wave from '../assets/icons/wave.png'
import { motion } from 'framer-motion'

const misCards =[{
    id: 1,
    title: "IDEAS",
    img: Bombilla
},
{
    id: 2,
    title: "SERVICIOS",
    img: Diseno
},
{
    id: 3,
    title: "DESARROLLO",
    img: Idea
},
{
    id: 4,
    title: "METAS",
    img: Logro
}
]



const NuestroServicios = () => {
  return (
    <div className='nuestroServicio-cont'>
      <h2 className='nuestroServicio-title'>Estamos a su servicio.</h2>
      <img src={Wave} alt="icon ola" className='nuestroServicio-icon-wave'/>
      <p className='nuestroServicio-p'>Disponibilidad y Responsabilidad en el trabajo que necesites, lo que piensas que puedes hacer nosotros lo hacemos por vos.</p>
      <div className="miniCards-cont">
        {
            misCards.map((item) => <Card1 key={item.id} title={item.title} img={item.img} />)
        }
      </div>
    </div>
  )
}

export default NuestroServicios
