import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content gap-12 flex-col lg:flex-row">
                <div className='mt-10'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
                <img src={chair} class="max-w-xl rounded-lg shadow-xl" alt='' />
            </div>
        </div>
    );
};

export default Banner;