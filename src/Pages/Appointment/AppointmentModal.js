import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AppointmentModal = ({ treatment, date, setTreatment }) => {

    const [user, loading] = useAuthState(auth) 

    if(loading) return <Loading></Loading>

    const { name, slots, _id } = treatment;

    const handleFormSubmit = e => {
        e.preventDefault()
        const slot = e.target.slot.value
        const phone = e.target.phone.value
        const booking = { _id, date: format(date, "PP"), slot, email: user?.email, treatment : name, patient: user?.displayName, phone}
        console.log(booking)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle mt-2 absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className='text-accent text-xl font-semibold mb-4'>{name}</h3>
                    <form onSubmit={handleFormSubmit} className='justify-items-center grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={format(date, "PP")} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option key={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='patient' value={user?.displayName || ''} disabled={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" />
                        <input type="email" name='email' value={user?.email || ''} disabled placeholder="Your Email" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="w-full btn btn-accent" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;