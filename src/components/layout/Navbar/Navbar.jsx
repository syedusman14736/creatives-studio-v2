import { Link } from "react-router-dom";
import logo from "/public/logo.png"
import gsap from "gsap";


const Navbar = ({ cursor }) => {

    return (
        <nav className="max-w-7xl px-4 border-b border-gray-200 mx-auto  flex justify-between items-center py-3">
            <div>
                <img className="w-full" src={logo} alt="Creatives-Studio" />
            </div>

            <ul className="hidden md:flex gap-6 items-center text-sm">
                <Link className="cursor-pointer" to="/">Home</Link>
                <Link className="cursor-pointer" to="/projects">Projects</Link>
                {/* <Link className="cursor-pointer" to="/contact">Contact</Link> */}
            </ul>

            <Link to="/" className="border border-[#cf922f] text-sm px-3 py-2 rounded-md hidden md:flex items-center gap-2">
                Book a Call
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-3" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </span>
            </Link>

            <button className="md:hidden">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </span>
            </button>
        </nav>
    )
}

export default Navbar