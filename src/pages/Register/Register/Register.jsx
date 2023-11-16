// import React from 'react
import { Link, useNavigate } from "react-router-dom";
import authImage from "../../../assets/others/authentication2.png"
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";

// import React from 'react';

const Register = () => {
    const { signup, update } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        signup(data.email, data.password)
            .then(res => {
                console.log(res.user);
                update(data.name, data.photo)
                    .then(() => {
                        // insert the user in the database here 
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset()
                                    alert("signed up")
                                    navigate("/login")

                                }
                            })

                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <Helmet>
                <title>
                    Bistro | Signup
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={authImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name </span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" {...register("name", {
                                    required: true
                                })} />
                                {errors.name?.type === "required" && <span className="py-2 pl-4 text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url </span>
                                </label>
                                <input type="text" placeholder="Image Url" className="input input-bordered" {...register("photo", {
                                    required: true
                                })} />
                                {errors.photo?.type === "required" && <span className="py-2 pl-4 text-red-500">Photo Url  is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email?.type === "required" && <span className="py-2 pl-4 text-red-500">Email is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                                    })}
                                    className="input input-bordered" />
                                {errors.password?.type === "required" && <span className="py-2 pl-4 text-red-500">Password  is required</span>}
                                {errors.password?.type === "minLength" && <span className="py-2 pl-4 text-red-500">Password  is required</span>}
                                {errors.password?.type === "pattern" && <span className="py-2 pl-4 text-red-500">Password  must have atleast One special character , One uppercaseand lowercase letter and one number </span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <SocialLogin text={"SignUp"}></SocialLogin>
                        <p className="text-center pb-5">Have an account? <Link to={"/login"} className='text-blue-600 font-medium'>login Here</Link> </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;

// const Register = () => {
//     const { signup } = useAuth()
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm()
//     const onSubmit = (data) => {
//         console.log(data)
//         signup(data.email, data.password)
//             .then(res => {
//                 console.log(res.user);
//             })
//             .catch(err => {
//                 console.log(err.message);
//             })
//     }
//     // console.log(watch("name")) // watch input value by passing the name of it

//     return (
//         <div>
//             <Helmet>
//                 <title>Sign Up</title>
//             </Helmet>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <div className="text-center lg:text-left">
//                         <img src={authImage} alt="" />
//                         {/* <h1 className="text-5xl font-bold">Sign Up now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <form className="card-body"
//                             onSubmit={handleSubmit(onSubmit)}
//                         >
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name </span>
//                                 </label>
//                                 <input type="text" placeholder="Your Name" {...register("name", { required: true })} className="input input-bordered" />
//                                 {errors.name && <span className="text-red-500 font-medium pr-5 pt-2">Name is required</span>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" required />
//                                 {errors.email && <span className="text-red-500 font-medium pr-5 pt-2">Email  is required</span>}

//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="text" placeholder="password" {...register("password", {
//                                     required: true,
//                                     minLength: 8,
//                                     pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}/
//                                     // pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/
//                                 })} className="input input-bordered" />
//                                 {errors.password?.type === "required" && <span className="text-red-500 font-medium pr-5 pt-2">Password is Required </span>}
//                                 {errors.password?.type === "minLength" && <span className="text-red-500 font-medium pr-5 pt-2">Password Should be 8 characters</span>}
//                                 {errors.password?.type === "pattern" && <span className="text-red-500 font-medium pr-5 pt-2">Password should have atleast one special character, uppercase and lowercase letters and one number</span>}

//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn btn-primary">Sign Up</button>
//                             </div>
//                         </form>
//                         <p className="text-center pb-5">
//                             Already have an Account? <Link to={"/login"} className="text-blue-600 font-medium">Login </Link>                        </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;