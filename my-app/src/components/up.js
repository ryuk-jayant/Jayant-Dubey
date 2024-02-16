
import { TypeAnimation } from 'react-type-animation';

// export default function Frontview() {
//   //let s = "</>";
//   let prof = ["Developer..", "Student..", "Lerner..", "Designer","Chaser"];

//   let [name, getname] = useState(" DEV ");
//   let [show, onmouse] = useState(false);
//   function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
//   async function rec(ms) {
//     //  getname(prof[0]);
//     //  await sleep(1000);
//     // getname(prof[1]);
//     // await sleep(1000);
//     // getname(prof[2]);
//     for (let i = 0; i < prof.length; i++) {
//       getname(prof[i]);
//       await sleep(ms);
//     }
//   }
//   return (
//     <div
//       className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10"
//       onMouseEnter={() => {
//         onmouse(true);
//         //setTimeout(getname(prof[Math.floor(Math.random()*prof.length)]),200);
//       }}
//       onMouseOver={() => {
//         rec(1000);
//       }}
//       onMouseLeave={() => {
//         onmouse(false);
//       }}
//     >
//       <div>
//         <h1 className="text-green-500 text-4xl font-bold ">
//           <h1 className="font-bold text-sky-300 underline decoration-red-500">
//             Hi i am A &ensp;
//             {show && (
//               <em className="text-red-500 lg:text-4xl sm:text-2xl underline decoration-slate-500 hover:tracking-wider">
//                 {name}
//               </em>
//             )}
//           </h1>
//         </h1>
//       </div>
//       {/* <div classname=" border-solid ">
//         <img
//           className="object-cover h-20 border-double rounded-full hover:drop-shadow-2xl"
//           //src="https://www.dictionary.com/e/wp-content/uploads/2018/04/Sasuke.jpg"
//           src={img}
//           alt=""
//         />
//       </div> */}
//     </div>
//   );
// }

export default function Frontview(){
  return(
    <div>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am A Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am A Learner',
        1000,
        'I am A Student',
        1000,
        'I am A Human',
        1000
      ]}
      wrapper="span"
      speed={50}
      className='font-semibold text-yellow-400'
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
    </div>
  )
}