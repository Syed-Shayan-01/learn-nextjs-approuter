import Link from "next/link"
import { AiOutlineLogout } from 'react-icons/ai';
import { FaBlogger } from "react-icons/fa";
import { FaVideo } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import axios from "axios";
const AdminNavbar = () => {
    const router = useRouter();
    const handleClick = async () => {
        const deleteCookie = await axios.get('/api/admin/auth/logout');
        if (deleteCookie.status === 200) {
            Toastify({
                text: deleteCookie.data.message,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                duration: 2000,
                style: {
                    background: "linear-gradient(to left, #f9f2d0, #eab308)",
                    color: "black",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    width: "20rem"
                },
            }).showToast();
            setTimeout(() => {
                router.replace('/admin/auth/');
            }, 2500)
        }
    }
    return (
        <>
            <aside className="w-full md:w-64 bg-white p-6">
                <div className="mb-10">
                    <span className="text-2xl font-bold">Logo</span>
                </div>
                <nav className="space-y-2">
                    <Link href="/admin/blog" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600" >
                        <FaBlogger />
                        <span className="font-medium">Blogs</span>
                    </Link>
                    <Link href="/admin/ImagePage" className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600" >
                        <FaVideo />
                        <span className="font-medium">Image</span>
                    </Link>
                    <div className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600" >
                        <AiOutlineLogout />
                        <span onClick={handleClick} className="font-medium">Logout</span>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default AdminNavbar