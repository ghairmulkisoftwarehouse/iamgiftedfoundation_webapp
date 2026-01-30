

import axios from "axios";



// development
// export const apiBaseURL = "http://localhost:5500"
export const webAppBaseURL = "http://localhost:3000"

export const baseURL = 'http://54.162.89.235:4750';  
const Axios = axios.create({
   baseURL: `${baseURL}/api`,
  timeout: 10000,
   withCredentials: true, 


});
export default Axios;

