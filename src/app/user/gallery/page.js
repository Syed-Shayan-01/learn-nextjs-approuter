'use client'
import Navbar from "../../../components/(user)/navbar/page"
import PageName from "@/components/(user)/pageName/PageName";
import axios from "axios";
import Image from 'next/image';
import { useEffect, useState } from "react";
const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/admin/imageUpload');
                if (res.status === 200) {
                    setImages(res.data.data); // Update this line to set the images state
                } else {
                    console.error("Data received from API is not an array or status is not OK:", res.data);
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <PageName pageNameText={'Image Gallery'} />
            <div className="grid grid-cols-2  md:grid-cols-3 gap-4 p-12">

                {images && images.map((image) => (
                    <div key={image._id}>
                        <Image className="h-auto max-w-full rounded-lg" width={400} height={200} src={image.imageUrl} alt="" ></Image>
                    </div>)
                )}
            </div>

        </>
    )
}

export default Gallery