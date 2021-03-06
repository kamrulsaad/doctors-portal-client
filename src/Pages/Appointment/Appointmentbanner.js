import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Appointmentbanner = ({date, setDate}) => {
    return (
        <div  style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: "center"}} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-24">
                <img src={chair} alt='' className="max-w-xl mt-20 lg:mt-0 rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onDayClick={setDate}/>
                </div>
            </div>
        </div>
    );
};

export default Appointmentbanner;