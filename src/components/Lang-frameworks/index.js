import React from 'react'
import { DiJavascript,DiReact,DiMongodb } from "react-icons/di";
import {AiFillHtml5} from"react-icons/ai";
import {FaCss3Alt,FaNodeJs} from"react-icons/fa";
import AOS from 'aos'

import 'aos/dist/aos.css'
const LangFrame = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 200,
        mirror: true
      });
    return (
            <div className="w-full h-full bg-black">
                <div className=" w-full lg:w-9/12 h-full m-auto">
                    <div data-aos="fade-down" className="w-full h-full mt-8 mb-8">
                            <h1 className="text-center text-white text-4xl md:text-6xl lg:p-12 p-6">Favorite Languages/Frameworks</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 w-full h-full pb-10">
                         <div data-aos="fade-down" className="grid grid-rows-1 m-auto ">
                            <DiJavascript  id="changeColorNav2" className="text-yellow-400 w-32 h-32 bg-white rounded-full p-4 hover:bg-red-400 transition duration-400 ease-linear transform hover:scale-110"/>
                            <h1 className="text-white text-center w-full h-full p-2">JavaScript</h1>
                         </div>
                         <div data-aos="fade-down" className="grid grid-rows-1 m-auto">
                            <DiReact id="changeColorNav2" className="text-blue-300 w-32 h-32 bg-white rounded-full p-4 hover:bg-red-400 transition duration-400 ease-linear transform hover:scale-110"/>
                            <h1 className="text-white text-center w-full h-full p-2">React/React native</h1>
                         </div>
                         <div data-aos="fade-down" className="grid grid-rows-1 m-auto">
                            <AiFillHtml5 id="changeColorNav2" className="text-red-400 w-32 h-32 bg-white rounded-full p-4 hover:bg-red-400 transition duration-400 ease-linear transform hover:scale-110"/>
                            <h1 className="text-white text-center w-full h-full p-2">HTML5</h1>
                         </div>
                         <div data-aos="fade-down" className="grid grid-rows-1 m-auto">
                            <FaCss3Alt id="changeColorNav2" className="text-blue-400 w-32 h-32 bg-white rounded-full p-4 hover:bg-red-400 transition duration-400 ease-linear transform hover:scale-110"/>
                            <h1 className="text-white text-center w-full h-full p-2">CSS</h1>
                         </div>
                         <div data-aos="fade-down" className="grid grid-rows-1 m-auto">
                            <FaNodeJs id="changeColorNav2" className="text-green-600 w-32 h-32 bg-white rounded-full p-4 hover:bg-red-400 transition duration-400 ease-linear transform hover:scale-110"/>
                            <h1 className="text-white text-center w-full h-full p-2">NodeJs</h1>
                         </div>
                         <div data-aos="fade-down" className="grid grid-rows-1 m-auto">
                            <DiMongodb id="changeColorNav2" className="text-green-500 w-32 h-32 bg-white rounded-full p-4 hover:bg-red-400 transition duration-400 ease-linear transform hover:scale-110"/>
                            <h1 className="text-white text-center w-full h-full p-2">MongoDB</h1>
                         </div>
                    </div>
                </div>
            </div>
    )
}

export default LangFrame;