import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";

function Login() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;
    if (token) {
        return <Navigate to="/admin" replace />;
    }
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${apiUrl}/auth/login`,
                {
                    email,
                    password,
                }
            );

            localStorage.setItem('token', response.data.token)
            console.log(response.data.message);
            navigate('/admin')
        } catch (error) {
            console.error(error.response.data.message);

        }
    };


    return (
        <div className="bg-linear-to-br from-indigo-100 via-white to-blue-100 min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">

                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                            A
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Welcome Back
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Login to continue
                        </p>
                    </div>

                    <form className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>


                        <button
                            onClick={(e) => handleLogin(e)}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
                        >
                            Sign In
                        </button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login