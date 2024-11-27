//This is the main page of the application where

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { fetchItems } from '../api/fetchItems';


function Home() {
    const [items, setItems] = useState([]);


useEffect(() => {
    fetchItems().then(data => setItems(data));
  }, []);


    return (
        <div>
            <header>
                <h1>Welcome to Our Shopping Cart</h1>
                <p>Discover the best products at unbeatable prices!</p>
            </header>
            <section>
                <h2>Featured Products</h2>
                <div className="featured-products">
                    {items.map(item => (<img src={item.image} alt={item.title} key={item.id} />))}
                </div>
            </section>
            <section>
                <h2>Categories</h2>
                <div className="categories">
                    <Link to="/category/electronics">Electronics</Link>
                    <Link to="/category/fashion">Fashion</Link>
                    <Link to="/category/home-garden">Home & Garden</Link>
                    <Link to="/category/sports">Sports</Link>
                </div>
            </section>
          </div>
    );
};

export default Home;