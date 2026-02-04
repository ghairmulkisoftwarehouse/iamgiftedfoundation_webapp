// utils/fetcher.js
import Axios from "@/config/api";
import { getTokenCookie } from "./authCookies";

const fetcher = async (url) => {
  const token = getTokenCookie();

 
  const config = token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : {};

      const response = await Axios.get(url, config);
  return response.data; 

};

export default fetcher;
