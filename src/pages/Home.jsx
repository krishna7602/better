import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import FeaturesSection from '../Components/FeaturesSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <div className='bg-[#004733] min-h-screen overflow-x-hidden'>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
