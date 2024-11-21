// FoodItem.js
import React, { useContext, useEffect } from 'react';
import { assets } from '../assets/assets';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { StoreContext } from '../Context/StoreContext';
import { toast } from 'react-toastify';

function FoodItem({ id, name, image, price, description, category }) {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    const handleTocard = () => {
        toast.success('Added to cart', {
            autoClose: 1000,
        })
    };
    const hanleRemoveCard = () => {
        toast.error('Removed from cart', {
            autoClose: 1000,
        })
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="food-item-container"
        >
            <div className="food-item border rounded-lg shadow-md hover:shadow-xl transition-all p-4 bg-white hover:bg-gray-50 hover:cursor-pointer transform hover:scale-105 duration-500 ease-in-out">
                <div className="food_item_container">
                    <img
                        className="w-full rounded-t-lg h-40 md:h-48 object-cover"
                        src={image}
                        alt={name}
                    />
                    {!cartItems[id] ? (
                        <img
                            className="mt-2 w-6 h-6 md:w-8 md:h-8 cursor-pointer"
                            onClick={() => { addToCart(id); handleTocard(); }}
                            src={assets.add_icon_white}
                            alt="Add to cart"
                        />
                    ) : (
                        <div className="flex items-center gap-2 mt-4">
                            <img
                                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
                                onClick={() => { removeFromCart(id); hanleRemoveCard(); }}
                                src={assets.remove_icon_red}
                                alt="Remove from cart"
                            />
                            <p className="text-sm font-normal">{cartItems[id]}</p>
                            <img
                                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
                                onClick={() => { addToCart(id); handleTocard(); }}
                                src={assets.add_icon_green}
                                alt="Add more"
                            />
                        </div>
                    )}
                </div>
                <div className="food_item_info p-2">
                    <div className="food_item_reting flex justify-between items-center mb-2">
                        <h3 className="text-lg md:text-xl font-normal">{name}</h3>
                        <img
                            className="w-[60px] md:w-[80px]"
                            src={assets.rating_starts}
                            alt="Rating"
                        />
                    </div>
                    <p className="text-gray-700 text-sm md:text-base mb-2">
                        {description}
                    </p>
                    <p className="font-medium text-lg md:text-xl text-orange-600">
                        ${price}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FoodItem;
