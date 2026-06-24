import React from 'react'
import Badge from '../../../components/common/Badge'

function Contact() {
    return (
        <>
            <div className="max-w-7xl px-4 mx-auto py-24 text-[12px] lg:text-[16px] ">
                <div className="block md:grid grid-cols-2">
                    <div className="flex flex-col items-center md:items-start gap-4 lg:text-[14px]">
                        <div className="static md:sticky top-5 flex flex-col items-center md:items-start">

                            <Badge title="LETS TALK FOR YOUR PROJECT DONE" />
                            <div className="md:max-w-[85%] flex md:block flex-col items-center pt-4 pb-12">
                                <h1 className="font-semibold md:text-start text-[28px] text-center mt-2 leading-8">Let's Create Amazing <br />Stuff together</h1>
                                <p className="text-center md:text-start text-[14px] my-4 text-[#666666] ">Have a project in mind? Looking to partner or work
                                    together? Reach out through the form and I'll get
                                    back to you in the next 3 hours.</p>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex gap-3 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                        <p>kaif@creatives-studio.com</p>

                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>

                                        <p>+971-508140299</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="font-semibold md:text-start text-[28px] text-center mt-2 leading-8">Send a Message</h1>
                        <div className='mt-4 flex flex-col gap-6 text-[#666666]'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name" className='text-gray-800'>Name</label>
                                <input className='outline-none border-b border-gray-400 px-4 py-2' placeholder='Jon Portoz' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email" className='text-gray-800'>Email</label>
                                <input className='outline-none border-b border-gray-400 px-4 py-2' placeholder='hello@gmail.com' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="phone" className='text-gray-800'>Phone</label>
                                <input className='outline-none border-b border-gray-400 px-4 py-2' placeholder='+(123) 456 789 00' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name" className='text-gray-800'>Message</label>
                                <textarea className='outline-none border-b border-gray-400 px-4 py-2' placeholder='Jon Portoz' />
                            </div>
                            <button className='bg-[#CF922F] text-white font-medium p-3 rounded-md cursor-pointer'>Submit Now</button>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Contact