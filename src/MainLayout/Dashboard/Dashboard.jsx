import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendar, FaCartPlus, FaWallet, FaCalendarCheck, FaShopify, } from "react-icons/fa"
import { MdOutlineRateReview, MdOutlineRestaurantMenu, MdShop, MdShoppingBag } from "react-icons/md";
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    return (
        <div className='min-h-screen flex gap-4 py-12'>
            <Helmet>
                <title>
                    DashBoard
                </title>
            </Helmet>
            <div className="w-64 min-h-screen bg-amber-600 px-6 py-12">
                <ul className='menu font-md text-black text-lg'>
                    <li><NavLink to={"/dashboard"}><FaHome /> Home</NavLink></li>
                    <li><NavLink to={"/dashboard/reservation"}><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to={"/dashboard/paymenthistory"}><FaWallet /> Payment History</NavLink></li>
                    <li><NavLink to={"/dashboard/cart"}><FaCartPlus /> My Cart</NavLink></li>
                    <li><NavLink to={"/dashboard/myBookings"}><FaCalendarCheck /> My Booking </NavLink></li>
                    <li><NavLink to={"/dashboard/reviews"}><MdOutlineRateReview /> My Reviews </NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to={"/"}><FaHome /> Home </NavLink></li>
                    <li><NavLink to={"/menu"}><MdOutlineRestaurantMenu /> Menu </NavLink></li>
                    <li><NavLink to={"/order"}><MdShoppingBag /> Shop </NavLink></li>
                </ul>


            </div>
            <div className='flex-1 min-h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;