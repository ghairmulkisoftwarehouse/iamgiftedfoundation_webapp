const CategoryShimmer = () => {
  const shimmerTabs = Array.from({ length: 4 });    

  return (
    <div className="flex flex-row flex-wrap gap-1.5 w-full px-5 md:px-3.5 md:container mx-auto relative z-10">
      {shimmerTabs.map((_, index) => (
        <div
          key={index}
          className="w-[109px] h-[41px] px-5 rounded-[50px] bg-gray-300 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default CategoryShimmer;
