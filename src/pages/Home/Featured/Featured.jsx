import React from 'react';
import featured from "../../../assets/home/featured.jpg"
import Title from '../../../components/Title/Title';
import "./featured.css"
const Featured = () => {
    return (
        // <div className={`bg-[url(${featured})] py-8 md:py-12 lg:py-20 px-8 md:px-12 flex flex-col gap-5 justify-center items-center md:flex-row`}>
        <div className="featured py-8 hero-overlay bg-fixed bg-center bg-blend-overlay md:py-12 lg:py-20 px-8 md:px-12">
            <Title subHeading={"Check it out"} mainHeading={"Featured"}></Title>
            <div className='flex flex-col gap-5 justify-center items-center md:flex-row'>
                <div className='flex-1'>
                    <img src={featured} className='rounded-lg' alt="" />
                </div>
                <div className='text-white flex-1' >
                    <h1 className='text-lg'>
                        August 20, 2024
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae beatae quasi exercitationem minus iste natus nulla pariatur corporis earum, quod animi magni eaque incidunt reprehenderit sunt repellendus obcaecati et ex eligendi voluptates a facere nesciunt. Facere sint magni aut architecto.</p>
                    <button className='btn text-white outline-none  bg-transparent border-t-0 border-x-0 border-b-2'> Read More </button>
                </div>
            </div>

        </div>
    );
};

export default Featured;