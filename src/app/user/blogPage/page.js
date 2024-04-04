'use client';
import Navbar from "@/components/(user)/navbar/page";
import PageName from "@/components/(user)/pageName/PageName";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/admin/Blog');
                if (res.status === 200) {
                    setBlogs(res.data.data);
                } else {
                    console.error("Data received from API is not an array or status is not OK:", res.data);
                }
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    function createMarkup(c) {
        return { __html: c };
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <PageName pageNameText={'Islamic Blogs List'} />
            <div className=" min-h-screen py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs && blogs.map((blog) => (
                            <div key={blog._id} className="bg-white rounded-lg shadow overflow-hidden">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={blog.imageURL || "/placeholder.svg"}
                                    alt={blog.title}
                                    width="400"
                                    height="200"
                                />
                                <div className="p-6">
                                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                        Islamic Blog
                                    </div>
                                    <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">{blog.title}</h3>
                                    <Link href={`/user/blogPage/${encodeURIComponent([blog.title, blog.content])}`} className="mt-2 text-base leading-6 text-gray-500" dangerouslySetInnerHTML={createMarkup(
                                        blog.Description && blog.Description.length >= 60
                                            ? `${blog.Description.slice(140, 170)}...`
                                            : blog.Description
                                    )} />

                                    <div className="mt-6 flex items-center">
                                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                            <img
                                                className="aspect-square h-full w-full"
                                                alt={'Al - Quran'}
                                                src={"/image/alquran.png"}
                                            />
                                        </span>
                                        <div className="ml-3">
                                            <p className="text-sm leading-5 font-medium text-gray-900">{"Al Quran"}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >


        </>
    );
}

export default BlogPage;
