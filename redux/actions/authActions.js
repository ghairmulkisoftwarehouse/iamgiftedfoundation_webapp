import Axios from "@/config/api";

import toast from "react-hot-toast";
import { setError, setUser, setLoading,setRegisterEmail,setResendingLoading,setType,setResetOtp} from "../reducers/authSlice";
import { setTokenCookie,removeTokenCookie,getTokenCookie } from "@/utils/authCookies";

export const login = (data, router) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await Axios.post("/user/login", data);
    const {
      data: {
        data: { message, doc },
        status,
        success,
      },
    } = response;

    if (status === "success" && success) {
      setTokenCookie(doc.token);

    

      router.push("/account/donation-history");
      toast.success(message);
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.message ||
       err?.response?.data?.data?.message ||
      error?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setLoading(false));
  }
};
export const registerUser = (userType, data, router) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await Axios.post(`/${userType}/register`, data);

    const {
      data: {
        data: { message, doc },
        status,
        success,
      },
    } = response;

    if (status === "success" && success) {
      dispatch(setRegisterEmail(doc.email));
     
      localStorage.setItem("verify_email", doc.email);
           localStorage.removeItem("forget_password");
      router.push("/auth/verify-otp");
      toast.success(message);
    } else {
      throw new Error("Registration failed");
    }
  } catch (err) {
    const errorMsg =
      err?.response?.data?.message ||
      err?.response?.data?.data?.message ||
      err?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setLoading(false));
  }
};
export const verify_OTP = (data, router) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await Axios.patch("/user/verify-otp", data);

    const {
      data: {
        data: { message, doc },
        status,
        success,
      },
    } = response;

    if (status === "success" && success) {
      if (doc?.token) {
        setTokenCookie(doc.token);
      }

      if (data?.type === "forgotPassword") {
        dispatch(setResetOtp(data.otp));
      localStorage.setItem("reset_otp", data.otp);
         localStorage.removeItem("forget_password");
          dispatch(setRegisterEmail(data.email));
            localStorage.setItem("verify_email", data.email);
        router.push("/auth/reset-password");
      } else if (data?.type === "email") {
        localStorage.removeItem("verify_email");
         localStorage.removeItem("forget_password");
          dispatch(setRegisterEmail(data.email));
        dispatch(setType(null));

        router.push("/account/donation-history");
      }

      toast.success(message);
    } else {
      throw new Error("OTP verification failed");
    }
  } catch (err) {
    const errorMsg =
      err?.response?.data?.message ||
      err?.response?.data?.data?.message ||
      err?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setLoading(false));
  }
};
export const resend_OTP = (data) => async (dispatch) => {
  dispatch(setResendingLoading(true));

  try {
    const response = await Axios.patch("/user/resend-otp", data);

    const {
      data: {
        data: { message },
        status,
        success,
      },
    } = response;

    if (status === "success" && success) {
      toast.success(message);
    } else {
      throw new Error("Resend OTP failed");
    }
  } catch (err) {
    const errorMsg =
      err?.response?.data?.message ||
      err?.response?.data?.data?.message ||
      err?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setResendingLoading(false));
  }
};
export const forget_Password = (data, router) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await Axios.patch("/user/forgot-password", data);

    const {
      data: {
        data: { message },
        status,
        success,
      },
    } = response;

    if (status === "success" && success) {
      toast.success(message);

      dispatch(setType('forgotPassword'));
      dispatch(setRegisterEmail(data.email));
      localStorage.setItem("verify_email", data.email); 
      localStorage.setItem("forget_password", "forgotPassword"); 

      router.push(`/auth/verify-otp`);
    } else {
      throw new Error("Forget password request failed");
    }
  } catch (err) {
    const errorMsg =
      err?.response?.data?.message ||
      err?.response?.data?.data?.message ||
      err?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setLoading(false));
  }
};
export const reset_Password = (data, router) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await Axios.patch("/user/reset-password", data);

    const {
      data: {
        data: { message },
        status,
        success,
      },
    } = response;

    if (status === "success" && success) {
      toast.success(message);
    
       dispatch(setResetOtp(null));
      localStorage.removeItem("reset_otp",);
        dispatch(setRegisterEmail(null));
       localStorage.removeItem("verify_email");
      router.push(`/auth/login`);
    } else {
      throw new Error("Forget password request failed");
    }
  } catch (err) {
    const errorMsg =
      err?.response?.data?.message ||
      err?.response?.data?.data?.message ||
      err?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setLoading(false));
  }
};


export const logout = (router) => async (dispatch) => {
  const token = getTokenCookie();

  if (!token) {
    toast.error("User token not found. Please login first.");
    return;
  }

  dispatch(setLoading(true));

  try {
    const {
      data: {
        data: { message },
      },
    } = await Axios.post(
      "/user/logout",
      {}, // no request body
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Remove token cookie properly
    removeTokenCookie();

    // Clear user data
    dispatch(setUser(null));

    // Navigate to login page
    router.push("/auth/login");

    toast.success(message || "Logged out successfully");
  } catch (err) {
    const errorMsg =
      err?.response?.data?.message ||
      err?.response?.data?.data?.message ||
      err?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setLoading(false));
  }
};
