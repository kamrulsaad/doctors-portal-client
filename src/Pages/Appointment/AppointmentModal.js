import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, date, setTreatment }) => {

    const { name, slots, _id } = treatment;

    const handleFormSubmit = e => {
        e.preventDefault()
        const slot = e.target.slot.value
        const email = e.target.email.value
        const name = e.target.name.value
        const phone = e.target.phone.value
        const data = { _id, date: format(date, "PP"), slot, email, name, phone}
        console.log(data)
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle mt-2 absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className='text-accent text-xl font-semibold mb-4'>{name}</h3>
                    <form onSubmit={handleFormSubmit} className='justify-items-center grid grid-cols-1 gap-4'>
                        <input type="text" disabled value={format(date, "PP")} class="input input-bordered w-full" />
                        <select name='slot' class="select select-bordered w-full">
                            {
                                slots.map(slot => <option key={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full" />
                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full" />
                        <input type="submit" value="Submit" class="w-full btn btn-accent" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;