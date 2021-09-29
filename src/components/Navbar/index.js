import React from 'react'
import About from '../Main'

const Navbar = () => {
    
    return (
        <ul  className="border-l-2 border-black grid grid-cols-1 justify-items-start py-32 ">

            <li id="sliderNav1"  className="p-2 px-12 text-4xl m-auto transition duration-700 ease-in-out transform hover:translate-x-16 hover:scale-110  ">
                <a id="changeColorNav" href="#mainPage" className="text-black hover:text-white bg-red-400 py-8 px-32 rounded-tl-full rounded-br-full shadow-2xl focus:ring-1 focus:ring-black  ">
                    About
                </a>
            </li>

            <li id="sliderNav2" className="p-2 px-12 text-4xl m-auto transition duration-700 ease-in-out transform hover:translate-x-16 hover:scale-110 ">
                <a id="changeColorNav" href="#mainCareer" className="text-black hover:text-white bg-red-400 py-8 px-32 rounded-tl-full rounded-br-full shadow-2xl focus:ring-1 focus:ring-black">
                    Career
                </a>
            </li>


            <li id="sliderNav3" className="p-2 px-12 text-4xl m-auto transition duration-700 ease-in-out transform hover:translate-x-16 hover:scale-110 " >
                <a id="changeColorNav" href="#footerContact" className="text-black hover:text-white bg-red-400 py-8 px-32 rounded-tl-full rounded-br-full shadow-2xl focus:ring-1 focus:ring-black">
                    Contact
                </a>
            </li>


        </ul>
    )
}

export default Navbar;