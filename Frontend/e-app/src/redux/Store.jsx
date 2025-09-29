// import React, { createContext, useReducer, useContext } from "react";

// const GlobalStateContext = createContext();

// const initialState = {
//   cart: [],
//   wishlist: [],
//   sarees: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       if (state.cart.length >= 20) {
//         alert("Cart can only contain up to 20 items.");
//         return state;
//       }
//       const cartIndex = state.cart.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       if (cartIndex !== -1) {
//         const updatedCart = [...state.cart];
//         const currentItem = updatedCart[cartIndex];
//         const newQuantity = (currentItem.quantity || 1) + 1;
//         const price = Number(currentItem.price) || 0;
//         updatedCart[cartIndex] = {
//           ...currentItem,
//           quantity: newQuantity,
//           totalPrice: newQuantity * price,
//         };
//         return { ...state, cart: updatedCart };
//       }
//       return {
//         ...state,
//         cart: [
//           ...state.cart,
//           {
//             ...action.payload,
//             quantity: 1,
//             totalPrice: Number(action.payload.price) || 0,
//           },
//         ],
//       };

//     case "REMOVE_FROM_CART":
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload),
//       };

//     case "INCREMENT_QUANTITY":
//       return {
//         ...state,
//         cart: state.cart.map((item) => {
//           if (item.id === action.payload) {
//             const newQuantity = (item.quantity || 1) + 1;
//             const price = Number(item.price) || 0;
//             return {
//               ...item,
//               quantity: newQuantity,
//               totalPrice: newQuantity * price,
//             };
//           }
//           return item;
//         }),
//       };

//     case "DECREMENT_QUANTITY":
//       return {
//         ...state,
//         cart: state.cart.map((item) => {
//           if (item.id === action.payload) {
//             const newQuantity = (item.quantity || 1) - 1;
//             if (newQuantity < 1) {
//               return item;
//             }
//             const price = Number(item.price) || 0;
//             return {
//               ...item,
//               quantity: newQuantity,
//               totalPrice: newQuantity * price,
//             };
//           }
//           return item;
//         }),
//       };

//     case "ADD_TO_WISHLIST":
//       if (state.wishlist.length >= 20) {
//         alert("Wishlist can only contain up to 20 items.");
//         return state;
//       }
//       if (state.wishlist.find((item) => item.id === action.payload.id)) {
//         alert("Item already in wishlist.");
//         return state;
//       }
//       return { ...state, wishlist: [...state.wishlist, action.payload] };

//     case "REMOVE_FROM_WISHLIST":
//       return {
//         ...state,
//         wishlist: state.wishlist.filter((item) => item.id !== action.payload),
//       };

//     case "SET_CART":
//       return { ...state, cart: action.payload };

//     case "SET_WISHLIST":
//       return { ...state, wishlist: action.payload };

//     case "SET_SAREES":
//       return { ...state, sarees: action.payload };

//     default:
//       return state;
//   }
// };

// export const GlobalStateProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <GlobalStateContext.Provider value={{ state, dispatch }}>
//       {children}
//     </GlobalStateContext.Provider>
//   );
// };

// export const useGlobalState = () => useContext(GlobalStateContext);

// export default GlobalStateContext;



import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './CreateSlice'; 

const store = configureStore({
  reducer: {
    cart: itemsReducer, 
  },
});

export default store;
