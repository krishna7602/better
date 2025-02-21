import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-section text-center text-[#1EE07F] pt-20 min-h-screen'>
      <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold'><p>Mortgages</p> made simple</h1>
      <p className='text-lg md:text-xl lg:text-2xl text-white mt-8'>Get a better mortgage experience with us</p>
      <Link to='/start' className='m-10 flex justify-center items-center px-6 py-3 bg-[#1EE07F] text-black text-sm rounded-full shadow-lg hover:bg-[#004733] hover:text-white hover:shadow-xl'>Start my approval</Link>
      <div className='flex justify-center items-center'>
        <Link to='/about' className='m-10 flex justify-center items-center px-6 py-3 bg-fuchsia-300 text-black text-sm rounded-full shadow-lg hover:bg-[#ed519a] hover:text-white hover:shadow-xl'>About us</Link>
        <Link to='/calculator' className='m-10 flex justify-center items-center px-6 py-3 bg-fuchsia-300 text-black text-sm rounded-full shadow-lg hover:bg-[#ed519a] hover:text-white hover:shadow-xl'>Calculator</Link>
      </div>
    </div>
  );
};

export default HeroSection;
