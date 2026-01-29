import { useState } from "react";
import { FaEye, FaEyeSlash, FaWindowClose } from "react-icons/fa";
import { userService } from "../../../services/userServices";
import type { LoginRequest, LoginResponse } from "../../../services/userServices";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (user: LoginResponse["user"], token: string) => void;
}

const LoginModal = ({ isOpen, onClose, onLoginSuccess }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!emailOrUsername || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);

      const payload: LoginRequest = {
        email: emailOrUsername,
        password,
      };

      const data = await userService.login(payload);

      localStorage.setItem("authToken", data.token);

      if (onLoginSuccess) onLoginSuccess(data.user, data.token);

      setEmailOrUsername("");
      setPassword("");
      onClose();
    } catch (err: unknown) {
      console.error(err);
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-2xl md:flex md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 text-gray-400 hover:text-gray-600"
        >
          <FaWindowClose size={18} />
        </button>

        {/* Blue Panel */}
        <div className="w-full md:w-2/5 flex flex-col justify-center bg-blue-600 p-6 text-white text-center md:text-left">
          <h2 className="mb-1 text-2xl font-bold">Login</h2>
          <p className="text-xs font-normal leading-tight opacity-90">
            Access your Orders, Wishlist and Recommendations.
          </p>
        </div>

        {/* Form */}
        <div className="w-full md:w-3/5 bg-[#f9fdfa] p-6">
          <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
            {error && <p className="text-xs text-red-500">{error}</p>}

            <div className="border-b border-gray-200">
              <input
                type="text"
                placeholder="Email"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                className="w-full bg-transparent py-2 text-sm sm:text-xs outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="relative border-b border-gray-200">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent py-2 text-sm sm:text-xs outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 p-1 text-white rounded-r"
              >
                {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] font-semibold uppercase tracking-wide text-blue-600 gap-2 sm:gap-0">
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
              disabled={loading}
              className={`w-full py-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-lg rounded active:scale-[0.98] transition ${
                loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
