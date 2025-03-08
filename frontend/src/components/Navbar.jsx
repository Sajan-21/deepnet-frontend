import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import deepnetsoftLogo from '../assets/deepnetsoft_logo.png'

const navItems = [
    {
        label: "HOME",
        to: `/home/`
    },
    {
        label: "MENU",
        to: `/`
    },
    {
        label: "MAKE A RESERVATION",
        to: `/reservation/`
    },
    {
        label: "CONTACT US",
        to: `/contact/`
    },
]

const Navbar = () => {

    const params = useParams();

  return (
    <div className={`bg-gray-950 flex justify-between p-3 text-white px-10 items-center`} >
        <div className='flex items-center justify-center'> <img src={deepnetsoftLogo} className='size-10' alt="" /> <p className='text-2xl'>DEEP NET SOFT</p></div>
        <div className='flex gap-5'>
            {navItems.map((item, index) => (
                <NavLink to={`${!params.adminEmail? `${item.to}` : `${item.to}${params.adminEmail}`}`} key={index} className={({ isActive }) => isActive ? "text-blue-600 " : ""} >{item.label}</NavLink>
            ))}
        </div>
    </div>
  )
}

export default Navbar
