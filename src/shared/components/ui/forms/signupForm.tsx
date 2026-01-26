import { useState, useEffect } from "react";
import { FaWindowClose, FaEnvelope } from "react-icons/fa";

const DiscountModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hideModal = localStorage.getItem("hideDiscountModal");
    if (hideModal === "true") return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      requestAnimationFrame(() => setAnimateIn(true));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("hideDiscountModal", "true");
    }

    setAnimateIn(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      
      <div
        className={`relative w-full max-w-md sm:max-w-lg overflow-hidden rounded-sm shadow-2xl bg-white
          transform transition-all duration-300 ease-out
          ${animateIn ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
      >
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 text-white/80 hover:text-white"
        >
          <FaWindowClose size={22} />
        </button>

        <div
          className="relative min-h-[300px] flex flex-col items-center justify-center p-8 text-center bg-cover bg-center
          bg-[url('https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1000&auto=format&fit=crop')]"
        >
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 text-white max-w-md">
            <h2 className="text-4xl font-bold mb-4 uppercase">
              Sign Up & Get 40% Off
            </h2>

            <p className="text-sm mb-8 text-gray-100">
              Signup today for free and be the first to hear of special promotions,
              new arrivals, designer and offers news.
            </p>

            <form
              className="flex w-full flex-col sm:flex-row shadow-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-1 items-center bg-white px-3 py-2">
                <FaEnvelope className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full text-gray-800 outline-none text-sm"
                  required
                />
              </div>

              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 text-sm font-bold uppercase">
                Sign Up
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id="dontShow"
                className="h-4 w-4 accent-blue-500"
                checked={dontShowAgain}
                onChange={() => setDontShowAgain(!dontShowAgain)}
              />
              <label htmlFor="dontShow" className="text-xs cursor-pointer">
                Don't show this popup again
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
