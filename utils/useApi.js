"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Axios from '@/config/api'
import { setUser } from "@/redux/reducers/authSlice";
import { removeTokenCookie } from "./authCookies";

export const useApi = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const interceptor = Axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error?.response?.status;

        if ([400, 401, 403].includes(status) && !isLoggingOut) {
          setIsLoggingOut(true);

          removeTokenCookie();
          dispatch(setUser(null));
          router.replace("/auth/login");
        }

        return Promise.reject(error);
      }
    );

    return () => Axios.interceptors.response.eject(interceptor);
  }, [dispatch, router, isLoggingOut]);

  return Axios;
};
