import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from './../assets/assets';
import { StoreContext } from '../Context/StoreContext';
import { IoMenu } from "react-icons/io5";

function Nav({ setShowLogin }) {
    const { cartItems } = useContext(StoreContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="bg-white shadow-md px-4 sm:px-6 md:px-10 lg:px-20 py-4 relative">
            <div className="flex justify-between items-center">
                <NavLink to="/">
                    <img src={assets.logo} alt="Logo" className="w-24 sm:w-28 md:w-32" />
                </NavLink>

                {/* Desktop menyu */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-10">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive ? 'text-orange-600 font-bold underline text-lg lg:text-xl cursor-pointer hover:underline font-sans' : 'text-gray-800 text-lg lg:text-xl cursor-pointer hover:underline font-sans'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/menu" 
                        className={({ isActive }) => 
                            isActive ? 'text-orange-600 font-bold underline text-lg lg:text-xl cursor-pointer hover:underline font-sans' : 'text-gray-800 text-lg lg:text-xl cursor-pointer hover:underline font-sans'
                        }
                    >
                        Menu
                    </NavLink>
                    <NavLink 
                        to="/mobile-app" 
                        className={({ isActive }) => 
                            isActive ? 'text-orange-600 font-bold underline text-lg lg:text-xl cursor-pointer hover:underline font-sans' : 'text-gray-800 text-lg lg:text-xl cursor-pointer hover:underline font-sans'
                        }
                    >
                        Mobile-app
                    </NavLink>
                    <NavLink 
                        to="/contact-us" 
                        className={({ isActive }) => 
                            isActive ? 'text-orange-600 font-bold underline text-lg lg:text-xl cursor-pointer hover:underline font-sans' : 'text-gray-800 text-lg lg:text-xl cursor-pointer hover:underline font-sans'
                        }
                    >
                        Contact us
                    </NavLink>
                </ul>

                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    <img
                        className="w-6 h-6 cursor-pointer hover:opacity-80"
                        src={assets.search_icon}
                        alt="Search"
                    />
                    <div className="relative">
                        <NavLink to="/cart" className="relative"> 
                            <img
                                className="w-6 h-6 cursor-pointer hover:opacity-80"
                                src={assets.basket_icon}
                                alt="Basket"
                            />
                        </NavLink>
                        {/* <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {cartItems?.length || 0}
                        </div> */}
                    </div>
                    <button onClick={() => setShowLogin(true)} className="px-3 sm:px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all">
                        Sign in
                    </button>
                    {/* Burger menyu tugmasi */}
                    <button
                        className="md:hidden flex items-center"
                        onClick={toggleMenu}
                    >
                        <span className='text-4xl text-gray-800 hover:text-gray-800 hover:scale-95 duration-500'>
                            <IoMenu />
                        </span>
                    </button>
                </div>
            </div>

            {/* Overlay to block the content when the menu is open */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Mobil menyu */}
            <div
                className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-30 mt-2`}
            >
                <ul className="flex flex-col items-center gap-4 py-4">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive ? 'text-orange-600 font-bold underline text-lg cursor-pointer hover:underline font-sans' : 'text-gray-800 text-lg cursor-pointer hover:underline font-sans'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/menu" 
                        className={({ isActive }) => 
                            isActive ? 'text-orange-600 font-bold underline text-lg cursor-pointer hover:underline font-sans' : 'text-gray-800 text-lg cursor-pointer hover:underline font-sans'
                        }
                    >
                        Menu
                    </NavLink>
                    <NavLink 
                        to="/mobile-app" 
                        className={({ isActive }) => 
                            isActive ? 'text-orange-600 font-bold underline text-lg cursor-pointer hover:underline font-sans' : 'text-gray-800 text-lg cursor-pointer hover:underline font-sans'
                        }
                    >
                        Mobile-app
                    </NavLink>
                    <NavLink 
                        to="/contact-us" 
                        className={({ isActive }) => 
                            isActive ? 'text-orange-600 font-bold underline text-lg cursor-pointer hover:underline font-sans' : 'text-gray-800 text-lg cursor-pointer hover:underline font-sans'
                        }
                    >
                        Contact us
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
