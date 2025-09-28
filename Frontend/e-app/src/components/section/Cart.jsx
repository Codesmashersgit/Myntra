
import React from "react";
import Nav from "../Nav";
import { useGlobalState } from "../../context/GlobalState";

const Cart = ({ dark, toggle, showdisplay, showbag }) => {
  const { state, dispatch } = useGlobalState();

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  if (state.cart.length === 0) {
    return (
      <>
        <Nav dark={dark} toggle={toggle} showdisplay={!showdisplay} showbag={!showbag} />
        <div
          className={`h-screen w-screen flex flex-col gap-3 justify-center items-center pt-7 ${
            dark ? "bg-black text-white" : "bg-white text-black"
          } transition-all duration-1000 ease-in-out`}
        >
          <img
            src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
            className="h-[150px]"
            alt="Empty Cart"
          />
          <p className="font-[sk] text-center">Hey, it feels so light!</p>
          <p className="font-light text-center">
            There is nothing in your bag. Let's add some items.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav dark={dark} toggle={toggle} showdisplay={!showdisplay} showbag={!showbag} />
      <div
        className={`min-h-screen w-full pt-28 flex flex-wrap gap-6 justify-center ${
          dark ? "bg-black text-white" : "bg-white text-black"
        } transition-all duration-1000 ease-in-out`}
      >
        {state.cart.map((item) => {
          const price =Number(item.price) || 0;
          const totalPrice = item.quantity* price;

          return (
            <div
              key={item.id}
              className={`p-2 w-[200px] h-[280px] border rounded-md flex flex-col items-center gap-2 ${
                dark ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.description}
                className="w-full h-[150px] object-contain"
                loading="lazy"
              />
              <p className="text-sm font-[sk] text-center">{item.description}</p>
              <p className="text-red-600 font-semibold">₹{item.price}</p>

              <div className="flex items-center justify-between w-full px-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="w-8 h-8 border rounded-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity || 1}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="w-8 h-8 border rounded-md flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>

              <p className="font-semibold mt-2">Total: ₹{totalPrice.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
