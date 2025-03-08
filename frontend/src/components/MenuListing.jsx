import React, { useEffect, useState } from 'react';
import GetMenu from './GetMenu';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { backendUrl } from '../App';

const MenuListing = () => {
    const [menus, setMenus] = useState([]);
    const [items, setItems] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);

    useEffect(() => {
        const fetchMenus = async function () {
            try {
                let response = await GetMenu();
                setMenus(response);
            } catch (error) {
                console.log('error in fetchMenus : ', error);
            }
        };
        fetchMenus();
    }, []);

    const fetchItems = async (menuId) => {
        if (menuId === selectedMenu) return;

        setSelectedMenu(menuId);
        try {
            let response = await axios.get(`${backendUrl}/get-items/${menuId}`);
            setItems(response.data.data);
        } catch (error) {
            console.log('Error in fetchItems:', error);
        }
    };

    return (
        <div>
            <div className='flex justify-center items-center overflow-auto menu-btn-bg-img bg-no-repeat bg-cover p-3'>
                {menus.map((menu) => (
                    <NavLink
                        key={menu._id}
                        onClick={() => fetchItems(menu._id)}
                        className={({ isActive }) =>
                            `border border-blue-600 bg-black text-white px-3 py-2 text-2xl ${isActive ? 'bg-blue-600' : ''}`
                        }
                    >
                        {menu.name}
                    </NavLink>
                ))}
            </div>
            <div className='menu-list-bg-img bg-no-repeat bg-cover p-10 flex justify-center'>
                <div className='flex flex-col p-10 border backdrop-blur-2xl text-white rounded-2xl sm:w-1/2'>
                    {items.length > 0 ? (
                        <>
                            <h1 className='text-center text-3xl'>{items[0]?.menu?.name}</h1>
                            {items.map((item) => (
                                <div key={item._id} className='flex justify-between items-center border-b border-slate-600 p-3'>
                                    <div>
                                        <p className='text-yellow-600'>{item.name}</p>
                                        <p className='text-gray-400'>{item.description}</p>
                                    </div>
                                    <div className='text-yellow-500'>{item.price}</div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <h1 className='text-center text-3xl text-gray-400'>Select a menu</h1>
                    )}
                </div>

            </div>
        </div>
    );
};

export default MenuListing;
