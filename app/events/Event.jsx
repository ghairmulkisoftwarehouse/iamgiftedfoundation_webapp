'use client'
import { useState } from 'react';
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner';
import EventList   from '@/components/events/eventList/EventList';
import { useDispatch, useSelector } from 'react-redux';
import { setStats } from '@/redux/reducers/eventSlice';
import { useQuery } from 'react-query';
import Axios from '@/config/api';
import devLog from '@/utils/logsHelper';
// import OurteamMission   from   '@/components/events/ourteam-misson/OurteamMission.jsx'
// import FoundationEvents   from '@/components/events/foundationEvents/FoundationEvents';



const Event = () => {

   const dispatch=useDispatch();

    const { docs } = useSelector(state => state.event);
  const [currentPage, setCurrentPage] = useState(1);
const [limit] = useState(10);

  // Safely log
  devLog(' this is a    devLog',docs);

  const queryKey = ['event',currentPage,limit,];

  const { isLoading,isFetching, isError, error } = useQuery(
    queryKey,
    () => {
      const url = `/event?pageSize=${limit}&page=${currentPage}`; 
      return Axios.get(url);
    },
    {
            refetchOnWindowFocus: false,
            onSuccess: (data) => {
                const { data: { data: { docs, pages, docsCount, page } } } = data;
                dispatch(setStats({ docs, pages, docsCount, page }));
            },
        }
  );
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="Events"
                  bannerSvgClass = ' w-[120px] lg:w-[130px] xl:w-[160px]  '   
            subtitle="The IAMGIFTED Foundation offers events that promote mental wellness and personal growth, including wellness weekends, therapy sessions, workshops, and community gatherings for underserved communities."
              height=" h-[250px] "
                          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"

            
            />

            <EventList
                   isFetching={isFetching}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
           isLoading={isLoading && currentPage === 1} 
           isError={isError} 
           error={error}

            />
           
                  {/* <FoundationEvents/> */}
      
        
           {/* <div className=' pt-4 pb-5 lg:pb-16'>
                <OurteamMission/>
           </div> */}
        
           
       
            



  </div>
  )
}

export default Event