import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaChevronLeft,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function DownBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-4 justify-between">
        {/* Logo */}
        <div className="text-white text-2xl sm:text-3xl font-bold">
          GillStore<span className="text-white">.</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center text-white text-[12px] gap-5">
          <Link to={"/"} className="hover:text-blue-400">HOME ▾</Link>
          <Link to={"/shop"} className="hover:text-blue-400">SHOP ▾</Link>
          <Link to={"/Pages"} className="hover:text-blue-400">PAGES ▾</Link>
          <Link to={"/Blogs"} className="hover:text-blue-400">BLOG ▾</Link>
          <Link to={"/Elements"} className="hover:text-blue-400">ELEMENTS ▾</Link>
          <Link to={"/Buy"} className="font-semibold hover:text-blue-400">BUY NOW</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <FaUser />
            <div className="text-xs leading-tight hidden sm:block">
              <p>HELLO,</p>
              <p className="font-semibold">SIGN IN</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaHeart /> <span className="text-xs">0</span>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart />
            <div className="text-xs leading-tight hidden sm:block">
              <p>Cart</p>
              <p className="font-semibold">$0.00</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(true)}>
            <FaBars size={20} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/60"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="ml-auto w-64 bg-white p-6 flex flex-col gap-6 z-50">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end text-black text-xl"
            >
              <FaTimes />
            </button>

            <Link to={"/"} className="font-semibold text-black" onClick={() => setIsMenuOpen(false)}>HOME ▾</Link>
            <Link to={"/shop"} className=" text-black" onClick={() => setIsMenuOpen(false)}>SHOP ▾</Link>
            <Link to={"/Pages"} className=" text-black" onClick={() => setIsMenuOpen(false)}>PAGES ▾</Link>
            <Link to={"/Blogs"} className=" text-black" onClick={() => setIsMenuOpen(false)}>BLOG ▾</Link>
            <Link to={"/Elements"} className=" text-black" onClick={() => setIsMenuOpen(false)}>ELEMENTS ▾</Link>
            <Link to={"/Buy"} className="font-semibold" onClick={() => setIsMenuOpen(false)}>BUY NOW</Link>
          </div>
        </div>
      )}

      {/* Cart Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white z-50 transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 relative bg-blue-600 flex items-center">
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-white absolute left-4"
          >
            <FaChevronLeft />
          </button>

          <h2 className="text-lg text-white font-semibold mx-auto">
            Your Cart
          </h2>
        </div>

        <div className="p-4 flex flex-col items-center gap-4 mt-10">
          <FaShoppingBag className="text-gray-600 text-8xl border-2 rounded-lg p-6" />
          <p className="text-gray-600 text-sm font-bold ">
            YOUR SHOPPING CART IS EMPTY!
          </p>
          <button className="bg-blue-600 text-white text-[10px] font-bold px-4 py-2">
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </div>
  );
}
