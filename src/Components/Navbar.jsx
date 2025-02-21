import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMouseEnter = (menu) => {
        setDropdown(menu);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className='bg-[#004733] text-white p-5 border-b-2 border-gray-200'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl md:text-4xl font-bold'>Better</h1>
                <div className='md:hidden'>
                    <button onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div className='hidden md:flex gap-5 md:gap-10'>
                    {['buy', 'refinance', 'heloc', 'rates', 'betterPlusPlus'].map((item) => (
                        <div
                            key={item}
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}
                            className='relative'
                        >
                            <h5 className='text-lg font-medium p-3 capitalize'>{item}</h5>
                            {dropdown === item && (
                                <div className='dropdown-menu text-black bg-white shadow-lg p-3 rounded absolute z-10'>
                                    <p className='p-2 hover:bg-gray-200'>Apply now</p>
                                    <p className='p-2 hover:bg-gray-200'>Purchase rates</p>
                                    <p className='p-2 hover:bg-gray-200'>Affordability calculator</p>
                                    <p className='p-2 hover:bg-gray-200'>Mortgage calculator</p>
                                    <p className='p-2 hover:bg-gray-200'>Buy vs rent calculator</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='hidden md:block'>
                    <h1 className='text-2xl font-bold p-3'>Signin</h1>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className='md:hidden flex flex-col gap-3 bg-white text-black p-5 rounded mt-3'>
                    {['buy', 'refinance', 'heloc', 'rates', 'betterPlusPlus'].map((item) => (
                        <details key={item} className='border-b pb-2'>
                            <summary className='text-lg font-medium cursor-pointer capitalize'>{item}</summary>
                            <div className='mt-2'>
                                <p className='p-2 hover:bg-gray-200'>Apply now</p>
                                <p className='p-2 hover:bg-gray-200'>Purchase rates</p>
                                <p className='p-2 hover:bg-gray-200'>Affordability calculator</p>
                                <p className='p-2 hover:bg-gray-200'>Mortgage calculator</p>
                                <p className='p-2 hover:bg-gray-200'>Buy vs rent calculator</p>
                            </div>
                        </details>
                    ))}
                    <h1 className='text-2xl font-bold p-3'>Signin</h1>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
