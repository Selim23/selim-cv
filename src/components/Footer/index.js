import React from 'react'
import {FaMobileAlt, FaMapMarked} from 'react-icons/fa'
import { HiMail } from "react-icons/hi";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin, AiOutlineGithub  } from "react-icons/ai";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 200,
        mirror: true
      });
    return (
        <div className="w-full h-full border-2 border-white" id="denemE">
            <div className="w-4/6 h-full m-auto">
                <div className=" m-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 pb-12 border-b-2 border-black">
                        <div data-aos="fade-down" className='m-auto'>
                        <FaMapMarked className="w-28 h-28 mb-4"/>
                        <h3 className="text-center">Belgium, Antwerp</h3>
                        </div>
                        <div data-aos="fade-down" className="m-auto my-4">
                        <a href="tel:+32488879568"><FaMobileAlt className="w-28 h-28  mb-4"/></a>
                        <h3 className="text-center"><a href="tel:+32488879568">+324 888 79 568</a></h3>
                        </div>
                        <div data-aos="fade-down" className="m-auto">
                        <a href="mailto:selimcan.kaygun@gmail.com"><HiMail className="w-28 h-28  mb-4 m-auto"/></a>
                        <h3 className='text-center'><a href="mailto:selimcan.kaygun@gmail.com">selimcan.kaygun@gmail.com</a></h3>
                        </div>
                    </div>
                </div>
                <div className="m-auto py-8">
                    <div  className="m-auto w-full lg:w-3/6 grid grid-cols-5">
                        <div id="sliderNav1" className="m-auto">
                            <a target="_blank" href="https://www.facebook.com/pasamusiic/"><AiFillFacebook className="w-10 h-10 text-blue-600"/></a>
                        </div>
                        <div id="sliderNav1" className="m-auto">
                            <a target="_blank" href="https://www.instagram.com/pasamusic_/"><AiFillInstagram className="w-10 h-10 text-black"/></a>
                        </div>
                        <div id="sliderNav2" className="m-auto">
                            <a target="_blank" href="https://twitter.com/selim_kaygun"><AiFillTwitterSquare className="w-10 h-10 text-blue-500"/></a>
                        </div>
                        <div id="sliderNav2" className="m-auto">
                            <a target="_blank" href="https://www.linkedin.com/in/selim-can-kaygun-4b075a1a4/"><AiFillLinkedin className="w-10 h-10 text-blue-600"/></a>
                        </div>
                        <div id="sliderNav3" className="m-auto">
                            <a target="_blank" href="https://github.com/Selim23"><AiOutlineGithub className="w-10 h-10 text-black"/></a>
                        </div>
                    </div>
                </div>
                <div className="w-4/6 h-4/6 m-auto  sticky">
                    <button
                        class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg fixed w-1/4">
                        Send Message
                    </button>      
                </div>
            </div>
        </div>
    )
}

export default Footer;