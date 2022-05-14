import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl mx-auto">
            <div class="card-body">
                <p>{testimonial.comment}</p>
                <div className='flex items-center'>
                    <div class="avatar">
                        <div class="w-16 mr-5 rounded-full ring ring-primary ring-offset-base-100">
                            <img src={testimonial.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <p>{testimonial.name}</p>
                        <p>{testimonial.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;