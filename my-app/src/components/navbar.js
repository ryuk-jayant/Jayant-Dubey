import React from 'react'
import img from "../images/jupiter.png"
import Frontview from "./up.js";
export default function navbar() {
  return (
    <div className='pt-5 text-lg font-mono flex items-center justify-around text-yellow-600'>
    <Frontview/>
    <div className='grid grid-cols-3 gap-10'>
    <a href='/#Project'>Projects</a>
    <a href='#'>Contact</a>
    <a href='#'>Blogs</a>
    </div>
     <img className='h-24' src={img} alt="not found"/>
    </div>
  )
}
