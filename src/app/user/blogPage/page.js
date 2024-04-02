// 'use client';
// import axios from "axios";
// import { useEffect, useState } from "react";

const BlogPage = ({blogs}) => {
    // const [blogs, setBlogs] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get('/api/admin/Blog');
    //             if (res.data) {
    //                 console.log(res.data);
    //                 setBlogs(res.data); // Assuming res.data is an array of blog objects
    //             } else {
    //                 console.error("Data received from API is not an array:", res.data);
    //             }
    //             setLoading(false);
    //         } catch (err) {
    //             console.error("Error fetching data:", err);
    //             setLoading(false); // Set loading to false even if an error occurs
    //         }
    //     };

    //     fetchData();

    //     return () => {
    //         // Cleanup function to avoid memory leaks
    //         setLoading(false);
    //         setBlogs([]); // Reset blogs to empty array on component unmount
    //     };
    // }, []); // empty dependency array to run the effect only once

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <div className="bg-yellow-50 min-h-screen py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="bg-white rounded-lg shadow overflow-hidden">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={blog.imageURL || "/placeholder.svg"}
                                    alt={blog.title}
                                    width="400"
                                    height="200"
                                />
                                <div className="p-6">
                                    <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                        Article
                                    </div>
                                    <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">{blog.title}</h3>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        {blog.content}
                                    </p>
                                    <div className="mt-6 flex items-center">
                                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                            <img
                                                className="aspect-square h-full w-full"
                                                alt={blog.author.name}
                                                src={blog.author.avatarURL || "/placeholder.svg?height=40&width=40"}
                                            />
                                        </span>
                                        <div className="ml-3">
                                            <p className="text-sm leading-5 font-medium text-gray-900">{blog.author.name}</p>
                                            <div className="flex space-x-1 text-sm leading-5 text-gray-500">
                                                <time dateTime={blog.date}>{blog.date}</time>
                                                <span aria-hidden="true">·</span>
                                                <span>{blog.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogPage;
