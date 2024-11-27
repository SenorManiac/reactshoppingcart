//This is the main page of the application where the user can see all the products and add them to the cart.

import React from 'react';
import {  useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import '../styles/Cart.css';

function Cart() {
    const { cart, removeFromCart } = useOutletContext();
    console.log(cart);
    
    useEffect(() => {
        console.log(cart);
      }, [cart]); 

   return (
    <div className='cartlist'>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.items.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <span className="item-name">{item.name}</span>
            <span className="item-price">${item.price}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>  
          </li>
        ))}
      </ul>
        <div className='total'>
        <h2>Total: ${cart.total}</h2>
        <button>Checkout</button>
        </div>
    </div>
  );
}


export default Cart;