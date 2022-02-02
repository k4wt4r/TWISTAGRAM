import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email("invalid email")
      .required("Required"),
      password: Yup.string()
      .required("Please enter password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="bg-gray-800 h-screen w-screen flex justify-center items-center ">
      <div className="flex items-center justify-center h-full w-full px-2">
        <div className="w-40 h-40 bg-gradient-to-r from-purple-700 via-pink-400  to-pink-200 rounded-full absolute   left-4 top-5  transform animate-pulse "></div>
        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-aqua-500 rounded-full absolute  right-1/4  bottom-4 transform animate-pulse"></div>
        <div className="w-32 h-32 bg-gradient-to-r from-pink-500  to-white-200 rounded-full absolute  right-3/4 transform "></div>
        <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-white-500 rounded-full absolute left-3/4 transform  animate-pulse"></div>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full md:w-1/3 lg:w-1/4 rounded-br-lg items-center justify-center px-4 lg:px-11 py-16  bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm mx-1.3"
        >
          <h1 className="text-center  text-gray-200 text-4xl mt-5 font-bold">
            Sign In
          </h1>
          <div className="mb-6 mt-7">
            <span className="block text-gray-200 font-bold md:text-left md:mb-3 pr-40">
              Email
            </span>
            <input
              name="email"
              type="email"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Enter your Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="mb-6 mt-7">
            <span className="block text-gray-200 font-bold md:text-left mb-1 md:mb-3 pr-40">
              Password
            </span>
            <input
              onChange={formik.handleChange}
              name="password"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              placeholder="Enter your password"
              value={formik.values.password}
            />
            <div className="flex justify-between mt-4 text-purple-400 mt-6 mb-4 ">
              <button
              type="submit"
              className="text-white bg-purple-500 shadow-md shadow-purple-400 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-6 py-2.5 text-center animate-pusle">
                Sign In
              </button>
              <div className="mt-1">
                <Link href="/forgotpassword">Forgot Password?</Link>
              </div>
            </div>
            <div className=" mt-8">
              <div className="flex flex-row text-gray-200">
                Don't have an account?
                <p className="text-purple-400  ml-1.5 text-center">
                  <Link href="/signup"><a>Create Account </a></Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
