import React from "react";
import {toast} from "react-toastify";
import {NavLink} from "react-router";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";
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
            
        <a href="https://www.canva.com/design/DAGY4u365h8/eKyy82IRVSy079A7YWfcig/view?utm_content=DAGY4u365h8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8c43549a17" className="hover:font-bold" target="_blank">Resume</a>
           
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
            <a href="https://www.naukri.com/code360/profile/ca36926e-a32a-4c9f-b410-a127e7218296"   onClick={hoverelement}><SiCodingninjas /></a>
        </div>
        </div>
    
    )
}
export default Navbar