import axios from "axios";
import Router from "next/router";
import cookie from "js-cookie";
import catchErrors from "./error.utils";

export const onboarding = async (
  token,
  formdata,
  setError,
  setLoading,
  toast
) => {
  try {
    const res = await axios.post(
      `http://localhost:3000/api/onboarding/${token}`,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success(res.data.msg);
    Router.push("/");
  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
    toast.error(errorMsg);
  }
  setLoading(false);
};
