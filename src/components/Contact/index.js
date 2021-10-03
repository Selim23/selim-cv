import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 200,
        mirror: true
      });
    return (
        <div id="footerContact" className=" w-full h-full bg-black">
            <div data-aos="fade-up" className='text-center'>
                <h1 className="uppercase pt-10 pb-6 text-8xl text-white">Contact</h1>
            </div>
            <div className="p-4 w-full lg:w-4/6 h-full m-auto grid lg:grid-cols-2">
                <div data-aos="fade-right" className=" grid cols-1 p-4"> 
                    <div className=" h-full p-4">
                        <h1 className=" text-6xl text-white text-center lg:text-left">Do you have a question? 
                        </h1>
                        <h1 className="text-5xl text-white text-center lg:text-left">
                            do you just want to talk?
                        </h1>
                        <h1 className="text-2xl text-white text-center lg:text-left">
                            it doesn't matter, fill out the form and send it.
                        </h1>
                    </div>
                    <div className="lg:inline hidden p-4">
                        <div style={{height:'400px',width:'100%;', overflow:"hidden"}}>
                        <img style={{height:'300px', width:'100%', objectFit:'cover'}} src={'https://images.pexels.com/photos/5541019/pexels-photo-5541019.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}/>
                        </div>
                      
                    </div>
                </div>

                <div  data-aos="fade-up" className="">
                <form action="https://formsubmit.co/selimcan.kaygun@gmail.com" method="POST">

                    <div>
                        <span class="uppercase text-2xl text-white">Full Name</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" name="name" required />
                    </div>

                    <div class="mt-8">
                        <span class="uppercase text-2xl text-white">Email</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="email" name="email" required />
                    </div>

                    <div class="mt-8">
                        <span class="uppercase text-2xl text-white">Message</span>
                        <textarea
                        type="text"
                        name="Message"
                            class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline resize-none"></textarea>
                    </div>
                    <div class="mt-8">

                        <button
                            type="submit"
                            class="uppercase text-sm font-bold tracking-wide bg-blue-200 text-black p-3 rounded-lg w-full focus:outline-none focus:shadow-outline transition duration-700 ease-in-out transform hover:scale-110 ">
                            Send Message
                        </button>
                    </div>
                    <div className=" lg:hidden p-4">
                        <div className="pt-8 w-full" style={{width:'100%;', overflow:"hidden"}}>
                        <img style={{height:'300px', width:'100%', objectFit:'cover'}} src={'https://images.pexels.com/photos/5541019/pexels-photo-5541019.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}/>
                        </div>
                      
                    </div>
                    <input type="hidden" name="_captcha" value="false"></input>

                    </form>
                </div>

            </div>
            
        </div>
    )
}

export default Contact;