import { useState } from "react";
import { FaEye, FaEyeSlash, FaWindowClose } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative flex w-full max-w-xl overflow-hidden rounded-sm bg-white shadow-2xl md:flex-row">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 text-gray-400 hover:text-gray-600"
        >
          <FaWindowClose size={18} />
        </button>

        <div className="flex w-full flex-col justify-center bg-blue-600 p-6 text-white md:w-2/5">
          <div className="-mt-20">
            <h2 className="mb-1 text-2xl font-bold">Login</h2>
            <p className="text-xs font-normal leading-tight opacity-90">
              Access your Orders, Wishlist and Recommendations.
            </p>
          </div>
        </div>

        <div className="w-full bg-[#f9fdfa] p-6 md:w-3/5">
          <form className="mt-2 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="border-b border-gray-200">
              <input
                type="text"
                placeholder="Username or Email"
                className="w-full bg-transparent py-2 text-xs outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="relative border-b border-gray-200">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-transparent py-2 text-xs outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 p-1 text-white"
              >
                {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wide text-blue-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#288ad6]" />
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 py-2.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg active:scale-[0.98]"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
