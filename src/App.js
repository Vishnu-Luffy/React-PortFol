
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Achivements from "./components/Achivements";
import Mystory from "./components/Mystory";
import Resume from "./components/Resume";
import {Routes,Route} from "react-router";
function App() {
  return (
    <div className="mt-10 ">
      
      <div className="">
        <Navbar/>
      </div>
      <div className="max-w[1080px] mx-auto">
     <Routes>
  
       <Route path="/" element={ <Hero/> }/>
       <Route path="/projects" element={ <Projects/> }/>
      <Route path="/Achiv" element={<Achivements/>}/>
      <Route path="/resume" element={<a href="Resume.js"/>}/>
       <Route path="/story" element={<Mystory/>}/>
      
     </Routes>
     </div>
    </div>
    
  );
}

export default App;
