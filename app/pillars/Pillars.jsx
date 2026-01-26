
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Empowerment   from '@/components/pillars/empowerment/Empowerment';
const Pillars = () => {
  return (
        <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="OUR PILLARS"
             height="h-[250px] "
                   bannerSvgClass = 'w-[190px]  lg:w-[220px]  xl:w-[280px] '   
          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
            <div className=' mb-9'>
                 <Empowerment/>
            </div>
      

            



  </div>
  )
}

export default Pillars