import React from 'react'
import Nav from '../Nav'

const Wishlist = ({ dark,toggle,showdisplay,showbag}) => {
  return (
    <>
      <Nav
        dark={dark}
        toggle={toggle}
        showdisplay={!showdisplay}
        showbag={!showbag}
      />
      <div
        className={`h-screen w-screen flex flex-col justify-center items-center pt-7 ${
          dark ? 'bg-black text-white' : 'bg-white text-black'
        } transition-all duration-1000 ease-in-out`}
      >
        Wishlist
      </div>
    </>
  )
}

export default Wishlist;