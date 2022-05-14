import React from 'react';
import GradientButton from '../Shared/GradientButton';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background : `url(${appointment})`
        }} className='flex items-center my-10'>
            <div className='flex-1 hidden lg:flex'>
                <img className='max-w-xl mt-[-90px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-6'>
                <h3 className='text-primary uppercase font-bold my-2'>Appointment</h3>
                <h3 className='text-4xl text-white py-5'>Make an appointment Today</h3>
                <p className='pb-5 text-white'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <GradientButton></GradientButton>
            </div>
        </section>
    );
};

export default MakeAppointment;