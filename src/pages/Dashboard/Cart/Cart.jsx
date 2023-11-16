import React from 'react';
import useCart from '../../../hooks/useCart/useCart';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import useAxios from '../../../hooks/useAxios/useAxios';

const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxios()
    console.log(cart);
    // let x = 0;
    let total = cart.reduce((accumulator, currentItem) => { return accumulator + currentItem.price }, 0)
    console.log(total);
    const handleDelete = id => {
        axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                console.log(res.data);
                refetch()
                alert("deleted")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className='flex bg-amber-600 rounded-lg px-8 text-white justify-between items-center text-2xl font-medium'>
                <h1>Total Items : {cart.length}</h1>
                <h1>Total  : {total}</h1>
                <button className='btn glass px-8 border border-white'>Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image </th>
                            <th>Name</th>
                            <th>Price </th>

                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, idx) => <tr key={item._id}>
                                <td>{idx + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>

                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-red-500 "><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* {cart.length}
            <br />
            {total} */}

        </div>
    );
};

export default Cart;