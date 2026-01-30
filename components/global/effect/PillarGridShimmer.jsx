const PillarGridShimmer = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:space-y-4 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-[250px] sm:h-[300px] border border-black/10 rounded-[24px]
          px-5 py-5 bg-white overflow-hidden relative animate-pulse"
        >
          {/* shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent
            -translate-x-full animate-[shimmer_1.5s_infinite]" />

          <div className="flex flex-col justify-between h-full relative z-10">
            {/* title + paragraph */}
            <div className="flex flex-col gap-2 pr-3 xl:pr-8">
              <div className="h-5 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
            </div>

            {/* icon placeholder */}
            <div className="flex justify-end w-full">
              <div className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PillarGridShimmer;
