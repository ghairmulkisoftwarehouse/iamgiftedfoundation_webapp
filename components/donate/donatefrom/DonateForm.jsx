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
import { webAppBaseURL } from "@/config/api";
import paypalimg   from  '@/assets/images/paypalimg.png'
import Image from "next/image";
import { useRouter } from "next/navigation";






const DonateForm = () => { 
  const { user } = useSelector((state) => state.auth);    
   const dispatch=useDispatch();
      const router=useRouter();
     const token = getTokenCookie();
    //  const token = getTokenCookie();
       const searchParams = useSearchParams();
  const programId = searchParams.get("program");
  const pillerId = searchParams.get("piller");

const [accountType, setAccountType] = useState("");

const [isGuest, setIsGuest] = useState(false);
   const { createLoading,  } = useSelector((state) => state.donate);
  const isLoggedIn = !!user || !!token;
  // const [anonymous, setAnonymous] = useState(!isLoggedIn);
const [active, setActive] = useState('one-time');
  const [amount, setAmount] = useState(100);
  const [isCustom, setIsCustom] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("PAYPAL");
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
   amount,
    donationType: active === "one-time" ? "one_time" : "recurring",
    paymentMethod,
        anonymous: isGuest,

    targetType,
    ...(targetRef && { targetRef }),
    successURL: `${webAppBaseURL}/success`,
    cancelURL: `${webAppBaseURL}/cancel`, 
  };


    

    // console.log("Form submitted:", payload);

    dispatch(initiateDonation(payload,token));
    // Reset
    setAmount(100);
    // setPaymentMethod("");
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

  <label
    className={`flex items-center justify-between border rounded-md h-[60px] px-4 cursor-pointer transition
      ${paymentMethod === "PAYPAL" ? "border-black" : "border-gray-300"}
    `}
  >
    {/* Left side */}
    <div className="flex items-center gap-3">
      {/* Hidden native radio */}
      <input
        type="radio"
        name="payment"
        value="PAYPAL"
        checked={paymentMethod === "PAYPAL"}
        onChange={(e) => {
          setPaymentMethod(e.target.value);
          setErrors((prev) => ({ ...prev, paymentMethod: undefined }));
        }}
        className="hidden"
      />

      {/* Custom radio */}
      <div
        className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center
          ${paymentMethod === "PAYPAL" ? "border-black" : "border-gray-400"}
        `}
      >
        {paymentMethod === "PAYPAL" && (
          <div className="w-3 h-3 bg-black   rounded-full " />
        )}
      </div>

      <span className="text-sm font-medium">PayPal</span>
    </div>

    {/* Right side */}
    <Image
      src={paypalimg}
      alt="PayPal"
      className="w-[100px] object-contain"
    />
  </label>

  {errors.paymentMethod && (
    <p className="text-xs text-red-500">{errors.paymentMethod}</p>
  )}
</div>




<div className="md:col-span-2 flex flex-col gap-2.5">
  <h2 className="font-medium text-lg">Account Type</h2>

  <div className=" rounded-md overflow-hidden flex flex-col gap-2">
    {/* Donate as Guest */}
<label
  className={`flex items-center gap-3 px-4 h-[60px] rounded-md cursor-pointer border transition
        ${isGuest ? "border-black" : "border-gray-300"}
  `}
>
  <input
    type="checkbox" // Changed to checkbox
    checked={isGuest}     
    onChange={() => setIsGuest(!isGuest)} // Single source of truth
    className="hidden"
  />

  {/* Custom UI remains the same */}
  <div className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center
          ${isGuest ? "border-black" : "border-gray-400"}
    `}>
    {isGuest &&           <div className="w-3 h-3 bg-black   rounded-full " />
}
  </div>

  <span className="text-sm font-medium">Donate as guest</span>
</label>


    {/* Create New Account */}

    {!isLoggedIn && (

    <label
      className={`flex items-center gap-3 px-4 h-[60px] rounded-md  border cursor-pointer transition
        ${accountType === "ACCOUNT" ? "border-black" : "border-gray-300"}
      `}
      onClick={() => {
        setAccountType("ACCOUNT");
        router.push("/auth/register");
      }}
    >
      <input
        type="radio"
        name="accountType"
        value="ACCOUNT"
        checked={accountType === "ACCOUNT"}
        readOnly
        className="hidden"
      />

      <div
        className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center
          ${accountType === "ACCOUNT" ? "border-black" : "border-gray-400"}
        `}
      >
        {accountType === "ACCOUNT" && (
          <div className="w-3 h-3 bg-black rounded-full ml-[0.5px] mt-[1px]" />
        )}
      </div>

      <span className="text-sm font-medium">Create a new account</span>
    </label>
    )}
  </div>
</div>


    
      {/* Actions */}
      <div className="md:col-span-2 flex justify-end gap-3 pt-6">
        <button
          className="bg-black/40 w-[144px] py-1.5 rounded-full text-white cursor-pointer"
          onClick={() => setErrors({})}
        >
          Cancel
        </button>


         
            
       




  
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
