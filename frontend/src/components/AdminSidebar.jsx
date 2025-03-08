import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faBars, faBowlFood } from "@fortawesome/free-solid-svg-icons";

const sideNavigation = [
    {
        label: 'Dashboard',
        to: '/admin-dashboard',
        icon: faChartPie
    },
    {
        label: 'menus',
        to: '/admin-menu',
        icon: faBars
    },
    {
        label: 'items',
        to: '/admin-items',
        icon: faBowlFood
    },
]

const AdminSidebar = () => {

    const params = useParams();
    const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex flex-col p-5 divide-y-1 divide-slate-300 ${isOpen? 'w-50' : 'w-16'}`}>
        {sideNavigation.map((item, index) => (
            <NavLink to={`${item.to}/${params.adminEmail}`} key={index} className={`hover:bg-gray-200 w-full px-3 py-2 flex space-x-2 items-center ${({isActive}) => isActive? "text-blue-500" : ""}`} > <FontAwesomeIcon icon={item.icon} /> <p className={!isOpen? "hidden" : ""}>{item.label}</p></NavLink>
        ))}
    </div>
  )
}

export default AdminSidebar