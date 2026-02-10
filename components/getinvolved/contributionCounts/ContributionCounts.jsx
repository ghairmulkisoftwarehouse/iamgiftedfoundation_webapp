'use client'
import { useState, useEffect,useRef } from "react";
import {  bison } from '@/components/fonts/fonts';
import Link from "next/link";
import ArrowUpSvg  from '@/assets/svg/ArrowUpSvg';
import {initiateDonation} from '@/redux/actions/donateActions'
import { useDispatch,useSelector } from "react-redux";
import ButtonClipLoader   from '@/components/global/buttonClipLoader/ButtonClipLoader';
import { webAppBaseURL } from "@/config/api";


import Image from "next/image";


const ContributionCounts = () => {
    
    const dispatch=useDispatch();
const [active, setActive] = useState('one-time');
  const [activeAmount, setActiveAmount] = useState(50); 
   const { createLoading,  } = useSelector((state) => state.donate);


  const amounts = [50, 100, 150, 200];
 const handleSubmit = (e) => {
  e.preventDefault();

  const payload = {
    targetType: 'standalone',
    donationType: active === 'one-time' ? 'one_time' : 'recurring',
    amount: activeAmount,
    anonymous: true,
    paymentProvider: 'PAYPAL',
        successURL: `${webAppBaseURL}/success`,
    cancelURL: `${webAppBaseURL}/cancel`, 
  };

  dispatch(initiateDonation(payload));
};


  return (
    
    <div 

    className="flex flex-col gap-2 w-full h-auto  
 relative  ">
    {/* box background */}
      

       {/* main title */}
    <div className=" w-full  flex justify-center items-center pt-12      px-5  md:px-3.5  md:container mx-auto">
            <div className="flex flex-col gap-5  w-full relative    ">
            <div className=" flex flex-col gap-1  ">

              <h2
                className={`
                    text-black
                    text-[50px]   leading-14 lg:leading-tight lg:text-[60px] xl:text-[80px]  pt-9
                    text-center

                    ${bison.className}
                `}
                >
             Donate
               
              
               
                </h2>
           
              <div className="   w-full px-3  sm:px-0  sm:w-[80%]  lg:w-[65%] mx-auto      ">
            <p className="text-[#030F0CCC]  text-sm sm:text-base md:text-lg xl:text-[20px] text-center font-thin  ">
Support our mission. Every contribution counts.
            </p>
                </div>
             

            </div>

              <div className="  w-full xs:w-[359px] flex gap-2 px-1.5 py-1 h-[45px] mx-auto rounded-full bg-white">
      
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

    <div className=" flex flex-col gap-4  w-full  md:w-4/5  lg:w-2/3 mx-auto">
       <h2  className="font-semibold text-lg sm:text-xl lg:text-[20px]">One-Time Donation</h2>
   <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 font-semibold text-lg md:text-xl   cursor-pointer">
      {amounts.map((amount) => (
        <button
          key={amount}
          onClick={() => setActiveAmount(amount)}
          className={`h-[103px] rounded-[12px] flex justify-center items-center transition-all duration-300 ease-in-out
            ${
              activeAmount === amount
                ? 'bg-black text-white shadow-md scale-[1.02]'
                : 'bg-white text-black hover:bg-black/5'
            }
          `}
        >
          <h2>${amount}</h2>
        </button>
      ))}
    </div>

    <div className=" flex justify-center items-center  w-full">

       <button
  onClick={handleSubmit}
  disabled={createLoading} 
  className="btn-animated bg-mint-cyan border border-transparent group cursor-pointer w-[200px] text-[13px] sm:text-sm md:text-base relative overflow-hidden hover:border-[#8bc9c8]"
>
  <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-[1000px] group-hover:h-[44px]"></span>
  <span className="btn-animated-text text-black font-semibold group-hover:text-gray-900 flex items-center justify-center gap-2">
    {createLoading ? (
      <>
        Donating… <ButtonClipLoader size={10} color="#000000" />
      </>
    ) : (
      "Donate"
    )}
  </span>
</button>


    </div>

    </div>


               

              

           
          


            </div>
        </div>

     


 
    </div>
  )
}

export default ContributionCounts