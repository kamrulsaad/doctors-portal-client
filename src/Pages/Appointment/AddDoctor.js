import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'

const AddDoctor = () => {

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json())
    )

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (isLoading) return <Loading></Loading>

    const onSubmit = async data => {
        console.log( data);
    }

    return (
        <div className='mx-auto w-96'>
            <p className='text-xl font-medium text-center'>
                Add a doctor here
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mx-auto w-full max-w-xs">
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

                <div className="form-control mx-auto w-full max-w-xs">
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

                <div class="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register("specialty", {
                        required: {
                            value: true,
                            message: "Please enter your specialty"
                        }
                    })} class="select select-bordered">
                        {
                            services.map(service => <option key={service._id}>{service.name}</option>)
                        }
                    </select>
                    <label className="label">
                        {errors.specialty?.type === 'required' && <span className="label-text-alt text-red-600">{errors.specialty.message}</span>}
                    </label>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Choose Image</span>
                    </label>
                    <input {...register("img", {
                        required: {
                            value: true,
                            message: "Please upload your image"
                        }
                    })}
                        type="file"
                        placeholder="Your image"
                        className="input" />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-600">{errors.img.message}</span>}
                    </label>
                </div>

                <p className='text-red-500 mb-2 text-xs text-center'></p>
                <div className='form-control mx-auto w-full max-w-xs'>
                    <input className='btn w-full max-w-xs' value='signup' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;