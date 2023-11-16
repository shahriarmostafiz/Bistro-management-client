import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})
const useAxios = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token")
        // Do something before request is sent
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response;
    }, async (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.response.status
        // when the response has a status code of 403 or 401 it will log out the user as its trying to access unauthorized data
        if (status === 403 || status === 401) {
            await logout()
                .then(() => {
                    navigate("/login")
                })
        }
        return Promise.reject(error);
    });
    return (
        axiosSecure
    )
};

export default useAxios;