import React, { useEffect, useState } from 'react'
import GetMenu from './GetMenu';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const AddItem = () => {

    const params = useParams();
    const token = localStorage.getItem(params.adminEmail);
    const navigate = useNavigate();
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [selected, setSelected] = useState('');
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async function () {
            try {
                let response = await GetMenu();
                setMenus(response);
            } catch (error) {
                console.log("error in fetchMenus : ", error);

            }
        }
        fetchMenus();
    });

    const handleAddItem = async(e) => {
        e.preventDefault();
        try {
            if(selected == "") {
                return toast.error("select menu");
            }
            console.log("selected : ",selected);
            
            
            let response = await axios({
                method: "POST",
                url: `${backendUrl}/add-item/${selected}`,
                headers: {Authorization: `Bearer ${token}`},
                data: {
                    name: itemName,
                    description,
                    price
                }
            });
            toast.success(response.data.message);
        } catch (error) {
            console.log("error in handleAddItem : ",error);
            
        }
    }

    return (
        <div className='border border-gray-300 p-5 bg-blue-100 rounded-2xl'>

            <form className='space-y-5' onSubmit={handleAddItem} >
                <div className='flex flex-col gap-2'>
                    <label htmlFor="menus">select menu</label>
                    <select className='border bg-white rounded border-slate-300 p-2' onChange={(e) => setSelected(e.target.value)} defaultValue="">
                        <option value="" disabled>--select menu--</option>
                        {menus.map((item) => (
                            <option value={item._id} key={item._id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="menuName">item name</label>
                    <input type="text" className='bg-white border border-slate-300 rounded p-2 text-lg font-sans' onChange={(e) => setItemName(e.target.value)} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="menuName">Item description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} className='bg-white h-50 border border-slate-300 rounded p-2 text-lg font-sans' ></textarea>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="itemPrice">item price</label>
                    <input type="number" className='bg-white border border-slate-300 rounded p-2 text-lg font-sans' onChange={(e) => setPrice(e.target.value)} />
                </div>

                <button type='submit' className='border px-3 py-1 rounded bg-indigo-400 hover:bg-indigo-900 hover:text-white'>submit</button>
            </form>
        </div>
    )
}

export default AddItem