import  HeroSectionBanner  from '@/components/global/HeroSectionBanner';
import OurteamMission   from   '@/components/events/ourteam-misson/OurteamMission.jsx'
import FoundationEvents   from '@/components/events/foundationEvents/FoundationEvents';



const Event = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Events"
                  bannerSvgClass = ' w-[120px] lg:w-[130px] xl:w-[160px]  '   
            subtitle="The IAMGIFTED Foundation hosts a variety of empowering events aimed at supporting mental wellness and personal development, particularly for individuals facing challenges in underserved communities. These events include wellness weekends, therapy sessions, workshops, and community gatherings designed to foster self-discovery, healing, and growth."
              height=" h-[250px] "
                          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"

            
            />
           
                  <FoundationEvents/>
      
        
           <div className=' pt-4 pb-5 lg:pb-16'>
                <OurteamMission/>
           </div>
        
           
       
            



  </div>
  )
}

export default Event