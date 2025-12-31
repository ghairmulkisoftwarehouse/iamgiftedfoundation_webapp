import  HeroSectionBanner  from '@/components/global/HeroSectionBanner';
import EventInformation   from '@/components/eventdetails/eventInformation/EventInformation';




const EventPage = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Events details"
                 height=" h-[250px] "
                bannerSvgClass="w-[360px] " 
      
            />
            <EventInformation/>
         
           
       
            



  </div>
  )
}

export default EventPage;