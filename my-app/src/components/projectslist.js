import React from 'react'

const projects=[
  {name:"API Development",
    image:"https://assets-global.website-files.com/6228e4b0518bd64c391affa4/622902d6c427f74b6db921e1_catalog-lyft.gif",
    link:"",
    used:"Familiar with Go,Javascript and Python"
  },
  {name:"Bash Tool development",
  image:"https://assets-global.website-files.com/6228e4b0518bd64c391affa4/622902bee9c57d28ce9b6ac6_PS%20Catalog.png",
  link:"",
  used:"Utillized Bash for automation"
},
{name:"Android App development",
image:"https://assets-global.website-files.com/6228e4b0518bd64c391affa4/622902c7d6e1f93250f25996_Catalog-LinkedIn.gif",
link:"",
used:"Familiar with Kotlin,ADB"
},
{name:"Web Development",
image:"https://assets-global.website-files.com/6228e4b0518bd64c391affa4/6229017bee357576d59d5dcf_CatalogAirbnb.gif",
link:"",
used:"Familiar with React.js,Next-js,Xampp,Tailwind.css"
},
{name:"Machine Learning",
image:"https://media1.tenor.com/m/JP9HqdvniboAAAAd/scooby-doo-mystery-machine.gif",
link:"",
used:"Know PyTorch"
},
];
export default function projectslist() {
  return (
    <div className='flex justify-center'>
    <div className='flex flex-wrap justify-center gap-40'>
      {projects.map((ele)=>{
        return(
          <a href={ele.link}>
          <div className='border border-8 border-[#fef0cc] bg-black hover:bg-[#f16a2d] w-[60vw] lg:w-[30vw] '>
          <img className="p-2 w-[100vw] h-[10vh]"src={ele.image} alt=""/>
          <h1 className='pt-2 text-[#fef0cc] font-semibold text-3xl text-wrap overflow-hidden'>{ele.name}</h1>
          <p className='p-2 tracking-wide text-[#fef0cc] text-wrap overflow-hidden'>{ele.used}</p>
          </div>
          </a>
        )
      })
      }
    </div>
    </div>
  )
}
