import React from "react";
import Link from "next/link";

function SignIn() {
  return (
    <div className="h-full ">
      <div class=" rounded-full"></div>
      <div className="flex items-center justify-center h-full w-full border bg-gray-50">
        <form class="w-full md:w-1/3 lg:w-1/4 rounded-br-lg items-center justify-center px-10 py-16 neomorphism">
          <div class="rounded-md ">
            <div>
              <h1 class="text-center text-3xl mt-5 font-bold"> Sign In </h1>
            </div>
            <div class="mb-5 mt-7">
              <span class="block text-gray-500 font-bold md:text-left md:mb-3 pr-40">
                Email
              </span>
              <input
                type="email"
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <span class="block text-gray-500 font-bold md:text-left mb-1 md:mb-3 pr-40">
                Password
              </span>
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center mt-8 ml-20 mb-5">
              Sign In
            </button>
            <div class="text-center">
              <p class="flex flex-row ">
                Don't have an account?
                <p class="text-purple-600 ml-1.5">
                  <Link href="/signup">Create Account</Link>
                </p>
              </p>
            </div>
            <div class="text-center mt-4  text-">
              <Link href="/forgotpassword">Forgot Password?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
