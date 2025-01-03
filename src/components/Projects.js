import React from "react";

const Projects =()=>
{
    return (
        <>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center    md-h[500px] md-[700px] mx-auto rounded-md overflow-hidden">
          
              <div className="max-w-[600px] mx-auto p-5 rounded-md">
             <p>
              <span className="font-bold align-start">Project:Animated Website Development</span>
            <br/>  <span className="font-bold align-start">Description:</span>
              This project involved the creation of an engaging and visually dynamic website using React and the GreenSock Animation Platform (GSAP). The website features seamless and smooth animations that enhance user experience and interactivity. Leveraging React's component-based architecture, the site ensures efficient performance and maintainability. GSAP was used to craft intricate animations, including element transitions, scroll-based effects, and interactive components, providing a lively and captivating browsing experience. The project demonstrates expertise in modern web development frameworks and animation techniques to deliver a standout digital presence.
             </p>
            </div>
            <div className="  overflow-hidden  mx-auto ">
              <a href="https://brainwave-main-mu.vercel.app/" target="_blank"><img className=" w-[400px] h-[400px] rounded-md object-center object-fill"  src="../hero-background.jpg"/></a>
           </div>
            </div>
          
             <div className="mt-10 flex flex-col sm:flex-row justify-center items-center ">
            <div className="max-w-[600px] mx-auto p-5 rounded-md">
             <p>
              <span className="font-bold align-start">Project:Portfolio Website</span>
            <br/>  <span className="font-bold align-start">Description:</span>
            This project entails the development of a personal portfolio website using cutting-edge web technologies to showcase your skills, projects, and experiences. The website employs React Router for seamless navigation across different sections, ensuring a smooth user experience. React Icons is utilized to incorporate visually appealing and intuitive icons throughout the site, enhancing the visual appeal and usability. React Toastify provides elegant and customizable notifications to keep users informed about various actions and events, improving the overall interaction quality. Tailwind CSS is used for styling the website, offering a highly customizable and responsive design framework that ensures the site looks great on all devices. The combination of these technologies results in a highly professional, visually attractive, and user-friendly portfolio website.
             </p>
            </div>
            <div className=" overflow-hidden mx-auto">
              <a href="/" target="_blank"><img className="w-[400px] h-[400px] rounded-md object-center object-fill"  src="React-App.png"/></a>  
            </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center ">
            <div className="max-w-[600px] mx-auto p-5 rounded-md">
             <p>
              <span className="font-bold align-start">Weather App</span>
            <br/>  <span className="font-bold align-start">Description:</span>
             Weather App (React)
             Developed a responsive weather application using React, integrating real-time weather data from the OpenWeatherMap API.
             </p>
            </div>
            <div className=" overflow-hidden mx-auto">
              <a href="https://weather-pwa-eosin.vercel.app/" target="_blank"><img className="w-[400px] h-[400px] rounded-md object-center object-fill"  src="../logo.png"/></a>  
            </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center ">
            <div className="max-w-[600px] mx-auto p-5 rounded-md">
             <p>
              <span className="font-bold align-start"> WordPress Website Development</span>
            <br/>  <span className="font-bold align-start">Description:</span>
            Designed and developed a professional and user-friendly website using WordPress, leveraging pre-built templates to streamline the process and ensure a polished final product.

             
             </p>
            </div>
            <div className=" overflow-hidden mx-auto">
              <a href="https://vishnu0077.wordpress.com" target="_blank"><img className="w-[400px] h-[400px] rounded-md object-center object-fill"  src="boundary.png"/></a>  
            </div>
            </div>
        </>
    )

}
export default Projects