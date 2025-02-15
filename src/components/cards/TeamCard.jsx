import React from 'react'
import bg from  "../../assets/img/about.avif"


 

export default function TeamCard({image, name, role}) {
  return (
    <div className='w-[200px]  text-center '>
        <img src={image} alt={image}className="w-15 h-15  mb-4 rounded-full mx-auto" />
        <p className='text-md font-semibold'>{name} </p>
        <p className='text-gray-400'>{role}</p>
    </div>
  )
}
