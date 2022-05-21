import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1r5FJbpxxK67O9UoEUiwunZwaeks8km5jZaxEeZnQiP3r8H41mri8pZCjSnCcT9kfB2x29xFvuT7rxEW4GHIgL005mZOEpIM');


const Payment = () => {

    const { id } = useParams()

    const url = `http://localhost:5000/payment/${id}`

    const { data: booking, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )

    if (isLoading) return <Loading></Loading>

    return (
        <div className='w-full'>
            <div class="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="text-center text-2xl font-bold">Hello <span className='text-secondary'>{booking.patient},</span></h2>
                    <p>Your Appointment: <span className='text-orange-700'>${booking.date}</span> at {booking.slot}</p>
                    <p>Please pay :${booking.price}</p>
                </div>
                <div class="card-body text-center">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;