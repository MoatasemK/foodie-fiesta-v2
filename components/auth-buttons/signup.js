import { useState, useEffect, useRef } from "react";
import {
  AiOutlineUser,
  AiFillEye,
  AiFillEyeInvisible,
  AiFillLock,
  AiOutlineLoading,
} from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { registerUser } from "../../utils/auth.utils";

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const isUser = Object.values({ name, email, password }).every((item) =>
      Boolean(item)
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const { name, email, password } = user;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const [username, setusername] = useState("");
  const [usernameLoading, setusernameLoading] = useState(false);
  const [usernameAvailable, setusernameAvailable] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password and confirm password must be same");
    } else {
      await registerUser(
        { name, email, password, username },
        setError,
        setFormLoading,
        toast
      );
    }
  };
  return (
    <>
      <ToastContainer />
      <form className="px-3 py-4 h-1/2" onSubmit={onSubmit}>
        <label
          htmlFor="name"
          className="relative text-gray-400 focus-within:text-gray-400 block"
        >
          <AiOutlineUser className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
          <input
            type="text"
            className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </label>

        <label
          htmlFor="username"
          className="relative text-gray-400 focus-within:text-gray-400 block"
        >
          <AiOutlineUser className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
          <input
            type="text"
            className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            placeholder="Username"
            name="username"
            onChange={(e) => {
              setusername(e.target.value);
              if (usernameRegex.test(e.target.value)) {
                setusernameAvailable(true);
              } else {
                setusernameAvailable(false);
              }
            }}
            value={username}
          />
        </label>

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
            onChange={handleChange}
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
              onChange={handleChange}
              value={password}
            />
          </div>
        </div>

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
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
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
              type={showConfirmPassword ? "text" : "password"}
              className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={submitDisabled || !usernameAvailable}
          className="bg-green-500 py-1 px-2 mt-3 rounded shadow-md text-white text-lg block w-full"
        >
          {formLoading && (
            <span className="absolute right-0 inset-y-0 flex items-center pr-3">
              <AiOutlineLoading
                className="h-5 w-5 text-gray-100 animate-spin"
                aria-hidden="true"
              />
            </span>
          )}
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
