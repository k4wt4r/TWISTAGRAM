import React from "react";
import Link from "next/link";

function SignIn() {
  return (
    <div class="bg-gray-800 h-screen w-screen  flex justify-center items-center ">
      <div class="flex items-center justify-center h-full w-full px-2">
        <div class="w-40 h-40 bg-gradient-to-r from-purple-700 via-pink-400  to-pink-200 rounded-full absolute   left-4 top-5  transform animate-pulse "></div>
        <div class="w-12 h-12 bg-gradient-to-r from-pink-400 to-aqua-500 rounded-full absolute  right-1/4  bottom-4 transform animate-pulse"></div>
        <div class="w-32 h-32 bg-gradient-to-r from-pink-500  to-white-200 rounded-full absolute  right-3/4 transform "></div>
        <div class="w-20 h-20 bg-gradient-to-r from-purple-400 to-white-500 rounded-full absolute left-3/4 transform  animate-pulse"></div>
        <form class="w-full md:w-1/3 lg:w-1/4 rounded-br-lg items-center justify-center px-4 lg:px-11 py-16  bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm mx-1.3">
          <h1 class="text-center  text-gray-200 text-4xl mt-5 font-bold">
            Sign In
          </h1>
          <div class="mb-6 mt-7">
            <span class="block text-gray-200 font-bold md:text-left md:mb-3 pr-40">
              Email
            </span>
            <input
              type="email"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Enter your Email"
            />
          </div>
          <div class="mb-6 mt-7">
            <span class="block text-gray-200 font-bold md:text-left mb-1 md:mb-3 pr-40">
              Password
            </span>
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              placeholder="Enter your password"
            />
            <div class="flex justify-between mt-4 text-purple-400 mt-6 mb-4 ">
              <button class="text-white bg-purple-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-sm px-6 py-2.5 text-center ">
                Sign In
              </button>
              <div class="mt-1">
                <Link href="/forgotpassword">Forgot Password?</Link>
              </div>
            </div>
            <div class=" mt-8">
              <p class="flex flex-row text-gray-200">
                Don't have an account?
                <p class="text-purple-400  ml-1.5 text-center">
                  <Link href="/signup">Create Account</Link>
                </p>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
