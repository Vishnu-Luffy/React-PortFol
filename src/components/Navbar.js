import React from "react";
import {toast} from "react-toastify";
import {NavLink} from "react-router";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar =()=>
{
    function hoverelement(){
    toast.success("Lets GO");
     
    }
    return (
        <div className="flex justify-evenly mx-auto flex-wrap">
        <NavLink to="/">
        <img src="https://i.pinimg.com/736x/3c/48/4f/3c484f0840aaaeb743cf066c94692b75.jpg"
        className=" h-[40px] rounded-md hover:rounded-full"></img>
        </NavLink>
        <div className="items-center flex gap-2">
            <NavLink to="/projects" >
             <span className=" hover:font-bold">Projects</span>
            </NavLink>
            
        <a href="Resume.pdf" className="hover:font-bold" target="_blank">Resume</a>
           
            <NavLink to="/achiv">
            <span className="hover:font-bold">Achivements</span>
            </NavLink>
            <NavLink to="/story">
            <span className="hover:font-bold">Mystory</span>
            </NavLink>
        </div>
        <div className="flex items-center gap-2">
            <a href="https://github.com/Vishnu-Luffy/github/"onClick={hoverelement} ><FaGithub/></a>
            <a href="https://leetcode.com/u/tenalivishnuvardhanreddy007/"  onClick={hoverelement}><SiLeetcode /></a>
            <a href="https://www.linkedin.com/in/vishnu-reddy-93924120a/"   onClick={hoverelement}><FaLinkedin/></a>

        </div>
        </div>
    
    )
}
export default Navbar