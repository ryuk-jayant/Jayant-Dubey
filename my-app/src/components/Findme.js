import React from "react";
import Navbar from "./navbar.js";


export default function Findme() {
  //const [msg,setmsg]=useState("ss");
  const handelsubmit=()=>{
    console.log("i am called");
  }
  return (
    
    <div className="bg-[#8e41b0] h-screen">
      <Navbar/>
      <div className="relative mt-20 md:mt-0">
        <form onSubmit={handelsubmit} class="md:w-[40vw] w-full absolute md:right-[30%] top-[10vh] border py-20 px-10 md:p-20 border-8">
          
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@something.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="textarea"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              type="textarea"
              placeholder="hey..."
              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
