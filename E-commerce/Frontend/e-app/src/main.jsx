
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { GlobalStateProvider, useGlobalState } from './context/GlobalState';

const Root = () => {
  const { state, dispatch } = useGlobalState();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Load saved theme from localStorage on component mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDark(savedTheme === 'dark'); // Set the state based on saved theme ('dark' or 'light')
    } else {
      // Default to light theme if no theme is saved
      setDark(false); // false means light theme
    }

    // Load cart and wishlist from localStorage
    try {
      const savedCart = JSON.parse(localStorage.getItem('cart'));
      if (savedCart) {
        dispatch({ type: 'SET_CART', payload: savedCart });
      }

      const savedWishlist = JSON.parse(localStorage.getItem('wishlist'));
      if (savedWishlist) {
        dispatch({ type: 'SET_WISHLIST', payload: savedWishlist });
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
    }
  }, [dispatch]); // Ensure dispatch is in dependencies

  // Toggle theme and save it in localStorage
  const toggleTheme = () => {
    const newTheme = !dark; // Flip the current theme (dark -> light or light -> dark)
    setDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light'); // Save the new theme in localStorage
  };

  // Sync cart with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  // Sync wishlist with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  return <App dark={dark} toggle={toggleTheme} />;
};

document.documentElement.style.scrollBehavior = 'smooth'; // Smooth scrolling for the page
createRoot(document.getElementById('root')).render(
 
    <GlobalStateProvider>
      <Root />
    </GlobalStateProvider>
 
);
