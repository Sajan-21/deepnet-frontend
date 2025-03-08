import React, { useState } from 'react'
import deepnetsoftLogo from '../assets/deepnetsoft_logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {backendUrl} from '../App'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AdminLogin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAdminLogin = async function(e) {
        e.preventDefault();
        try {
            let response = await axios({
                method: "POST",
                url: `${backendUrl}/admin-login`,
                data: {
                    email,
                    password
                }
            });
            let responseData = response.data.data;
            localStorage.setItem(responseData.email, responseData.token);
            navigate(`/admin-dashboard/${responseData.email}`);

        } catch (error) {
            console.log("error in handleAdminLogin : ",error);
            
        }
    }

    return (
        <div>
            <Navbar />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src={deepnetsoftLogo}
                        className="mx-auto size-24 w-auto"
                    />
                    <h1 className='text-center text-3xl space-x-3'><strong className='text-blue-600'>DEEP</strong><strong>NET</strong><strong className='text-gray-400'>SOFT</strong></h1>
                    <h2 className="text-center text-2xl/9 tracking-tight text-gray-900">
                        welcome back Admin!
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleAdminLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="w-full font-sans rounded-md bg-white p-2 border border-slate-400 text-lg text-black outline-0 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="w-full font-sans rounded-md bg-white p-2 border border-slate-400 text-lg text-black outline-0 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminLogin