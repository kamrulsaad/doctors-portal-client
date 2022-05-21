import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://doctors-portal-server-by-saad.herokuapp.com/booking?email=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    navigate('/')
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                }
                return res.json()
            })
            .then(data => setAppointments(data))
    }, [user, navigate])

    return (
        <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Slot</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{appointment.patient}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>
                                    {(appointment.price && !appointment.paid) && 
                                <Link
                                    to={`/dashboard/payment/${appointment._id}`}>
                                    <button className='btn btn-xs btn-success'>Pay Now</button>
                                </Link>}
                                    {(appointment.price && appointment.paid) && 
                                    <button className='btn btn-xs btn-success'>Paid</button>
                                }
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;