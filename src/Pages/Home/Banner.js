import React from 'react';
import chair from '../../assets/images/chair.png'
import GradientButton from '../Shared/GradientButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen mb-5">
            <div className="hero-content gap-12 flex-col lg:flex-row">
                <div className='mt-10'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <GradientButton></GradientButton>
                </div>
                <img src={chair} className="lg:max-w-xl rounded-lg shadow-xl" alt='' />
            </div>
        </div>
    );
};

export default Banner;