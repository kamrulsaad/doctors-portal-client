import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentModal from './AppointmentModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {

    const [treatment, setTreatment] = useState(null)

    const { data: services, isLoading, refetch } = useQuery(['available', format(date, 'PP')], () => fetch(`http://localhost:5000/available?date=${format(date, 'PP')}`)
        .then(res => res.json())
    )

    if (isLoading) return <Loading></Loading>

    return (
        <div className='my-3'>
            <h3 className='text-secondary my-12 text-xl font-semibold text-center'> Available Appointments on {format(date, "PP")} </h3>
            <div className='grid grid-cols-1 gap-4 px-12 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <AppointmentModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
                refetch={refetch}
            ></AppointmentModal>}
        </div>
    );
};

export default AvailableAppointments;