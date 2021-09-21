import axios from "axios";
import Router from "next/router";
import cookie from "js-cookie";
import catchErrors from "./error.utils";

export const registerUser = async (
  { name, username, email, password },
  setError,
  setLoading,
  toast
) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/signup`, {
      name,
      username,
      email,
      password,
    });

    toast.info(res.data.msg);
    Router.push("/");
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
    toast.error(errorMsg);
  }
  setLoading(false);
};

export const loginUser = async (
  { email, password },
  setError,
  setLoading,
  toast
) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/auth`, {
      email,
      password,
    });

    setToken(res.data);

    Router.push("/");
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
    toast.error(errorMsg);
  }

  setLoading(false);
};

const setToken = (token) => {
  cookie.set("token", token);
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
};

export const logoutUser = () => {
  cookie.remove("token");
  Router.push("/auth");
};
