// import { Link } from "react-router-dom";
// import logo from "/public/creatives-studio-light.png"
// import gsap from "gsap";


// const Navbar = () => {

//     return (
//         <nav
//             data-aos="fade-bottom"
//             data-aos-delay="1500"
//             className="relative max-w-7xl mx-auto px-4 py-3 border-b border-gray-200 flex items-center justify-between"
//         >
//             {/* Logo */}
//             <div>
//                 <img className="w-[180px]" src={logo} alt="Creatives-Studio" />
//             </div>

//             {/* Center Menu */}
//             <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 items-center text-sm">
//                 <Link className="cursor-pointer" to="/">Home</Link>
//                 <Link className="cursor-pointer" to="/projects">Projects</Link>
//             </ul>

//             {/* Hire Button */}
//             <a
//                 href="https://wa.me/+971508140299/?text=Hello! I want to hire you. Can we discuss the details?"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="border border-[#cf922f] text-sm px-3 py-2 rounded-md hidden md:flex items-center gap-2"
//             >
//                 Hire Me
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-3"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//                     />
//                 </svg>
//             </a>

//             {/* Mobile Menu */}
//             <button className="md:hidden">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="1.5"
//                     stroke="currentColor"
//                     className="size-6"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                     />
//                 </svg>
//             </button>
//         </nav>
//     )
// }

// export default Navbar






import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/public/creatives-studio-light.png";
import gsap from "gsap";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    const toggleMenu = () => {
        if (!open) {
            setOpen(true);

            requestAnimationFrame(() => {
                gsap.fromTo(
                    menuRef.current,
                    {
                        opacity: 0,
                        y: -20,
                        height: 0,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        height: "auto",
                        duration: 0.35,
                        ease: "power3.out",
                    }
                );
            });
        } else {
            gsap.to(menuRef.current, {
                opacity: 0,
                y: -20,
                height: 0,
                duration: 0.3,
                ease: "power3.in",
                onComplete: () => setOpen(false),
            });
        }
    };

    const closeMenu = () => {
        gsap.to(menuRef.current, {
            opacity: 0,
            y: -20,
            height: 0,
            duration: 0.25,
            onComplete: () => setOpen(false),
        });
    };

    return (
        <>
            <nav
                className="relative max-w-7xl mx-auto px-4 py-3 border-b border-gray-200 flex justify-between items-center"
            >
                {/* Logo */}
                <Link to="/">
                    <img
                        className="w-[180px]"
                        src={logo}
                        alt="Creatives Studio"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </ul>

                {/* Desktop Button */}
                <a
                    href="https://wa.me/+971508140299/?text=Hello! I want to hire you."
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:flex border border-[#cf922f] px-4 py-2 rounded-md items-center gap-2"
                >
                    Hire Me
                </a>

                {/* Mobile Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden z-50"
                >
                    {open ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Dropdown */}
            {open && (
                <div
                    ref={menuRef}
                    className="md:hidden overflow-hidden border-b border-gray-200 bg-white"
                >
                    <div className="flex flex-col p-5 gap-5">

                        <Link onClick={closeMenu} to="/">
                            Home
                        </Link>

                        <Link onClick={closeMenu} to="/projects">
                            Projects
                        </Link>

                        <a
                            href="https://wa.me/+971508140299/?text=Hello! I want to hire you."
                            target="_blank"
                            rel="noreferrer"
                            className="border border-[#cf922f] rounded-md py-3 text-center"
                        >
                            Hire Me
                        </a>

                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;