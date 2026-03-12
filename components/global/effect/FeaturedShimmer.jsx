import React from "react";

const FeaturedShimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 w-full">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="w-full md:w-[48%] lg:w-[31%] border border-black/20 rounded-[20px] p-3 flex flex-col gap-3 h-full animate-pulse"
        >
          {/* Date */}
          <div className="h-4 w-32 bg-gray-200 rounded"></div>

          {/* Title */}
          <div className="space-y-2">
            <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-5 w-1/2 bg-gray-200 rounded"></div>
          </div>

          {/* Image */}
          <div className="w-full h-[200px] sm:h-[236px] bg-gray-200 rounded-[20px]"></div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>

          {/* Button */}
          <div className="flex justify-end mt-auto">
            <div className="h-10 w-[146px] bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedShimmer;