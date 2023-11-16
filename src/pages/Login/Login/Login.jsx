import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import loginImg from "../../../assets/others/authentication2.png"
import "./login.css"
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const { login } = useAuth()
    const [disabled, setDisabled] = useState(true)
    const location = useLocation()
    // const captchaRef = useRef(null)
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        login(email, password)
            .then(res => {
                // console.log("logged in");
                alert("logged in ")
                console.log(res.user);
                navigate(location.state ? location.state.from.pathname : "/")
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    const validateOurCaptcha = (e) => {
        // e.preventDefault()
        const user_captcha_value = e.target.value
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            console.log("success");

            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className="login bg-center bg-cover">
            <Helmet>
                <title>Log In </title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left hidden md:flex">
                        <img src={loginImg} alt="" />
                        {/* <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm md:max-w-md bg-transparent">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />

                                    {/* <span className="label-text">Captcha </span> */}
                                </label>
                                <input type="text" onBlur={validateOurCaptcha} name='captcha' placeholder="captcha" className="input input-bordered" />
                                {/* <button className='btn btn-outline btn-xs w-fit my-4'>Validate</button> */}
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    disabled={disabled}
                                    value={"Login"}
                                    className={`btn  btn-primary`}></input>
                            </div>
                        </form>
                        <p className="text-center pb-5">New here? <Link to={"/register"} className='text-blue-600 font-medium'>Signup Here</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;