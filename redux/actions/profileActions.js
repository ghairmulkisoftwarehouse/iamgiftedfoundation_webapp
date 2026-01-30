import Axios from "@/config/api";
import {
  setDocs,
  setLoading,
  setError,
} from "../reducers/profileSlice";

export const getMyProfile = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const res = await Axios.get("/user/my-profile");
    dispatch(setDocs(res.data.data)); 
    dispatch(setError(null));
  } catch (err) {
    const msg =
      err?.response?.data?.message ||
      err?.message ||
      "Failed to load profile";

    dispatch(setError(msg));
  } finally {
    dispatch(setLoading(false));
  }
};
