import { useState } from "react";
import Signin from "./signin";
import SignUp from "./signup";

const AuthButton = () => {
  const [button, setButton] = useState("signup");
  return (
    <div>
      <div className="flex justify-center w-full">
        <button
          onClick={() => setButton("signup")}
          className={
            button === "signup"
              ? "bg-green-500 p-3 w-1/2 text-white shadow-md rounded"
              : "bg-gray-200 p-3 w-1/2 rounded"
          }
        >
          Sign Up
        </button>

        <button
          onClick={() => setButton("signin")}
          className={
            button === "signin"
              ? "bg-green-500 p-3 w-1/2 text-white shadow-md rounded"
              : "bg-gray-200 p-3 w-1/2 rounded"
          }
        >
          Sign In
        </button>
      </div>
      {button === "signin" ? <Signin /> : <SignUp />}
    </div>
  );
};

export default AuthButton;
