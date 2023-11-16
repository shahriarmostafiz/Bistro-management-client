import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import { FcGoogle } from "react-icons/fc"

const SocialLogin = ({ text }) => {
    const { googleLogin } = useAuth()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
            })
            .catch()
    }
    return (
        <div className='p-4 text-center'>
            <div className='divider'></div>
            <button className='btn '
                onClick={handleGoogleLogin}
            ><FcGoogle /> {text} </button>
        </div>
    );
};

export default SocialLogin;