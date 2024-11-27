// This is the Navigation Bar of the application where the user can navigate to the different pages of the application.
// There are 2 pages in the application: Home and Shop, and can be found in ../pages/Home.jsx and ../pages/Shop.jsx respectively.
// There should also be a shopping cart icon that shows the number of items in the cart.

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import Cart from '../assets/cart.svg';
function NavigationBar({ cartItemCount }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
        <span><img src={Cart}/>{cartItemCount}</span>
      </Link>
    </nav>
  );
}

export default NavigationBar;