import Axios from "@/config/api";
import toast from "react-hot-toast";
import { setError, setCreateLoading } from "../reducers/donateSlice";
import { getTokenCookie } from "@/utils/authCookies";

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





export const initiateTicket = (id, data) => async (dispatch, getState) => {
  dispatch(setCreateLoading(true));

  try {
      const token = getTokenCookie(); 

    const response = await Axios.post(
      `/event/${id}/buy-ticket`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const {
      data: { status, success, data: ticketData },
    } = response;

    if (status === "success" && success) {
      toast.success(ticketData?.message);

      if (ticketData?.approvalUrl) {
        window.location.href = ticketData.approvalUrl;
      } else {
        throw new Error("Payment approval URL not found");
      }
    } else {
      throw new Error(ticketData?.message || " ticket initiation failed");
    }
  } catch (error) {
    const errorMsg =
        error?.response?.data?.data?.message ||
          error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setCreateLoading(false));
  }
};




export const initiateSponsorship = (data) => async (dispatch, getState) => {
  dispatch(setCreateLoading(true));

  try {
      const token = getTokenCookie(); 

    const response = await Axios.post(
      `/event/sponsorship/initiate`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const {
      data: { status, success, data: sponsorshipData },
    } = response;

    if (status === "success" && success) {
      toast.success(sponsorshipData?.message);

      if (sponsorshipData?.approvalUrl) {
        window.location.href = sponsorshipData.approvalUrl;
      } else {
        throw new Error("Payment approval URL not found");
      }
    } else {
      throw new Error(sponsorshipData?.message || " sponsorshipData initiation failed");
    }
  } catch (error) {
    const errorMsg =
      error?.response?.data?.data?.message ||
          error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    dispatch(setError(errorMsg));
    toast.error(errorMsg);
  } finally {
    dispatch(setCreateLoading(false));
  }
};

