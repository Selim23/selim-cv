import React from 'react'
import profilFoto from '../selim.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out-sine',
        delay: 200,
        mirror: true
      });
      
    return (
        <div>
            <div id="mainPage" className="w-6/6 h-full border-4 border-black m-auto bg-black">
                <div data-aos="fade-right" className="lg:w-9/12 h-full border-4 border-black m-auto lg:flex">
                    <div className="lg:w-2/5 lg:h-full">
                        <img className="bg-red-400 h-96 m-auto lg:h-full rounded-full" src={profilFoto}></img>
                    </div>
                    <div className="lg:w-3/5 h-full" id="slider">
                        <h1  className="px-12 text-6xl text-center lg:text-8xl mt-12 text-white">Who am I ?</h1>
                        <p className="px-12 text-2xl py-12 text-white">"Hi! My name is Selim. I’m 23 and I live in Antwerpen but I'm born in another country - Turkey, Elazig-Karakocan, where I lived for 10 years. In 2008, my dad decided to change his job, and we all moved to Antwerpen. I have also a sister and a brother.
my father has his own business. He makes Turkish dishes and desserts.  He has a bakery where I had to work a lot during my studies.<br/><br/>

As a child, I found computers fascinating. Everything you could do with it was like magic.
We had a computer at home for the first time in 2004. it was a windows 98. I was then day and night behind my pc playing games and everything.  That's how I discovered my interest in computers.<br/><br/>  After we moved to Antwerp, I had a language delay in the beginning, which took 2 years from my school years.  I had to redo 2 times in a row year because my language was not enough.  that's why I didn't have that many choices in high school.  I have decided to follow electricity.  after finishing my studies in high school, I decided to try programming in college. I tried 1-year bachelor of ICT electronics and then switched to graduate programming.
"</p>
                    </div>
                </div>
            </div>
            <div className="w-6/6 h-full border-4 border-black m-auto bg-black">
                <div data-aos="fade-up"  className="lg:w-9/12 h-full border-4 border-black m-auto lg:flex">
                <div className="lg:w-3/5 lg:h-full">
                        <h1 className="px-12 text-8xl mt-12 text-center text-white">My hobby's</h1>
                        <p className="px-12 text-2xl py-12 text-white">
                            "I have always been good at sports. I like playing soccer and fitness. I have played in many soccer tournaments like an amateur player, I have won many trophies. My favorite intellectual game is chess, but I have never played it professionally.
                            I love sci-fiction and fantasy literature. I read fantasy books, watch fantasy and sci-fiction films. J.R.R. Tolkien is my favorite writer, I read lord of the rings and hobbits also.<br/><br/>
                            Besides all this, I am also an artist.  I make Turkish hip-hop rap music.  with my 2 singles, I got more than 500.000k streams on Spotify and youtube.  I write songs, make beats and produce songs.  do you want to hear them?  <a className="hover:bg-red-500" target='_blank' href="https://www.youtube.com/watch?v=dl5_ZoGGIZI">Click on the link.</a>"
                        </p>
                    </div>
                    <div className="lg:w-2/5 hidden lg:flex lg:h-full">
                        <img className="bg-blue-200 rounded-full h-96 lg:h-full" src={profilFoto}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;