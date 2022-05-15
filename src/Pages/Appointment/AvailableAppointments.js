import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {

    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='my-3'>
            <h3 className='text-secondary my-12 text-xl font-semibold text-center'> Available Appointments on {format(date, "PP")} </h3>
            <div className='grid grid-cols-1 gap-4 px-12 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
                {treatment && <AppointmentModal treatment={treatment} date={date} setTreatment={setTreatment}></AppointmentModal>}
        </div>
    );
};

export default AvailableAppointments;