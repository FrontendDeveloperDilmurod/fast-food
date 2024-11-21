import React, { useContext } from 'react';
import './All.css';
import { StoreContext } from '../Context/StoreContext';
import FoodItem from './FoodItem';

function FoodDisplay({ category }) {
    const { food_list } = useContext(StoreContext);

    return (
        <div id="food-display" className="mt-12 mb-12 px-4 lg:px-8">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                Top dishes near you
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {food_list.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;
