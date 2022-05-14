import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Appointmentbanner = ({date, setDate}) => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse lg:gap-24">
                <img src={chair} alt='' class="max-w-lg mt-20 lg:mt-0 rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default Appointmentbanner;