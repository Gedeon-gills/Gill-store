import { Link } from "react-router-dom";
import { useState } from "react";

import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaChevronLeft,
  FaShoppingBag,
} from "react-icons/fa";

export default function DownBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-4">
        <div className="text-white text-3xl font-bold mr-10">
          GillStore<span className="text-white">.</span>
        </div>

        <div className="flex flex-1 justify-center text-white text-[12px] gap-5">
          <span className="cursor-pointer">
            <Link to={"/"}>HOME ▾</Link>
          </span>
          <span className="cursor-pointer">
            <Link to={"/shop"}>SHOP ▾</Link>
          </span>
          <span className="cursor-pointer">
            <Link to={"/Pages"}>PAGES ▾</Link>
          </span>
          <span className="cursor-pointer">
            <Link to={"/Blogs"}>BLOG ▾</Link>
          </span>
          <span className="cursor-pointer">
            <Link to={"/Elements"}>ELEMENTS ▾ </Link>
          </span>
          <span className="cursor-pointer font-semibold">
            <Link to={"/Buy"}>BUY NOW</Link>
          </span>
        </div>

        <div className="flex items-center gap-8 text-white ml-10">
          <div className="flex items-center gap-2">
            <FaUser />
            <div className="text-xs leading-tight">
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
            <div className="text-xs leading-tight">
              <p>Cart</p>
              <p className="font-semibold">$0.00</p>
            </div>
          </div>
        </div>
      </div>

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
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
