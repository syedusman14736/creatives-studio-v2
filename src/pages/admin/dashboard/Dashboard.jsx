import React from 'react'
import AdminNav from '../../../components/layout/AdminNav/AdminNav'

function Dashboard() {
    return (
        <div>
            <AdminNav />
            <div className='absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 translate-y-[50%]'>
                <h1 className='text-[16px] md:text-[32px] font-semibold'>COMING SOON</h1>
            </div>
        </div>
    )
}

export default Dashboard