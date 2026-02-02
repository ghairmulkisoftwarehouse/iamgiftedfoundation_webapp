import React from "react";

const DetailShimmer = () => {
  return (
    <div className="w-full flex flex-col gap-6 ">

      {/* Image shimmer */}
      <div className="w-full h-[300px] lg:h-[451px] rounded-[22px] bg-gray-200" />

      {/* Date & Location */}
      <div className="flex flex-wrap gap-4">
        <div className="h-4 w-40 bg-gray-200 rounded" />
        <div className="h-4 w-52 bg-gray-200 rounded" />
      </div>

      {/* Program Purpose */}
      <div className="flex flex-col gap-3">
        <div className="h-8 w-64 bg-gray-300 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Who It Serves */}
      <div className="flex flex-col gap-3">
        <div className="h-8 w-56 bg-gray-300 rounded" />
        <div className="flex flex-wrap gap-4">
          <div className="h-5 w-40 bg-gray-200 rounded" />
          <div className="h-5 w-44 bg-gray-200 rounded" />
          <div className="h-5 w-64 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Outcomes & Stats */}
      <div className="flex flex-col gap-3">
        <div className="h-8 w-60 bg-gray-300 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-11/12 bg-gray-200 rounded" />
        </div>
      </div>

    </div>
  );
};

export default DetailShimmer;
