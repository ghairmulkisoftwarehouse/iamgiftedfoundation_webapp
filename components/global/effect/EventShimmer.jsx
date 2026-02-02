const EventShimmer = () => {
  const shimmerArray = Array.from({ length: 10 }); // Array of 10 undefined items

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-3.5 md:container mx-auto relative z-10">
      {shimmerArray.map((_, index) => (
        <div
          key={index}
          className="group border border-black/20 rounded-[20px] p-3 flex flex-col gap-3 animate-pulse"
        >
          {/* Image Shimmer */}
          <div className="w-full h-[250px] bg-gray-300 rounded-[20px]"></div>

          {/* Title Shimmer */}
          <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>

          {/* Location Shimmer */}
          <div className="flex flex-col gap-1.5 w-full">
            <div className="h-4 w-1/2 bg-gray-300 rounded-md"></div>
          </div>

          {/* Date & Time Shimmer */}
          <div className="flex flex-col gap-2">
            <div className="h-5 w-1/3 bg-gray-300 rounded-md"></div>
            <div className="flex flex-row gap-4">
              <div className="h-4 w-20 bg-gray-300 rounded-md"></div>
              <div className="h-4 w-20 bg-gray-300 rounded-md"></div>
            </div>
          </div>

          {/* Registration Status Shimmer */}
          <div className="flex flex-row items-center gap-2">
            <div className="h-4 w-1/3 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-12 bg-gray-300 rounded-full"></div>
          </div>

          {/* Button Shimmer */}
          <div className="mt-auto h-10 w-full bg-gray-300 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default EventShimmer;
