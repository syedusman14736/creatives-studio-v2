import Navbar from '../../../components/layout/Navbar/Navbar'
import uiux from '/public/uiux.png'
import appDevelopment from '/public/app-development.png'
import webDevelopment from '/public/web-development.png'
import Footer from '../home/Footer'
import { useState } from 'react'


function Projects() {
    const [Portfolios, setPortfolios] = useState(Array.from({ length: 49 }, ((_, i) => `Png-${i + 1}.jpg`)));
    console.log(Portfolios);


    return (
        <>
            <div className="max-w-7xl mx-auto px-4 text-[12px] lg:text-[16px]">

                <Navbar />
                <div className=' flex items-center pt-8'>
                    <h1 className='text-[25px] font-semibold'>Our Projects</h1>
                </div>
                <div className='grid grid-cols-1 gap-4 md:gap-2 md:grid-cols-2 pt-4 pb-8'>

                    {Portfolios.map((portfolio, index) => (
                        <div>
                            <img
                                key={index}
                                className="rounded-md w-full h-62.5 md:h-90 object-center object-cover"
                                src={`/Portfolio/${portfolio}`}
                                alt="project"
                            />
                        </div>
                    ))}

                </div >
            </div>
            <Footer />
        </>

    )
}

export default Projects