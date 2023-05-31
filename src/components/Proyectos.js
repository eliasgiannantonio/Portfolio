import React, { useState, useEffect } from 'react'

import { proyectosData } from "../data"
import { proyectosNav } from "../data"

import ProyectoIndiv from "./ProyectoIndiv"

const Proyectos = () => {
  const [item, setItem] = useState({ name: 'todos' })
  const [proyectos, setProyectos] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === 'todos') {
      setProyectos(proyectosData)
    } else {
      const newProyectos = proyectosData.filter(
        (ProyectoIndiv) => {
          return ProyectoIndiv.category.toLowerCase() === item.name
        })
      setProyectos(newProyectos)
    }
  }, [item])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() })
    setActive(index)
  }

  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {proyectosNav.map((item, index) => {
            return <li onClick={(e) => {
              handleClick(e, index)
            }}
              className={`${active === index ? 'active' : ''}     cursor-pointer capitalize m-4`}
              key={index}>{item.name}</li>
          })}
        </ul>
      </nav>
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {proyectos.map((item) => {
          return <ProyectoIndiv item={item} key={item.id}/>
        })}
      </section>
    </div>
  )
}




export default Proyectos