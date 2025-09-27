import React from 'react'
import Nav from '../Nav'

const Cart = ({ dark, toggle, showdisplay}) => {
  return (
    <>
      <Nav
        dark={dark}
        toggle={toggle}
        showdisplay
      />
      <div
        className={`h-screen w-screen flex flex-col justify-center items-center pt-7 ${
          dark ? 'bg-black text-white' : 'bg-white text-black'
        } transition-all duration-1000 ease-in-out`}
      >
        Cart
      </div>
    </>
  )
}

export default Cart
