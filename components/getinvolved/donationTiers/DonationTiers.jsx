import { bison } from '@/components/fonts/fonts';
import {highlightdata} from '@/constants/ImpactConstants'
import Link from 'next/link';
import DotSvg from '@/assets/svg/DotSvg';
import { useSelector,useDispatch } from 'react-redux';
import DisplayError from '@/components/global/DisplayError';
import ItemNotFound from '@/components/global/ItemNotFound';
import DonationTiersShimmer from '@/components/global/effect/DonationTiersShimmer';
import SupportSvg   from '@/assets/svg/SupportSvg';


const DonationTiers = ({ isLoading, isError, error }) => {
  const dispatch=useDispatch()

    const { pillarWithPrograms } = useSelector(state => state.pillar);
     const pillarProgram=pillarWithPrograms?.docs;
  return (
<div className="mt-16 pt-8 w-full bg-gradient-to-b from-white to-white/80 pb-9">
        <div className="flex flex-col w-full gap-10   px-5  md:px-3.5  md:container mx-auto  ">
        <h2 className={`text-black text-4xl  sm:text-[46px] lg:text-[55px]  ${bison.className}`}>
               OTHER DONATION TIERS
        </h2>

          {isLoading ? (
          <DonationTiersShimmer />
        ) : isError ? (
          <DisplayError message={error?.message || 'Something went wrong'} />
        ) : pillarWithPrograms?.docs?.length > 0 ? (
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5 lg:space-y-4 w-full cursor-pointer">
  {pillarProgram?.slice(0, 4).map((item) => {
    return (
      <div
        key={item?._id}
        className="h-full border border-black/25 rounded-[24px] flex flex-col gap-3.5 px-3 pt-5 pb-2 bg-transparent hover:bg-white hover:shadow-lg transition-all duration-300 group"
      >
        {/* Top Row */}
        <div className="flex justify-between w-full">
          <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-[#B6E2E2] rounded-full flex justify-center items-center group-hover:bg-[#9BDADA] transition-colors duration-300">
            <SupportSvg/>
          </div>

          <div className="flex flex-col gap-0.5 items-end text-right">
            <h2 className="font-semibold text-xl md:text-[22px] lg:text-2xl">
              {item?.programsCount}
            </h2>
            <p className="text-xs sm:text-sm text-black/75 font-semibold">
              Programs
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1 w-full">
          <h2 className="font-semibold text-lg sm:text-xl lg:text-[20px]">
            {item?.title}
          </h2>
          <p className="text-[#030F0CCC]/80 text-xs sm:text-sm lg:text-[15px] font-medium line-clamp-3">
            {item?.description}
          </p>
        </div>

        {/* Pillar Tag */}
        <div className="flex flex-row gap-1">
          <span className="font-semibold">Pillar Tag:</span>
          <div className="flex items-center gap-0.5 bg-[#E5D5E5] rounded-full px-2.5 py-1.5">
            <DotSvg />
            <span className="text-xs font-semibold">
              {item?.title}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between w-full border-b border-black/25 pb-4">
          <p className="text-[10px] xs:text-xs md:text-sm font-semibold">
            Raised: ${item?.impactAmount || 0}
          </p>
          <p className="text-[10px] xs:text-xs md:text-sm text-black/70">
            Supporters: {item?.impactSupportCount || 0}
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-end items-center mt-auto">
          <Link href={`/donate`}>
            <button className="btn-animated bg-mint-cyan border border-transparent group cursor-pointer w-[146px] relative overflow-hidden hover:border-[#8bc9c8]">
              <span className="btn-animated-hover bg-[#9dd6d5] group-hover:w-44 group-hover:h-44"></span>
              <span className="btn-animated-text text-black font-semibold group-hover:text-gray-900">
                Read more
              </span>
            </button>
          </Link>
        </div>
      </div>
    );
  })}
</div>

    ) : (
          <ItemNotFound message="No pillars found." />
        )}
   
    



        </div>
        

   
    </div>
  )
}

export default DonationTiers