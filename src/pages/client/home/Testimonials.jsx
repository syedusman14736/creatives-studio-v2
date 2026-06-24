import Badge from '../../../components/common/Badge'
import client from '/client.jpg'
import chatIcon from '/chat-icon.png'
function Testimonials() {
    return (
        <div className="max-w-7xl px-4 mx-auto py-12 text-[12px] lg:text-[16px] ">
            <div className="block md:grid grid-cols-2">
                <div className="flex flex-col items-start gap-4 lg:text-[14px]">
                    <div className="static md:sticky top-5">
                        <Badge title="TESTIMONIALS" />
                        <div className="md:max-w-[85%] flex md:block flex-col items-center mt-4 pb-12">
                            <h1 className="font-semibold md:text-start text-[28px] mt-2 leading-8">We specialize in blending various disciplines to bring solutions to life.</h1>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[#CF922F] text-[36px] lg:text-[40px] font-medium">+10</h1>
                                    <span className="text-[12px] md:text-[16px]  text-center">Years of Experience</span>
                                </div>
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[#CF922F] text-[36px] lg:text-[40px] font-medium">+5</h1>
                                    <span className="text-[12px] md:text-[16px]  text-center">Design Awards</span>
                                </div>
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[#CF922F] text-[36px] lg:text-[40px] font-medium">+7</h1>
                                    <span className="text-[12px] md:text-[16px]  text-center">Delievery Day</span>
                                </div>
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[#CF922F] text-[36px] lg:text-[40px] font-medium">+25</h1>
                                    <span className="text-[12px] md:text-[16px]  text-center">Happy Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col gap-4">
                    <div className="border border-gray-300 px-8 py-4 rounded-md">
                        <div className="flex justify-between items-center ">
                            <span>
                                <img src={chatIcon} className="w-7.5 lg:w-[80%]" alt="Icon" />
                            </span>
                            {/* <p className=" text-[14px]  lg:text-[16px]">/  design & usability</p> */}
                        </div>
                        <div className="mt-6">
                            <p className="text-[20px]">Great service for graphic design and Adobe/Canva subscriptions. Fast delivery and reliable support.</p>
                            <div className="mt-4 flex gap-2">
                                <img className='w-7.5 h-7.5' src={client} alt="Profile Image" />
                                <div>
                                    <h1>Ryan Mitchell</h1>
                                    <p className="text-gray-700">CTO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 px-8 py-4 rounded-md">
                        <div className="flex justify-between items-center ">
                            <span>
                                <img src={chatIcon} className="w-7.5 lg:w-[80%]" alt="Icon" />
                            </span>
                            {/* <p className=" text-[14px]  lg:text-[16px]">/  design & usability</p> */}
                        </div>
                        <div className="mt-6">
                            <p className="text-[20px]">Very smooth experience, Highly recommended.</p>
                            <div className="mt-4 flex gap-2">
                                <img className='w-7.5 h-7.5' src={client} alt="Profile Image" />
                                <div>
                                    <h1>Ethan Brown</h1>
                                    <p className="text-gray-700">Executive</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 px-8 py-4 rounded-md">
                        <div className="flex justify-between items-center ">
                            <span>
                                <img src={chatIcon} className="w-7.5 lg:w-[80%]" alt="Icon" />
                            </span>
                            {/* <p className=" text-[14px]  lg:text-[16px]">/  design & usability</p> */}
                        </div>
                        <div className="mt-6">
                            <p className="text-[20px]">Affordable and professional design service with instant subscription setup. Satisfied with results.</p>
                            <div className="mt-4 flex gap-2">
                                <img className='w-7.5 h-7.5' src={client} alt="Profile Image" />
                                <div>
                                    <h1>Leonardo F. Ashton</h1>
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