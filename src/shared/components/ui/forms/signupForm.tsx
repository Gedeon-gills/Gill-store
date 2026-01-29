import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { FaWindowClose, FaEnvelope, FaLock } from "react-icons/fa";
import { userService } from "../../../services/userServices";

const DiscountModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // ✅ SAME FORM STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ React Query mutation
  const { mutate, isPending } = useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      setSuccess(true);
      setEmail("");
      setPassword("");

      setTimeout(handleClose, 2000);
    },
    onError: (err: Error & { response?: { data?: { message?: string } } }) => {
      setError(
        err?.response?.data?.message || "Registration failed"
      );
    },
  });

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

  // ✅ ONLY CHANGE IS HERE
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    mutate({ 
      name: email.split("@")[0],
      email, 
      password 
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4">
      <div
        className={`relative w-full max-w-[95%] sm:max-w-md lg:max-w-lg
        overflow-hidden rounded-sm shadow-2xl bg-white
        transform transition-all duration-300 ease-out
        ${animateIn ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-20 text-white/80 hover:text-white"
        >
          <FaWindowClose size={22} />
        </button>

        <div
          className="relative min-h-[260px] sm:min-h-[300px]
          flex flex-col items-center justify-center
          p-4 sm:p-6 md:p-8 text-center
          bg-cover bg-center
          bg-[url('https://images.unsplash.com/photo-1520975661595-6453be3f7070')]"
        >
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 text-white max-w-md w-full">
            {!success ? (
              <>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 uppercase">
                  Sign Up & Get 40% Off
                </h2>

                <p className="text-xs sm:text-sm mb-6 text-gray-100">
                  Signup today for free and get instant access.
                </p>

                {/* ✅ FORM UNCHANGED */}
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col sm:flex-row shadow-lg gap-2 sm:gap-0"
                >
                  <div className="flex flex-1 items-center bg-white px-3 py-2">
                    <FaEnvelope className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-gray-800 outline-none text-sm"
                      required
                    />
                  </div>

                  <div className="flex flex-1 items-center bg-white px-3 py-2">
                    <FaLock className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="password"
                      placeholder="Your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full text-gray-800 outline-none text-sm"
                      required
                      minLength={6}
                    />
                  </div>

                  <button
                    disabled={isPending}
                    className="bg-blue-500 hover:bg-blue-600 px-6 py-3
                    text-sm font-bold uppercase w-full sm:w-auto
                    disabled:opacity-60"
                  >
                    {isPending ? "Signing up..." : "Sign Up"}
                  </button>
                </form>

                {error && (
                  <p className="mt-3 text-xs sm:text-sm text-red-300">
                    {error}
                  </p>
                )}

                <div className="mt-5 flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    checked={dontShowAgain}
                    onChange={() => setDontShowAgain(!dontShowAgain)}
                  />
                  <label className="text-xs cursor-pointer">
                    Don't show this popup again
                  </label>
                </div>
              </>
            ) : (
              <div className="py-8 sm:py-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  🎉 Success!
                </h3>
                <p className="text-xs sm:text-sm text-gray-100">
                  Account created successfully.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
