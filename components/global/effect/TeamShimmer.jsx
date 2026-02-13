import React from "react";

const TeamShimmer = ({ count = 8 }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="border border-black/10 p-3 rounded-[16px] flex flex-col gap-3 animate-pulse"
        >
          {/* Image shimmer */}
          <div className="w-full h-[274px] rounded-[16px] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 shimmer" />
          </div>

          {/* Text shimmer */}
          <div className="flex flex-col gap-2 w-full px-2">
            <div className="h-[18px] w-3/4 bg-gray-200 rounded-md relative overflow-hidden">
              <div className="absolute inset-0 shimmer" />
            </div>

            <div className="h-[14px] w-1/2 bg-gray-200 rounded-md relative overflow-hidden">
              <div className="absolute inset-0 shimmer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamShimmer;
