"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { LuGraduationCap } from "react-icons/lu";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import axios from 'axios';
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        try {
            if (email && password) {
                const response = await axios.post('/api/admin/auth/login', data);
                if (response.status === 200) {
                    Toastify({
                        text: "Admin Login Success",
                        duration: 3000,
                        newWindow: true,
                        close: true,
                        gravity: "top",
                        position: "left",
                        stopOnFocus: true,
                        duration: 2000,
                        style: {
                            background: "linear-gradient(to left, #fff, #1dadba)",
                            color: "black",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                            width: "20rem"
                        },
                    }).showToast();
                    setTimeout(() => {
                        router.replace('/admin/dashboard')
                    }, 2500)

                }
            }
        } catch (error) {
            if (error.response.status === 422 || error.response.status === 400) {
                Toastify({
                    text: error.response.data,
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "left",
                    stopOnFocus: true,
                    duration: 2000,
                    style: {
                        background: "linear-gradient(to left, #fff, #1dadba)",
                        color: "black",
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        width: "20rem"
                    },
                }).showToast();
            }
        }
    }
    return (
        <div className="min-h-screen bg-[#1dadba] flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className=" m-auto font-bold text-[#33a5af]"><LuGraduationCap size={80} /></h2>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Email address"
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                    />
                    <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Password"
                        type="password"
                        name='email'
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                    />
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#33a5af] text-white w-full">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login