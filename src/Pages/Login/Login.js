import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    const [emailSignIn, user, loading, error] = useSignInWithEmailAndPassword(auth)

    const [googlesignIn, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [token] = useToken(user || googleUser)
    
    useEffect(() => {
        if(token) navigate(from, {replace: true})
    }, [token, from, navigate])

    const { register, formState: { errors }, handleSubmit } = useForm();

    if(loading|| googleLoading) return <Loading></Loading>
    const signInError = googleError || error;
    const onSubmit = data => emailSignIn(data.email, data.password)

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-semibold text-center uppercase ">login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Please enter your email"
                                },
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Please provide a valid email'
                                }
                            })}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                                <span className="label-text-alt">Forgot Password?</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Please enter your password"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or long'
                                }
                            })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                
                            </label>
                        </div>

                        <p className='text-red-500 mb-2 text-xs text-center'>{signInError && signInError.message}</p>   
                        <input className='btn w-full' value='login' type="submit" />
                    </form>
                    <p className='text-center'><small>New to Doctors Portal? <span className='text-secondary'> <Link to='/signup'> Create New Account</Link> </span></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => googlesignIn()} className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;