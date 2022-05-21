import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ booking }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("")
    const { price, patient, patientEmail, _id } = booking

    
    useEffect(() => {
        fetch("https://doctors-portal-server-by-saad.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret)
            }
        });
    }, [price]);

    
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setSuccess('')
        setPaymentError(error?.message || '')

        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: patientEmail
                    },
                },
            },
        );

        
        if (intentError) {
            setSuccess('')
            setPaymentError(intentError?.message)
        } else {
            setPaymentError('')
            setSuccess("Congratulations! Your payment has been completed")
            setTransactionId(paymentIntent.id)

            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }
    
            fetch(`https://doctors-portal-server-by-saad.herokuapp.com/booking/${_id}`, {
                method: 'PATCH', 
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-secondary btn-sm mt-4' disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p className='text-red-500'>{paymentError}</p>
            }
            {
                success && <div>
                    <p className='text-green-500'>
                        {success}
                    </p>
                    <p>Your Transaction Id: <span className='font-bold'>{transactionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;