const ImpactShimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:space-y-4 w-full cursor-pointer">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="border border-black/10 w-full flex flex-col gap-3 px-5 py-4 rounded-[20px]
          bg-white "
        >
          {/* Icon shimmer */}
          <div className="w-[60px] h-[60px] bg-gray-200 rounded-full" />

          {/* Title shimmer */}
          <div className="h-6 w-3/4 bg-gray-200 rounded-md" />

          {/* Subtitle */}
          <div className="h-4 w-1/2 bg-gray-200 rounded-md" />

          {/* Programs title */}
          <div className="h-4 w-2/3 bg-gray-200 rounded-md mt-2" />

          {/* Program pills */}
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-6 w-24 bg-gray-200 rounded-full"
              />
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-2 mt-2">
            <div className="h-4 w-12 bg-gray-200 rounded-md" />
            <div className="h-5 w-16 bg-gray-200 rounded-md" />
          </div>

          {/* Button shimmer */}
          <div className="mt-auto pt-3">
            <div className="h-[50px] w-full bg-gray-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactShimmer;
