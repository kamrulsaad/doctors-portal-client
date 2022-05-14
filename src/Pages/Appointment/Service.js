import React from 'react';

const Service = ({service, setTreatment}) => {

    const {slots, name} = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-xl font-semibold text-secondary text-center">{name}</h2>
                <p className='text-center uppercase text-sm font-medium'>{
                    slots.length ? slots[0] : <span className='text-red-500'>Try Another Date</span>
                }</p>
                <p className='text-center uppercase text-xs font-medium'>{slots.length} space{slots.length ? 's' : ''} Available </p>
                <label disabled={slots.length === 0} htmlFor='booking-modal' onClick={() => setTreatment(service)} className='mx-auto flex btn btn-secondary text-white w-fit'>book Appointment</label>
            </div>
        </div>
    );
};

export default Service;