'use client'
import List from '@/components/list/List';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(null)
    return (
        <nav className="flex items-center  bg-[#f9f2d0] justify-between flex-wrap p-6">
            <div className="flex items-center mr-6 lg:mr-72">
                {!isOpen && <img src="/image/alquran.png" alt="logo" className='absolute shadow-xl top-1 w-32 h-32' />}
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 
                    hover:text-black-400"
                >
                    <ol>
                        <li>
                            <AiOutlineMenu
                                className={` text-black font-semibold text-lg
                               hover:text-blue-400 ${isOpen ? "hidden" : "block"
                                    }`}
                            />
                        </li>
                        <li>
                            <AiFillCloseCircle
                                className={` text-black font-semibold text-lg
                                 hover:text-blue-400 ${isOpen ? "block" : "hidden"
                                    }`}
                            />
                        </li>
                    </ol>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
                    }`}
            >
                <div className='inline-flex  lg:flex-grow' >
                    <List />
                </div>

                <Link href={'/form/login'}>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10  bg-yellow-600 text-white px-6 py-2 rounded-full">
                        Login
                    </button>
                </Link>

            </div>
        </nav >
    );
}

export default Navbar