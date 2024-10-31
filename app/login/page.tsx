"use client";
import InputPassword from "@/components/input/InputPassword";
import InputText from "@/components/input/InputText";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface loginType {
  username: string;
  password: string;
}

export default function Login() {
  const [loginForm, setLoginForm] = useState<loginType>({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  // const handleSubmit3 = () => {
  //   try {
  //     // const response = await fetch("/login");
  //     router.push("/about");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = async () => {
  //   router.push("/faisalibal");
  // };

  const handleSubmit = async () => {
    router.push("/");
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-purple-500 to-orange-300 justify-center items-center flex-col">
        <h1 className="text-white text-4xl font-bold">Welcome To Kuker Hut</h1>
        <p className="text-white text-[25px] font-bold">
          Payroll Management System
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <p className="text-gray-500 mb-6">
          Welcome back! Please login to your account.
        </p>

        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <InputText
              id="username"
              value={loginForm.username}
              onChange={handleChange}
              className="w-full rounded-2xl hover:ring-1 hover:ring-blue-200  focus:outline-1 focus:outline-blue-500"
              // placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <InputPassword
              id="password"
              // type="password"
              value={loginForm.password}
              onChange={handleChange}
              className="w-full rounded-2xl hover:ring-1 hover:ring-blue-200  focus:outline-1 focus:outline-blue-500"
              // className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              // placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember Me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
        <div className="w-full max-w-sm">
          <button
            type="button"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
            onClick={() => handleSubmit()}
          >
            Login
          </button>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600">
            New User?{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
