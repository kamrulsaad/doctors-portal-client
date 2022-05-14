import React from 'react';
import chair from '../../assets/images/chair.png'
import GradientButton from '../Shared/GradientButton';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100 mb-5">
            <div class="hero-content gap-12 flex-col lg:flex-row">
                <div className='mt-10'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <GradientButton></GradientButton>
                </div>
                <img src={chair} class="lg:max-w-xl rounded-lg shadow-xl" alt='' />
            </div>
        </div>
    );
};

export default Banner;