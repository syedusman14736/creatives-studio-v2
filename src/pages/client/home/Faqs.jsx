// import React from 'react'
// import Badge from '../../../components/common/Badge'

// function Faqs() {
//     return (
//         <div className='bg-[#F1F3F7]'>
//             <div id="faq" class="max-w-7xl px-4 mx-auto py-12 text-[12px] lg:text-[16px] ">
//                 <div className='flex flex-col gap-4 justify-center items-center'>
//                     <Badge title="FAQS" />
//                     <h1 className="font-semibold  text-[28px] lg:text-[48px] text-center mt-2 leading-8 lg:leading-13">Frequently <br /> Asked Questions</h1>

//                 </div>
//                 <div class="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-6 items-start">
//                     <div class="group rounded-xl border border-gray-200 bg-gray-50 p-6">
//                         <dt class="cursor-pointer flex justify-between items-center" aria-controls="faq-1">
//                             <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
//                             <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
//                         </dt>
//                         <dd id="faq-1" class="hidden text-lg font-light mt-6">
//                             <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
//                         </dd>
//                     </div>
//                     <div class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6">
//                         <dt class="flex justify-between items-center" aria-controls="faq-2">
//                             <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
//                             <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
//                         </dt>
//                         <dd id="faq-2" class="hidden text-lg font-light mt-6">
//                             <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
//                         </dd>
//                     </div>
//                     <div class="group rounded-xl border border-gray-200 bg-gray-50 p-6">
//                         <dt class="cursor-pointer flex justify-between items-center" aria-controls="faq-3">
//                             <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
//                             <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
//                         </dt>
//                         <dd id="faq-3" class="hidden text-lg font-light mt-6">
//                             <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
//                         </dd>
//                     </div>
//                     <div class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6">
//                         <dt class="flex justify-between items-center" aria-controls="faq-4">
//                             <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
//                             <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
//                         </dt>
//                         <dd id="faq-4" class="hidden text-lg font-light mt-6">
//                             <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
//                         </dd>
//                     </div>
//                     <div class="group rounded-xl border border-gray-200 bg-gray-50 p-6">
//                         <dt class="cursor-pointer flex justify-between items-center" aria-controls="faq-5">
//                             <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
//                             <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
//                         </dt>
//                         <dd id="faq-5" class="hidden text-lg font-light mt-6">
//                             <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
//                         </dd>
//                     </div>
//                     <div class="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6">
//                         <dt class="flex justify-between items-center" aria-controls="faq-6">
//                             <p class="font-semibold text-lg">Is ToDesktop For Me?</p>
//                             <i class="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
//                         </dt>
//                         <dd id="faq-6" class="hidden text-lg font-light mt-6">
//                             <p>That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.</p>
//                         </dd>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Faqs





import React, { useState } from 'react'
import Badge from '../../../components/common/Badge'

function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Is ToDesktop For Me?",
            answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        },
        {
            question: "How does it work?",
            answer: "You can convert your web app into a desktop app easily using ToDesktop."
        },
        {
            question: "Is it free?",
            answer: "There are both free and paid plans available depending on your needs."
        },
        {
            question: "Can I use it commercially?",
            answer: "Yes, you can use it for commercial projects."
        },
        {
            question: "Which platforms are supported?",
            answer: "It supports Windows, macOS, and Linux."
        },
        {
            question: "Do I need coding skills?",
            answer: "Basic knowledge helps, but it's beginner-friendly."
        }
    ];

    return (
        <div className='bg-[#F1F3F7]'>
            <div className="max-w-7xl px-4 mx-auto py-12 text-[12px] lg:text-[16px]">

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <Badge title="FAQS" />
                    <h1 className="font-semibold text-[28px] lg:text-[48px] text-center mt-2 leading-8 lg:leading-13">
                        Frequently <br /> Asked Questions
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-6 items-start">

                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-6">

                            <div
                                onClick={() => toggleFAQ(index)}
                                className="cursor-pointer flex justify-between items-center"
                            >
                                <p className="font-semibold text-lg">{faq.question}</p>
                                <i className={`fa-solid fa-chevron-up transition-transform ${activeIndex === index ? 'rotate-0' : '-rotate-180'
                                    }`}></i>
                            </div>

                            {activeIndex === index && (
                                <p className="text-lg font-light mt-6">
                                    {faq.answer}
                                </p>
                            )}

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Faqs