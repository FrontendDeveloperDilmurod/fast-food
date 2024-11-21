import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] <= 1) {
                const { [itemId]: removed, ...rest } = prev; // Remove the item completely if quantity is 1
                return rest;
            } else {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            }
        });
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,  // Updated method name to removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
