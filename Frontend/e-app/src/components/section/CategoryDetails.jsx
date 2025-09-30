import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagThin } from "react-icons/pi";
import Footer from "../Footer";
import { addToCart } from "../../redux/CreateSlice";
import { addToWishlist } from "../../redux/CreateSlice";
import { useDispatch } from 'react-redux';


function CategoryDetails({ dark, toggle, showsearch, showprofile, showcontent, showcart }) {
  const { categoryId } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);
   const dispatch = useDispatch();


  useEffect(() => {
    fetch(`http://localhost:8000/api/category/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setCategoryItems(data))
      .catch((err) => console.log("Error fetching category details:", err));
  }, [categoryId]);

  

  const addToCart = (item) => {
    dispatch(addToCart(item.id));
  }

   const addToWishlist = (item) => {
    dispatch(addToWishlist(item.id));
  }
  return (
    <>
      <Nav
        showprofile={false}
        showcontent={true}
        dark={dark}
        toggle={toggle}
        showcart={true}
        showsearch={true}
      />

      <div
        className={`flex lg:pt-28 pt-32 flex-wrap justify-center gap-5 ${
          dark ? "bg-black text-white" : "bg-white text-black"
        } transition-all duration-1000 ease-in-out`}
      >
        {categoryItems.map((item, index) => {
          return (
    <div key={index} className="flex flex-col group">
      <div className="relative group">
        <div
          className={`absolute bottom-2 left-2 gap-2 text-sm font-[sk] px-2 flex rounded z-10 ${
            dark ? "bg-slate-200 text-black" : "bg-slate-200 text-black"
          }`}
        >
          {item.rating}
          <p className="text-green-700">★</p>
        </div>

        <img
          loading="lazy"
          src={item.imageUrl}
          className="md:h-[300px] h-[200px] object-contain cursor-pointer"
          alt={item.description}
        />
      </div>

      <div className="flex justify-between ml-2 mt-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm text-red-500 font-[sk]">{item.price}</p>
          <p className="text-xs text-gray-500 line-through">
            {item.discountedPrice}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => addToWishlist(item)}
            className={`font-[sk]`}
          >
            <FaRegHeart />
          </button>
          <button
            onClick={() => addToCart(item)}
            className={`p-2 rounded-full`}
          >
            <PiHandbagThin />
          </button>
        </div>
      </div>
      <p className="text-sm pl-1 w-full flex-wrap">{item.description}</p>
    </div>
  );
})}

        <div>
          <p
            className={`m-7 ${
              dark
                ? "border border-slate-50 opacity-10"
                : "border border-b-[1px]"
            } transition-all duration-1000 ease-in-out `}
          ></p>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default CategoryDetails;
