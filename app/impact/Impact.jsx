'use client'
import { useState } from 'react';
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Partner   from  '@/components/impact/partner/Partner';
import Recongniztion   from '@/components/impact/recongniztion/Recongniztion';
import ImpactSummary   from  '@/components/impact/impactSummary/ImpactSummary';
import HighlightCards   from '@/components/impact/highlightCards/HighlightCards';
import  GeographicReach   from '@/components/impact/geographicReach/GeographicReach';
import ImpactPillars   from '@/components/impact/impactPillars/ImpactPillars';
import { useDispatch, useSelector } from 'react-redux';
import { setStats } from '@/redux/reducers/impactSlice';
import { useQuery } from 'react-query';
import Axios from '@/config/api';
import devLog from '@/utils/logsHelper';

const Impact = () => {

  const { docs } = useSelector(state => state.impact);
  const [currentPage, setCurrentPage] = useState(1);
const [limit, setLimit] = useState(10);

  // Safely log
  devLog(' this is a    devLog  imapct ',docs);

  const queryKey = ['impact',];

  const { isLoading,isFetching, isError, error } = useQuery(
    queryKey,
    () => {
      const url = `/impact`; 
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
            title="IMPACT"
             height="h-[250px] "
                   bannerSvgClass = '  w-[110px] lg:w-[120px] xl:w-[160px]     '   
          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
             <ImpactSummary/>
               <HighlightCards/>
               <ImpactPillars/>
                              <GeographicReach/>
             <Recongniztion/>
             <div  className='  pb-10'>
                     <Partner/>
             </div>
      

          
           
           
       

            



  </div>
  )
}

export default Impact;