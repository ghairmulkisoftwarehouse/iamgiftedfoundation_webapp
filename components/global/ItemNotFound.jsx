
'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const ItemNotFound = ({ message = "Item not found" }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4 bg-white">
      <FiSearch className="text-6xl text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{message}</h2>
      <p className="text-gray-500 mb-6">
        We couldnt find what you were looking for. Try searching again or go back.
      </p>
      <button
        onClick={() => router.back()}
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default ItemNotFound;
