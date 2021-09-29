import React from 'react'
import Navbar from '../Navbar'
import profilFoto from '../selim.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Squash as Hamburger } from 'hamburger-react'
import { useState,useEffect } from 'react'

const Header = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 200,
        mirror: true
      });
      const [isOpen, setOpen] = useState(false)

    return (
        <div>
            <div className="">
                <div  className="grid sm:grid-cols-1 lg:grid-cols-2 w-full h-full"> 
                    <div className='w-full h-full p-2 bg-red-500 bg-opacity-75 lg:hidden'>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                        {isOpen == true?<div>
                            <ul data-aos="fade-down" className="grid grid-cols-1 justify-items-start p-4 ">
                                <div className="w-full h-full">
                                    <li className="border-b-2 border-black text-4xl w-full h-full"><a href='#mainPage'>About</a></li>
                                </div>
                                <div className="w-full h-full">
                                    <li className="border-b-2 border-black text-4xl w-full h-full"><a href="#mainCareer">Career</a></li>
                                </div>
                                <div className="w-full h-full">
                                    <li className="border-b-2 border-black text-4xl w-full h-full"><a href="#footerContact">Contact</a></li>
                                </div>
                            </ul>
                            </div>:null}
                    
                    </div>
                    <div id="sliderHeaderLeft" className="grid grid-cols-1">
                        <div className="m-auto my-16">
                        <img id="changeColorNav" src={profilFoto}  className="w-96 h-96 bg-red-400 rounded-full"></img>
                        </div>
                        <div className="m-auto mb-16">
                            <h1 className="text-black text-center text-7xl ">Selim can Kaygun</h1>
                            <h2 className=" text-black text-4xl text-center" style={{fontFamily:"Abel"}}>Junior Web Developer</h2>
                            <div className='typewriter m-auto pt-14'>
                            <p class="typetext">HELLO WORLD ...</p>
                            </div>

                        </div>
                    </div>
                    <div id="denemE" className="hidden lg:grid grid-cols-2 ">
                        <Navbar/>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        
        /*
        <div>
            <div className="" style={{ backgroundImage:`url(${logo})`,  backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height:'800px' }} >
                <Navbar/>
                <div className ="flex justify-center flex-wrap content-end w-full h-full">
                    <div>
                        <h1 className="text-white text-9xl">Selim can Kaygun</h1>
                        <h2 className="mb-32 text-white text-4xl text-center" style={{fontFamily:"Abel"}}>Junior Software Developer</h2>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>*/
    )
}

export default Header;