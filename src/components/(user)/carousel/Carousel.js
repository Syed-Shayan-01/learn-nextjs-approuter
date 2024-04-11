import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const CarouselComponent = () => (
    <Carousel className='-z-10' autoplay>
        <div className="h-[80vh] max-sm:h-[45vh]">
            <h3 className="text-white leading-4 text-center bg-yellow-600 h-full">
                <div className="relative w-full h-full">
                    <Image
                        src="/image/masjid-aqsa2.jpg"
                        alt="carousel pic sales"
                        className="object-cover w-full h-full"
                          layout='fill'
                    //    height={200}
                    //    width={400}
                    />
                </div>
            </h3>
        </div>
        <div className="h-[80vh] max-sm:h-[45vh]">
            <h3 className="text-white leading-4 text-center bg-yellow-600 h-full">
                <div className="relative w-full h-full">
                    <Image
                        src="/image/makkah.jpeg"
                        alt="carousel pic sales"
                        className="object-cover w-full h-full"
                       layout='fill'
                    //    height={200}
                    //    width={400}
                    />
                </div>
            </h3>
        </div>
        <div className="h-[80vh] max-sm:h-[45vh]">
            <h3 className="text-white leading-4 text-center bg-yellow-600 h-full">
                <div className="relative w-full h-full">
                    <Image
                        src="/image/madina.jpg"
                        alt="carousel pic sales"
                        className="object-cover w-full h-full"
                       layout='fill'
                    //    height={200}
                    //    width={400}
                    />
                </div>
            </h3>
        </div>
    </Carousel>
);

export default CarouselComponent;
