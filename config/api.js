

import axios from "axios";



// development
// export const webAppBaseURL = "http://localhost:3000/"


//production
export const webAppBaseURL = "https://iamgiftedfoundation.org/"

// export const apiBaseURL = "http://localhost:5500"


export const baseURL = 'https://server.iamgiftedfoundation.org';  
const Axios = axios.create({
   baseURL: `${baseURL}/api`,
  timeout: 20000,
   withCredentials: true, 


});




export default Axios;

