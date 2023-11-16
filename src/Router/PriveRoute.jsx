import React from 'react';
import useAuth from '../hooks/useAuth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPhase from '../components/Loading/LoadingPhase';

const PriveRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (user) {
        return children
    }
    if (loading) {
        return <LoadingPhase></LoadingPhase>
    }
    return <Navigate state={{ from: location }} to={"/login"}></Navigate>
};

export default PriveRoute;