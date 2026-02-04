const DonationTiersShimmer = () => {
  return (
    <div className="h-full border border-black/20 rounded-[24px] flex flex-col gap-4 px-3 pt-5 pb-4 bg-white/60 animate-pulse">
      
      {/* Top Row */}
      <div className="flex justify-between w-full">
        {/* Icon circle */}
        <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-gray-300 rounded-full" />

        {/* Count */}
        <div className="flex flex-col gap-2 items-end">
          <div className="w-12 h-5 bg-gray-300 rounded" />
          <div className="w-20 h-3 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-2">
        <div className="w-3/4 h-5 bg-gray-300 rounded" />
        <div className="w-full h-3 bg-gray-200 rounded" />
        <div className="w-5/6 h-3 bg-gray-200 rounded" />
      </div>

      {/* Pillar Tag */}
      <div className="flex items-center gap-2">
        <div className="w-20 h-4 bg-gray-300 rounded" />
        <div className="w-40 h-6 bg-gray-200 rounded-full" />
      </div>

      {/* Raised / Goal */}
      <div className="flex justify-between w-full border-b border-black/20 pb-4">
        <div className="w-24 h-3 bg-gray-300 rounded" />
        <div className="w-24 h-3 bg-gray-200 rounded" />
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <div className="w-[146px] h-[42px] bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};

export default DonationTiersShimmer;
