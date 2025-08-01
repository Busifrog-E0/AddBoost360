import React, { useState } from "react";
import { Eye, EyeOff, Lock, User, Home } from "lucide-react";
import useLogin from "./hooks/useLogin";
import ADDBOOSTlogoOrg from '../../assets/ADDBOOSTlogoOrg.png'
const LoginPage = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const { user, setUser, login, isLoading } = useLogin();
  const validateForm = () => {
    const newErrors = {};
    if (!user.Username.trim()) newErrors.username = "Username is required";
    if (!user.Password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    login && login();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-4 items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 space-y-8">
        {/* Logo & Title */}
        <div className=" flex  flex-col items-center ">
          <img
            src={ADDBOOSTlogoOrg}
            alt="Logo"
            className="w-32 object-contain"
          />
          {/* <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4 shadow-sm">
            <Home className="w-7 h-7 text-blue-600" />
          </div> */}
          <h2 className="text-2xl font-bold text-gray-800">Add Boost 360</h2>
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
                value={user.Username}
                onChange={(e) => {
                  setUser({ ...user, Username: e.target.value });
                  if (errors.username)
                    setErrors((prev) => ({ ...prev, username: "" }));
                }}
                className={`w-full pl-10 pr-3 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all bg-white ${errors.username
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
                value={user.Password}
                onChange={(e) => {
                  setUser({ ...user, Password: e.target.value });
                  if (errors.password)
                    setErrors((prev) => ({ ...prev, password: "" }));
                }}
                className={`w-full pl-10 pr-12 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all bg-white ${errors.password
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
      <p className="text-xs text-gray-600 text-center font-mono">1.0.0</p>

    </div>
  );
};

export default LoginPage;
