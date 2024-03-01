import React from 'react';
import { Carousel } from 'antd';

const Carouse = () => (
    <Carousel className='-z-10' autoplay>
        <div>
            <h3 className="h-[80vh] text-white leading-4 text center bg-yellow-600">
                <img
                    src="/Double Patty.png"
                    alt="carousel pic sales"
                    className=" h-[91vh] w-full"
                />
            </h3>
        </div>
        <div>
            <h3 className="h-[80vh] text-white leading-4 text center bg-yellow-600">
                <img
                    src="/bugerdeal.jpg"
                    alt="carousel pic sales"
                    className=" h-[91vh] w-full"
                />
            </h3>
        </div>
        <div>
            <h3 className="h-[80vh] text-white leading-4 text center bg-yellow-600">
                <img
                    src="/Double Patty.png"
                    alt="carousel pic sales"
                    className=" h-[91vh] w-full"
                />
            </h3>
        </div>
    </Carousel>
);
export default Carouse;