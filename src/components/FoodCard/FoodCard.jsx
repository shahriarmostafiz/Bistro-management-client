import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import useAxios from '../../hooks/useAxios/useAxios';
import useCart from '../../hooks/useCart/useCart';

const FoodCard = ({ item }) => {
    const { user } = useAuth()
    const [, refetch] = useCart()
    const { name, price, image, recipe, _id } = item
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxios()
    const handleOrder = () => {
        if (user && user?.email) {

            // console.log(food, user?.email);
            const cartData = {
                name, price, image,
                userEmail: user?.email,
                foodId: _id

            }
            console.log(cartData);
            axiosSecure.post("/carts", cartData)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        alert("product added")
                        refetch()
                    }
                })
        }
        else {
            // alert("login to continue ")
            navigate("/login", { state: { from: location } })
        }
    }

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
                        {/* <Link to={`/purchase/${_id}`} className="btn btn-outline  border-0 border-b-2  ">Order</Link> */}
                        <button onClick={handleOrder} className="btn btn-outline  border-0 border-b-2  ">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;