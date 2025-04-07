import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../../context/GlobalState';
import Nav from '../Nav';
import Footer from '../Footer';
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagThin } from "react-icons/pi";
import {Link } from 'react-router-dom';
function Saree({ dark, toggle }) {
  const { state, dispatch } = useGlobalState();
  const [sareeimg, setSareeimg] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [showWishlistNotification, setShowWishlistNotification] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/women/saree")
      .then(res => res.json())
      .then(data => setSareeimg(data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  const AddToWishlist = (item) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
    setShowWishlistNotification(true);
    setTimeout(() => setShowWishlistNotification(false), 3000);
  };

  return (
    <>
      <Nav
        showprofile={false}
        showsearch={false}
        showcontent={true}
        dark={dark}
        toggle={toggle}
      />
      {showCartNotification && (
        <div className="fixed top-0 right-0 m-4 p-2 bg-green-500 text-white rounded">
          Item added to cart
        </div>
      )}
      {showWishlistNotification && (
        <div className="fixed top-0 right-0 m-4 p-2 bg-blue-500 text-white rounded">
          Item added to wishlist
        </div>
      )}

      <div className={`flex lg:pt-28 pt-32 flex-wrap justify-center gap-5 ${dark ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-1000 ease-in-out`}>
        {sareeimg.map((item, index) => (
          <div key={index} className="flex flex-col group">
            <div className="relative group">
              <div
                className={`absolute bottom-2 left-2 gap-2 text-sm font-[sk] px-2 flex rounded z-10 ${dark ? 'bg-slate-200 text-black' : 'bg-slate-200 text-black'}`}
              >
                {item.rating}
                <p className='text-green-700'>★</p>
              </div>
              <Link to={`/saree/${index}`}>
            <img
                loading='lazy'
                src={item.imageurl[0]}
                alt={item.name}
                className='md:h-[300px] h-[200px] object-contain cursor-pointer'
              />
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <h3 className='mt-2 text-lg font-[sk]'>{item.name}</h3>
              <div className="flex gap-2 pt-2">
                <button onClick={() => AddToWishlist(item)} className="font-[sk]">
                  <FaRegHeart />
                </button>
                <button onClick={() => addToCart(item)} className="p-2 rounded-full">
                  <PiHandbagThin />
                </button>
              </div>
            </div>
            <div className="flex gap-2 items-center ml-2">
              <p className='text-sm text-red-500 font-[sk]'>{item.discountedPrice}</p>
              <p className='text-xs text-gray-500 line-through'>{item.price}</p>
            </div>
            <p className='text-sm pl-1'>{item.description}</p>
          </div>
        ))}
         <div>
        <p className={`m-7 ${dark ? 'border border-slate-50 opacity-10' : 'border border-b-[1px]'} transition-all duration-1000 ease-in-out`}></p>
        <Footer />
      </div>
      </div>

     
    </>
  );
}

export default Saree;
