import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import img from "../images/3-bg.png"
export default function main() {
  return (
    <div className='mt-[18vh] '>
       
        <div className='flex flex-wrap justify-center text-yellow-500'>
       <div className=' '><img className=" lg:ml-36" style={{height:''}} src={img} alt="Not found"/></div>
       <div className='w-[70vw] lg:w-[40vw]'>
       <h1 className='font-bold text-6xl'>About me</h1>
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       "hi i am jayant and this is my portfolio just a place where i write about stuff i do on a regular basis.Do hit me up for project discussion. "
      ]}
      wrapper="span"
      speed={50}
      className='font-semibold text-3xl pt-10 text-white'
      style={{ display: 'inline-block' }}
      repeat={1}
    />
       </div>
       </div>
    </div>
  )
}
