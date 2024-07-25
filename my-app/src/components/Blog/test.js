import {React} from 'react'
import { useParams } from 'react-router-dom'
import blogs from "../blog.json"
import Navbar from '../navbar';
import Contact from '../contact';
export default function Test() {
    let {id}=useParams();
    id=parseInt(id);
    const blog=blogs.find(item=>item.id===id)
    return(
        <div className='bg-[#8e41b0] bg-gradient-to-tl from-[#6b3ba3] to-[#6b2a87]'>
        <Navbar/>
        <div className=''>
            <h1 className='text-4xl text-[#eab308] font-semibold pt-10 text-center'>{blog.title}</h1>
            
            <div className='mt-10 mb-10 flex flex-col items-center gap-10'>
            <div className='flex gap-10 justify-start items-center'>
                {blog.categories.map((cat)=>{
                    return(<p className='text-[#eab308] text-xs border-2 border-[#eab308] hover:bg-white hover:text-black rounded-full px-3 py-1 '>{">"+cat}</p>)
                })}
            </div>
                {/*<p className='leading-loose text-pretty indent-3 align-middle capitalize text-slate-300 font-light text-xl w-[60vw]' >{blog.content}</p>%}*/ }               
                <p className='leading-loose text-pretty indent-3 align-middle capitalize text-slate-300 font-light text-xl w-[60vw]' dangerouslySetInnerHTML={{ __html: blog.content }}/>
            </div>
        </div>
        
        <Contact/>
        </div>
    )
}