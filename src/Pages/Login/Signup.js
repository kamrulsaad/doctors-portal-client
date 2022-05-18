import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Signup = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [googlesignIn, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [token] = useToken(user || googleUser)

    const navigate = useNavigate()

    useEffect(() => {
        if (token) navigate('/appointment')
    },[navigate,token])

    if (loading || googleLoading || updating) return <Loading></Loading>

    const signInError = googleError || error || updateError;

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    }

    return (
        <div className='mt-20 flex items-center justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-semibold text-center uppercase ">SIgn Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Please enter your name"
                                }
                            })}
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>

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
                        <input className='btn w-full' value='signup' type="submit" />
                    </form>

                    <p className='text-center'><small>Already a member? <span className='text-secondary'> <Link to='/login'> Log in</Link> </span></small></p>

                    <div className="divider">OR</div>
                    <button onClick={() => googlesignIn()} className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;