// import React, { useState, useEffect } from "react";
// import { data, useParams } from "react-router-dom";
// import Nav from "../Nav";
// import { FaRegHeart } from "react-icons/fa";
// import { PiHandbagThin } from "react-icons/pi";
// import { useGlobalState } from "../../context/GlobalState";
// import Footer from "../Footer";

// function CategoryCartDetails({ dark, toggle }) {
//   const { state, dispatch } = useGlobalState();
//   const { categorycartId } = useParams();
//   const [categoryItems, setCategoryItems] = useState([]);
//   const [showCartNotification, setShowCartNotification] = useState(false);
//   const [showWishlistNotification, setShowWishlistNotification] =
//     useState(false);

//   useEffect(() => {
//     fetch(`http://localhost:8000/api/categoryitems/${categorycartId}`)
//       .then((res) => res.json())
//       .then((data) => setCategoryItems(data))
//       .catch((err) => console.log("Error fetching category details:", err));
//   }, [categorycartId]);

//   const addToCart = (item) => {
//     dispatch({ type: "ADD_TO_CART", payload: item });
//     setShowCartNotification(true);
//     setTimeout(() => setShowCartNotification(false), 3000);
//   };

//   const AddToWishlist = (item) => {
//     dispatch({ type: "ADD_TO_WISHLIST", payload: item });
//     setShowWishlistNotification(true);
//     setTimeout(() => setShowWishlistNotification(false), 3000);
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
//       {/* {showCartNotification && (
//         <div className="fixed top-0 right-0 m-4 p-2 bg-green-500 text-white rounded">
//           Item added to cart
//         </div>
//       )}
//       {showWishlistNotification && (
//         <div className="fixed top-0 right-0 m-4 p-2 bg-blue-500 text-white rounded">
//           Item added to wishlist
//         </div>
//       )} */}

//       <div
//         className={`flex lg:pt-28 pt-32 flex-wrap justify-center gap-5 ${
//           dark ? "bg-black text-white" : "bg-white text-black "
//         } transition-all duration-1000 ease-in-out`}
//       >
      
    
      
      
//         {categoryItems.map((item, index) => (
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
//               <img
//                 loading="lazy"
//                 src={item.imageUrl[0]}
//                 className="md:h-[300px] h-[200px] object-contain cursor-pointer"
//               />
//             </div>

//             <div className="flex justify-between ml-2 mt-2">
//               <div className="flex gap-2 items-center">
//                 <p className="text-sm text-red-500 font-[sk]">
//                   {item.price}
//                 </p>
//                 <p className="text-xs text-gray-500 line-through">
//                   {item.discountedPrice}
//                 </p>
//               </div>
//               <div className="flex gap-2  ">
//                 <button
//                   onClick={() => AddToWishlist(item)}
//                   className="font-[sk]"
//                 >
//                   <FaRegHeart />
//                 </button>
//                 <button
//                   onClick={() => addToCart(item)}
//                   className="p-2 rounded-full"
//                 >
//                   <PiHandbagThin />
//                 </button>
//               </div>
//             </div>
//             <p className="text-sm pl-1 w-full flex-wrap">{item.description}</p>
            
//           </div>
//         ))}
//         <div>
//           <p
//             className={` m-7 ${
//               dark
//                 ? "border border-slate-50 opacity-10"
//                 : "border border-b-[1px]"
//             } transition-all duration-1000 ease-in-out `}
//           ></p>
//           <Footer />
//         </div>
//       </div>

//     </>
//   );
// }

// export default CategoryCartDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import { FaRegHeart } from "react-icons/fa";
import { PiHandbagThin } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CreateSlice";
import { addToWishlist } from "../../redux/CreateSlice";


function CategoryCartDetails({ dark, toggle }) {
const dispatch = useDispatch();
  const { categorycartId } = useParams();

  const [categoryItems, setCategoryItems] = useState([]);
 
  useEffect(() => {
    fetch(`http://localhost:8000/api/categoryitems/${categorycartId}`)
      .then((res) => res.json())
      .then((data) => setCategoryItems(data))
      .catch((err) => console.log("Error fetching category details:", err));
  }, [categorycartId]);

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
        showsearch={false}
        showcontent={true}
        dark={dark}
        toggle={toggle}
      />

      

      <div
        className={`flex lg:pt-28 pt-32 flex-wrap justify-center gap-5 px-2 ${
          dark ? "bg-black text-white" : "bg-white text-black"
        } transition-all duration-1000 ease-in-out`}
      >
        {categoryItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No items available in this category.
          </p>
        ) : (
          categoryItems.map((item) => (
            <div key={item.id} className="flex flex-col">
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
                  src={item.imageurl?.[0] || ""}
                  alt={item.description}
                  className="md:h-[300px] h-[200px] object-contain cursor-pointer"
                />
              </div>

              <div className="flex ml-2 mt-2 justify-between">
                <div className="flex gap-2 items-center">
                  <p className="text-sm text-red-500 font-[sk]">
                    ₹{item.price}
                  </p>
                  <p className="text-xs text-gray-500 line-through">
                    ₹{item.discountedPrice}
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <button
                    onClick={() => addToWishlist(item)}
                    className="hover:text-red-500 transition-colors"
                  >
                    <FaRegHeart />
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    className="hover:text-green-600 transition-colors"
                  >
                    <PiHandbagThin />
                  </button>
                </div>
              </div>

              <p className="text-sm pl-1 mt-1">{item.description}</p>
            </div>
          ))
        )}
        <div>
        <p
          className={`m-7 ${
            dark ? "border border-slate-50 opacity-10" : "border border-b-[1px]"
          } transition-all duration-1000 ease-in-out`}
        ></p>
        <Footer />
      </div>
      </div>

      
    </>
  );
}

export default CategoryCartDetails;
