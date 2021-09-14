import { useState, useEffect, useRef } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { loginUser } from "../../utils/auth.utils";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    await loginUser({ email, password }, setError, setFormLoading, toast);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={onSubmit} className="px-3 py-4 h-1/2">
        <label
          htmlFor="email"
          className="relative text-gray-400 focus-within:text-gray-400 block"
        >
          <p className="pointer-events-none w-6 h-6 text-xl absolute top-1/2 transform -translate-y-1/2 left-1">
            @
          </p>
          <input
            type="email"
            className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <div className="relative text-gray-400 focus-within:text-gray-400 block">
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
              <AiFillLock
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>

            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              ) : (
                <AiFillEye
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              )}
            </div>

            <input
              type={showPassword ? "text" : "password"}
              className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 py-1 px-2 mt-3 rounded shadow-md text-white text-lg block w-full"
        >
          Sign In
        </button>
      </form>
    </>
  );
};

export default Signin;
