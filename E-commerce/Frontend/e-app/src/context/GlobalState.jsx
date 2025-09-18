import React, { createContext, useReducer, useContext } from "react";

const GlobalStateContext = createContext();

const initialState = {
  cart: [],
  wishlist: [],
  sarees: [], // Add sarees to the global state
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.cart.length >= 20) {
        alert("Cart can only contain up to 20 items.");
        return state;
      }
      return { ...state, cart: [...state.cart, action.payload] };

    case "ADD_TO_WISHLIST":
      if (state.wishlist.length >= 20) {
        alert("Wishlist can only contain up to 20 items.");
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

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export default GlobalStateContext;
