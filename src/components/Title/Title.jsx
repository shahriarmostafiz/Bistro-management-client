import React from 'react';

const Title = ({ subHeading, mainHeading }) => {
    return (
        <div className='font-Josefin text-center my-8'>
            <h3 className='text-amber-400 font-medium italic text-xl'>
                ---{subHeading}---
            </h3>
            <h1 className='text-4xl font-medium  uppercase p-4 w-fit border-y-2 my-2 border-gray-300 mx-auto'>{
                mainHeading
            }</h1>
        </div>
    );
};

export default Title;