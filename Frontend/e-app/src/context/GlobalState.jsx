import React, { createContext, useReducer, useContext } from "react";

const GlobalStateContext = createContext();

const initialState = {
  cart: [],
  wishlist: [],
  sarees: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.length >= 20) {
        alert("Cart can only contain up to 20 items.");
        return state;
      }
      const cartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex !== -1) {
        // If item already in cart, increment quantity & update totalPrice
        const updatedCart = [...state.cart];
        const currentItem = updatedCart[cartIndex];
        const newQuantity = (currentItem.quantity || 1) + 1;
        const price = Number(item.price);
        updatedCart[cartIndex] = {
          ...currentItem,
          quantity: newQuantity,
          totalPrice: newQuantity * price,
        };
        return { ...state, cart: updatedCart };
      }
      // New item added to cart, set quantity=1 and totalPrice = price
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
            totalPrice: Number(action.payload.price) ,
          },
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            const newQuantity = (item.quantity || 1) + 1;
            const price = Number(item.price);
            return {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * price,
            };
          }
          return item;
        }),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            const newQuantity = (item.quantity || 1) - 1;
            if (newQuantity < 1) {
              return item;
            }
            const price = Number(item.price) || 1;
            return {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * price,
            };
          }
          return item;
        }),
      };

    // Wishlist cases unchanged...
    case "ADD_TO_WISHLIST":
      if (state.wishlist.length >= 20) {
        alert("Wishlist can only contain up to 20 items.");
        return state;
      }
      if (state.wishlist.find((item) => item.id === action.payload.id)) {
        alert("Item already in wishlist.");
        return state;
      }
      return { ...state, wishlist: [...state.wishlist, action.payload] };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };

    case "SET_CART":
      return { ...state, cart: action.payload };

    case "SET_WISHLIST":
      return { ...state, wishlist: action.payload };

    case "SET_SAREES":
      return { ...state, sarees: action.payload };

    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);

export default GlobalStateContext;
