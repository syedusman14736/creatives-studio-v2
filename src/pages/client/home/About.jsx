import Badge from "../../../components/common/Badge"

function About() {
    return (
        <>
            <div className="max-w-7xl px-4 mx-auto mt-24 text-[12px] lg:text-[16px] ">
                <div className="block md:grid grid-cols-2">
                    <div className="flex flex-col items-center md:items-start gap-4 lg:text-[14px]">
                        <div className="static md:sticky top-5 flex flex-col items-center md:items-start">

                            <Badge title="ABOUT ME" />
                            <div className="md:max-w-[85%] flex md:block flex-col items-center pt-4 pb-12">
                                <h1 className="font-semibold md:text-start text-[28px] text-center mt-2 leading-8">Me Work With You, Not For You</h1>
                                <p className="text-center md:text-start text-[14px] my-4 text-[#666666] ">My name is Syed Kaif & I am a professional an
                                    creative Graphic designer & video editor. I hav
                                    had the pleasure of working with sorts of
                                    business types, from startups to Royal Chemica
                                    Service, designing their Brand Identity that
                                    shouts their presence. With 2 years of
                                    experience in Graphics, I created many desig
                                    solutions that have a high visual impact.
                                    develop creative ideas and concepts, choosing
                                    the appropriate media. Feel free to reach out to me!</p>
                                <button className="cursor-pointer bg-black text-white text-[12px] md:text-[14px] font-medium px-6 py-3 rounded-md flex items-center gap-2">
                                    BOOK A CALL
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="py-8 border-t border-gray-200 flex flex-col gap-4">
                            <span class="text-[16px] bg-linear-to-r from-[#FF6369] via-[#FFA94D] to-[#B16CEA] bg-clip-text text-transparent">Name</span>
                            <span className="text-[18px] font-semibold">Syed Kaif</span>
                        </div>
                        <div className="py-8 border-t border-gray-200 flex flex-col gap-4">
                            <span class="text-[16px] bg-linear-to-r from-[#FF6369] via-[#FFA94D] to-[#B16CEA] bg-clip-text text-transparent">Email</span>
                            <span className="text-[18px] font-semibold">kaifali98940@gmail.com</span>
                        </div>
                        <div className="py-8 border-t border-gray-200 flex flex-col gap-4">
                            <span class="text-[16px] bg-linear-to-r from-[#FF6369] via-[#FFA94D] to-[#B16CEA] bg-clip-text text-transparent">Phone Number</span>
                            <span className="text-[18px] font-semibold">+971-508140299</span>
                        </div>
                        <div className="py-8 border-t border-gray-200 flex flex-col gap-4">
                            <span class="text-[16px] bg-linear-to-r from-[#FF6369] via-[#FFA94D] to-[#B16CEA] bg-clip-text text-transparent">Address</span>
                            <span className="text-[18px] font-semibold">AB Plaza 9-Al nahda 1 , Dubai-UAE</span>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default About