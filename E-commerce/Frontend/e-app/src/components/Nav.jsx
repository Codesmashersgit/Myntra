import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import pic from "../assets/modqr90a.png";
import { CiSearch, CiDark, CiLight } from "react-icons/ci";
import { PiHandbagThin, PiHeartLight } from "react-icons/pi";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import { PiUserCircleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import Men from "../Submenu/Men";
import Women from "../Submenu/Women";
import Kids from "../Submenu/Kids";
import HomeLiving from "../Submenu/HomeLiving";
import Beauty from "../Submenu/Beauty";
import { Topwear } from "../Data/Data";

function Nav({ dark, toggle, showprofile, showcontent }) {
  const { state } = useGlobalState();
  const [open, setOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    men: false,
    women: false,
    kids: false,
    homeLiving: false,
    beauty: false,
    studio: false,
    topwear: false,
  });

  const togglemenu = () => {
    setOpen(!open);
  };

  const hidesidebar = () => {
    setOpen(false);
  };
  const toggleDropdown = (section) => {
    setOpenDropdowns((prevstate) => ({
      ...prevstate,
      [section]: !prevstate[section],
    }));
  };

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-700 xl:hidden"
        onClick={hidesidebar}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
        }}
      ></div>
      <nav
        className={`w-full transition-all duration-1000 ease-in-out z-20 fixed top-0 shadow-lg md:h-[80px] h-[70px] md:p-4 p-5 flex md:justify-around items-center justify-between ${
          dark ? "bg-black text-white" : "bg-white text-black "
        }`}
      >
        <img
          src={pic}
          alt="Brand Logo"
          className="md:h-[40px] h-[30px] w-auto md:px-7"
        />
        <div className="lg:flex gap-11 hidden">
          <div className="flex gap-11">
            <li className="list-none group relative">
              <Link to="">
                <a className="text-[15px] py-9 cursor-pointer hover:border-b-[3px] border-[#ff3f6c] transition-all duration-100 ease-in-out hover:pb-6 uppercase font-[sk]">
                  Men
                </a>
              </Link>

              {showcontent && (
                <div
                  className={`absolute p-6 -left-10 top-[28px] px-1 gap-28 transition-opacity opacity-0 group-hover:opacity-100 duration-700 ease-in-out `}
                >
                  <div
                    className={`h-[500px] w-[1000px] hidden px-10 py-4 group-hover:block flex-wrap ${
                      dark ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <Men />
                  </div>
                </div>
              )}
            </li>
            <li className="list-none group relative">
              <a className="text-[15px] py-9 cursor-pointer hover:border-b-[3px] border-pink-400 transition-all duration-100 ease-in-out hover:pb-6 uppercase font-[sk]">
                Women
              </a>
              {showcontent && (
                <div
                  className={`absolute p-6 -left-28 top-[28px] px-1 gap-28 transition-opacity opacity-0 group-hover:opacity-100 duration-700 ease-in-out  `}
                >
                  <div
                    className={`h-[500px] w-[1000px] hidden group-hover:block p-6 ${
                      dark ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <Women />
                  </div>
                </div>
              )}
            </li>
            <li className="list-none group relative">
              <a className="text-[15px] py-9 cursor-pointer hover:border-b-[3px] border-[#e67e22] transition-all duration-100 ease-in-out hover:pb-6 uppercase font-[sk]">
                Kids
              </a>
              {showcontent && (
                <div
                  className={`absolute p-6 -left-52 top-[28px] px-1 gap-28 transition-opacity opacity-0 group-hover:opacity-100 duration-700 ease-in-out  `}
                >
                  <div
                    className={`h-full w-[1000px] hidden group-hover:block p-6  ${
                      dark ? "bg-black text-white " : "bg-white text-black"
                    }`}
                  >
                    <Kids />
                  </div>
                </div>
              )}
            </li>
            <li className="list-none group relative">
              <a className="text-[15px] py-9 cursor-pointer hover:border-b-[3px] border-[#f1c40f] transition-all duration-100 ease-in-out hover:pb-6 uppercase font-[sk]">
                Home & Living
              </a>
              {showcontent && (
                <div
                  className={`absolute p-6 -left-72 top-[28px] px-1 gap-28 transition-opacity opacity-0 group-hover:opacity-100 duration-700 ease-in-out `}
                >
                  <div
                    className={`h-full w-[1000px] hidden  group-hover:block p-6  ${
                      dark ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <HomeLiving />
                  </div>
                </div>
              )}
            </li>
            <li className="list-none group relative">
              <a className="text-[15px] py-9 cursor-pointer hover:border-b-[3px] hover:border-[#9b59b6] transition-all duration-100 ease-in-out hover:pb-6 uppercase font-[sk]">
                Beauty
              </a>
              {showcontent && (
                <div
                  className={`absolute block p-6 -left-[430px] top-[28px] px-1 gap-28 transition-opacity opacity-0 group-hover:opacity-100 duration-700 ease-in-out `}
                >
                  <div
                    className={`h-[500px] w-[1000px] hidden group-hover:block p-6  ${
                      dark ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <Beauty />
                  </div>
                </div>
              )}
            </li>

            <li className="list-none group relative">
              <a
                className="text-[15px] py-9 cursor-pointer hover:border-b-[3px] hover:border-[#3498db] transition-all duration-100 ease-in-out hover:pb-6 uppercase font-[sk] group-hover:opacity-100"
                href="#"
              >
                Studio
                <sup className="text-[12px] text-[#ff3f6c]">New</sup>
              </a>
              {showcontent && (
                <div
                  className={`absolute p-6 -left-60 top-[28px] px-1 gap-28 transition-opacity opacity-0 group-hover:opacity-100 duration-700 ease-in-out`}
                >
                  <div
                    className={` w-[500px] hidden group-hover:block p-1 ${
                      dark ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <div className="justify-center items-center flex flex-col p-4">
                      <img
                        src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg"
                        className="w-[103px] "
                      />
                      <span className="text-sm m-4">
                        Your daily inspiration for everything fashion
                      </span>
                      <img
                        src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
                        className=""
                      />

                      <button className="mt-5 border-[1px] px-4 py-2 flex items-center gap-2 font-[sk]">
                        Explore <IoIosArrowForward />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </div>
        </div>

        <div className="md:flex hidden relative">
          <CiSearch className="absolute top-3 left-3 text-black cursor-pointer transition-transform transform hover:scale-125" />
          <input
            type="search"
            placeholder="Search for Products,Brands and more..."
            spellCheck="false"
            className={`outline-none shadow-lg rounded-md w-[500px] sm:pl-14 md:pl-12 pr-3 py-2
            
            }`}
          />
        </div>

        <div className="flex md:gap-7 gap-4 items-center">
          <div className="flex flex-col group relative">
            {showprofile && (
              <a className=" py-8">
                <PiUserCircleThin className="md:text-[23px] text-[20px] cursor-pointer lg:flex hidden" />
              </a>
            )}
            <div
              className={`absolute block p-6 -left-40 top-[58.5px] px-1 gap-28 transition-opacity opacity-0 group-hover:opacity-100 duration-1000 ease-in-out `}
            >
              <div
                className={` w-[300px] hidden group-hover:block p-6  ${
                  dark ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <p className="font-[sk] text-[17px]">Welcome</p>
                <p className="font-sans text-[13px]">
                  To access account and manage orders
                </p>
                <Link to="/Login">
                  <button className="border-[0.5px] border-slate-400 mt-4 p-3 text-[#ff3f6c] uppercase font-[sk] hover:border hover:border-red-400">
                    Login/Signup
                  </button>
                </Link>
                <div className="border-b-[1px] border-gray-300 w-full opacity-35 mt-8">
                  {" "}
                </div>
                <div className="mt-5 text-[14px]">
                  <a
                    href=""
                    className="block hover:text-[#ff3f6c] cursor-pointer mb-2"
                  >
                    Orders
                  </a>
                  <a
                    href=""
                    className="block hover:text-[#ff3f6c] cursor-pointer mb-2"
                  >
                    Wishlist
                  </a>
                  <a
                    href=""
                    className="block hover:text-[#ff3f6c] cursor-pointer mb-2"
                  >
                    Gift Cards
                  </a>
                  <a
                    href=""
                    className="block hover:text-[#ff3f6c] cursor-pointer mb-2"
                  >
                    Contact Us
                  </a>
                  <a
                    href=""
                    className="block hover:text-[#ff3f6c] cursor-pointer"
                  >
                    Myntra Inside{" "}
                    <sup className="text-[#ff3f6c] font-[sk] uppercase">
                      New
                    </sup>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-col items-center cursor-pointer hidden group relative">
            <PiHeartLight className="md:text-[20.3px]" />
            <p className="absolute left-0 hidden font-[sk] -top-7 px-1 bg-black rounded-md text-white md:group-hover:block text-sm transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              Wishlist
            </p>
            {state.wishlist.length > 0 && (
              <span className="absolute -top-1 left-3 bg-red-500 text-white rounded-full text-[10px] w-4 h-3 flex items-center justify-center">
                {state.wishlist.length}
              </span>
            )}
          </div>

          <div className="lg:flex flex-col items-center cursor-pointer hidden group relative">
            <PiHandbagThin className="text-[20.3px]" />
            <p className="absolute left-0 hidden font-[sk] -top-7 px-1 bg-black rounded-md text-white md:group-hover:block text-sm transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              Cart
            </p>
            {state.cart.length > 0 && (
              <span className="absolute -top-1 left-3 bg-red-500 text-white rounded-full text-[10px] w-4 h-3 flex items-center justify-center">
                {state.cart.length}
              </span>
            )}
          </div>

          <div className="flex flex-col items-center cursor-pointer group relative">
            {dark ? (
              <CiDark className="text-[20.3px]" onClick={toggle} />
            ) : (
              <CiLight className="text-[20.3px]" onClick={toggle} />
            )}
            <p
              className={`absolute left-0 hidden font-[sk] -top-7 px-1 bg-black rounded-md text-white md:group-hover:block text-sm transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100`}
            >
              {dark ? "Light" : "Dark"}
            </p>
          </div>

          {open ? (
            <VscClose className="lg:hidden" onClick={togglemenu} />
          ) : (
            <CgMenuRightAlt className={`lg:hidden`} onClick={togglemenu} />
          )}
          {open && (
            <div
              className={`overflow-auto lg:hidden h-screen w-[70%] md:w-[70%]  pb-48  duration-500 ease-in-out flex flex-col p-2 absolute top-[7.57rem] right-0  ${
                dark ? "bg-black text-white" : "bg-white text-black"
              }`}
              style={{ right: open ? "0%" : "-100%" }}
            >
           <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/30/b7eb4f88-4a93-4b68-beac-982d29be81671698648116564-Flat_500--1-.jpg " />
              <Link to="/Login">
                <button className=" mt-4 text-red-400 p-2 font-[sk]">
                  Login/Signup
                </button>
              </Link>
              <div className="flex flex-col gap-5 p-4">
                <li
                  onClick={() => toggleDropdown("men")}
                  className="list-none opacity-75 font-[sk] flex cursor-pointer items-center justify-between"
                >
                  <a className="">Men</a>
                  {openDropdowns.men ? (
                    <FaChevronDown className="text-xs" />
                  ) : (
                    <FaChevronUp className="text-xs" />
                  )}
                </li>
                {openDropdowns.men && (
                  <div className="flex flex-col md:text-sm text-[14px] pl-9 gap-4 font-[sk]">
                    <div
                      onClick={() => toggleDropdown("topwear")}
                      className="flex cursor-pointer items-center justify-between "
                    >
                      <a className="">Top Wear</a>
                      {openDropdowns.topwear ? (
                        <FaChevronDown className="text-xs" />
                      ) : (
                        <FaChevronUp className="text-xs" />
                      )}
                    </div>

                    {openDropdowns.topwear && (
                      <div className="text-center">
                        <Link to="/men">
                          <a>Hello</a>
                        </Link>
                      </div>
                    )}
                    <a href="">Indian Festive Wear</a>
                    <a href="">Bottom Wear</a>
                    <a href="">InnerWear & Sleepwear</a>
                    <a href="">Plus Size</a>
                    <a href="">Footwear</a>
                    <a href="">Personal Care & Grooming</a>
                    <a href="">Sunglasses & Frames</a>
                    <a href="">Watches</a>
                    <a href="">Sports & Active Wear</a>
                    <a href="">Gadgets</a>
                    <a href="">Fashion Accessories</a>
                    <a href="">Bags & Backpacks</a>
                    <a href="">Luggage & Trolleys</a>
                  </div>
                )}

                <li
                  onClick={() => toggleDropdown("women")}
                  className="list-none opacity-75 font-[sk] flex cursor-pointer items-center justify-between"
                >
                  <a>Women</a>
                  {openDropdowns.women ? (
                    <FaChevronDown className="text-xs" />
                  ) : (
                    <FaChevronUp className="text-xs" />
                  )}
                </li>
                {openDropdowns.women && (
                  <div className="flex flex-col font-[sk] relative md:text-sm text-[14px] px-9 gap-4">
                    <a href="">Indian & Fusion Wear</a>
                    <a href="">Belts,Carves & More</a>
                    <a href="">Western & Wearables</a>
                    <a href="">WesternWear</a>
                    <a href="">Plus Size</a>
                    <a href="">Maternity</a>
                    <a href="">Sunglasses & Frames</a>
                    <a href="">Footwear</a>
                    <a href="">Sports & Active Wear</a>
                    <a href="">Lingerie & Sleepware</a>
                    <a href="">Beauty & Personal Care</a>
                    <a href="">Gadgets</a>
                    <a href="">Jewellery</a>
                    <a href="">Backpack</a>
                    <a href="">Handbags,Bags & Wallets</a>
                    <a href="">Luggage & Trolleys</a>
                    <Link to="/saree">
                      <a href="">Sarees</a>
                    </Link>
                  </div>
                )}

                <li
                  onClick={() => toggleDropdown("kids")}
                  className="list-none opacity-75 font-[sk] flex items-center justify-between cursor-pointer"
                >
                  <a>Kids</a>
                  {openDropdowns.kids ? (
                    <FaChevronDown className="text-xs" />
                  ) : (
                    <FaChevronUp className="text-xs" />
                  )}
                </li>
                {openDropdowns.kids && (
                  <div className="flex flex-col font-[sk] md:text-sm text-[14px] gap-4 px-9">
                    <a href="">Boys Clothing</a>
                    <a href="">Girls Clothing</a>
                    <a href="">Footwear</a>
                    <a href="">Toys & Games</a>
                    <a href="">Infants</a>
                    <a href="">Home & Bath</a>
                    <a href="">Personal Care</a>
                    <a href="">Kids Accessories</a>
                    <a href="">Brands</a>
                    <a href="">Age</a>
                  </div>
                )}

                <li
                  onClick={() => toggleDropdown("homeLiving")}
                  className="list-none opacity-75 font-[sk] flex items-center justify-between cursor-pointer"
                >
                  <a>Home & Living</a>
                  {openDropdowns.homeLiving ? (
                    <FaChevronDown className="text-xs" />
                  ) : (
                    <FaChevronUp className="text-xs" />
                  )}
                </li>
                {openDropdowns.homeLiving && (
                  <div className="flex flex-col gap-4 px-9 font-[sk] md:text-sm text-[14px]">
                    <a href="">Bed Linen & Furnishing</a>
                    <a href="">Flooring</a>
                    <a href="">Bath</a>
                    <a href="">Lamps & Lighting</a>
                    <a href="">Home Decor</a>
                    <a href="">Cushions & Cushion Covers</a>
                    <a href="">Curtains</a>
                    <a href="">Home Gift Sets</a>
                    <a href="">Kitchen & Table</a>
                    <a href="">Storage</a>
                    <a href="">Brands</a>
                  </div>
                )}

                <li
                  onClick={() => toggleDropdown("beauty")}
                  className="list-none opacity-75 font-[sk] flex items-center justify-between cursor-pointer"
                >
                  <a>Beauty</a>
                  {openDropdowns.beauty ? (
                    <FaChevronDown className="text-xs" />
                  ) : (
                    <FaChevronUp className="text-xs" />
                  )}
                </li>
                {openDropdowns.beauty && (
                  <div className="flex flex-col gap-4 px-9 md:text-sm text-[14px] font-[sk]">
                    <a href="">Makeup</a>
                    <a href="">Skincare,Bath & Body</a>
                    <a href="">Baby Care</a>
                    <a href="">Masks</a>
                    <a href="">Haircare</a>
                    <a href="">Fragrances</a>
                    <a href="">Appliances</a>
                    <a href="">Men's Grooming</a>
                    <a href="">Beauty Gift & Makeup Set</a>
                    <a href="">Premium Beauty</a>
                    <a href="">Wellness & Hygiene</a>
                    <a href="">Top Brands</a>
                  </div>
                )}

                <li
                  onClick={() => toggleDropdown("studio")}
                  className="list-none opacity-75 font-[sk] flex items-center justify-between cursor-pointer"
                >
                  <a>
                    Studio
                    <sup className="text-[12px] text-red-400">New</sup>
                  </a>
                  {openDropdowns.studio ? (
                    <FaChevronDown className="text-xs" />
                  ) : (
                    <FaChevronUp className="text-xs" />
                  )}
                </li>
                {openDropdowns.studio && (
                  <div className="flex flex-col md:text-sm text-xs gap-4 px-9 font-[sk]">
                    <a href="">New Arrivals</a>
                    <a href="">Exclusive</a>
                  </div>
                )}
                <div className="text-sm opacity-75 border-t-[1px] border-slate-300 pt-5 flex flex-col gap-4">
                  <a href="">
                    Mynta Mall<sup className="text-red-400">New</sup>
                  </a>
                  <a href="">Myntra Insider</a>
                  <a href="">Gift Cards</a>
                  <a href="">Contact Us</a>
                  <a href="">FAQs</a>
                  <a href="">Legal</a>
                </div>
              </div>
              <img src="https://assets.myntassets.com/assets/images/retaillabs/2022/12/30/856cb741-8473-4d5e-b6e3-a52b3d98c99e1672386455977-PWA---App-Download-banner.png"></img>
            </div>
          )}
        </div>
      </nav>

      <div className="md:hidden mt-[51px] fixed w-full p-2 z-50">
        <CiSearch className="absolute top-10 left-6 text-black" />

        <input
          type="search"
          placeholder="Search for products,Brands & more...."
          spellCheck="false"
          className={`outline-none shadow-lg py-3 pl-12 w-full p-2 mt-[13.5px] transition-all duration-1000 ease-in-out rounded-full 
            
          }`}
        />
      </div>

      <div
        className={`md:hidden gap-7 text-center z-20 fixed bottom-0 flex w-full py-2 transition-all duration-1000 ease-in-out ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col items-center cursor-pointer w-[50%]">
          <PiHeartLight />
          <p className="text-[12px] font-[sk]">Wishlist</p>
          {state.wishlist.length > 0 && (
            <span className="relative bottom-10 left-2 bg-red-500 text-white rounded-full text-[10px] w-3 h-3 flex items-center justify-center">
              {state.wishlist.length}
            </span>
          )}
        </div>
        <div className="flex flex-col items-center cursor-pointer w-[50%]">
          <PiHandbagThin />
          <p className="text-[12px] font-[sk]">Cart</p>
          {state.cart.length > 0 && (
            <span className="relative bottom-10 left-2  bg-red-500 text-white rounded-full text-[10px] w-3 h-3 flex items-center justify-center">
              {state.cart.length}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
