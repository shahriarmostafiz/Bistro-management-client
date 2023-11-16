import React from 'react';
import loading from "../../../public/loading.gif"

const LoadingPhase = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <img src={loading} alt="" />
        </div>
    );
};

export default LoadingPhase;