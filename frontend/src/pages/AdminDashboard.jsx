import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import GetMenu from '../components/GetMenu'
import { useNavigate, useParams } from 'react-router-dom'

const AdminDashboard = () => {

  const navigate = useNavigate();
  const params = useParams();
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

    function handleLogOut() {
      localStorage.removeItem(params.adminEmail);
      navigate('/');
    }

  return (
    <div>
      <Navbar />
      <div className='flex gap-3 py-3'>
        <div className='flex-none border rounded-e-2xl border-slate-300'>
          <AdminSidebar />
        </div>
        <div className='flex-grow border rounded-s-2xl border-slate-300 p-5 space-y-5' >
          <div className='text-end'>
            <button className='border px-3 py-1 hover:bg-gray-200' onClick={handleLogOut}>Logout</button>
          </div>
          <div>
            <table className='sm:w-1/2'>
              <tr className='divide-x-1 border bg-gray-500 text-white'>
                <th className='p-2'>Menus</th>
                <th className='p-2'>items</th>
              </tr>
              {menus.map((menu, index) => (
                  <tr key={index} className="border border-slate-300 hover:bg-blue-100 w-full">
                    <td className="border border-slate-300 p-2">{menu.name}</td>
                    <td className="border border-slate-300 p-2">
                      {menu.items.length > 0 ? (
                        menu.items.map((item, subIndex) => (
                          <span key={subIndex} className="block">{item.name}</span>
                        ))
                      ) : (
                        <span className="text-gray-500">No items in this menu</span>
                      )}
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdminDashboard