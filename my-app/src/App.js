import Contact from "./components/contact.js";
import Projects from "./components/project";
import Navbar from "./components/navbar.js";
import Main from "./components/main.js";
export default function App() {
  return (
    <div className="bg-[#2a66ad]">
        <Navbar/>
        <Main/>
        <Projects/>
        <Contact/>
    </div>
  );
}
