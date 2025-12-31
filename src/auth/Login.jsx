import React, { useState } from "react";

const Login = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <div
      className="
        w-[430px] bg-[#FFF8EE] p-8 rounded-2xl
        shadow-[0_20px_40px_rgba(120,80,20,0.25)]
        transition-all duration-500
      "
    >
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center text-[#5A3E1B] mb-6">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      {/* Tabs */}
      <div className="relative flex h-12 mb-6 rounded-full bg-[#EAD9BE] overflow-hidden">
        <button
          onClick={() => setLogin(true)}
          className={`w-1/2 z-10 text-lg font-medium transition-all ${
            isLogin ? "text-white" : "text-[#5A3E1B]"
          }`}
        >
          Login
        </button>

        <button
          onClick={() => setLogin(false)}
          className={`w-1/2 z-10 text-lg font-medium transition-all ${
            !isLogin ? "text-white" : "text-[#5A3E1B]"
          }`}
        >
          Sign Up
        </button>

        {/* Moving background */}
        <div
          className={`absolute top-0 h-full w-1/2 rounded-full
          bg-gradient-to-r from-[#8B5A2B] via-[#A97142] to-[#C89B6D]
          transition-all duration-300
          ${isLogin ? "left-0" : "left-1/2"}`}
        />
      </div>

      {/* Form */}
      <form className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md bg-white border border-gray-200
            outline-none focus:border-[#A97142] transition"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-white border border-gray-200
          outline-none focus:border-[#A97142] transition"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-md bg-white border border-gray-200
          outline-none focus:border-[#A97142] transition"
          required
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-md bg-white border border-gray-200
            outline-none focus:border-[#A97142] transition"
            required
          />
        )}

        {isLogin && (
          <p className="text-right text-sm text-[#8B5A2B] hover:underline cursor-pointer">
            Forget Password?
          </p>
        )}

        {/* Main Button */}
        <button
          className="
            w-full p-3 rounded-full text-lg font-medium text-white
            bg-gradient-to-r from-[#8B5A2B] via-[#A97142] to-[#C89B6D]
            hover:opacity-90 transition-all duration-300
            shadow-md
          "
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Switch */}
        <p className="text-center text-gray-600 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setLogin(!isLogin)}
            className="ml-1 text-[#8B5A2B] hover:underline cursor-pointer font-medium"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
