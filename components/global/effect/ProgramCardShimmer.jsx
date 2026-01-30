const ProgramCardShimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-3.5 md:container mx-auto">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="
            border border-black/20 rounded-[20px] p-3
            flex flex-col gap-3 w-full
            animate-pulse
          "
        >
          {/* Image shimmer */}
          <div className="w-full h-[250px] rounded-[20px] bg-gray-200" />

          {/* Title shimmer */}
          <div className="h-6 w-3/4 rounded bg-gray-200" />

          {/* Pillar tag shimmer */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-20 rounded bg-gray-200" />
            <div className="h-6 w-40 rounded-full bg-gray-200" />
          </div>

          {/* Paragraph shimmer */}
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-11/12 rounded bg-gray-200" />
            <div className="h-4 w-9/12 rounded bg-gray-200" />
          </div>

          {/* Impact stat shimmer */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-20 rounded bg-gray-200" />
            <div className="h-4 w-32 rounded bg-gray-200" />
          </div>

          {/* Divider */}
          <div className="border-b border-black/10 w-full" />

          {/* Donors + button shimmer */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="w-[30px] h-[30px] rounded-full bg-gray-200 border-2 border-white ml-[-5px]"
                />
              ))}
              <div className="w-[30px] h-[30px] rounded-full bg-gray-300 border-2 border-white ml-[-5px]" />
            </div>

            <div className="w-[146px] h-[40px] rounded-full bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramCardShimmer;
