
const ProgramShimmer = () => {
  return (
    <div className="bg-white border border-[#0000002E] rounded-[22px] flex flex-col gap-3.5 h-fit pb-6 animate-pulse">
      
      {/* Header shimmer */}
      <div className="h-[70px] bg-gray-200 rounded-[22px] flex items-center px-4">
        <div className="h-5 w-40 bg-gray-300 rounded-md"></div>
      </div>

      {/* Program list shimmer */}
      <div className="flex flex-col gap-2 w-full px-3.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="border border-[#0000002E] px-3 py-3.5 flex justify-between items-center rounded-[15px]"
          >
            {/* Program name */}
            <div className="h-4 w-32 bg-gray-300 rounded-md"></div>

            {/* Arrow icon shimmer */}
            <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProgramShimmer;
