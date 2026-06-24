import Badge from "../../../components/common/Badge"
import uiux from "/public/uiux.png"
import appDevelopment from "/public/app-development.png"
import webDevelopment from "/public/web-development.png"
import { Link } from "react-router-dom"
function Portfolio() {
    return (
        <div className="bg-[#89190D] mt-6">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-[12px] lg:text-[14px] flex flex-col gap-4 items-center">
                    <Badge title="PORTFOLIO" />
                    <h1 className="hidden md:block font-semibold md:text-start text-[28px] text-center leading-8 text-white">Meet with creative things</h1>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center pt-6">
                        <div>
                            <Link to="/projects">
                                <img className="w-full h-62.5 rounded-md object-center object-cover lg:h-95" src={uiux} alt="portfolio" />
                            </Link>
                            <div className="flex justify-between items-center pt-4 pb-2 border-b border-white text-[12px] md:text-[14px] text-white">
                                <span className="font-medium">UI/UX Design</span>
                                <span>SEP 12,2024</span>
                            </div>
                            <div className="flex items-center justify-between py-3 gap-2 rounded text-[16px] text-white lg:text-[18px]">
                                <p className="w-[85%]">A Seamless Blend of UI/UX</p>
                                <Link to="/projects">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/projects">
                                <img className="w-full h-62.5 rounded-md object-center object-cover lg:h-95" src={appDevelopment} alt="portfolio" />
                            </Link>
                            <div className="flex justify-between items-center pt-4 pb-2 border-b border-white text-[12px] md:text-[14px] text-white">
                                <span className="font-medium">APP DEVELOPMENT</span>
                                <span>FEB 22, 2022</span>
                            </div>
                            <div className="flex items-center justify-between py-3 gap-2 rounded text-[16px] text-white lg:text-[18px]">
                                <p className="w-[85%]">Google - Budget Planner Finance App</p>
                                <Link to="/projects">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <div>
                            <Link to="/projects">
                                <img className="w-full h-90 rounded-md object-center object-cover lg:h-135" src={webDevelopment} alt="portfolio" />
                            </Link>
                            <div className="flex justify-between items-center pt-4 pb-2 border-b border-white text-[12px] md:text-[14px] text-white">
                                <span className="font-medium">WEB DEVELOPMENT</span>
                                <span>FEB 22, 2025</span>
                            </div>
                            <div className="flex items-center justify-between py-3 gap-2 rounded text-[16px] text-white lg:text-[18px]">
                                <p className="w-[85%]">Mastering UI/UX Design for Websites</p>
                                <Link to="/projects">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">

                    <Link to="/projects" className="mt-8 border cursor-pointer border-white text-white text-[12px] md:text-[14px] lg:text-[16px] font-medium px-6 py-2 rounded-md flex items-center gap-2">
                        VIEW ALL PROJECTS
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Portfolio