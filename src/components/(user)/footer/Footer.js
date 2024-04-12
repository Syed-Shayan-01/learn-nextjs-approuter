import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#33a5af]">
            <div className="container mx-auto px-4 py-6 lg:py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-[#f7ae24] uppercase dark:text-white">Alquran Social accounts</h2>
                        <ul className="text-sm dark:text-yellow-400">
                            <li className="mb-2">
                                <Link href="https://www.facebook.com/profile.php?id=100093587807705" className="hover:underline">Facebook</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:underline">Twitter</Link>
                            </li>
                            <li className="mb-2">
                                <Link href={`https://wa.me/${process.env.Number}`} className="hover:underline">Whatsapp</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-[#f7ae24] uppercase dark:text-white">Developer Social accounts</h2>
                        <ul className="text-sm dark:text-yellow-400">
                            <li className="mb-2">
                                <Link href="https://syed-shayan.vercel.app" className="hover:underline">Website</Link>
                            </li>
                            <li className="mb-2">
                                <Link href={`https://wa.me/${process.env.Dev_Number}`} className="hover:underline">Whatsapp</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="https://www.facebook.com/syed.shayanDev" className="hover:underline">Facebook</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="https://github.com/Syed-Shayan-01" className="hover:underline">Github</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-[#f7ae24] uppercase dark:text-white">Legal</h2>
                        <ul className="text-sm dark:text-yellow-400">
                            <li className="mb-2">
                                <Link href="#" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <span className="text-sm lg:text-base text-[#f7ae24] dark:text-yellow-300">© 2024 <Link href="https://syed-shayan.vercel.app/" className="text-yellow-300">Al-Quran Academy™</Link>. All Rights Reserved.</span>
                    <div className="flex space-x-3">
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
    );
};

export default Footer;
