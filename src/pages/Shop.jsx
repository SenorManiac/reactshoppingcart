//This is the main page of the application where the user can see all the products and add them to the cart.
import React, { useState, useEffect } from 'react';
import { fetchItems } from '../api/fetchItems';
import { useOutletContext } from 'react-router-dom';
import ShoppingItem from '../components/ShoppingItem'; 

function DisplayShop() {
  const [items, setItems] = useState([]);
  const { addToCart } = useOutletContext();


  useEffect(() => {
    fetchItems().then(data => setItems(data));
  }, []);

  return (
    <>
      <div>
        <h1>Shop</h1>
      </div>
      <div className="itemcontainer">
        {items.map(item => (
          <ShoppingItem
            key={item.id}
            id={item.id}
            name={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
            addToCart={addToCart}
          />
        ))}
      </div>
      <footer>
                <p>&copy; 2024 Shopping Cart. All rights reserved.</p>
            </footer>
    </>
  );
}

export default DisplayShop;