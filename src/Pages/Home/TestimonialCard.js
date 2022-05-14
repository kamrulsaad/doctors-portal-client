import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <p>{testimonial.comment}</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 mr-5 rounded-full ring ring-primary ring-offset-base-100">
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