import { useState } from "react";
import { FaEye, FaEyeSlash, FaWindowClose, FaEnvelope, FaLock } from "react-icons/fa";
import { userService } from "../../../services/userServices";
import type { LoginRequest, LoginResponse } from "../../../services/userServices";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (user: LoginResponse["user"], token: string) => void;
}

const AuthModal = ({ isOpen, onClose, onLoginSuccess }: Props) => {
  const [isLogin, setIsLogin] = useState(true); // toggle between login & signup
  const [showPassword, setShowPassword] = useState(false);

  // Login state
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  // Signup state
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  // ✅ Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!emailOrUsername || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);
      const payload: LoginRequest = { email: emailOrUsername, password };
      const data = await userService.login(payload);

      localStorage.setItem("authToken", data.token);
      if (onLoginSuccess) onLoginSuccess(data.user, data.token);

      setEmailOrUsername("");
      setPassword("");
      onClose();
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Signup handler
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!signupEmail || !signupPassword) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      await userService.createUser({
        name: signupEmail.split("@")[0],
        email: signupEmail,
        password: signupPassword,
      });

      setSignupSuccess(true);
      setSignupEmail("");
      setSignupPassword("");

      // Switch to login form with email pre-filled
      setIsLogin(true);
      setEmailOrUsername(signupEmail);
      setError(""); // clear any previous error
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      setError(error.response?.data?.message || "Registration failed");
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
          <h2 className="mb-1 text-2xl font-bold">{isLogin ? "Login" : "Sign Up"}</h2>
          <p className="text-xs font-normal leading-tight opacity-90">
            {isLogin
              ? "Access your Orders, Wishlist and Recommendations."
              : "Signup today for free and get instant access."}
          </p>
        </div>

        {/* Form Panel */}
        <div className="w-full md:w-3/5 bg-[#f9fdfa] p-6">
          {isLogin ? (
            <form className="mt-2 space-y-4" onSubmit={handleLogin}>
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
          ) : (
            <form className="mt-2 space-y-4" onSubmit={handleSignup}>
              {error && <p className="text-xs text-red-500">{error}</p>}
              {signupSuccess && (
                <p className="text-green-500 text-sm">Account created successfully! You can now login.</p>
              )}

              <div className="flex flex-col gap-2">
                <div className="flex items-center border-b border-gray-200 px-2 py-1">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                </div>

                <div className="flex items-center border-b border-gray-200 px-2 py-1 relative">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-lg rounded active:scale-[0.98] transition ${
                  loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
          )}

          {/* Toggle Login/Signup */}
          <div className="mt-4 text-center text-xs sm:text-sm">
            {isLogin ? (
              <p>
                Don’t have an account?{" "}
                <button
                  onClick={() => {
                    setIsLogin(false);
                    setError("");
                  }}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Create Account
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setIsLogin(true);
                    setError("");
                  }}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Log In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
