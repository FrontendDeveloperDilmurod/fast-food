import React, { useContext } from 'react'
import { food_list } from './../assets/assets';
import { StoreContext } from './../Context/StoreContext';

function Cart() {
  const [cartItems, food_list, removeFromCart] = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cart_tems_title">
          <p>Items</p>
          <p>Title</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>
    </div>
  )
}

export default Cart