'use client';
import List from '@/components/(user)/list/List';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai'
import ButtonUser from '../button/page';
import axios from 'axios';
import Image from 'next/image'

const Navbar = () => {
    const [token, setToken] = useState();
    const [isOpen, setIsOpen] = useState(null);

    const handleLogout = async () => {
        const response = await axios.get('/api/admin/logout');
        console.log(response);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 bg-[#33a5af]" > {/* Background Color */}
            <div className="flex items-center mr-6 lg:mr-72">
                {!isOpen && (
                    <Image
                        src="/image/alquran1.png"
                        width={100}
                        height={50}
                        alt="logo"
                        className="absolute top-1 w-16 h-16 md:w-32 md:h-32 "
                        style={{filter: 'drop-shadow(0px 0px 3.8px white)'}}
                    />
                )}
            </div>

            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <ol>
                        <li>
                            <AiOutlineMenu
                                className={`text-black font-semibold text-lg hover:text-yelow-400 ${isOpen ? "hidden" : "block"}`}
                            />
                        </li>
                        <li>
                            <AiFillCloseCircle
                                className={`text-black font-semibold text-lg hover:text-teal-400 ${isOpen ? "block" : "hidden"}`}
                            />
                        </li>
                    </ol>
                </button>
            </div>
            
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                <div className={`inline-flex lg:flex-grow ${isOpen ? "flex-col" : ""}`}>
                    <List />
                </div>

                {!token && <Link href={'/admin/auth/'}><ButtonUser props={'Login'} /></Link>}
                {token && <Link onClick={handleLogout} href={'/user/login'}><ButtonUser props={'Logout'} /></Link>}
            </div>
        </nav>
    );
}

export default Navbar;
