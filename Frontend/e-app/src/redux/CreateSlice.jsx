// import { createSlice } from '@reduxjs/toolkit';
// const itemsSlice = createSlice({
//   name: "cart",
//   initialState: {
//     list: []
//   },
//   reducers: {
//     Add: (state, action) => {
//       const existingItem = state.list.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.price = existingItem.unitPrice * existingItem.quantity;
//       } else {
//         state.list.push({
//           ...action.payload,
//           quantity: 1,
//           unitPrice: action.payload.price,
//           price: action.payload.price,
//         });
//       }
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.list.find(item => item.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//         item.price = item.unitPrice * item.quantity;
//       }
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.list.find(item => item.id === action.payload);
//       if (item.quantity > 1) {
//         item.quantity -= 1;
//         item.price = item.unitPrice * item.quantity;
//       } 
//     },
//     Remove: (state, action) => {
//       state.list = state.list.filter(item => item.id !== action.payload);
//     },
//   },
// });


// export const {Add, Remove,incrementQuantity,decrementQuantity} = itemsSlice.actions;
// export default itemsSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
};

const maxItems = 20;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.length >= maxItems) {
        // optional: handle max item limit outside reducer (better UX)
        return;
      }
      const existingIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex) {
        // Item already in cart, increase quantity or ignore (your logic)
        // Example: increment quantity if you have quantity field
        existingIndex.price = existingIndex.unitPrice * existingIndex.quantity;
      } else {
        state.cart.push({ ...action.payload,
          quantity: 1,
          unitPrice: action.payload.price,
          price: action.payload.price,});
      }
    },

    addToWishlist: (state, action) => {
      if (state.wishlist.length >= maxItems) {
        return;
      }
      const exists = state.wishlist.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.price = item.unitPrice * item.quantity;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.price = item.unitPrice * item.quantity;
      } 
    },
  },
});

export const {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  incrementQuantity,decrementQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
