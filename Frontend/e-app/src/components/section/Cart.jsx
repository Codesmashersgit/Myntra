import React from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom'

const Cart = ({ dark, toggle, showdisplay,showbag}) => {
  return (
    <>
      <Nav
        dark={dark}
        toggle={toggle}
        showdisplay={!showdisplay}
        showbag={!showbag}
      />
      <div
        className={`h-screen w-screen flex flex-col gap-3 justify-center items-center pt-7 ${
          dark ? 'bg-black text-white' : 'bg-white text-black'
        } transition-all duration-1000 ease-in-out`}
      >
        <img src='https://constant.myntassets.com/checkout/assets/img/empty-bag.webp' className='h-[150px]'/>
        <p className='font-[sk] text-center'>Hey, it feels so light!</p>
        <p className='font-light text-center'>There is nothing in your bag. Let's add some items.</p>
        <Link to="/wishlist">
        <button className='text-[#ff3f6c] border border-[#ff3f6c] font-[sk] p-2'>ADD ITEMS FROM WISHLIST</button>
        </Link>
      </div>
    </>
  )
}

export default Cart
