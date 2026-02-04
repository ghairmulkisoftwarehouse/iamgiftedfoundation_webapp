const SidebarProfileShimmer = () => {
  return (
    <div className="flex items-center gap-2 px-3 pt-6 animate-pulse">
      {/* Profile circle shimmer */}
      <div className="w-[70px] h-[70px] rounded-full bg-gray-300" />

      {/* Text shimmer */}
      <div className="flex flex-col gap-1 flex-1">
        <div className="h-4 w-32 bg-gray-300 rounded" /> {/* fullname */}
        <div className="h-3 w-24 bg-gray-200 rounded mt-1" /> {/* email */}
      </div>
    </div>
  );
};

export default SidebarProfileShimmer;
