import React, { useEffect } from 'react';
import { menu_list } from '../assets/assets';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './All.css';

function ExploreMenu({ category, setCategory }) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div
            id="explore_menu"
            data-aos="fade-up"
            data-aos-duration="1000"
            className="px-4 "
        >
            <h1 className="text-3xl font-semibold text-gray-800 text-center md:text-left">
                Explore our menu
            </h1>
            <p className="text-xl font-normal max-w-[90%] md:max-w-[70%] lg:max-w-[60%] pt-5 text-gray-800 text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur omnis quam praesentium nam minus at deserunt unde distinctio quasi.
            </p>
            <div className="flex flex-wrap justify-center md:justify-between gap-10 pt-12 pb-7">
                {menu_list.map((item, index) => (
                    <div
                        key={index}
                        onClick={() =>
                            setCategory((prev) =>
                                prev === item.menu_name ? 'All' : item.menu_name
                            )
                        }
                        className=" flex flex-col items-center gap-2 cursor-pointer"
                    >
                        <img
                            src={item.menu_image}
                            alt={item.menu_name}
                            className={`w-24 h-24 object-cover transition-transform transform ${
                                category === item.menu_name
                                    ? ' activeee scale-110 border-4 rounded border-orange-500'
                                    : ' activeee hover:scale-105 hover:shadow-xl'
                            }`}
                        />
                        <p className="text-center text-gray-400 font-bold text-sm md:text-base">
                            {item.menu_name}
                        </p>
                    </div>
                ))}
            </div>
            <hr className="w-full h-1 bg-gray-400" />
        </div>
    );
}

export default ExploreMenu;
