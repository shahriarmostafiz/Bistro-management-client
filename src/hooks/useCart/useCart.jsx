import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../useAxios/useAxios';
import useAuth from '../useAuth/useAuth';

const useCart = () => {
    const axiosSecure = useAxios()
    const { user } = useAuth()
    const email = user?.email
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ["cart", email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default useCart;