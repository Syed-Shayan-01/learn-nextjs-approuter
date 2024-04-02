'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPage from "../page";

const ParentComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/admin/Blog");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Blog Page</h1>
      <BlogPage blogs={blogs} />
    </div>
  );
};

export default ParentComponent;
