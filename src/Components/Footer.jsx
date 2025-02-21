import React from 'react';

const Footer = () => {
  return (
    <div className='footer border-t-4 bg-[#004733] text-white py-10'>
      <div className='container mx-auto text-center'>
        <p>&copy; 2023 Better.com. All rights reserved.</p>
        <div className='flex flex-col md:flex-row justify-center mt-4'>
          <a href='#' className='mx-2'>Privacy Policy</a>
          <a href='#' className='mx-2'>Terms of Service</a>
          <a href='#' className='mx-2'>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
