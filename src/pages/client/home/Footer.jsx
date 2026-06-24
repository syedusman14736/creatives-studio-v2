import React from 'react'
import footerImg from '/public/footer-img.png'
import logo from '/public/logo.png'

function Footer() {
    return (
        <div className='bg-black'>
            <div class="max-w-7xl px-4 mx-auto py-12 text-[12px] lg:text-[16px] text-white">
                <div className='flex-col md:flex-row justify-between items-center pb-6'>
                    <h1 className="font-semibold md:text-start text-[20px] md:text-[28px] leading-8 text-white">Available for freelance work</h1>
                    <div>
                        <p>MORE CREATIONS</p>
                    </div>
                </div>
                <div className='py-12 gap-8 md:gap-6 lg:gap-0 grid grid-cols-8 border-t  border-b border-gray-600'>
                    <div className='col-span-8 md:col-span-3'>
                        <img src={footerImg} alt="" />
                    </div>
                    <div className='flex flex-col gap-4 col-span-8 md:col-span-5'>
                        <h1 className="font-semibold mt-6 md:mt-0 text-[28px] lg:text-[46px] leading-8 lg:leading-12 text-white">Let's create something amazing
                            & extraordinary together.</h1>
                        <div>
                            <p>kaif@creatives-studio.com</p>
                            <p>+971-508140299</p>
                        </div>
                        <button className="cursor-pointer w-fit border border-[#cf922f] text-white text-[14px]  lg:text-[16px] font-medium px-6 py-2 rounded-md flex items-center gap-2">
                            Download CV
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between items-center pt-6'>
                    <img src={logo} alt="Creatives-studio" />
                    <span className='text-center md:text-start'>Copyright 2026 Creatives-Studio All Rights Reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer