import React from 'react'
import Button from '../Ui/Button'

export default function HeroContent({title, subtitle, button}) {
  return (
     <>
         <h1 className='text-3xl text-wrap md:text-5xl font-bold md:w-200'>{title}</h1>
               <p className='text-md  md:w-200'>{subtitle}</p>
               {/* <div><Button className={"bg-[#001AFF] w-auto py-[14px] px-[32px]"} butttontext="Get Started" /></div> */}
     </>
  )
}
