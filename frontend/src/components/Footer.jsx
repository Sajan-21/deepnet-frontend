import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Footer = () => {
    const params = useParams();

    console.log(params);
    
    return (
        <div className='bg-gray-950 text-white'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center p-10'>
                <div className='border rounded-2xl p-5 text-center'>
                    <h1 className='text-blue-600 font-bold text-xl' >CONNECT WITH US</h1>
                    <p>+91 9567843340</p>
                    <p>info@deepnetsoft.com</p>
                </div>
                <div className='border rounded-2xl p-5 text-center flex flex-col justify-center items-center'>
                    <h1 className='text-3xl space-x-3'><strong className='text-blue-600'>DEEP</strong><strong>NET</strong><strong className='text-gray-400'>SOFT</strong></h1>
                    <p></p>
                </div>
                <div className='border rounded-2xl p-5 text-center'>
                    <h1 className='text-blue-600 font-bold text-xl' >FIND US</h1>
                    <p>First floor, Geo infopark, <br /> Infopark EXPY, Kakkanad</p>
                </div>
            </div>
            <div className='bg-gray-800  flex flex-wrap justify-between items-center p-3 px-10'>
                <p>c 2024 Deepnetsoft Solutions. All rights reserved.</p>
                <div className='flex flex-wrap gap-5'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <NavLink lassName={({ isActive }) => isActive ? "text-blue-600 " : ""} to={!params.adminEmail? '/admin-login' : `/admin-dashboard/${params.adminEmail}`}>ADMIN PANEL</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer