import React from 'react'
import Navbar from '../components/Navbar'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../components/Footer'
import AddItem from '../components/AddItem'

const AdminItems = () => {
  return (
    <div>
      <Navbar />
      <div className='flex gap-3 py-3'>
        <div className='flex-none border border-slate-300 rounded-e-2xl '>
          <AdminSidebar />
        </div>
        <div className='flex-grow border border-slate-300 rounded-s-2xl  p-5 space-y-5' >
          <div className=''>
            <h1 className='text-2xl'>Add item</h1>
          </div>
          <div>
            <AddItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminItems