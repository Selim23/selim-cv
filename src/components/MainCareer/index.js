import React from 'react'
import profilFoto from '../selim.png'
import { useState, useEffect } from 'react'
import e from 'cors';
import AOS from 'aos'
import 'aos/dist/aos.css'

const MainCareer = () => {

AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 200,
        mirror: true
});

//fetch data for jobs
const [allData, setAllData] = useState([]);

useEffect( () =>{
       fetch('https://selim-cv.herokuapp.com/jobs/')
        .then(response => response.json())
        .then(dataH => setAllData(dataH));
},[]);
    console.log(allData)

let arrayLeft = [];
let arrayRight = [];

allData.forEach(e => {
    if(e.id % 2 == 0) {
        arrayLeft.push(e)
    }
    else{
        arrayRight.push(e)
    }
});

arrayRight.sort((a, b) => a.id - b.id);

arrayLeft.sort((a, b) => a.id - b.id);

    const listRight = [];
    const listLeft = [];

    arrayRight.forEach((e) =>{

        listRight.push(
            <div  data-aos="fade-right" className="mb-8 lg:flex justify-between items-center w-full lg:right-timeline">
            <div  className="lg:order-1 lg:w-5/12"></div>
            <div  className="z-20 lg:flex items-center order-1 bg-white border-gray-200 border-2 m-auto shadow-xl w-32 h-32 rounded-full">
            <img style={{}} className="p-2 rounded-full object-contain" src={e.logoUrl}></img>
            </div>
            <div className="order-1 bg-black rounded-lg shadow-xl lg:w-5/12 m-auto w-full px-6 py-4">
                <h3 className="font-bold text-white text-3xl lg:text-xl">{e.job}</h3>
                <h3 class="mb-3 tracking-widest text-white text-xl lg:text-xs">({e.startDatum} - {e.endDatum})</h3>
                <p className="lg:text-sm text-xl leading-snug tracking-wide text-white text-opacity-100">{e.beschrijving}</p>
            </div>
        </div>
        )
    })

    arrayLeft.forEach((e) =>{
        listLeft.push(
            <div data-aos="fade-right" class="mb-8 lg:flex justify-between lg:flex-row-reverse items-center w-full lg:left-timeline">
            <div class="lg:order-1 lg:w-5/12"></div>
            <div class="z-20 lg:flex items-center order-1 bg-red-400 shadow-xl w-32 h-32 rounded-full m-auto">
            <img style={{}} className="p-4 rounded-full object-contain m-auto" src={e.logoUrl}></img>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl lg:w-5/12 px-6 py-4 m-auto w-full">
                <h3 class=" font-bold text-white text-3xl lg:text-xl">{e.job}</h3>
                <h3 class="mb-3 text-black text-xl lg:text-xs">({e.startDatum} - {e.endDatum})</h3>
                <p class=" text-xl lg:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"> {e.beschrijving} </p>
            </div>
        </div>
        )
    })



    //fetch data for Diplomas
const [allDataDiploma, setAllDataDiploma] = useState([]);

useEffect( () =>{
       fetch('https://selim-cv.herokuapp.com/diplomas/')
        .then(response => response.json())
        .then(dataH => setAllDataDiploma(dataH));
},[]);

let arrayLeftDiploma = [];
let arrayRightDiploma = [];

allDataDiploma.forEach(e => {
    if(e.id % 2 == 0) {
        arrayLeftDiploma.push(e)
    }
    else{
        arrayRightDiploma.push(e)
    }
});

    const listRightDiploma = [];
    const listLeftDiploma = [];

    arrayRightDiploma.forEach((e) =>{

        listRightDiploma.push(
            <div  data-aos="fade-right" className="mb-8 lg:flex justify-between items-center w-full lg:right-timeline">
            <div  className="lg:order-1 lg:w-5/12"></div>
            <div  className="z-20 lg:flex items-center order-1 bg-white border-gray-200 border-2 m-auto shadow-xl w-32 h-32 rounded-full">
            <img style={{}} className="p-2 rounded-full object-contain" src={e.logoschoolUrl}></img>
            </div>
            <div className="order-1 bg-black rounded-lg shadow-xl lg:w-5/12 m-auto w-full px-6 py-4">
                <h3 className="font-bold text-white text-3xl lg:text-xl">{e.title} ({e.school})</h3>
                <h3 class="mb-3 tracking-widest text-white text-xl lg:text-xs">({e.startDatum} - {e.endDatum})</h3>
                <p className="lg:text-sm text-xl leading-snug tracking-wide text-white text-opacity-100">{e.beschrijving}</p>
            </div>
        </div>
        )
    })

    arrayLeftDiploma.forEach((e) =>{
        listLeftDiploma.push(
            <div data-aos="fade-right" class="mb-8 lg:flex justify-between lg:flex-row-reverse items-center w-full lg:left-timeline">
            <div class="lg:order-1 lg:w-5/12"></div>
            <div class="z-20 lg:flex items-center order-1 bg-red-400 shadow-xl w-32 h-32 rounded-full m-auto">
            <img style={{}} className="p-4 rounded-full object-contain m-auto" src={e.logoschoolUrl}></img>
            </div>
            <div class="order-1 bg-red-400 rounded-lg shadow-xl lg:w-5/12 px-6 py-4 m-auto w-full">
                <h3 class=" font-bold text-white text-3xl lg:text-xl">{e.title} ({e.school})</h3>
                <h3 class="mb-3 text-black text-xl lg:text-xs">({e.startDatum} - {e.endDatum})</h3>
                <p class=" text-xl lg:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100"> {e.beschrijving} </p>
            </div>
        </div>
        )
    })


    return (
        <div>
            <div className="m-12">
            </div>
            <div data-aos="fade-down" id="mainCareer" className="m-2">
                <h1 className="text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    CAREER (JOBS)
                </h1>
            </div>
            <div className="containe bg-white mx-auto w-full h-full">
                <div className="lg:relative lg:wrap lg:overflow-hidden p-10 h-full w-full">
                    <div className="border-2-2 md:absolute border-opacity-20 border-gray-700 h-full border" style={{left:"50%"}}>
                    </div>
                {
                    listLeft
                }
                {
                    listRight
                }

                </div>
            </div>

            <div data-aos="fade-down" id="mainCareer" className="m-12">
                <h1 className="text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    DIPLOMAS (CERTIFICATIONS)
                </h1>
            </div>
            <div className="containe bg-white mx-auto w-full h-full">
                <div className="lg:relative lg:wrap lg:overflow-hidden p-10 h-full w-full">
                    <div className="border-2-2 md:absolute border-opacity-20 border-gray-700 h-full border" style={{left:"50%"}}>
                    </div>
                {
                    listLeftDiploma
                }
                {
                    listRightDiploma
                }

                </div>
            </div>
        </div>
    )
}

export  default MainCareer;