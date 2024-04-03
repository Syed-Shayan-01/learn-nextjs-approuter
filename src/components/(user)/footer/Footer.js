import Link from "next/link"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#f9f2d0] dark:bg-yellow-900">
                <div className="mx-auto w-full ">
                    <div className="flex justify-evenly items-center px-4 py-6 lg:py-8 max-md:flex-col">
                        <div>
                            <h2 className="mb-6 text-[1rem] font-semibold text-yellow-800 uppercase dark:text-white">Alquran Social accounts</h2>
                            <ul className="dark:text-yellow-400 font-medium">
                                <li className="mb-4">
                                    <Link href="https://www.facebook.com/profile.php?id=100093587807705" className="hover:underline">Facebook</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Twitter</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href={`https://wa.me/${process.env.Number}`} className="hover:underline">Whatsapp</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href={`https://wa.me/${process.env.Number}`} className="hover:underline">Whatsapp</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-[1rem] font-semibold text-yellow-800 uppercase dark:text-white">Developer Social accounts</h2>
                            <ul className="dark:text-yellow-400 font-medium">
                                <li className="mb-4">
                                    <Link href="https://syed-shayan.vercel.app" className="hover:underline">Website</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href={`https://wa.me/${process.env.Dev_Number}`} className="hover:underline">Whatsapp</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="https://www.facebook.com/syed.shayanDev" className="hover:underline">Facebook</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="https://github.com/Syed-Shayan-01" className="hover:underline">Github</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-[1rem] font-semibold text-yellow-800 uppercase dark:text-white">Legal</h2>
                            <ul className="dark:text-yellow-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-24 py-6 bg-yellow-800 dark:bg-yellow-700 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-yellow-500 dark:text-yellow-300 sm:text-center">© 2024 <a href="https://syed-shayan.vercel.app/">Syed Shayan™</a>. All Rights Reserved.
                        </span>
                        <div className="flex text-lg text-yellow-500 mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                            <Link href="https://www.facebook.com/syed.shayanDev/" className="hover:text-black dark:hover:text-white">
                                <FaFacebookF />
                            </Link>
                            <Link href="https://www.linkedin.com/in/thesyedshayan/" className="hover:text-black dark:hover:text-white">
                                <FaLinkedin />
                            </Link>
                            <Link href="https://www.github.com/Syed-Shayan-01" className="hover:text-black dark:hover:text-white">
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
