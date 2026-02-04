
import { get } from "@/config/serverFetcher";
import { baseURL } from "@/config/api"; 
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner';
import EventInformation   from '@/components/eventdetails/eventInformation/EventInformation';




export async function generateMetadata({ params }) {
  const { id } = params;
    const eventid=id;
   
  try { 
    const { responsePayload } = await get(`/event/${id}`);
    const  event = responsePayload?.data?.doc;

    return {
      title: event?.title ?? "event  Detail",
    };
  } catch (error) {
    return {
      title: "event  Detail",
      description: "event  Detail",
    };
  }
}



const EventPage = async({ params }) => {

    const { id } = await params;
      const eventId =id;
       console.log(' this is a eventId',eventId)
  let loading = true;
  let error = null;
  let event = null;





   let allEventLoading = true;
  let allEventError = null;
  let allEvent = [];

  // Fetch all programs
  try {
    const response = await get(`/event`);
    if (!`${response.statusCode}`.startsWith("2")) {
      allEventError =
        response?.responsePayload?.data?.message ||
        "Failed to load events";
    } else {
      allEvent = response?.responsePayload?.data?.docs || [];
      if (allEvent.length === 0) {
        allEventError = "events list not found";
      }
    }
  } catch (err) {
    allEventError = "Something went wrong";
  } finally {
    allEventLoading = false;
  }

  // Fetch single program
  try {
    const response = await get(`/event/${id}`);
    if (!`${response.statusCode}`.startsWith("2")) {
      error =
        response?.responsePayload?.data?.message ||
        "Failed to load event";
    } else {
      event = response?.responsePayload?.data?.doc;
      if (!event) {
        error = "event not found";
      }
    }
  } catch (err) {
    error = "Something went wrong";
  } finally {
    loading = false;
  }

  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Events details"
                 height=" h-[250px] "
                bannerSvgClass=" w-[240px] sm:w-[250px] lg:w-[280px] xl:w-[360px] " 
      
            />
            <EventInformation

                 eventId={eventId}
            loading={loading}
        error={error}
        event={event}

            allEvent={allEvent}
        allEventLoading={allEventLoading}
        allEventError={allEventError}
            />
         
           
       
            



  </div>
  )
}

export default EventPage;