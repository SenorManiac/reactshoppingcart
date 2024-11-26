import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import NavigationBar from './components/NavigationBar'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartItemCount = cart.length;

  return (
    <>
      <div>
        <NavigationBar cartItemCount={cartItemCount}/>
        </div>
      <Outlet />

      
    </>
  )
}

export default App
