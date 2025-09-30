// import React, { useState, useEffect } from "react";
// // import { useGlobalState } from "../../context/GlobalState";
// import Nav from "../Nav";
// import Footer from "../Footer";
// import { FaRegHeart } from "react-icons/fa";
// import { PiHandbagThin } from "react-icons/pi";
// import { Link } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Saree({ dark, toggle }) {
//   // const { state, dispatch } = useGlobalState();
//   const [sareeimg, setSareeimg] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/api/women/saree")
//       .then((res) => res.json())
//       .then((data) => setSareeimg(data))
//       .catch((err) => console.log(err));
//   }, []);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = "smooth";
//     return () => {
//       document.documentElement.style.scrollBehavior = "auto";
//     };
//   }, []);

//   const addToCart = (item) => {
//     if (state.cart.length >= 20) {
//       toast.error("Cart can only contain up to 20 items.");
//       return;
//     }
//     dispatch({ type: "ADD_TO_CART", payload: item });
//     toast.success("Item added to cart");
//   };

//   const addToWishlist = (item) => {
//     if (state.wishlist.length >= 20) {
//       toast.error("Wishlist can only contain up to 20 items.");
//       return;
//     }
//     dispatch({ type: "ADD_TO_WISHLIST", payload: item });
//     toast.success("Item added to wishlist");
//   };

//   return (
//     <>
//       <Nav
//         showprofile={false}
//         showsearch={false}
//         showcontent={true}
//         dark={dark}
//         toggle={toggle}
//       />

//       <div
//         className={`flex lg:pt-28 pt-32 flex-wrap justify-center gap-5 ${
//           dark ? "bg-black text-white" : "bg-white text-black"
//         } transition-all duration-1000 ease-in-out`}
//       >
//         {sareeimg.map((item, index) => (
//           <div key={index} className="flex flex-col group">
//             <div className="relative group">
//               <div
//                 className={`absolute bottom-2 left-2 gap-2 text-sm font-[sk] px-2 flex rounded z-10 ${
//                   dark ? "bg-slate-200 text-black" : "bg-slate-200 text-black"
//                 }`}
//               >
//                 {item.rating}
//                 <p className="text-green-700">★</p>
//               </div>
//               <Link to={`/saree/${index}`}>
//                 <img
//                   loading="lazy"
//                   src={item.imageurl[0]}
//                   alt={item.name}
//                   className="md:h-[300px] h-[200px] object-contain cursor-pointer"
//                 />
//               </Link>
//             </div>
//             <div className="flex justify-between items-center">
//               <h3 className="mt-2 text-lg font-[sk]">{item.name}</h3>
//               <div className="flex md:gap-2 pt-2">
//                 <button onClick={() => addToWishlist(item)} className="font-[sk]">
//                   <FaRegHeart />
//                 </button>
//                 <button onClick={() => addToCart(item)} className="p-2 rounded-full">
//                   <PiHandbagThin />
//                 </button>
//               </div>
//             </div>
//             <div className="flex gap-2 items-center ml-2">
//               <p className="text-sm text-red-500 font-[sk]">{item.discountedPrice}</p>
//               <p className="text-xs text-gray-500 line-through">{item.price}</p>
//             </div>
//             <p className="text-sm pl-1">{item.description}</p>
//           </div>
//         ))}
//         <div>
//           <p
//             className={`m-7 ${
//               dark ? "border border-slate-50 opacity-10" : "border border-b-[1px]"
//             } transition-all duration-1000 ease-in-out`}
//           ></p>
//           <Footer />
//         </div>
//       </div>

//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         theme={dark ? "dark" : "light"}
//         pauseOnHover
//         draggable
//       />
//     </>
//   );
// }

// export default Saree;


import React, { useState, useEffect } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "../../redux/CreateSlice";

function Saree({ dark, toggle }) {
  const [sareeimg, setSareeimg] = useState([]);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.cart.wishlist);

  useEffect(() => {
    fetch("http://localhost:8000/api/women/saree")
      .then((res) => res.json())
      .then((data) => setSareeimg(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const handleAddToCart = (item) => {
    if (cart.length >= 20) {
      toast.error("Cart can only contain up to 20 items.");
      return;
    }
    dispatch(addToCart(item));
    toast.success("Item added to cart");
  };

  const handleAddToWishlist = (item) => {
    if (wishlist.length >= 20) {
      toast.error("Wishlist can only contain up to 20 items.");
      return;
    }
    dispatch(addToWishlist(item));
    toast.success("Item added to wishlist");
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

      <div
        className={`flex lg:pt-28 pt-32 flex-wrap justify-center gap-5 ${
          dark ? "bg-black text-white" : "bg-white text-black"
        } transition-all duration-1000 ease-in-out`}
      >
        {sareeimg.map((item, index) => (
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
              <Link to={`/saree/${index}`}>
                <img
                  loading="lazy"
                  src={item.imageurl[0]}
                  alt={item.name}
                  className="md:h-[300px] h-[200px] object-contain cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="mt-2 text-lg font-[sk]">{item.name}</h3>
              <div className="flex md:gap-2 pt-2">
                <button
                  onClick={() => handleAddToWishlist(item)}
                  className="font-[sk]"
                >
                  <FaRegHeart />
                </button>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="p-2 rounded-full"
                >
                  <PiHandbagThin />
                </button>
              </div>
            </div>
            <div className="flex gap-2 items-center ml-2">
              <p className="text-sm text-red-500 font-[sk]">
                {item.discountedPrice}
              </p>
              <p className="text-xs text-gray-500 line-through">{item.price}</p>
            </div>
            <p className="text-sm pl-1">{item.description}</p>
          </div>
        ))}
        <div>
          <p
            className={`m-7 ${
              dark ? "border border-slate-50 opacity-10" : "border border-b-[1px]"
            } transition-all duration-1000 ease-in-out`}
          ></p>
          <Footer />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme={dark ? "dark" : "light"}
        pauseOnHover
        draggable
      />
    </>
  );
}

export default Saree;
