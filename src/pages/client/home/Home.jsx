import { useRef, useState } from 'react'
import gsap from "gsap"
import Navbar from '../../../components/layout/Navbar/Navbar'
import About from './About'
import Contact from './Contact'
import Faqs from './Faqs'
import Footer from './Footer'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Services from './Services'
import Skills from './Skills'
import Slide from './Slide'
import Testimonials from './Testimonials'

function Home() {
    // const [cursorElement, setCursorElement] = useState(null);
    // const mouseMovement = (dets) => {

    //     gsap.to(cursorElement, {
    //         x: dets.clientX,
    //         y: dets.clientY,
    //         duration: 0.4,
    //     });
    // };


    return (
        <div>
            {/* <div className='fixed h-7 w-7 rounded-full bg-[#89190D] z-10' id='cursor'></div> */}
            <Navbar />
            <Hero />
            <Slide />
            <About />
            <Portfolio />
            <Services />
            <Skills />
            <Testimonials />
            {/* <Faqs /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default Home