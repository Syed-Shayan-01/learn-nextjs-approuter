'use client'
import List from '@/components/(user)/list/List';
import { deleteCookie, getCookies } from 'cookies-next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'
import ButtonUser from '../button/page';
import axios from 'axios';
const Navbar = ({ props }) => {
    const [token, setToken] = useState();
    const [isOpen, setIsOpen] = useState(null)

    const handleLogout = async () => {
        const response = await axios.get('/api/admin/logout');
        console.log(response)
    }


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
                               hover:text-yelow-400 ${isOpen ? "hidden" : "block"
                                    }`}
                            />
                        </li>
                        <li>
                            <AiFillCloseCircle
                                className={` text-black font-semibold text-lg
                                 hover:text-yellow-400 ${isOpen ? "block" : "hidden"
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

                {!token && <Link href={'/admin/auth/'}>
                    <ButtonUser props={'Login'} />
                </Link>}

                {token && <Link onClick={handleLogout} href={'/user/login'}>
                    <ButtonUser props={'Logout'} />
                </Link>}

            </div>
        </nav >
    );
}

export default Navbar