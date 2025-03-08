import React from 'react'
import Navbar from '../components/Navbar'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../components/Footer'
import AddMenu from '../components/AddMenu'

const AdminMenu = () => {
    return (
        <div>
            <Navbar />
            <div className='flex gap-3 py-3'>
                <div className='flex-none border rounded-e-2xl border-gray-300'>
                    <AdminSidebar />
                </div>
                <div className='flex-grow border rounded-s-2xl border-gray-300 space-y-5 p-5' >
                    <div className=''>
                        <h1 className='text-2xl'>Add menu</h1>
                    </div>
                    <div>
                        <AddMenu />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminMenu