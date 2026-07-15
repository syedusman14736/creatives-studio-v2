import Badge from '../../../components/common/Badge'
import client1 from '/client-1.jpeg'
import client2 from '/client-2.jpeg'
import client3 from '/client-3.jpeg'
import chatIcon from '/chat-icon.png'
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { useState } from 'react';
function Testimonials() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    return (
        <div className="max-w-7xl px-4 mx-auto py-12 text-[12px] lg:text-[16px] ">
            <div className="block md:grid grid-cols-2">
                <div className="flex flex-col items-start gap-4 lg:text-[14px]">
                    <div className="static md:sticky top-15">
                        <div data-aos="fade-zoom-in">
                            <Badge title="TESTIMONIALS" />
                        </div>
                        <div className="md:max-w-[85%] flex md:block flex-col items-center mt-4 pb-12">
                            <h1 data-aos="fade-zoom-in" className="font-semibold md:text-start text-[28px] mt-2 leading-8">We specialize in blending various disciplines to bring solutions to life.</h1>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                <div data-aos="fade-up" data-aos-delay="200" className="flex justify-center items-center flex-col">
                                    <h1 className="text-[#CF922F] text-[36px] lg:text-[40px] font-medium">
                                        <div ref={ref}>
                                            +
                                            {inView && (
                                                <CountUp
                                                    start={0}
                                                    end={10}
                                                    duration={2}
                                                />
                                            )}
                                        </div>
                                    </h1>
                                    <span className="text-[12px] md:text-[16px]  text-center">Years of Experience</span>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center items-center flex-col">
                                    <h1 className="text-[#CF922F] text-[36px] lg:text-[40px] font-medium"><div ref={ref}>
                                        +
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={5}
                                                duration={2}
                                            />
                                        )}
                                    </div></h1>
                                    <span className="text-[12px] md:text-[16px]  text-center">Design Awards</span>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center items-center flex-col">
                                    <h1 className="text-[#CF922F] text-[36px] lg:text-[40px] font-medium"><div ref={ref}>
                                        +
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={7}
                                                duration={2}
                                            />
                                        )}
                                    </div></h1>
                                    <span className="text-[12px] md:text-[16px]  text-center">Delievery Day</span>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center items-center flex-col">
                                    <h1 className="text-[#CF922F] text-[36px] lg:text-[40px] font-medium"><div ref={ref}>
                                        +
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={25}
                                                duration={2}
                                            />
                                        )}
                                    </div></h1>
                                    <span className="text-[12px] md:text-[16px]  text-center">Happy Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-4">
                    <div data-aos="fade-up" data-aos-delay="200" className="border border-gray-300 px-8 py-4 rounded-md">
                        <div className="flex justify-between items-center ">
                            <span>
                                <img src={chatIcon} className="w-7.5 lg:w-[80%]" alt="Icon" />
                            </span>
                            {/* <p className=" text-[14px]  lg:text-[16px]">/  design & usability</p> */}
                        </div>
                        <div className="mt-6">
                            <p className="text-[16px] md:text-[18px]">My experience with Creatives Studio has been absolutely amazing! I hired them to design my brand's website and handle our social media graphics. Their design sense and professionalism are top-notch. They delivered exactly what I envisioned, even exceeding my expectations. Truly the best web and graphic designing services out there. I highly recommend them!.</p>
                            <div className="mt-6 flex gap-2">
                                <img className='w-12 h-12 object-cover rounded-full' src={client1} alt="Profile Image" />
                                <div>
                                    <h1>Sarah Lin</h1>
                                    <p className="text-gray-700">CTO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="border border-gray-300 px-8 py-4 rounded-md">
                        <div className="flex justify-between items-center ">
                            <span>
                                <img src={chatIcon} className="w-7.5 lg:w-[80%]" alt="Icon" />
                            </span>
                            {/* <p className=" text-[14px]  lg:text-[16px]">/  design & usability</p> */}
                        </div>
                        <div className="mt-6">
                            <p className="text-[16px] md:text-[18px]">I was working on an urgent project and desperately needed an Adobe Creative Cloud subscription. I stumbled upon Creatives Studio, and their service was incredibly fast! I got a genuine subscription at a very reasonable price within minutes, and my work didn't stop. If you need reliable, quick, and affordable software solutions, this is the place to go.</p>
                            <div className="mt-6 flex gap-2">
                                <img className='w-12 h-12 object-cover rounded-full' src={client2} alt="Profile Image" />
                                <div>
                                    <h1>Ahmed Al-Mansoori</h1>
                                    <p className="text-gray-700">Executive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className="border border-gray-300 px-8 py-4 rounded-md">
                        <div className="flex justify-between items-center ">
                            <span>
                                <img src={chatIcon} className="w-7.5 lg:w-[80%]" alt="Icon" />
                            </span>
                            {/* <p className=" text-[14px]  lg:text-[16px]">/  design & usability</p> */}
                        </div>
                        <div className="mt-6">
                            <p className="text-[16px] md:text-[18px]">​I have been sourcing services from Creatives Studio for over a year now, and they never disappoint. I’ve purchased multiple premium software subscriptions and creative designs through them. The setup is always seamless, and their pricing is unbeatable. What truly sets them apart is their outstanding customer support. Highly recommended for long-term reliability.</p>
                            <div className="mt-6 flex gap-2">
                                <img className='w-12 h-12 object-cover rounded-full' src={client3} alt="Profile Image" />
                                <div>
                                    <h1>Ryan Mitchell</h1>
                                    <p className="text-gray-700">Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default Testimonials