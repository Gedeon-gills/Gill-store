import Navbar from "../layouts/header/Navbar";
import { Footer } from "../layouts/footer/footer"
import { useCart } from "../layouts/context/useCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function CheckoutPage() {
  const { cart, getTotal, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const [billing, setBilling] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const placeOrder = () => {
    const { name, email, phone, address } = billing;

    if (!name || !email || !phone || !address) {
      setErrorMessage("⚠ Please fill in all fields before placing your order.");
      return;
    }

    navigate("/order-confirmation");
  };

  return (
    <><Navbar />
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT FORM */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          {errorMessage && (
            <p className="bg-red-100 border border-red-400 text-red-700 p-3 rounded mb-4 text-sm">
              {errorMessage}
            </p>
          )}

          <form className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm font-semibold">Full Name</label>
              <input
                name="name"
                value={billing.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                name="email"
                value={billing.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="@email.com"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Phone Number</label>
              <input
                name="phone"
                value={billing.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="+250 788 000 000"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Address</label>
              <input
                name="address"
                value={billing.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Kigali, Rwanda"
              />
            </div>
          </form>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-3"
              >
                <img
                  src={item.image}
                  className="w-16 h-16 rounded object-cover"
                />

                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="p-1 border rounded text-xs"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <FaMinus size={10} />
                    </button>

                    <span className="px-2">{item.quantity}</span>

                    <button
                      className="p-1 border rounded text-xs"
                      onClick={() => increaseQty(item.id)}
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>

                <p className="font-semibold text-right">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            ))}

            <div className="flex justify-between text-lg font-bold mt-3">
              <span>Total:</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>

            <button
              className="bg-blue-600 text-white w-full py-3 rounded mt-4 hover:bg-blue-700"
              onClick={placeOrder}
            >
              Place Order
            </button>

            <button
              className="text-blue-600 text-sm mt-2 underline"
              onClick={() => navigate("/shop")}
            >
              ← Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
