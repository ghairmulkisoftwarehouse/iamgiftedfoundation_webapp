'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { validateDonateForm } from "@/validations/donateValidation";
import DollarSvg from "@/assets/svg/DollarSvg";
import { useSelector,useDispatch } from "react-redux";
import { getTokenCookie } from "@/utils/authCookies";
import Link from "next/link";
import {initiateDonation} from '@/redux/actions/donateActions';
import devLog from '@/utils/logsHelper';
import ButtonClipLoader   from '@/components/global/buttonClipLoader/ButtonClipLoader';




const DonateForm = () => { 
  const { user } = useSelector((state) => state.auth);    
   const dispatch=useDispatch();
    
     const token = getTokenCookie();
       const searchParams = useSearchParams();
  const programId = searchParams.get("program");
  const pillerId = searchParams.get("piller");



   const { createLoading,  } = useSelector((state) => state.donate);
  const isLoggedIn = !!user || !!token;
  const [anonymous, setAnonymous] = useState(!isLoggedIn);
const [active, setActive] = useState('one-time');
  const [amount, setAmount] = useState(100);
  const [isCustom, setIsCustom] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});

  const handlePresetClick = (value) => {
    setAmount(value);
    setIsCustom(false);
    setErrors((prev) => ({ ...prev, donation: undefined }));
  };

  const handleCustomClick = () => {
    setAmount("");
    setIsCustom(true);
  };


 

  const handleSubmit = () => {
    const validationErrors = validateDonateForm({
      donation: amount,
      paymentMethod,
    });

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    let targetType = "standalone";
    let targetRef = "";

    if (programId) {
      targetType = "program";
      targetRef = programId;
    } else if (pillerId) {
      targetType = "piller";
      targetRef = pillerId;
    }

    const payload = {
      donation: amount,
          donationType: active === 'one-time' ? 'one_time' : 'recurring',


      paymentMethod,
      anonymous: anonymous,
      targetType, 
         ...(targetRef && { targetRef }),
    };

    

    console.log("Form submitted:", payload);

    dispatch(initiateDonation(payload));
    // Reset
    setAmount(100);
    setPaymentMethod("");
    setIsCustom(false);
    setErrors({});
  };

  return (
    <div className="w-full bg-[#F4F7F7] grid grid-cols-1 md:grid-cols-2 gap-3 border border-black/10 rounded-[22px] px-6 py-9">

      {/* Donation */}
         <div className="md:col-span-2 flex flex-col gap-2.5">
  <div className="  w-full xs:w-[359px] flex gap-2 px-1.5 py-1 h-[45px]  rounded-full bg-white">
      
      {/* One-Time Donation */}
      <button
        onClick={() => setActive('one-time')}
        className={`w-1/2 h-full rounded-full flex items-center justify-center text-xs xs:text-sm sm:text-[15px]  cursor-pointer transition-all duration-300 ease-in-out
          ${
            active === 'one-time'
              ? 'bg-black text-white shadow-sm'
              : 'bg-transparent text-black/70'
          }
        `}
      >
        <span className="mt-[-4px]">One-Time Donation</span>
      </button>

      {/* Recurring Donation */}
      <button
        onClick={() => setActive('recurring')}
        className={`w-1/2 h-full rounded-full flex items-center justify-center  cursor-pointer text-xs xs:text-sm sm:text-[15px]   transition-all duration-300 ease-in-out
          ${
            active === 'recurring'
              ? 'bg-black text-white shadow-sm'
              : 'bg-transparent text-black/70'
          }
        `}
      >
        <span className="mt-[-4px]">Recurring Donation</span>
      </button>

    </div>
    </div>

      <div className="md:col-span-2 flex flex-col gap-2.5">
        <h2 className="font-medium text-lg">Your Donation:</h2>

        <div className="relative h-[50px]">
          <div className="bg-black w-[40px] h-[40px] flex items-center justify-center rounded-full absolute top-[5px] left-2">
            <DollarSvg />
          </div>

          <input
            type="text"
            value={amount}
            readOnly={!isCustom}
            onChange={(e) => isCustom && setAmount(e.target.value)}
            className="outline-none w-full rounded-full pl-14 pr-3 h-full bg-light-cyan text-sm sm:text-[15px]"
          />
        </div>

        {errors.donation && (
          <p className="text-xs text-red-500">{errors.donation}</p>
        )}

        <div className="flex flex-wrap gap-2.5">
          {[20, 50, 100, 200].map((value) => (
            <button
              key={value}
              onClick={() => handlePresetClick(value)}
              className={`border px-7 py-1 rounded-full transition-colors duration-500 cursor-pointer text-sm sm:text-[15px]
                ${amount === value && !isCustom ? "bg-black text-white" : "border-black text-black"}
              `}
            >
              {value}
            </button>
          ))}

          <button
            onClick={handleCustomClick}
            className={`border px-7 py-1 rounded-full transition-colors duration-500 cursor-pointer text-sm sm:text-[15px]
              ${isCustom ? "bg-black text-white" : "border-black text-black"}
            `}
          >
            Custom
          </button>
        </div>
      </div>
       
      {/* Payment Method */}
      <div className="md:col-span-2 flex flex-col gap-2.5">
        <h2 className="font-medium text-lg">Select Payment Method</h2>

        <div className="flex flex-wrap gap-4">
          {["PAYPAL", "STRIPE"].map((method) => (
            <label key={method} className="flex items-center gap-1.5 cursor-pointer text-sm sm:text-[15px]">
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => {
                  setPaymentMethod(e.target.value);
                  setErrors((prev) => ({ ...prev, paymentMethod: undefined }));
                }}
                className="accent-black"
              />
              {method === "PAYPAL" ? "PayPal" : "Stripe"}
            </label>
          ))}
        </div>

        {errors.paymentMethod && (
          <p className="text-xs text-red-500">{errors.paymentMethod}</p>
        )}
      </div>



      {/* Anonymous Toggle */}
      {!isLoggedIn && (
        <div className="md:col-span-2 flex items-center gap-2 ">
          <input
            type="checkbox"
            checked={anonymous}
            onChange={(e) => setAnonymous(e.target.checked)}
            className="accent-black"
          />
          <span className="text-sm sm:text-[15px]">Donate anonymously</span>
        </div>
      )}

      {/* Actions */}
      <div className="md:col-span-2 flex justify-end gap-3 pt-6">
        <button
          className="bg-black/40 w-[144px] py-1.5 rounded-full text-white cursor-pointer"
          onClick={() => setErrors({})}
        >
          Cancel
        </button>


         
            
       

  {!isLoggedIn && (
    <Link href={'/auth/login'}>
      <button
         
          className="btn-animated bg-mint-cyan border border-transparent group cursor-pointer w-[170px] text-[13px] sm:text-sm  relative overflow-hidden hover:border-[#8bc9c8]"
        >
          <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-[1000px] group-hover:h-[44px]"></span>
          <span className="btn-animated-text text-black font-semibold group-hover:text-gray-900 flex items-center justify-center gap-2">
          Register / Login
        </span>
      </button>
    </Link>
  )}



  
      <button
  onClick={handleSubmit}
  disabled={createLoading}
  className={`btn-submit w-[144px] relative overflow-hidden group
    ${createLoading ? "bg-gray-200 cursor-not-allowed" : "bg-black hover:bg-gray-200 cursor-pointer"}
  `}
>
  {/* Expanding hover effect */}
  <span className="btn-submit-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500"></span>

  {/* Button Text */}
  <span className={`btn-submit-text relative z-10 font-medium   flex items-center
    ${createLoading ? "text-black font-semibold" : "text-white group-hover:text-black"}
  `}>
    {createLoading ? (
      <>
        Donating… <ButtonClipLoader size={10} color="#000000" />
      </>
    ) : (
      "Donate Now"
    )}
  </span>
</button>

      </div>
    </div>
  );
};

export default DonateForm;
