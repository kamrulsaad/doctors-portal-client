import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {

    const [googlesignIn, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='h-screen flex items-center justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-xl font-semibold text-center uppercase ">login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
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
                            class="input input-bordered w-full" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
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
                            class="input input-bordered w-full" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>


                        <input className='btn w-full' value='login' type="submit" />
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => googlesignIn()} className='btn btn-outline'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;