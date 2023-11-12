import React from 'react';

const FoodCard = ({ item }) => {
    const { name, price, image, recipe } = item

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-4">
                <figure className=" ">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className='bg-slate-900 text-white px-3 py-1 rounded absolute right-4  '>${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline  border-0 border-b-2  ">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;