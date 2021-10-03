import React from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
const LangSkil = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 200,
        mirror: true
      });

      let languageSkills=[
         {
            "lang":"Turkish",
            "niveau":"100%",
         },
         {
            "lang":"Dutch",
            "niveau":"100%",
         },
         {
            "lang":"English",
            "niveau":"80%",
         },
         {
            "lang":"French",
            "niveau":"50%",
         },
         {
            "lang":"Kurdish",
            "niveau":"50%",
         },
      ]

      let allLang = [];
      languageSkills.forEach(e => {
         allLang.push(
            <div className="w-full h-full">
            <div className="relative pt-1 w-5/6 lg:w-3/6 m-auto">
               <div data-aos="fade-right" className="flex mb-2 items-center justify-between">
                  <div>
                     <span className="text-xs inline-block py-1 px-2 uppercase rounded-full text-black font-light bg-blue-200">
                     {e.lang}
                     </span>
                  </div>
                  <div className="text-right">
                     <span class="text-xs font-semibold inline-block text-blue-400">
                        {e.niveau}
                     </span>
                  </div>
               </div>
            <div data-aos="fade-right" className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
               <div style={{width:e.niveau}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400 ">
               </div>
            </div>
         </div> 
      </div>
         )
      });
    return (
            <div className="w-full h-full">  
               <div data-aos="fade-down" id="mainCareer" className="m-12">
                <h1 className="text-center text-7xl md:text-6xl lg:text-7xl xl:text-8xl">                    
                  LANGUAGE LEVELS
               </h1>
            </div>
               <div className="w-full h-full mt-10 mb-14">
                  {allLang}
               </div>
            </div>
    )
}

export default LangSkil;