import React from "react";

const ImpactPillerShimmer = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="border border-black/10 w-full flex flex-col gap-2 px-5 py-2.5 relative rounded-[20px] bg-white animate-pulse"
        >
          {/* Icon */}
          <div className="w-[60px] h-[60px] bg-gray-200 rounded-full flex justify-center items-center" />

          {/* Title */}
          <div className="h-6 w-3/4 bg-gray-200 rounded-md mt-2" />

          {/* Subtitle */}
          <div className="flex flex-col gap-1 mt-1">
            <div className="h-4 w-1/2 bg-gray-200 rounded-md" />
          </div>

          {/* Programs */}
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="h-4 w-1/2 bg-gray-200 rounded-md" />

            <div className="flex flex-wrap gap-2 mt-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-20 bg-gray-200 rounded-full"
                />
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-2 pt-2.5">
              <div className="h-4 w-12 bg-gray-200 rounded-md" />
              <div className="h-4 w-8 bg-gray-200 rounded-md" />
            </div>
          </div>

          {/* Button */}
          <div className="w-full mt-auto pt-3">
            <div className="h-[50px] w-full bg-gray-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactPillerShimmer;
