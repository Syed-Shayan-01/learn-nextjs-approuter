'use client';
import { deleteCookie, getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { AiOutlineLogout } from 'react-icons/ai';
import { FaBlogger } from "react-icons/fa";
import { FaVideo } from 'react-icons/fa6';
const Dashboard = () => {
    const router = useRouter();
    useEffect(() => {
        const token = getCookie("AdminAuthToken");
        if (!token) {
            router.replace('/admin/auth/')
        }
    }, [])
    return (
        <div className="min-h-screen bg-gray-100 h-screen flex flex-col md:flex-row">
            <aside className="w-full md:w-64 bg-white p-6">
                <div className="mb-10">
                    <span className="text-2xl font-bold">Logo</span>
                </div>
                <nav className="space-y-2">
                    <Link href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600" >
                        <FaBlogger />
                        <span className="font-medium">Blogs</span>
                    </Link>
                    <Link href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600" >
                        <FaVideo />
                        <span className="font-medium">Attendance</span>
                    </Link>
                    <Link href="/admin/auth/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600" >
                        <AiOutlineLogout />
                        <span onClick={() => { deleteCookie("AdminAuthToken") }} className="font-medium">Logout</span>
                    </Link>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Students</h1>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Add Student
                    </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&amp;_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        id
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Profile Img
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Name
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Course Name
                                    </th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Password
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="[&amp;_tr:last-child]:border-0">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Abdullah</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                                        </svg>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                                            <line x1="18" x2="12" y1="9" y2="15"></line>
                                            <line x1="12" x2="18" y1="9" y2="15"></line>
                                        </svg>
                                    </td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Bilal Raza</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                                        </svg>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                                            <line x1="18" x2="12" y1="9" y2="15"></line>
                                            <line x1="12" x2="18" y1="9" y2="15"></line>
                                        </svg>
                                    </td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">3</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Abdul Qadir</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                                        </svg>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                                            <line x1="18" x2="12" y1="9" y2="15"></line>
                                            <line x1="12" x2="18" y1="9" y2="15"></line>
                                        </svg>
                                    </td>
                                </tr>
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">4</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Ahbaab</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                                        </svg>
                                    </td>
                                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                                            <line x1="18" x2="12" y1="9" y2="15"></line>
                                            <line x1="12" x2="18" y1="9" y2="15"></line>
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard