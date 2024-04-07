'use client'
import Navbar from "../../../components/(user)/navbar/page"
import PageName from "@/components/(user)/pageName/PageName";
import Image from 'next/image';
import { useState } from "react";
const Gallery = () => {
    const [fullImageSrc, setFullImageSrc] = useState();
    const displayFullImage = (imageSrc) => {
        setFullImageSrc(imageSrc);
    };

    const closeFullImage = () => {
        setFullImageSrc();
    };

    // useEffect(() => {
    //     if (!getCookie("Auth token")) {
    //         return router.replace('/user/login');
    //     }
    // });
    return (
        <>
            <div>
                <Navbar />
            </div>
            <PageName pageNameText={'Image Gallery'} />
            <div className="grid grid-cols-2  md:grid-cols-3 gap-4 p-12">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" width={400} height={200} onClick={() => displayFullImage('/image/madina.jpg')} src="/image/madina.jpg" alt="" />
                </div>

                {fullImageSrc && (
                    <div className=" w-[90vh] h-[90vh] relative right-32 bottom-40" onClick={closeFullImage}>
                        <span className="close-button">&times;</span>
                        <Image src={fullImageSrc} alt="Full Image" width={400} height={200} />
                    </div>
                )}
            </div>

        </>
    )
}

export default Gallery