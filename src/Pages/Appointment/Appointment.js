import React, { useState } from 'react';
import Appointmentbanner from './Appointmentbanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {

    const [date, setDate] = useState(new Date())

    return (
        <div>
            <Appointmentbanner date={date} setDate={setDate}></Appointmentbanner>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;