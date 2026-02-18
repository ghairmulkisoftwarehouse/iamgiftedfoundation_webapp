

import Axios from "@/config/api";

import toast from "react-hot-toast";
import { setError, setLoading} from "../reducers/profileSlice";
import {getTokenCookie,removeTokenCookie } from "@/utils/authCookies";

export const updateProfile = (data,router) => async (dispatch, getState) => {
  const token = getTokenCookie();
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));

    const {
      data: {
        data: { doc, message },
      },
    } = await Axios.patch('/user/update-my-profile', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(message);
    if (data.password) {
      removeTokenCookie(); 
      router.push('/auth/login');
    }

  } catch (err) {
    const errorMsg =
      err?.response?.data?.data?.message ||
      err?.response?.data?.message ||
      err.message ||
      'Something went wrong.';
    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setLoading(false));
  }
};




export const updateImageProfile = (data) => async (dispatch, getState) => {
  const token = getTokenCookie();
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));

    const {
      data: {
        data: { doc, message },
      },
    } = await Axios.patch('/user/update-my-profile-image', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(message);

  } catch (err) {
    const errorMsg =
      err?.response?.data?.data?.message ||
      err?.response?.data?.message ||
      err.message ||
      'Something went wrong.';
    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setLoading(false));
  }
};