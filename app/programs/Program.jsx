import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Humanitarian   from '@/components/programs/Humanitarian';
import Fundrasing   from '@/components/programs/Fundrasing';



const Program = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Programs"
            subtitle="At IAMGIFTED, we believe every child deserves the chance to discover their potential and thrive. That’s why we’re committed to giving kids in underserved communities the resources, support, and mentorship they need to unlock their unique gifts."
             height="h-[250px] "
                   bannerSvgClass = 'w-[170px]  sm:w-[180px]  xl:w-[250px] '   
          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
            <Fundrasing/>
            {/* <Humanitarian/> */}
            



  </div>
  )
}

export default Program