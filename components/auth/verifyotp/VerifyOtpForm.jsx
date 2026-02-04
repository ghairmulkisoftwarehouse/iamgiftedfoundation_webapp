'use client';

import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OtpInput from 'react-otp-input';
import { bison } from '@/components/fonts/fonts';
import FoundationSvg from '@/assets/svg/FoundationSvg';
import { useSelector,useDispatch } from 'react-redux';
import Link from 'next/link';
import { verify_OTP, resend_OTP } from '@/redux/actions/authActions';
import ButtonClipLoader from '@/components/global/buttonClipLoader/ButtonClipLoader';
import {setRegisterEmail,setType} from "@/redux/reducers/authSlice";
import devLog from '@/utils/logsHelper';

const VerifyOtpForm = () => {
  const router = useRouter();
 const dispatch=useDispatch();
  const { loading, registerEmail,resendingLoading,type } = useSelector((state) => state.auth);

  const [otp, setOtp] = useState('');
  const [otpFocusedIndex, setOtpFocusedIndex] = useState(null);
  const [otpError, setOtpError] = useState('');


  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

 
  // Countdown effect
useEffect(() => {
  if (resendTimer === 0) {
    setCanResend(true); 
    return;
  }

  const timer = setTimeout(() => {
    setResendTimer((prev) => prev - 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [resendTimer]);





const forgetText =
  type ||
  (typeof window !== "undefined"
    ? localStorage.getItem("forget_password")
    : null);



const email =
  registerEmail ||
  (typeof window !== "undefined"
    ? localStorage.getItem("verify_email")
    : null);


const validateForm = () => {
  // Email first
  if (!email) {
    toast.error("Email is missing. Please restart the verification process.");
    return false;
  }

  // OTP empty
  if (!otp.trim()) {
    setOtpError("OTP is required");
    return false;
  }

  // OTP format
  if (!/^\d{6}$/.test(otp)) {
    setOtpError("OTP must be exactly 6 digits (numbers only)");
    return false;
  }

  setOtpError("");
  return true;
};

const handleSubmit = () => {
  if (!validateForm()) return;

  const data = {
    email,
    otp,
    type: forgetText ? forgetText : "email",
  };

  devLog("email this is", data);
  dispatch(verify_OTP(data, router));
};


  const handleResend = () => {
  if (!canResend || resendingLoading) return; 

  setResendTimer(30);
  setCanResend(false);

  const data = {
    identifier:email ,
    type: forgetText ? forgetText : "email",
  };

  devLog('Resend OTP data:', data);

  dispatch(resend_OTP(data));
};

  return (
    <div className="flex flex-col justify-center gap-1.5 w-full md:h-screen px-3.5 sm:px-0">
      <div className="w-full sm:w-[80%] md:w-[70%] px-6 pt-6 pb-6 lg:px-0 lg:pt-0 border-0 rounded-[22px] lg:w-3/4 xl:w-[80%] mx-auto">
   <Link href={'/'}>

        <FoundationSvg 
          className="w-auto h-auto md:w-[230px] md:h-[60px] block lg:hidden mx-auto mb-10 sm:mb-3.5  cursor-pointer" 
        />
            </Link>
        <h2
          className={`text-black text-4xl sm:text-[46px] lg:text-[55px] ${bison.className}`}
        >
          Enter Verification Code
        </h2>

        <p className="text-[#030F0CCC] font-medium text-sm lg:text-base">
          Enter the 6-digit code we sent to your email address.
        </p>

        <div className="flex flex-col gap-4 mt-5">
          <OtpInput
            value={otp}
            onChange={(value) => {
              setOtp(value);
              setOtpError('');
            }}
            numInputs={6}
            isInputNum
            containerStyle={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '0.75rem',
              width: '100%',
            }}
            renderInput={(props, index) => (
              <input
                {...props}
                onFocus={() => setOtpFocusedIndex(index)}
                onBlur={() => setOtpFocusedIndex(null)}
                style={{
                  width: '100%',
                  height: '50px',
                   borderRadius: '10px',
                  border: otpError
                    ? '1px solid #F87171'
                    : otp.length > index || otpFocusedIndex === index
                    ? '1px solid #367AFF'
                    : '1px solid #D9D9D9',
                  fontSize: '18px',
                  color: '#252C62',
                  textAlign: 'center',
                  outline: 'none',
                  backgroundColor: '#fff',
                }}
              />
            )}
          />

          {otpError && (
            <p className="text-red-500 text-sm">{otpError}</p>
          )}

      <button
            onClick={handleSubmit}
            disabled={loading} 
            className={`btn-submit bg-black hover:bg-gray-200 w-full group h-[50px] text-sm sm:text-[17px] relative overflow-hidden ${
              loading ? "cursor-not-allowed bg-gray-200 " : "cursor-pointer"
            }`}
          >
            {/* Hover effect */}
            <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
          
            {/* Button text or loader */}
            <span className={`btn-submit-text  ${loading ? ' text-black font-semibold' :'text-white'}  group-hover:text-black relative z-10 font-medium flex items-center justify-center gap-2`}>
             {loading ? (
      <>
        Verifying... <ButtonClipLoader size={14} color="#000000" />
      </>
    ) : (
      "Verify"
    )}
            </span>
          </button>
         
         
           <div className="flex justify-start text-xs sm:text-sm">
          
  <div className="text-sm text-[#030F0CCC] flex items-center gap-1">
    Didn’t receive the code?{" "}
    {canResend ? (
      <button
        type="button"
        className="text-[#367AFF] font-medium hover:underline transition cursor-pointer flex items-center gap-1"
        onClick={handleResend}
        disabled={resendingLoading}
      >
        {resendingLoading ? (
          <ButtonClipLoader size={14} color="#000000" />
      
        ) : (
          "Resend"
        )}
      </button>
    ) : (
      <span>{resendTimer}</span>
    )}
  </div>
                   
                    </div>
        </div>

                 
      </div>
    </div>
  );
};

export default VerifyOtpForm;
