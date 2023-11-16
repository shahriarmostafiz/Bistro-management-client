import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import { FcGoogle } from "react-icons/fc"
import useAxiosPublic from '../../hooks/useAxiosPublic/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = ({ text }) => {
    const { googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                const userInfo = {
                    email: res.user.email,
                    name: res.user.displayName
                }
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data)

                        navigate("/")
                    })
                    .catch(err => {
                        console.log(err)
                    })
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