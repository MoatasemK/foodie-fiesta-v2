import axios from "axios";
import Router from "next/router";
import cookie from "js-cookie";

export const registerUser = async (
  { name, username, email, password },
  setError,
  setLoading,
  toast
) => {
  setLoading(true);
  try {
    const res = await axios.post(`http://localhost:3000/api/signup`, {
      name,
      username,
      email,
      password,
    });

    setToken(res.data);
    toast.info("Sign up successful");
    Router.push("/");
  } catch (error) {
    console.log("error");
    setError(error.message);
    toast.error(error.message);
  }
  setLoading(false);
};

export const loginUser = async (
  { email, password },
  setError,
  setLoading,
  toast
) => {
  setLoading(true);

  try {
    const res = await axios.post(`http://localhost:3000/api/auth`, {
      email,
      password,
    });

    setToken(res.data);

    Router.push("/");
  } catch (error) {
    console.log("error");
    setError(error.message);
    toast.error(error.message);
  }

  setLoading(false);
};

const setToken = (token) => {
  cookie.set("token", token);
};

export const logoutUser = () => {
  cookie.remove("token");
  Router.push("/auth");
};
