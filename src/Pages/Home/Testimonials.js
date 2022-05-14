import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {

    const testimonials = [
        {
            _id: 1,
            name: "Winson Herry",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people3
        }
    ]

    return (
        <section className='my-20 px-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-primary font-bold uppercase text-xl'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Say</h1>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
                {
                    testimonials.map(testimonial => <TestimonialCard 
                    key={testimonial._id}
                    testimonial={testimonial}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;