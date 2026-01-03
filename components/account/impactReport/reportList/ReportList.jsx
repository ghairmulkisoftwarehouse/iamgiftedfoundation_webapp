 import {reportImpactData} from '@/constants/AccountConstants'
const ReportList = () => {
  return (
  
    <div className="flex flex-col gap-2.5 w-full">
      {reportImpactData.map((item, index) => (
        <div
          key={index}
          className="
            bg-white py-4 px-4 rounded-[15px]
            flex items-center gap-3
            transition-all duration-700 ease-in-out cursor-pointer
            hover:translate-x-1 hover:shadow-md
          "
        >
          <div
            className={`w-[45px] h-[45px] rounded-full flex justify-center items-center ${item.bg}`}
          >
            {item.icon}
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm md:text-base lg:text-lg font-semibold">
              {item.title}
            </p>
            <h2 className="text-xs md:text-sm lg:text-base text-[#525252]">
              {item.description}
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReportList