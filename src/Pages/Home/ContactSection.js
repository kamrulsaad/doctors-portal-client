import React from 'react';
import appointment from '../../assets/images/appointment.png'
import GradientButton from '../Shared/GradientButton';

const ContactSection = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className="mt-4 flex h-[550px] justify-center items-center">
            <div>
                <h3 className='text-primary font-bold text-center text-lg'>
                    Contact us
                </h3>
                <h1 className='text-white text-center text-3xl mb-3'>
                    Stay Connected with us
                </h1>
                <div>
                    <input type="email" placeholder="Email Address" className="input w-full my-2" />
                    <input type="text" placeholder="Subject" className="input w-full my-2" />
                    <textarea className="textarea w-full h-40 my-2" placeholder="Your Message"></textarea>
                    <div className='flex justify-center'>
                        <GradientButton>Submit</GradientButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;