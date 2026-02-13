

import axios from "axios";



// development
export const webAppBaseURL = "http://localhost:3000/"


//production
// export const webAppBaseURL = "http://iamgiftedfoundation.vercel.app/"

// export const apiBaseURL = "http://localhost:5500"


export const baseURL = 'https://iamgfserver.devoptixtech.com';  
const Axios = axios.create({
   baseURL: `${baseURL}/api`,
  timeout: 10000,
   withCredentials: true, 


});
export default Axios;

