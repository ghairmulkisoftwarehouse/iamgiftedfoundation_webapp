import React from "react";

const ProgramListShimmer = () => {
  return (
    <div className="flex flex-col gap-6 w-full px-4 md:px-3.5 md:container mx-auto relative z-10">

      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-6 p-6 rounded-[24px] bg-white shadow-md animate-pulse"
        >

          {/* LEFT CONTENT */}
          <div className="w-full md:w-6/12 flex flex-col gap-4">

            {/* Title */}
            <div className="h-6 w-3/4 bg-gray-200 rounded"></div>

            {/* Pillar Tag */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-6 w-40 bg-gray-200 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <div className="h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-3 w-4/6 bg-gray-200 rounded"></div>
            </div>

            {/* Impact */}
            <div className="flex items-center gap-3">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-10 bg-gray-200 rounded"></div>
            </div>

            <div className="border-b border-gray-200"></div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">

              {/* Donor Avatars */}
              <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[32px] h-[32px] rounded-full bg-gray-200"
                  ></div>
                ))}
              </div>

              {/* Button */}
              <div className="w-[140px] h-[40px] bg-gray-200 rounded-full"></div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-6/12">
            <div className="w-full h-[260px] md:h-[300px] bg-gray-200 rounded-[22px]"></div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default ProgramListShimmer;