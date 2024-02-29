'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'
const Home = () => {
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
                <div className="flex  text-black max-md:flex-col lg:flex-grow" >
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        {/* remaining work  */}
                    </ul>
                </div>

                <span ><button>Sign Out</button></span>

                <Link href={'/form/login'}>
                    <button>Login</button>
                </Link>

            </div>
        </nav >
    );
}

export default Home