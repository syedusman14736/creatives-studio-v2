import Navbar from '../../../components/layout/Navbar/Navbar'
import appDevelopment from '/public/app-development.png'
import webDevelopment from '/public/web-development.png'
import Footer from '../home/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'


function Projects() {
    // const [Portfolios, setPortfolios] = useState(Array.from({ length: 49 }, ((_, i) => `Png-${i + 1}.jpg`)));
    // console.log(Portfolios);
    const apiUrl = import.meta.env.VITE_API_URL;
    const [data, setData] = useState([]);

    const getImages = async () => {
        try {
            const response = await axios.get(`${apiUrl}/portfolios`);

            setData(response.data.data);

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getImages();
    }, [])


    return (
        <>
            <div className="max-w-7xl mx-auto px-4 text-[12px] lg:text-[16px]">

                <Navbar />
                <div className=' flex items-center pt-8'>
                    <h1 className='text-[25px] font-semibold'>Our Projects</h1>
                </div>
                <div className='grid grid-cols-1 gap-4 md:gap-2 md:grid-cols-2 pt-4 pb-8'>

                    {data.map((portfolio, index) => (
                        <div key={index}>
                            <img
                                className="rounded-md w-full h-62.5 md:h-90 object-cover"
                                src={portfolio.image}
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