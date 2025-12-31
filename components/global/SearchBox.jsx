import SearchSvg from '@/assets/svg/SearchSvg'

const SearchBox = () => {
  return (
    <div className="bg-black px-5 pt-5 pb-8 rounded-[22px] flex flex-col  gap-5">
      <h2 className="text-lg   font-bold text-white">Search Here</h2>

      <div className="border border-white relative h-[64px] rounded-[18px]">
        {/* Icon at right center */}
        <div className="absolute top-1/2 right-2 -translate-y-1/2">
          <SearchSvg />
        </div>

        <input
          type="text"
          placeholder="Search recent events"
          className="h-full w-full pl-4 pr-12 rounded-[18px] outline-none bg-transparent text-white"
        />
      </div>
    </div>
  )
}

export default SearchBox
