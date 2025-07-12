import React, { useState } from "react";
import { Eye, EyeOff, Lock, User, Home } from "lucide-react";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (!password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onLogin && onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 space-y-8">
        {/* Logo & Title */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4 shadow-sm">
            <Home className="w-7 h-7 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-500">Sign in to your admin panel</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <User className="h-5 w-5 text-gray-400" />
              </span>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (errors.username)
                    setErrors((prev) => ({ ...prev, username: "" }));
                }}
                className={`w-full pl-10 pr-3 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all bg-white ${
                  errors.username
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="Enter your username"
              />
            </div>
            {errors.username && (
              <p className="text-sm text-red-600 mt-1">{errors.username}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Lock className="h-5 w-5 text-gray-400" />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password)
                    setErrors((prev) => ({ ...prev, password: "" }));
                }}
                className={`w-full pl-10 pr-12 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all bg-white ${
                  errors.password
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg text-white font-semibold text-sm shadow-sm bg-blue-500 hover:bg-blue-600 transition-all focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
