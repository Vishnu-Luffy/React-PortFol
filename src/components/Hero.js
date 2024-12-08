import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
const Hero =()=>
{
    return (
        <>
        <div className="mt-10 flex flex-warp items=center overflow-hidden">

            <div className="max-w-[600px] mx-auto p-5 rounded-md">
             <p>
             Hello, <span className="font-bold">I'm Vishnu Vardhan Reddy</span>, a passionate and driven aspiring front-end developer. I thrive on the excitement of creating dynamic, user-friendly web applications that make a difference. With a solid foundation in HTML, CSS, and JavaScript, I am eager to explore new technologies and frameworks to elevate my skills and deliver exceptional user experiences.
        <br></br>
         <br/>
          I am enthusiastic about the power of code to bring ideas to life and constantly seek opportunities to enhance my knowledge through hands-on projects and collaboration with other talented developers. My goal is to contribute to impactful projects and be part of a team that values innovation, creativity, and excellence.
        <br/>
         <br/>
          I look forward to connecting with like-minded professionals and diving into the world of web development, where every line of code is a step towards building a better digital future.
             </p>
            </div>
            <div className=" w-[400px] overflow-hidden  mx-auto">
                <img className="h-[400px]" src="https://i.pinimg.com/474x/aa/58/f8/aa58f8aec3fb150738c4ca7a90f46fc3.jpg"/>
            </div>
          
        </div>
        <div className="overflow-hidden max-w-[600px] mt-5 mx-auto flex flex-wrap justify-evenly p-5">
           <span className="animate-bounce"><FaReact size={40}/></span>
           <span className="animate-bounce"><IoLogoJavascript size={40} /></span>
           <span className="animate-bounce"><FaHtml5 size={40}/></span>
           <span className="animate-bounce"><FaCss3Alt size={40}/></span>
           <span className="animate-bounce"><RiTailwindCssFill size={40}/></span>
           <span className="animate-bounce"><SiRedux size={40}/></span>
           <span className="animate-bounce"><SiReactrouter size={40}/></span>
        </div>
        </>
    )

}
export default Hero