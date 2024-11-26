// This is the component that displays the item on a specific card.
// List of attributes to include on the card: name, price, image, and a button to add the item to the cart, rating.

import React from 'react';
import '../styles/ShoppingItem.css';

const ShoppingItem = ({ id, name, price, image, rating }) => {
    
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
            <button>Add to Cart</button>
        </div>
    );
}

export default ShoppingItem;