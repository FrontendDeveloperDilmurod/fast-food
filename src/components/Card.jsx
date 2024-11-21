import React, { useContext } from 'react';
import { StoreContext } from './../Context/StoreContext';

function Card() {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <div className="grid grid-cols-6 gap-4 p-4 border-b text-center sm:grid-cols-12 md:grid-cols-6">
                    <p className="font-semibold col-span-2 sm:col-span-1">Items</p>
                    <p className="font-semibold col-span-2 sm:col-span-1">Title</p>
                    <p className="font-semibold col-span-2 sm:col-span-1">Quantity</p>
                    <p className="font-semibold col-span-2 sm:col-span-1">Price</p>
                    <p className="font-semibold col-span-2 sm:col-span-1">Total</p>
                    <p className="font-semibold col-span-2 sm:col-span-1">Remove</p>
                </div>
                <hr className="border-gray-300" />
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={item._id} className="grid grid-cols-6 gap-4 p-4 border-b items-center text-center sm:grid-cols-12 md:grid-cols-6">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md col-span-2 sm:col-span-1 mx-auto" />
                                    <p className="text-gray-800 col-span-2 sm:col-span-1">{item.name}</p>
                                    <p className="text-gray-800 col-span-2 sm:col-span-1">{cartItems[item._id]}</p>
                                    <p className="text-gray-800 col-span-2 sm:col-span-1">${item.price}</p>
                                    <p className="text-gray-800 col-span-2 sm:col-span-1">${cartItems[item._id] * item.price}</p>
                                    <button
                                        className="text-red-500 hover:text-red-700 col-span-2 sm:col-span-1"
                                        onClick={() => removeFromCart(item._id)}  // Call the updated function
                                    >
                                        X
                                    </button>
                                </div>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Card;
