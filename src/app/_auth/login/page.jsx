"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FaCheck, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

export default function Register() {
// MANAGE STATE
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);


// HANDLE CHANGE
  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "email") {
      setData({ ...data, email: e.target.value });
    }
    if (e.target.name === "password") {
      setData({ ...data, password: e.target.value });
      if (data.password === "" || data.password.length < 8) {
        setError({ ...error, password: "Please enter a strong password" });
      } else {
        setSuccess(true);
        setError({ ...error, password: "" });
        setTimeout(() => {
          setSuccess(false);
        }, 1500);
      }
    }
  };

  // HANDLE USER LOGIN
  const loginUser = async (e) => {
    e.preventDefault();
    // get email regex validation

    if (data.email === "") {
      setError({ ...error, email: "please enter a valid email" });
    }

    if (data.password === "" || data.password.length < 8) {
      console.log("kkk");
      setError(() => ({
        ...error,
        password: "password length not strong enough",
      }));
    } else {
      setError({ ...error, password: "" });
    }

    // signIn("credentials", { ...data, redirect: false })
    //   .then((callback) => {
    //     if (callback?.error) {
    //       alert(callback.error);
    //     }

    //     if (callback.ok && !callback?.error) {
    //       alert("Logged in succefully");
    //     }
    //   })
    //   .catch(() => alert("Error"));
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8">
          <div className="text-center my-2 flex justify-center">
            <button
              className="p-2 mx-4 rounded-md flex"
              onClick={() => signIn("github")}
            >
              <FaGithub className="text-[1.5rem]" />
            </button>
            <button
              className="p-2 mx-4 rounded-md flex"
              onClick={() => signIn("google")}
            >
              <FaGoogle className="text-[1.5rem]" />
            </button>
            <button
              className="p-2 mx-4 rounded-md flex"
              onClick={() => signIn("linkedin")}
            >
              <FaLinkedin className="text-[1.5rem]" />
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="flex justify-center text-sm">Or sign in using?</p>
          <form className="space-y-6 p-3" onSubmit={loginUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={data.email}
                  required
                  onChange={(e) => handleChange(e)}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {error.email && (
                <div className="text-red-500 font-semibold text-xs p-2">
                  please fill out this field
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-stone-600 hover:text-stone-800"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={data.password}
                  onChange={(e) => handleChange(e)}
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {error.password && (
                <div className="text-red-500 font-semibold text-xs p-2">
                  {error.password}
                </div>
              )}
              {success && (
                <div className="text-green-500 flex items-center font-semibold text-sm p-2">
                  <FaCheck />
                  <span className="ml-2">Password ok</span>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-stone-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
