import React from 'react'

const projects=[
  {name:"API Development in C++",
    image:"https://assets-global.website-files.com/6228e4b0518bd64c391affa4/622902d6c427f74b6db921e1_catalog-lyft.gif",
    link:"",
    used:"Used C++ Libraries"
  },
  {name:"Bash Tool development",
  image:"https://assets-global.website-files.com/6228e4b0518bd64c391affa4/622902bee9c57d28ce9b6ac6_PS%20Catalog.png",
  link:"",
  used:"Utillized Bash for automation"
},
{name:"Android App Developmnt",
image:"https://assets-global.website-files.com/6228e4b0518bd64c391affa4/622902c7d6e1f93250f25996_Catalog-LinkedIn.gif",
link:"",
used:"Used Kotlin"
},
{name:"Web Development",
image:"https://assets-global.website-files.com/6228e4b0518bd64c391affa4/6229017bee357576d59d5dcf_CatalogAirbnb.gif",
link:"",
used:"used React.js,Tailwind.css"
},
];
export default function projectslist() {
  return (
    <div className='flex justify-center'>
    <div className='grid grid-cols-2 gap-40'>
      {projects.map((ele)=>{
        return(
          <div className='border border-8 border-[#fef0cc] bg-black hover:bg-[#2a66ad] w-[30vw] '>
          <img className="p-2"src={ele.image} alt=""/>
          <h1 className='pt-2 text-[#fef0cc] font-semibold text-3xl'>{ele.name}</h1>
          <p className='p-2 tracking-wide text-[#fef0cc]'>{ele.used}</p>
          
          </div>
        )
      })
      }
    </div>
    </div>
  )
}
