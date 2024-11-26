import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import DisplayShop from './pages/Shop';
// import './App.css'
import NavigationBar from './components/NavigationBar'

function App() {
  const [cart, setCart] = useState({ total: 0, items: [] });

  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items, item];
      const updatedTotal = prevCart.total + item.price;
      return { total: updatedTotal, items: updatedItems };
    });
  };

  const cartItemCount = cart.items.length;

  return (
    <>
      <NavigationBar cartItemCount={cartItemCount} />
      <Outlet context={{addToCart}}/>

      
    </>
  )
}

export default App
