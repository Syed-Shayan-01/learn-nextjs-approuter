import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
const Carouse = () => (
    <Carousel className='-z-10 ' autoplay>
        <div>
            <h3 className="h-[90vh] text-white leading-4 text center bg-yellow-600">
                <Image
                    src="/image/masjid-aqsa2.jpg"
                    alt="carousel pic sales"
                    className=" h-[91vh] w-full"
                    width={1800} height={750}
                />
            </h3>
        </div>
        <div>
            <h3 className="h-[90vh] text-white leading-4 text center bg-yellow-600">
                <Image
                    src="/image/makkah.jpeg"
                    alt="carousel pic sales"
                    className=" h-[91vh] w-full"
                    width={1800} height={750}
                />
            </h3>
        </div>
        <div>
            <h3 className="h-[90vh] text-white leading-4 text center bg-yellow-600">
                <Image
                    src="/image/madina.jpg"
                    alt="carousel pic sales"
                    className=" h-[91vh] w-full"
                    width={1800} height={750}
                />
            </h3>
        </div>
    </Carousel>
);
export default Carouse;