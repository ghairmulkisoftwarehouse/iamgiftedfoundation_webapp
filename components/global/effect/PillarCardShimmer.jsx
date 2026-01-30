const PillarCardShimmer = () => {
  return (
     <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="border border-black/20 w-full flex flex-col gap-3 px-5 py-2.5 bg-white rounded-[20px]"
        >
          {/* icon shimmer */}
          <div className="w-[60px] h-[60px] bg-gray-300 rounded-full animate-pulse" />

          {/* title shimmer */}
          <div className="w-2/3 h-6 bg-gray-300 rounded animate-pulse" />

          {/* subtitle + paragraph */}
          <div className="flex flex-col gap-2">
            <div className="w-1/3 h-4 bg-gray-300 rounded animate-pulse" />
            <div className="w-full h-3 bg-gray-200 rounded animate-pulse" />
            <div className="w-5/6 h-3 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* programs include */}
          <div className="flex flex-col gap-2">
            <div className="w-1/2 h-4 bg-gray-300 rounded animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"
                />
              ))}
            </div>
          </div>

          {/* paragraph shimmer */}
          <div className="flex flex-col gap-2">
            <div className="w-full h-3 bg-gray-200 rounded animate-pulse" />
            <div className="w-5/6 h-3 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* donor section */}
          <div className="flex flex-col gap-2 border-b border-black/20 pb-4">
            <div className="w-1/3 h-4 bg-gray-300 rounded animate-pulse" />
            <div className="w-full h-3 bg-gray-200 rounded animate-pulse" />
            <div className="w-4/5 h-3 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* button shimmer */}
          <div className="pt-2 pb-3.5 mt-auto">
            <div className="w-full h-[50px] bg-gray-300 rounded-full animate-pulse" />
          </div>
        </div>
      ))}
    </div>

          
  )
}

export default PillarCardShimmer
