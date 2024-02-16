import React from 'react'
import img from "../images/jupiter.png"
import Frontview from "./up.js";
import { Link} from 'react-router-dom';
export default function navbar() {
  return (
    <div className='pt-5 text-lg font-mono flex items-center justify-center md:justify-around  text-yellow-400'>
    <Frontview/>
    <div className='grid grid-cols-3 gap-10 font-semibold opacity-0 md:opacity-100'>
    <a href='/Jayant-Dubey/#Project' className='hover:text-yellow-100'>Projects</a>
    <Link to={'/Contact'} className='hover:text-yellow-100'>Contact</Link>
    <Link to={'/Blog'} className='hover:text-yellow-100'>Blogs</Link>
    </div>
     <img className='h-24' src={img} alt="not found"/>
    </div>
  )
}
