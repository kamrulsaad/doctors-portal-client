import React from 'react';
import treatment from '../../assets/images/treatment.png'
import GradientButton from '../Shared/GradientButton';

const Treatment = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col gap-24 lg:flex-row">
                <img src={treatment} class="lg:max-w-md rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 class="text-5xl max-w-lg font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6 max-w-xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <GradientButton/>
                </div>
            </div>
        </div>
    );
};

export default Treatment;