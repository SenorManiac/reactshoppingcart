// This is the component that displays the item on a specific card.
// List of attributes to include on the card: name, price, image, and a button to add the item to the cart, rating.

import React from 'react';
import '../styles/ShoppingItem.css';


const ShoppingItem = ({ id, name, price, image, rating, addToCart }) => {
    const handleAddToCart = () => {
      addToCart({ id, name, price, image });
    };
    
    return (
        <div id={`itemid${id}`} className='item'>
            <div className='heading'>
            <h2 title={name}>{name}</h2>
            <img src={image} alt={name} />
            </div>           
            <div className='rating'>
                <p>${price}</p>    
                <p> {rating.rate} ⭐ ({rating.count} reviews)</p>
               </div>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ShoppingItem;