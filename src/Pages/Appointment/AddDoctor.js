import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading'

const AddDoctor = () => {

    const { data: services, isLoading } = useQuery('services', () => fetch('https://doctors-portal-server-by-saad.herokuapp.com/services').then(res => res.json())
    )

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgBBAPIkey = '74922ada22c311f177ebbc5022b4cfed'

    if (isLoading) return <Loading></Loading>

    const onSubmit = async data => {
        const url = `https://api.imgbb.com/1/upload?key=${imgBBAPIkey}`
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result?.success){
                const img = result.data.url
                const doctor = {
                    name : data.name,
                    email : data.email,
                    img,
                    specialty: data.specialty,
                    location: data.location
                }
                fetch('https://doctors-portal-server-by-saad.herokuapp.com/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                        'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    if(inserted.acknowledged) {
                        toast.success('Doctor Added Successfully')
                        reset()
                    }
                    else toast.error('Something went wrong!')
                })
            }
        })
    }

    return (
        <div className='mx-auto w-96'>
            <p className='text-xl font-medium text-center'>
                Add a doctor here
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Doctor's Name</span>
                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "Please enter name"
                        }
                    })}
                        type="text"
                        placeholder=" Name"
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
                            message: "Please enter email"
                        },
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: 'Please provide a valid email'
                        }
                    })}
                        type="email"
                        placeholder=" Email"
                        className="input input-bordered w-full" />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full mx-auto max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register("specialty", {
                        required: {
                            value: true,
                            message: "Please enter  specialty"
                        }
                    })} className="select select-bordered">
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
                    <input {...register("image", {
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

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <input {...register("location", {
                        required: {
                            value: true,
                            message: "Please enter your location"
                        }
                    })}
                        type="text"
                        placeholder="Address"
                        className="input input-bordered w-full" />
                    <label className="label">
                        {errors.location?.type === 'required' && <span className="label-text-alt text-red-600">{errors.location.message}</span>}
                    </label>
                </div>

                <div className='form-control mx-auto w-full max-w-xs'>
                    <input className='btn w-full max-w-xs' value='signup' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;