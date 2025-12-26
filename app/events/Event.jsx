import  HeroSectionBanner  from '@/components/global/HeroSectionBanner';
import OurteamMission   from   '@/components/events/ourteam-misson/OurteamMission.jsx'
import FoundationEvents   from '@/components/events/foundationEvents/FoundationEvents';



const Event = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Events"
                bannerSvgClass="w-[140px] xl:w-[200px]" 
            subtitle="The IAMGIFTED Foundation hosts a variety of empowering events aimed at supporting mental wellness and personal development, particularly for individuals facing challenges in underserved communities. These events include wellness weekends, therapy sessions, workshops, and community gatherings designed to foster self-discovery, healing, and growth."
             height=" h-[380px] sm:h-[320px] md:h-[380px]"
            subtitleClass=" text-base  md:text-lg lg:text-xl  text-white/70"
            />
           <FoundationEvents/>
            <OurteamMission/>
           
       
            



  </div>
  )
}

export default Event