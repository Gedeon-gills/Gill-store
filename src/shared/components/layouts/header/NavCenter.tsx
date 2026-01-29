import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaChevronLeft,
  FaPlus,
  FaMinus,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../ui/forms/signinForm";
import { useState } from "react";
import { useCart } from "../../layouts/context/useCart";

export default function NavCenter() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {
    cart,
    getTotal,
    isCartOpen,
    openCart,
    closeCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const navigate = useNavigate();

  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-4 justify-between">
        {/* LOGO */}
        <div className="text-white text-2xl sm:text-3xl font-bold">
          GillStore<span className="text-white">.</span>
        </div>

        {/* Desktop Search */}
        <div className="hidden sm:flex flex-1 mx-4">
          <input
            className="w-full h-12 px-6 rounded-l-full bg-white text-gray-600 text-sm focus:outline-none"
            placeholder="Search products..."
          />
          <select className="px-4 text-sm border-l bg-white text-gray-600">
            <option>All Categories</option>
          </select>
          <button className="bg-white px-5 rounded-r-full">🔍</button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden sm:flex items-center gap-6 text-white">
          {/* Sign In */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setIsSignInOpen(true)}
          >
            <FaUser />
            <div className="text-xs">
              <p>HELLO,</p>
              <p className="font-semibold">SIGN IN</p>
            </div>
          </div>

          {/* Wishlist */}
          <div className="flex items-center gap-2 cursor-pointer">
            <FaHeart /> <span className="text-xs">0</span>
          </div>

          {/* Cart */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={openCart}
          >
            <FaShoppingCart />
            <div className="text-xs">
              <p>Cart</p>
              <p className="font-semibold">${getTotal().toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <FaBars
            className="text-white text-xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-blue-600 text-white px-4 py-4 flex flex-col gap-4">
          <input
            className="w-full h-10 px-4 rounded-full text-gray-700"
            placeholder="Search products..."
          />
          <select className="px-4 py-2 rounded bg-white text-gray-700">
            <option>All Categories</option>
          </select>

          {/* Mobile Icons */}
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setIsSignInOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              <FaUser />
              <span>SIGN IN</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaHeart /> <span>0</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                openCart();
                setMobileMenuOpen(false);
              }}
            >
              <FaShoppingCart /> <span>${getTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      {/* SIDEBAR CART */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-40" onClick={closeCart} />
          <div className="fixed top-0 right-0 w-80 sm:w-96 h-full bg-white shadow-lg z-50 flex flex-col">
            {/* Header */}
            <div className="p-4 bg-blue-600 text-white flex items-center relative">
              <button onClick={closeCart} className="absolute left-4">
                <FaChevronLeft />
              </button>
              <h2 className="text-lg mx-auto font-semibold">Your Cart</h2>
            </div>

            {/* Cart Items */}
            <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center text-gray-600 mt-10">
                  <FaShoppingCart className="text-6xl mx-auto mb-4" />
                  <p>Your shopping cart is empty!</p>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 mt-4"
                    onClick={() => {
                      closeCart();
                      navigate("/shop");
                    }}
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img
                        src={item.image}
                        className="w-14 h-14 rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-gray-700 text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">${item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            className="p-1 border rounded text-xs"
                            onClick={() => decreaseQty(Number(item.id))}
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            className="p-1 border rounded text-xs"
                            onClick={() => increaseQty(Number(item.id))}
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Total + Checkout */}
                  <div className="mt-4 border-t pt-4">
                    <p className="font-semibold text-lg text-right mb-3">
                      Total: ${getTotal().toFixed(2)}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50"
                        onClick={() => {
                          closeCart();
                          navigate("/cart");
                        }}
                      >
                        View Cart
                      </button>
                      <button
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={() => {
                          closeCart();
                          navigate("/checkout");
                        }}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {/* SIGN IN MODAL */}
      {isSignInOpen && (
        <LoginModal
          isOpen={isSignInOpen}
          onClose={() => setIsSignInOpen(false)}
        />
      )}
    </div>
  );
}
