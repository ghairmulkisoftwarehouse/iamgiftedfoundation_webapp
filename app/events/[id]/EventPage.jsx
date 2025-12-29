import  HeroSectionBanner  from '@/components/global/HeroSectionBanner';
import EventInformation   from '@/components/eventdetails/eventInformation/EventInformation';




const EventPage = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Events details"
                bannerSvgClass="w-[280px] md:w-[300px] lg:w-[380px] xl:w-[500px]" 
      
            />
            <EventInformation/>
         
           
       
            



  </div>
  )
}

export default EventPage;