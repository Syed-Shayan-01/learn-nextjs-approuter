import Link from "next/link"

const Signup = () => {
    return (
        <>
            <div className="flex h-screen bg-[#fef7d7] items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
                    <h2 className="text-2xl font-bold text-center text-gray-700">Signup Form</h2>
                    <div className="flex justify-center my-4">
                        <Link href={'./login'} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 mr-2 border border-yellow-600 text-yellow-600 px-6 py-2 rounded-full">
                            Login
                        </Link>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-transparent  bg-yellow-600 text-white px-6 py-2 rounded-full ">
                            Signup
                        </button>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-2 border rounded-lg"
                                placeholder="write your name"
                                type="name"
                            />
                        </div>
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
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 w-full bg-yellow-600 text-white px-4 py-2 rounded-lg">
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Do you have an account ?{" "}
                        <Link className="text-yellow-600 hover:underline" href="./login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Signup