import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import deepnetsoftLogo from '../assets/deepnetsoft_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className={`bg-gray-950 flex justify-between p-3 text-white px-10 items-center`} >
                <div className='flex items-center justify-center'> <img src={deepnetsoftLogo} className='size-10' alt="" /> <p className='text-2xl'>DEEP NET SOFT</p></div>
                <button className='sm:hidden' onClick={isOpen ? setIsOpen(false) : setIsOpen(true)} ><FontAwesomeIcon icon={faBars} /></button>
                <div className='flex gap-5 max-sm:hidden'>

                    {navItems.map((item, index) => (
                        <NavLink to={`${!params.adminEmail ? `${item.to}` : `${item.to}${params.adminEmail}`}`} key={index} className={({ isActive }) => isActive ? "text-blue-600 " : ""} >{item.label}</NavLink>
                    ))}
                </div>
            </div>
            {/* <div className={isOpen ? "w-50 fixed left-0 top-0" : "w-0 hidden"}>
                {navItems.map((item, index) => (
                    <NavLink to={`${!params.adminEmail ? `${item.to}` : `${item.to}${params.adminEmail}`}`} key={index} className={({ isActive }) => `w-full px-3 py-2 hover:text-blue-600 hover:bg-gray-200 ${isActive ? "text-blue-600 " : ""}`} >{item.label}</NavLink>
                ))}
            </div> */}
        </div>
    )
}

export default Navbar
