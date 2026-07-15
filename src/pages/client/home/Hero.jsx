// flex flex-col justify-center items-center min-h-[90vh]
// w-[90%] h-90 md:h-120 md:w-[60%] lg:w-[20%] lg:h-[70%]

import { useEffect } from 'react';
import Badge from '../../../components/common/Badge'
import man from '/public/front-image.jpeg'

function Hero() {
    return (
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-4 xl:gap-6 justify-center text-[14px]  lg:text-[16px] items-center h-[90vh] max-w-7xl px-4 mx-auto">
            <div>
                <Badge title="Welcome to Creatives-Studio" />
            </div>
            <img src={man} className='rounded-md w-[90%] h-[70%] md:w-[40%] lg:w-[30%] 2xl:w-[40%] object-cover object-center' alt="Syed Kaif" />
            <div >
                <button className="cursor-pointer border border-[#cf922f] text-[#89190D] text-[14px]  lg:text-[16px] font-medium px-6 py-2 rounded-md flex items-center gap-2">
                    <a href="#contact">

                        Contact Us
                    </a>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </span>
                </button>
            </div>
        </div >

    )
}

export default Hero