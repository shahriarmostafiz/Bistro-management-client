import React from 'react';
import useAdmin from '../hooks/useAdmin/useAdmin';
import LoadingPhase from '../components/Loading/LoadingPhase';
import useAuth from '../hooks/useAuth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (user && isAdmin) {
        return children
    }
    if (loading || isAdminLoading) {
        return <LoadingPhase></LoadingPhase>
    }
    return <Navigate state={{ from: location }} to={"/login"}></Navigate>


};

export default AdminRoute;