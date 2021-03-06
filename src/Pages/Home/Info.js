import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 mb-4 lg:grid-cols-3 gap-8 px-12'>
            <InfoCard cardTitle="Opening Hours" bgColor='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardTitle="Visit Our Location" bgColor='bg-accent' img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now " bgColor='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;