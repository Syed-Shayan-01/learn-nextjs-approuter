'use client'
import Link from "next/link"
import axios from "axios";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

const Login = () => {
    const router = useRouter();
    const [token, setToken] = useState('');
    useEffect(() => {
        const initialToken = getCookie("Auth token") || '';
        setToken(initialToken);
        if (initialToken) router.replace('/')
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        console.log(email, password)
        try {
            const res = await axios.post("/api/user/login/", {
                email,
                password,
            });

            if (res.status === 200) {
                setCookie("Auth token", res.data)
                router.replace('/');
            } else if (res.status === 400) {
                console.log("Email does not exist");
            } else {
                console.log(`Unexpected status code: ${res.status}`);
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        token ? <div>Loading ...</div> : <div className="flex h-screen bg-[#fef7d7] items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login Form</h2>
                <div className="flex justify-center my-4">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 mr-2 bg-yellow-600 text-white px-6 py-2 rounded-full">
                        Login
                    </button>
                    <Link href={'./signup'} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-transparent text-yellow-600 px-6 py-2 rounded-full border border-yellow-600">
                        Signup
                    </Link>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-2 border rounded-lg"
                            placeholder="Email Address"
                            type="email"
                        />
                    </div>
                    <div>
                        <input
                            className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-2 border rounded-lg"
                            placeholder="Password"
                            type="password"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Link className="text-sm text-yellow-600 hover:underline" href="#">
                            Forgot password?
                        </Link>
                    </div>
                    {/* <div>{errorMessage && <p>{errorMessage}</p>}</div> */}
                    <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 w-full bg-yellow-600 text-white px-4 py-2 rounded-lg">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Create an account{" "}
                    <Link className="text-yellow-600 hover:underline" href="./signup">
                        Signup now
                    </Link>
                </p>
            </div>
        </div>
    )


}
export default Login;

