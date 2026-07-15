import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
    return (
        <nav className='bg-[#333230] text-[12px] lg:text-[16px] text-white border-b border-gray-200 p-4 flex gap-4'>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/slider">Slider</Link>
            <Link to="/admin/portfolio">Portfolio</Link>
        </nav>
    )
}

export default AdminNav
