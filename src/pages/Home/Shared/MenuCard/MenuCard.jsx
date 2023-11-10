import React from 'react';

const MenuCard = ({ item }) => {
    const { name, price, image, recipe } = item
    return (
        <div className='flex gap-5 items-center justify-between'>
            <div>
                <img style={{ borderRadius: '20px 200px 200px 200px' }} src={image} className='w-[118px] h-[90px] rounded-md' alt="" />
            </div>
            <div>
                <h1 className='text-xl  font-semibold'>{name} --------</h1>
                <p className='text-gray-400 '>{recipe}</p>
            </div>
            <div className='text-amber-400 font-medium text-2xl '>${price}</div>
        </div>
    );
};

export default MenuCard;