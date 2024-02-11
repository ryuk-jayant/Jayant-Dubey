import React from 'react'
import img from "../images/3-bg.png"
export default function main() {
  return (
    <div className='mt-[18vh]'>
       
        <div className='grid grid-cols-2 text-yellow-500'>
       <img className=" ml-36 " style={{height:''}} src={img} alt="Not found"/>
       <div className='w-[40vw]'>
       <h1 className='font-bold text-6xl'>About me</h1>
       <p className='text-white text-xl mt-5 text-wrap'>Hey, Jayant this end currently thinking about what to write and working on other projects stay tuned for blogs.  </p>
       </div>
       </div>
    </div>
  )
}
