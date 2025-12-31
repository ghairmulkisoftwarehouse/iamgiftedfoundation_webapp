
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import DonateKnow  from '@/components/donate/donateKnow/DonateKnow';


const Donate = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Donate now"
             height=" h-[200px] md:h-[250px] "
               bannerSvgClass = '   w-[190px] lg:w-[210px]  xl:w-[280px] '   
             subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
            <DonateKnow/>
       
            


  </div>
  )
}

export default Donate