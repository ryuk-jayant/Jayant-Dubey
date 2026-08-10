import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import SkillHealthBar from './technicalHealth';
// import img from "../images/img.png"
export default function main() {
  return (
    <div className='mt-[18vh] '>
       
        <div className='flex flex-wrap  justify-center align-top mb-10 text-yellow-500'>
       <div className='w-[30vw] lg:w-[40vw]'>
        {/* <img className="  style={{height:''}} src={''} alt="Not found"/> */}
          <h1 className='font-bold text-white text-4xl'>Technical Skills</h1>
          <SkillHealthBar/>
          <SkillHealthBar skillName='PyTorch' rank='Rook' level={70}/>
          <SkillHealthBar skillName='NodeJs' level={80}/>
          <SkillHealthBar skillName='MongoDb' rank='Bishop' level={82}/>
          <SkillHealthBar skillName='Python' rank='Queen' level={88}/>
        </div>
       <div className='w-[70vw] lg:w-[40vw]'>
       <h1 className='font-bold text-4xl'>About me</h1>
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
       "hi i am jayant and this is my portfolio just a place where i write about stuff i do on a regular basis.Do hit me up for project discussion. "
      ]}
      wrapper="span"
      speed={70}
      className='font-semibold text-3xl pt-10 text-white'
      style={{ display: 'inline-block' }}
      repeat={1}
    />
       </div>
       </div>
    </div>
  )
}
