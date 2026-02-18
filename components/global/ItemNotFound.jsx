
'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { IoMdRefresh } from "react-icons/io";
import { IoReturnDownBack } from "react-icons/io5";



const ItemNotFound = ({ message = "Item not found" }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4 bg-white">
      <FiSearch className="text-6xl text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{message}</h2>
      <p className="text-gray-500 mb-6">
        We couldnt find what you were looking for. Try searching again or go back.
      </p>

<div className='flex justify-center  gap-2.5 items-center'>





 <button 
    onClick={() => window.location.reload()}

 className="btn-animated bg-polar-mist  h-[38px] group relative overflow-hidden   cursor-pointer">
      <span className="btn-animated-hover bg-gray-200 group-hover:w-40 group-hover:h-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
      <span className="btn-animated-text text-black group-hover:text-gray-900 relative z-10   text-[15px] font-semibold  mx-auto mt-[-2px] flex  items-center gap-0.5 ">
      <IoMdRefresh className=""/>
        Refresh
      </span>
    </button>
       

      <button
         onClick={() => router.back()}
       className="btn-animated bg-mint-cyan border h-[38px] border-transparent group cursor-pointer relative    overflow-hidden hover:border-[#8bc9c8]">
    <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-44 group-hover:h-44"></span>
    <span className="btn-animated-text text-gray-800 group-hover:text-gray-900   text-[15px] font-semibold  mx-auto mt-[-2px] flex  items-center  gap-1">
    <IoReturnDownBack className=" text-2xl"/>
         Go Back
    </span>
  </button>

</div>

   
      {/* <button
     
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
      
      </button> */}
    </div>
  );
};

export default ItemNotFound;
