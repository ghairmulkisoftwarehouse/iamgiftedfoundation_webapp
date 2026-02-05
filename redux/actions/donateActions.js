import Axios from "@/config/api";

import toast from "react-hot-toast";
import { setError,setCreateLoading} from "../reducers/donateSlice";

export const initiateDonation  = (data, router) => async (dispatch) => {
  dispatch(setCreateLoading(true));

  try {
    const response = await Axios.post("/donation/initiate", data);
    const {
      data: {
        data: { message, doc },
        status,
        success,
      },
    } = response;

    if (status === "success" && success) {
     
      toast.success(message);
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.message ||
   
      error?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setCreateLoading(false));
  }
};