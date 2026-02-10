"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react"; 

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="flex flex-col w-fit items-center bg-white px-6 py-8 rounded-2xl shadow-sm">

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute inset-0 rounded-full bg-red-400 blur-xl"
          />

          <X className="w-10 h-10 text-red-600 z-10" />
        </motion.div>

        {/* Text Content */}
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-2">
          Payment Canceled
        </h1>

        <p className="text-gray-500 text-sm md:text-base xl:text-lg text-center max-w-md mb-8">
          Your payment was not completed.You can try again or return to the home page.
        </p>

        {/* Optional Info Card */}
       

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-sm print:hidden">
          <Link
            href="/"
            className="w-full py-4 bg-black text-white text-center rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Return to Home
          </Link>


        </div>

      </div>
    </div>
  );
}
