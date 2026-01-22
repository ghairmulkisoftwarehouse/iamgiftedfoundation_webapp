
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Partner   from  '@/components/impact/partner/Partner';
const Impact = () => {
  return (
        <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="IMPACT"
             height="h-[250px] "
                   bannerSvgClass = 'w-[170px]  sm:w-[180px]   '   
          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
            <Partner/>
       

            



  </div>
  )
}

export default Impact;