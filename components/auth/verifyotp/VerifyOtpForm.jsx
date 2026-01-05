'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OtpInput from 'react-otp-input';
import { bison } from '@/components/fonts/fonts';
import FoundationSvg from '@/assets/svg/FoundationSvg';
import Link from 'next/link';

const VerifyOtpForm = () => {
  const router = useRouter();

  const [otp, setOtp] = useState('');
  const [otpFocusedIndex, setOtpFocusedIndex] = useState(null);
  const [otpError, setOtpError] = useState('');

  const validateOtp = () => {
    if (!otp.trim()) {
      setOtpError('OTP is required');
      return false;
    }

    if (!/^\d{6}$/.test(otp)) {
      setOtpError('OTP must be exactly 6 digits');
      return false;
    }

    setOtpError('');
    return true;
  };

  const handleSubmit = async () => {
    if (!validateOtp()) return;

    // API call goes here
    console.log('OTP Verified:', otp);

    // Redirect after successful verification
    router.push('/auth/reset-password');
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
            className="btn-submit bg-black hover:bg-gray-200 w-full group cursor-pointer h-[50px] text-sm sm:text-[17px] relative overflow-hidden"
          >
            <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
            <span className="btn-submit-text text-white group-hover:text-black relative z-10 font-medium">
              Verify
            </span>
          </button>

           <div className="flex justify-center text-xs sm:text-sm">
                    <p className="text-[#030F0CCC]">
                       Didn’t receive the code?
                        <Link href="/auth/register">
                        <span className="font-semibold cursor-pointer"> Resend</span>
                        </Link>
                    </p>
                    </div>
        </div>

                 
      </div>
    </div>
  );
};

export default VerifyOtpForm;
