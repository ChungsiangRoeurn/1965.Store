"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <h1 className="text-[20px] font-bold text-[#272343]">Sign Up</h1>
        </div>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 text-sm p-3 rounded-md focus:ring-2 focus:ring-[#029FAE] focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 text-sm p-3 rounded-md focus:ring-2 focus:ring-[#029FAE] focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 hover:text-[#029FAE]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full border border-gray-300 text-sm p-3 rounded-md focus:ring-2 focus:ring-[#029FAE] focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 hover:text-[#029FAE]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#029FAE] text-white py-3 rounded-md font-semibold hover:bg-[#027B86] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center mt-6">
          <div className="w-16 border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <div className="w-16 border-t border-gray-300"></div>
        </div>

        {/* Sign Up link */}
        <p className="text-center mt-4 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            href="/sign-up"
            className="text-[#029FAE] font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
