import Axios from "@/config/api";
import toast from "react-hot-toast";
import { setCreateLoading, setError } from "../reducers/eventSlice";
import { setDeleteLoading } from "../reducers/registerEventSlice";

import { getTokenCookie } from "@/utils/authCookies";

export const register_event = (id, data, router) => async (dispatch) => {
  dispatch(setCreateLoading(true));

  try {
    const token = getTokenCookie(); 

    const response = await Axios.post(
      `/event/register-or-waitlist/${id}`, 
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const {
      data: {
        data: { message, doc },
        status,
        success,
      },
    } = response;

    if (status === "success" && success) {
      toast.success(message);
      router.push("/events"); 
    } else {
      throw new Error("Registration failed");
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.message ||
      error?.response?.data?.data?.message ||
      error?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setCreateLoading(false));
  }
};





export const delete_Event = (id) => async ( dispatch ,) => {
    try {
        dispatch(setDeleteLoading(true));
    const token = getTokenCookie(); 
    if (!token) throw new Error("User token not found.");
        const {
      data: {
        data: {  message },
      },
    } = await Axios.delete(`/event/cancel-registration/${id}`,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
        dispatch(setDeleteLoading(false));
        toast.success(message);
    } catch (err) {
        dispatch(setDeleteLoading(false));
        console.log('Delete Category error' , err);
        toast.error(err?.response?.data?.message || err?.message || 'Something went wrong.');
    }
}