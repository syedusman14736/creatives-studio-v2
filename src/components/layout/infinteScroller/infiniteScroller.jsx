import React from 'react'
import './style.css'
function infiniteScroller({ data }) {
    return (
        <div className="w-full slider-container flex mx-4 overflow-hidden">

            <div className="slider-track">

                {data.map((img, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center w-[200px] h-[150px] mx-2 md:mx-4 object-cover overflow-hidden"
                    >
                        <img
                            src={img.image}
                            alt="Softwares subscriptions we sell"
                            className="w-full object-cover"
                        />
                    </div>

                ))}



            </div>
            <div className="slider-track">

                {data.map((img, index) => (
                    <div
                        key={index}
                        className="flex  justify-center items-center flex-shrink-0 w-[200px] h-[150px] mx-2 md:mx-4 object-cover overflow-hidden"
                    >
                        <img
                            src={img.image}
                            alt="Softwares subscriptions we sell"
                            className="w-full object-cover"
                        />
                    </div>
                ))}



            </div>

        </div>
    )
}

export default infiniteScroller