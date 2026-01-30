// redux/actions/authActions.js
import Axios from '@/config/api';
import toast from "react-hot-toast";
import { setUser, setLoading, setError } from '../reducers/authSlice';

export const login = (data,  router) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await Axios.post('/user/login', data);
    const { message, doc } = response.data.data;
    toast.success(message);
    dispatch(setUser(doc));
   router.push('/account/donation-history');
    dispatch(setError(false));
  } catch (err) {
    console.error('Login error:', err);

    const errorMessage =
      err?.response?.data?.data?.message ||
      err?.response?.data?.message ||
      err?.message ||
      'Something went wrong.';

    toast.error(errorMessage);
    dispatch(setError(errorMessage));
  } finally {
    dispatch(setLoading(false));
  }
};
