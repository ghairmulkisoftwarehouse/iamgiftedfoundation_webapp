"use server";

import { baseURL } from "./api";

// fetcher function
const fetcher = async (url, options) => {
  try {
    const response = await fetch(`${baseURL}/api${url}`, options);

    const responsePayload = await response.json();
    const responseStatus = response.status;

    return {
      responsePayload,
      statusCode: responseStatus,
    };
  } catch (error) {
    console.log(url);
    console.log(error);
    return {
      statusCode: 500,
      responsePayload: {
        success: false,
        data: {
          message: "Internal server error!!"
        }
      },
    };
  }
};


// GET method

const get = async (url, config = {}) => {

  const requestOptions = {
    method: "GET",
    cache: config.cache || "no-store",
 
  };

  const response = await fetcher(url, requestOptions);
  return response;
};


export { get };
