"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface LoginData {
  email: string;
  password: string;
}

interface SignupData {
  fullName: string;
  email: string;
  password: string;
}

export default function AccountPage() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState<SignupData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [showSignup, setShowSignup] = useState(false);

  function handleLoginChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSignupChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  }

  function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Login attempt:", loginData);
  }

  function handleSignupSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Signup attempt:", signupData);
    setShowSignup(false);
  }

  return (
    <div className="py-16 px-6 max-w-md mx-auto">
      <h2 className="text-brand font-heading text-2xl font-semibold mb-6 text-center">
        Login to Your Account
      </h2>

      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>

        <p className="text-sm">
          <a href="#" className="text-brand hover:underline">
            Forgot your password?
          </a>
        </p>

        <button
          type="submit"
          className="bg-brand text-white px-6 py-2 rounded-full cursor-pointer hover:opacity-90 transition-opacity w-full"
        >
          Login
        </button>
      </form>

      <hr className="my-6" />

      <p className="text-sm text-center">
        Don&apos;t have an account?{" "}
        <button
          onClick={() => setShowSignup(true)}
          className="text-brand hover:underline cursor-pointer"
        >
          Sign up here
        </button>
      </p>

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm relative">
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-brand font-heading text-xl font-semibold mb-4">
              Sign Up for a New Account
            </h3>

            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <button
                type="submit"
                className="bg-brand text-white px-6 py-2 rounded-full cursor-pointer hover:opacity-90 transition-opacity w-full"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}