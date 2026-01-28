import Navbar from "../layouts/header/Navbar";
import { Footer } from "../layouts/footer/footer"
import { useCart } from "../../components/layouts/context/useCart";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeItem, getTotal } = useCart();
  const navigate = useNavigate();

  return (
    <><Navbar />
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty!</p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white shadow rounded"
              >
                <img
                  src={item.image}
                  className="w-24 h-24 rounded object-cover"
                />

                <div className="flex-1">
                  <p className="font-semibold text-gray-700">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="p-1 border rounded"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <FaMinus size={10} />
                    </button>

                    <span className="px-3">{item.quantity}</span>

                    <button
                      className="p-1 border rounded"
                      onClick={() => increaseQty(item.id)}
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <span>Total:</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>

            <button
              className="bg-blue-600 text-white w-full py-3 rounded mt-5 hover:bg-blue-700"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>

            <button
              className="text-blue-600 w-full text-sm mt-3 underline"
              onClick={() => navigate("/shop")}
            >
              ← Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}
