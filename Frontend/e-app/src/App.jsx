import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Categories from "./components/Categories";
// import Winter from "./components/Winter";
import CategoriesCart from "./components/CategoriesCart";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Saree from "./components/section/Saree";
import CategoryDetails from "./components/section/CategoryDetails";
import SareeDetails from "./components/section/SareeDetails";
import CategoryCartDetails from "./components/section/CategoryCartDetails";
// import WinterDetails from "./components/section/WinterDetails";
import Wishlist from './components/section/Wishlist'
import Cart from "./components/section/Cart"
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage dark={dark} toggle={toggle} />} />

       <Route path="/login" element={<Login dark={dark} toggle={toggle}/> } />

        <Route path="/saree" element={<Saree dark={dark} toggle={toggle} />} />
         <Route
          path="/wishlist"
          element={<Wishlist dark={dark} toggle={toggle} />}
          
        />
        <Route
          path="/cart"
          element={<Cart dark={dark} toggle={toggle} />}
          />

        <Route
          path="/category/:categoryId"
          element={<CategoryDetails dark={dark} toggle={toggle} />}
        />
        <Route
          path="/saree/:sareeId"
          element={<SareeDetails dark={dark} toggle={toggle} />}
        />

        <Route
          path="/categoryitems/:categorycartId"
          element={<CategoryCartDetails dark={dark} toggle={toggle} />}
        />

         
      </Routes>
    </Router>
  );
}

function Mainpage({ dark, toggle }) {
  return (
    
    <div
      className={`${
        dark ? "bg-black text-white" : "bg-white text-black"
      } transition-all duration-1000 ease-in-out`}
    >
      <Nav dark={dark} toggle={toggle} showprofile={true} showcontent={true} showsearch={true} showcart={true} showdisplay={false}/>

      <Home />
      <Categories />
      {/* <Winter /> */}
      <CategoriesCart />
      
      <Footer />
    </div>
  );
}

export default App;
