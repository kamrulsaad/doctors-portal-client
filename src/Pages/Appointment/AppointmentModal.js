import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, setServices, date }) => {

    const { name, slots, _id } = treatment;

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle mt-2 absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className='text-accent text-xl font-semibold mb-4'>{name}</h3>
                    <form className='justify-items-center grid grid-cols-1 gap-4'>
                        <input type='text' value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;