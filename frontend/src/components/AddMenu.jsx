import React, { useState } from 'react'
import { backendUrl } from '../App';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddMenu = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [menuName, setMenuName] = useState('');
    const [description, setDescription] = useState('');
    const token = localStorage.getItem(params.adminEmail);

    const handleAddMenu = async function(e) {
        e.preventDefault();
        try {
            let response = await axios({
                method: "POST",
                url: `${backendUrl}/add-menu`,
                headers: { Authorization: `Bearer ${token}`},
                data: {
                    menuName,
                    description
                }
            });
            toast.success(response.data.message);
            setTimeout(() => {
                navigate(`/admin-menu/${params.adminEmail}`)
            },2000);

        } catch (error) {
            console.log("error in handleAddMenu : ",error);
            
        }
    }

  return (
    <div className='border border-gray-300 p-5 bg-blue-100 rounded-2xl'>
        <form className='space-y-5' onSubmit={handleAddMenu}>
            <div className='flex flex-col gap-2'>
                <label htmlFor="menuName">Menu name</label>
                <input type="text" className='bg-white border border-slate-300 rounded p-2 text-lg font-sans' onChange={(e) => setMenuName(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="menuName">Menu name</label>
                <textarea onChange={(e) => setDescription(e.target.value)} className='bg-white h-50 border border-slate-300 rounded p-2 text-lg font-sans' ></textarea>
            </div>
            <button type='submit' className='border px-3 py-1 rounded bg-indigo-400 hover:bg-indigo-900 hover:text-white'>submit</button>
        </form>
    </div>
  )
}

export default AddMenu