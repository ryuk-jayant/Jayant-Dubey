import React from 'react'
import blogs from "./blog.json";
import Navbar from './navbar';
import { Link } from 'react-router-dom';
export default function Blog() {
  return (
    <div className="bg-[#8e41b0] h-screen">
      <Navbar/>
        <h1 className='text-4xl text-[#eab308] font-semibold pt-10 text-center '>My Blogs</h1>
        <div className='flex flex-col items-center justify-center gap-10 mt-10'>
        {blogs.map((blog)=>{
          return(

            <div className='bg-white w-[40vw] p-4 rounded-lg border-2 border-black hover:shadow-2xl'>
              <div className='font-semibold text-brown-800 p-2 bg-no-repeat bg-cover' style={{backgroundImage:'url('+blog.Bg+')'}}>
              <p className='text-sm'>{blog.date}</p>
              <h1 className='text-xl m-2 font-bold'>{blog.title}</h1>
              <div className='flex justify-between m-2'>
              <p className='text-sm'>{blog.author}</p>
              <Link to={'/Blog/'+blog.id} className='bg-white p-2 rounded-full border-2 border-black' >Read Me</Link>
              </div>
            </div>
            </div>
            
          )
        })}
        </div>
    </div>
  )
}
