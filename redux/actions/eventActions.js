import Axios from "@/config/api";
import toast from "react-hot-toast";
import { setCreateLoading, setError } from "../reducers/eventSlice";
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
      router.push("/events"); // navigate after success
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
