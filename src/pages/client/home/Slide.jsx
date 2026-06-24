import { useEffect, useRef, useState } from 'react';

function Slide() {
    // We use Refs to access the elements instead of document.getElementById
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);

    const initialTranslateLTR = -48 * 4;
    const initialTranslateRTL = 36 * 4;

    useEffect(() => {
        const setupIntersectionObserver = (element, isLTR, speed) => {
            if (!element) return;

            const scrollHandler = () => {
                const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
                let totalTranslate = isLTR
                    ? translateX + initialTranslateLTR
                    : -(translateX + initialTranslateRTL);

                element.style.transform = `translateX(${totalTranslate}px)`;
            };

            const intersectionCallback = (entries) => {
                if (entries[0].isIntersecting) {
                    window.addEventListener('scroll', scrollHandler);
                } else {
                    window.removeEventListener('scroll', scrollHandler);
                }
            };

            const observer = new IntersectionObserver(intersectionCallback);
            observer.observe(element);

            // Cleanup function to prevent memory leaks
            return () => {
                observer.disconnect();
                window.removeEventListener('scroll', scrollHandler);
            };
        };

        // Initialize observers
        const cleanup1 = setupIntersectionObserver(line1Ref.current, true, 0.15);
        const cleanup2 = setupIntersectionObserver(line2Ref.current, false, 0.15);
        const cleanup3 = setupIntersectionObserver(line3Ref.current, true, 0.15);

        return () => {
            if (cleanup1) cleanup1();
            if (cleanup2) cleanup2();
            if (cleanup3) cleanup3();
        };
    }, []);

    const [softwares, setSoftwares] = useState([
        "/public/Softwares/1.png",
        "/public/Softwares/2.jpg",
        "/public/Softwares/3.jpg",
        "/public/Softwares/4.jpg",
        "/public/Softwares/5.png",
        "/public/Softwares/6.jpg",
        "/public/Softwares/7.jpg",
        "/public/Softwares/8.jpg",
        "/public/Softwares/9.jpg",
        "/public/Softwares/10.jpg",
        "/public/Softwares/11.jpg",
        "/public/Softwares/12.jpg",
        "/public/Softwares/13.jpg",
        "/public/Softwares/14.jpg",
        "/public/Softwares/15.jpg",
        "/public/Softwares/16.jpg"
    ])

    const [softwares2, setSoftwares2] = useState([
        "/public/Softwares/17.jpg",
        "/public/Softwares/18.jpg",
        "/public/Softwares/19.jpg",
        "/public/Softwares/20.jpg",
        "/public/Softwares/21.jpg",
        "/public/Softwares/22.jpg",
        "/public/Softwares/23.jpg",
        "/public/Softwares/24.jpg",
        "/public/Softwares/25.jpg",
        "/public/Softwares/16.jpg",
        "/public/Softwares/15.jpg",
        "/public/Softwares/14.jpg",
        "/public/Softwares/13.jpg",
        "/public/Softwares/12.jpg",
        "/public/Softwares/11.jpg",
        "/public/Softwares/10.jpg"
    ])


    const [softwares3, setSoftwares3] = useState([
        "/public/Softwares/8.jpg",
        "/public/Softwares/9.jpg",
        "/public/Softwares/10.jpg",
        "/public/Softwares/11.jpg",
        "/public/Softwares/12.jpg",
        "/public/Softwares/13.jpg",
        "/public/Softwares/14.jpg",
        "/public/Softwares/15.jpg",
        "/public/Softwares/16.jpg",
        "/public/Softwares/17.jpg",
        "/public/Softwares/18.jpg",
        "/public/Softwares/19.jpg",
        "/public/Softwares/20.jpg",
        "/public/Softwares/21.jpg",
        "/public/Softwares/22.jpg",
        "/public/Softwares/23.jpg"
    ])
    return (


        <div id="companies-container" className="relative max-w-7xl px-4 mt-12 mx-auto overflow-hidden flex flex-col gap-10">
            <div id="companies-title" className="flex justify-center gap-2">
                <img className="translate-y-2" src="/src/assets/assets/asset 2.svg" alt="arrow" />
                <span className="font-semibold md:text-[18px]">Buy Premium Software Subscriptions</span>
                <img className="-scale-x-100 translate-y-2" src="/src/assets/assets/asset 2.svg" alt="arrow" />
            </div>

            <div class="hidden md:block absolute left-0 top-0 w-30 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>


            <div id="lines-group" className="flex flex-col gap-4">
                {/* Line 1 */}
                <div ref={line1Ref} class="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                    {softwares.map((item, index) => (
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src={item} class="w-12 h-12 md:w-16 md:h-16" alt="" />
                        </div>
                    ))}
                </div>




                {/* Line 2 */}
                <div ref={line2Ref} class="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear">
                    {softwares2.map((item, index) => (
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src={item} class="w-12 h-12 md:w-16 md:h-16" alt="" />
                        </div>
                    ))}
                </div>

                {/* Line 3 */}
                <div ref={line3Ref} class="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                    {softwares3.map((item, index) => (
                        <div class="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img src={item} class="w-12 h-12 md:w-16 md:h-16" alt="" />
                        </div>
                    ))}
                </div>
            </div>

            <div class="hidden md:block absolute right-0 top-0 w-30 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

        </div>

    );
}

// Simple helper component to keep the code clean


export default Slide;