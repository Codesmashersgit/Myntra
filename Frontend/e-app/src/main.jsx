import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider, useSelector } from "react-redux"; 
import store from "./redux/Store.jsx";

const Root = () => {
  const [dark, setDark] = useState(false);

  const CartWishlistSync = () => {
    const cart = useSelector(state => state.cart);

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return null;
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDark(savedTheme === "dark");
    } else {
      setDark(false);
    }

  }, []);

  // Toggle theme and save in localStorage
  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <>
      <CartWishlistSync />
      <App dark={dark} toggle={toggleTheme} />
    </>
  );
};

document.documentElement.style.scrollBehavior = "smooth";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Root />
  </Provider>
);
