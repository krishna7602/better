import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#004733] min-h-screen flex flex-col items-center justify-center text-white'>
        <h1 className='text-4xl md:text-6xl font-bold mb-8'>Start Your Journey</h1>
        <p className='text-lg md:text-xl mb-8'>Get pre-approved for a mortgage in minutes.</p>
        <Link to='/home' className='px-6 py-3 bg-[#1EE07F] text-black text-sm rounded-full hover:bg-[#004733]'>Get Started</Link>
      </div>
      <Footer />
    </>
  );
};

export default Start;
