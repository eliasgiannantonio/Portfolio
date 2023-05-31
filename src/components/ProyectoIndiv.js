import React from 'react'

const ProyectoIndiv = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className="mb-8">
        <a href={item.href}><img className='rounded-2xl' src={item.image} alt="" /></a>
      </div>
      <p className='capitalize text-orange-500 text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
    </div>
  )
}

export default ProyectoIndiv