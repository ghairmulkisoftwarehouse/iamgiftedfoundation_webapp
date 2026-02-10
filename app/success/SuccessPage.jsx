"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react"; 

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="flex flex-col w-fit items-center bg-white px-6 py-8 rounded-2xl shadow-sm">

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute inset-0 rounded-full bg-green-400 blur-xl"
          />

          <Check className="w-10 h-10 text-green-600 z-10" />
        </motion.div>

        <h1 className="   text-2xl md:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-2">
          Payment Successful!
        </h1>

        <p className="text-gray-500  text-sm md:text-base xl:text-lg text-center max-w-md mb-8">
          Thank you for your donation. Your support helps us continue our mission.
         
        </p>

        {/* Transaction Summary */}
        {/* <div className="w-full max-w-sm bg-gray-50 border border-gray-200   text-[13px] md:text-[15px] xl:text-base rounded-2xl p-6 mb-8">
          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Amount Paid</span>
            <span className="font-bold text-gray-900">$50.00</span>
          </div>
          <div className="flex justify-between mb-3">
            <span className="text-gray-500">Status</span>
            <span className="text-green-600 font-medium">Completed</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Date</span>
            <span className="text-gray-900">Feb 10, 2026</span>
          </div>
        </div> */}

        {/* Action Buttons */}
       {/* Action Buttons */}
<div className="flex flex-col gap-3 w-full max-w-sm print:hidden">


  <Link
    href="/"
    className="w-full py-4 bg-black text-white text-center rounded-full font-semibold hover:bg-gray-800 transition"
  >
  
    Return to Home
  </Link>

  

  {/* <button
    onClick={() => window.print()}
    className="w-full py-4 bg-white border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition"
  >
    Print Receipt
  </button> */}
</div>

      </div>
    </div>
  );
}
