import Axios from "@/config/api";
import toast from "react-hot-toast";
import { setError, setCreateLoading } from "../reducers/donateSlice";

export const initiateDonation = (data, token) => async (dispatch) => {
  dispatch(setCreateLoading(true));

  try {
    // Build Axios config conditionally
    const config = token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : {};

    const response = await Axios.post("/donation/initiate", data, config);

    const {
      data: { status, success, data: donationData },
    } = response;

    if (status === "success" && success) {
      toast.success(donationData.message || "Donation initiated");

      if (donationData?.approvalUrl) {
        window.location.href = donationData.approvalUrl;
      } else {
        throw new Error("Payment approval URL not found");
      }
    } else {
      throw new Error(donationData?.message || "Donation initiation failed");
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

