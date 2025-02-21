import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className='testimonials-section bg-gray-100 py-20'>
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>What Our Customers Say</h2>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='testimonial-item text-center mb-10 md:mb-0'>
            <p className='text-lg md:text-xl'>"Better.com made the mortgage process so easy and stress-free!"</p>
            <p className='mt-4 font-bold'>- John Doe</p>
          </div>
          <div className='testimonial-item text-center mb-10 md:mb-0'>
            <p className='text-lg md:text-xl'>"I got a great rate and the customer service was excellent."</p>
            <p className='mt-4 font-bold'>- Jane Smith</p>
          </div>
          <div className='testimonial-item text-center'>
            <p className='text-lg md:text-xl'>"Highly recommend Better.com for anyone looking for a mortgage."</p>
            <p className='mt-4 font-bold'>- Bob Johnson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
