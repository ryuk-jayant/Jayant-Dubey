import Contact from "./components/contact.js";
import Projects from "./components/project";
import Navbar from "./components/navbar.js";
import Main from "./components/main.js";
export default function App() {
  return (
    <div className="bg-[#8e41b0] bg-gradient-to-tl from-[#6b3ba3] to-[#6b2a87]">
        <Navbar/>
        <Main/>
        <Projects/>
        <Contact/>
    </div>
  );
}
