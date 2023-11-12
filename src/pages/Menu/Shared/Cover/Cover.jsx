import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="Menu"
                strength={-200}
            >
                <div className="hero min-h-[500px]"
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{subtitle}</p>
                        </div>
                    </div>
                </div>
                {/* <div className='min-h-[500px] bg-gray-800 opacity-20 text-center px-8 py-12'>
                    <div className="hero-content">
                        <h1 className="text-white text-5xl">
                            {title}
                        </h1>
                        <p className="text-xl">
                            {subtitle}
                        </p>
                    </div>
                </div> */}
            </Parallax>

        </div>
    );
};

export default Cover;