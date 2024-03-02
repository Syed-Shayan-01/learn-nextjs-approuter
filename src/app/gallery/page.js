'use client'
import { useState } from "react";
import Navbar from "../navbar/page"
import PageName from "@/components/pageName/PageName";

const page = () => {
    const [fullImageSrc, setFullImageSrc] = useState(null);

    const displayFullImage = (imageSrc) => {
        setFullImageSrc(imageSrc);
    };

    const closeFullImage = () => {
        setFullImageSrc(null);
    };

    return (
        <>
            <div>
                <Navbar />
            </div>
            <PageName pageNameText={'Image Gallery'} />
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-12">
                <div>
                    <img class="h-auto max-w-full rounded-lg" onClick={() => displayFullImage('https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg')} src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                </div>
                {/* <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="" />
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="" />
                </div> */}

                {fullImageSrc && (
                    <div className=" w-[90vh] h-[90vh] relative right-32 bottom-40" onClick={closeFullImage}>
                        <span className="close-button">&times;</span>
                        <img src={fullImageSrc} alt="Full Image" />
                    </div>
                )}
            </div>

        </>
    )
}

export default page