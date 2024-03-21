import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div class="min-h-screen bg-gray-100 flex flex-col">
                <div class="flex flex-col md:flex-row flex-1">
                    <aside class="w-full md:w-64 bg-white p-4 border-r">
                        <div class="mb-8">
                            <span class="text-xl font-bold">Logo</span>
                        </div>
                        <nav class="mb-8">
                            <ul>
                                <li class="flex items-center mb-4">
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
                                        class="text-blue-500 mr-2"
                                    >
                                        <path d="m4 6 8-4 8 4"></path>
                                        <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
                                        <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path>
                                        <path d="M18 5v17"></path>
                                        <path d="M6 5v17"></path>
                                        <circle cx="12" cy="9" r="2"></circle>
                                    </svg>
                                    <span class="text-gray-700">Students</span>
                                </li>
                                <li class="flex items-center">
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
                                        class="text-gray-500 mr-2"
                                    >
                                        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                                        <path d="M13 5v2"></path>
                                        <path d="M13 17v2"></path>
                                        <path d="M13 11v2"></path>
                                    </svg>
                                    <span class="text-gray-700">Attendance</span>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <span class="text-gray-700">Logout</span>
                        </div>
                    </aside>
                    <main class="flex-1 p-6">
                        <div class="flex justify-between items-center mb-6 p-6">
                            <h1 class="text-2xl font-semibold">Students</h1>
                            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white">
                                Add Student
                            </button>
                        </div>
                        <div class="overflow-x-auto shadow-sm bg-white">
                            <div class="relative w-full overflow-auto">
                                <table class="w-full caption-bottom text-sm">
                                    <thead class="[&amp;_tr]:border-b">
                                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <th class="h-12 text-[1rem] px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                id
                                            </th>
                                            <th class="h-12 text-[1rem] px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                Profile Img
                                            </th>
                                            <th class="h-12 text-[1rem] px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                Name
                                            </th>
                                            <th class="h-12 text-[1rem] px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                                Course Name
                                            </th>
                                            <th class="h-12 text-[1rem] px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
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
                                        </tr>
                                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2</td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                            </td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Bilal Raza</td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                        </tr>
                                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">3</td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                            </td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Abdul Qadir</td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                        </tr>
                                        <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">4</td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                            </td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Ahbaab</td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Web And App</td>
                                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1234567</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Dashboard