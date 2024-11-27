import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
// import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/footer'

function App() {
  const [cart, setCart] = useState({ total: 0, items: [] });

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items, item];
      const updatedTotal = prevCart.total + item.price;
      return { total: updatedTotal, items: updatedItems };
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.items[index];
      const updatedItems = prevCart.items.filter((_, i) => i !== index);
      const updatedTotal = prevCart.total - itemToRemove.price;
      return { total: updatedTotal, items: updatedItems };
    });
  };

  
  useEffect(() => {
    console.log(cart);
  }, [cart]); 

  const cartItemCount = cart.items.length;

  return (
    <>
      <NavigationBar cartItemCount={cartItemCount} />
      <Outlet context={{addToCart,removeFromCart, cart}}/>
      <Footer />


      
    </>
  )
}

export default App
