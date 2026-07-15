import React, { useEffect, useState } from 'react'
import InfiniteScroller from '../../../components/layout/infinteScroller/infiniteScroller';
import axios from 'axios';

function Slide() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const getImages = async () => {
        try {
            const response = await axios.get(`${apiUrl}/products`);

            setData(response.data.data);

        } catch (error) {
            console.error(error);
        }

    }

    const [data, setData] = useState([]);
    useEffect(() => {
        getImages();
    }, [])

    return (
        <div>

            <div className="max-w-7xl px-4 mx-auto mt-4 text-[12px] lg:text-[16px]  flex flex-col justify-center items-center overflow-hidden">
                <h2 className="text-[22px] md:text-[28px] font-medium mb-4">Subscriptions We Offer</h2>
                {/* <div className='flex flex-col gap-6 md:gap-4'>
                <InfiniteScroller images={data} direction={true} />
            </div> */}
                <InfiniteScroller data={data} />
            </div>
        </div>

    )
}

export default Slide
