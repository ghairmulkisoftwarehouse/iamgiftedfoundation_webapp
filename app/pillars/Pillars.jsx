
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Empowerment   from '@/components/pillars/empowerment/Empowerment';
const Pillars = () => {
  return (
        <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="OUR PILLARS"
             height="h-[250px] "
                   bannerSvgClass = 'w-[170px]  sm:w-[180px]  xl:w-[250px] '   
          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
            <Empowerment/>

            



  </div>
  )
}

export default Pillars