
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Nav';
import Saree from './Saree';

function SareeDetails({ dark, toggle }) {
  const { sareeId } = useParams(); 
  const [saree, setSaree] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/women/saree/${sareeId}`)
      .then(res => res.json())
      .then(data => {
        setSaree(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [sareeId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  const AddToWishlist = (item) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    setShowWishlistNotification(true);
    setTimeout(() => setShowWishlistNotification(false), 3000);
  };

  return (
    <>
   
      <Nav showprofile={false} showcontent={true} dark={dark} toggle={toggle} />
      <div
        className={`lg:pt-28 pt-32 ${
          dark ? "bg-black text-white" : "bg-white text-black "
        } transition-all duration-1000 ease-in-out`}
      >
  
        <div className="flex gap-10">
          <div className="flex gap-5 flex-wrap w-[63%] pl-5">
          {saree.imageurl.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            className="w-[450px]"
          />
        ))}
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <h1 className="text-2xl font-[sk]">{saree.name}</h1>
            <p className="text-lg text-red-500 font-[sk]">₹{saree.discountedPrice}</p>
            <p className="text-sm text-gray-500 line-through">₹{saree.price}</p>
            <p className="text-base font-[sk]">{saree.description}</p>
            <div className="mt-5">
  <label className="text-lg font-semibold">Select Size:</label>
  <select className="w-full p-2 border border-gray-300 rounded-md mt-2">
    <option value="s">Small</option>
    <option value="m">Medium</option>
    <option value="l">Large</option>
    <option value="xl">X-Large</option>
  </select>
</div>

<div className="mt-5">
  <label className="text-lg font-semibold">Select Color:</label>
  <div className="flex gap-4 mt-2">
    <label>
      <input type="radio" name="color" value="red" />
      <span className="ml-2">Red</span>
    </label>
    <label>
      <input type="radio" name="color" value="blue" />
      <span className="ml-2">Blue</span>
    </label>
    <label>
      <input type="radio" name="color" value="green" />
      <span className="ml-2">Green</span>
    </label>
  </div>
  
</div>

          </div>
          
         
     </div>
      <Saree/>
      </div>
    
      
  
    </>
  );
}

export default SareeDetails;
