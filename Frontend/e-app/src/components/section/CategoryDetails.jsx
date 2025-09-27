import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagThin } from "react-icons/pi";
import { useGlobalState } from "../../context/GlobalState";
import Footer from "../Footer";

// Toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoryDetails({ dark, toggle, showsearch, showprofile, showcontent, showcart }) {
  const { state, dispatch } = useGlobalState();
  const { categoryId } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/category/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setCategoryItems(data))
      .catch((err) => console.log("Error fetching category details:", err));
  }, [categoryId]);

  const addToCart = (item) => {
    const alreadyInCart = state.cart.some((cartItem) => cartItem.id === item.id);
    if (alreadyInCart) {
      toast.info("Item is already in the cart.");
      return;
    }

    if (state.cart.length >= 20) {
      toast.error("Cart can only contain up to 20 items.");
      return;
    }

    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success("Item added to cart!");
  };

  const addToWishlist = (item) => {
    const alreadyInWishlist = state.wishlist.some((wishItem) => wishItem.id === item.id);
    if (alreadyInWishlist) {
      toast.info("Item is already in the wishlist.");
      
      return;
    }

    if (state.wishlist.length >= 20) {
      toast.error("Wishlist can only contain up to 20 items.");
      return;
    }

    dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    toast.success("Item added to wishlist!");
  };

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
           const isInCart = state.cart.some(cartItem => cartItem.id === item.id);
  const isInWishlist = state.wishlist.some(wishItem => wishItem.id === item.id);
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
            className={`font-[sk] ${isInWishlist ? "text-red-600" : "text-gray-500"}`}
            title={isInWishlist ? "Already in Wishlist" : "Add to Wishlist"}
          >
            <FaRegHeart />
          </button>
          <button
            onClick={() => addToCart(item)}
            className={`p-2 rounded-full ${isInCart ? "bg-[#ff3f6c] text-white" : "bg-gray-200"}`}
            title={isInCart ? "Already in Cart" : "Add to Cart"}
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

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={dark ? "dark" : "light"}
      />
    </>
  );
}

export default CategoryDetails;
