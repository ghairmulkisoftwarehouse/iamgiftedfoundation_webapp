
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import DonateKnow  from '@/components/donate/donateKnow/DonateKnow';


const Donate = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Donate now"
             height=" h-[350px] sm:h-[320px] md:h-[380px]"
               bannerSvgClass = '  w-[230px]  md:w-[250px] xl:w-auto'   
            subtitleClass=" text-base  md:text-lg lg:text-xl  text-white/70"
            />
            <DonateKnow/>
       
            


  </div>
  )
}

export default Donate