import { useState, useEffect, useRef } from "react";
import { AiOutlineUser, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const [username, setUsername] = useState("");
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="px-3 py-4 h-1/2" onSubmit={onSubmit}>
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
            setUsername(e.target.value);
            if (usernameRegex.test(e.target.value)) {
              setUsernameAvailable(true);
            } else {
              setUsernameAvailable(false);
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

      <label
        htmlFor="password"
        className="relative text-gray-400 focus-within:text-gray-400 block"
      >
        <button
          className="cursor-pointer z-50"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiFillEye className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
          ) : (
            <AiFillEyeInvisible className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
          )}
        </button>

        <input
          type={showPassword ? "text" : "password"}
          className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <label
        htmlFor="password"
        className="relative text-gray-400 focus-within:text-gray-400 block"
      >
        <button onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword ? (
            <AiOutlineEye className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
          ) : (
            <AiFillEyeInvisible className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
          )}
        </button>
        <input
          type={showConfirmPassword ? "text" : "password"}
          className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
      </label>

      <button
        type="button"
        className="bg-green-500 py-1 px-2 mt-3 rounded shadow-md text-white text-lg block w-full"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
