import React from 'react';

const FeaturesSection = () => {
  return (
    <div className='features-section bg-white text-black py-20'>
      <div className='container mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>Why Choose Us</h2>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='feature-item text-center mb-10 md:mb-0'>
            <h3 className='text-xl md:text-2xl font-bold'>Low Rates</h3>
            <p className='mt-4'>We offer competitive rates to save you money.</p>
          </div>
          <div className='feature-item text-center mb-10 md:mb-0'>
            <h3 className='text-xl md:text-2xl font-bold'>Fast Process</h3>
            <p className='mt-4'>Get your mortgage approved quickly and easily.</p>
          </div>
          <div className='feature-item text-center'>
            <h3 className='text-xl md:text-2xl font-bold'>Expert Support</h3>
            <p className='mt-4'>Our team is here to help you every step of the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
