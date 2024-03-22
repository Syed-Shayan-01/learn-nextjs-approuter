import React from 'react'
import { FaBlogger } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div class="min-h-screen bg-gray-100 h-screen flex flex-col md:flex-row">
            <aside class="w-full md:w-64 bg-white p-6">
                <div class="mb-10">
                    <span class="text-2xl font-bold">Logo</span>
                </div>
                <nav class="space-y-2">
                    <a href="#" class="flex items-center space-x-2 text-blue-600" rel="ugc">
                        <FaBlogger className='text-black text-[2rem]' />
                        <span class="font-medium">Blogs</span>
                    </a>
                    <a href="#" class="flex items-center space-x-2 text-gray-600" rel="ugc">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6"
                        >
                            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                            <path d="M13 5v2"></path>
                            <path d="M13 17v2"></path>
                            <path d="M13 11v2"></path>
                        </svg>
                        <span class="font-medium">Attendance</span>
                    </a>
                    <a href="#" class="flex items-center space-x-2 text-gray-600" rel="ugc">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-6 w-6"
                        >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" x2="9" y1="12" y2="12"></line>
                        </svg>
                        <span class="font-medium">Logout</span>
                    </a>
                </nav>
            </aside>
            <main class="flex-1 p-6">
                <div class="flex justify-between items-center mb-6">
                    <h1 class="text-2xl font-bold">Students</h1>
                    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Add Student
                    </button>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <div class="relative w-full overflow-auto">
                        <table class="w-full caption-bottom text-sm">
                            <thead class="[&amp;_tr]:border-b">
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        id
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Profile Img
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Name
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Course Name
                                    </th>
                                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                        Password
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="[&amp;_tr:last-child]:border-0">
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Abdullah</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                                        </svg>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                                            <line x1="18" x2="12" y1="9" y2="15"></line>
                                            <line x1="12" x2="18" y1="9" y2="15"></line>
                                        </svg>
                                    </td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Bilal Raza</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                                        </svg>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                                            <line x1="18" x2="12" y1="9" y2="15"></line>
                                            <line x1="12" x2="18" y1="9" y2="15"></line>
                                        </svg>
                                    </td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">3</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Abdul Qadir</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                                        </svg>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                                            <line x1="18" x2="12" y1="9" y2="15"></line>
                                            <line x1="12" x2="18" y1="9" y2="15"></line>
                                        </svg>
                                    </td>
                                </tr>
                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">4</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Ahbaab</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-5 w-5 text-gray-600"
                                        >
                                            <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                                        </svg>
                                    </td>
                                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="h-5 w-5 text-gray-600"
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