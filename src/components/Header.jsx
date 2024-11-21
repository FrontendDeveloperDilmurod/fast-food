import React, { useEffect } from 'react';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS faylini import qilish
import { NavLink } from 'react-router-dom';

function Header() {
    useEffect(() => {
        AOS.init(); // AOS animatsiyasini ishga tushirish
    }, []);

    return (
        <div className="header">
            <div className="header_content" data-aos="zoom-in" data-aos-duration='1000'>
                <h2 className="font-semibold text-white  leading-tight sm:text-4xl md:text-5xl">
                    Order your <br /> favourite food here
                </h2>
                <p className="text-white text-xl sm:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi cumque, excepturi praesentium quae eius hic consequuntur id provident! Cum.
                </p>
                <NavLink to={'/menu'}><button className="py-2 px-7 bg-white text-black font-semibold rounded-full shadow-md hover:bg-white focus:outline-none focus:ring focus:ring-white focus:ring-opacity-75">
                    View Menu
                </button></NavLink>
            </div>
        </div>
    );
}

export default Header;
