'use client'
import { use, useState } from 'react';
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Partner   from  '@/components/impact/partner/Partner';
import Recongniztion   from '@/components/impact/recongniztion/Recongniztion';
import ImpactSummary   from  '@/components/impact/impactSummary/ImpactSummary';
import HighlightCards   from '@/components/impact/highlightCards/HighlightCards';
import  GeographicReach   from '@/components/impact/geographicReach/GeographicReach';
import ImpactPillars   from '@/components/impact/impactPillars/ImpactPillars';
import { useDispatch, useSelector } from 'react-redux';
import { setDocs } from '@/redux/reducers/impactSlice';
import { useQuery } from 'react-query';
import Axios from '@/config/api';
import devLog from '@/utils/logsHelper';
import IAMGIFTEDimg  from '@/assets/svg/IAMGIFTED-8.svg'
import Image from 'next/image';
import { setPillarWithPrograms } from '@/redux/reducers/pillarSlice';

const Impact = () => {

  const dispatch=useDispatch();

  const { docs } = useSelector(state => state.impact);
   const { pillarWithPrograms } = useSelector(state => state.pillar);
   const [currentPage, setCurrentPage] = useState(1);
const [limit, setLimit] = useState(4);

  // Safely log
  if (pillarWithPrograms?.docs) {
    devLog('pillarWithPrograms', pillarWithPrograms.docs);
  }

  const pillarsQueryKey  = ['pillars',currentPage, limit,];

  const { isLoading:isLoadingPillar, isError:isErrorPillar, error:errorPillar} = useQuery(
    pillarsQueryKey ,
    () => {
      const url = `/piller/with-programs-list?pageSize=${limit}&page=${currentPage}&sortBy=createdAt_descending`; 
      return Axios.get(url);
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        // Destructure safely
        const {
          data: { docs, pages, docsCount, page },
        } = res.data;
        dispatch(setPillarWithPrograms({ docs, pages, docsCount, page }));
      },
    }
  );
  
  // Safely log
  devLog(' this is a ddd   devLog  imapct ',docs);

const queryKey = ["impact"];

const { isLoading, isError, error, data } = useQuery({
  queryKey,
  queryFn: async () => {
    const res = await Axios.get("/impact/public");
    return res.data; 
  },
  refetchOnWindowFocus: false,
  onSuccess: (response) => {

    const impacts = response?.data?.impacts || [];

 
    dispatch(setDocs(impacts));

    // console.log("Fetched impacts:", impacts);
  },
});

  return (
        <div className="flex  flex-col  w-full ">

      
            <HeroSectionBanner
            title="IMPACT"
             height="h-[250px] "
                   bannerSvgClass = '  w-[110px] lg:w-[120px] xl:w-[160px]     '   
          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
             <ImpactSummary/>
               <HighlightCards
                 isLoading={isLoading}
                 isError={isError} 
                 error={error}
             

               />
               <ImpactPillars
                    isLoadingPillar={isLoadingPillar}
                 isErrorPillar={isErrorPillar}

                 errorPillar={errorPillar}
               />
                              <GeographicReach/>
             <Recongniztion/>
             <div  className='  pb-10'>
                     <Partner/>
             </div>
      

          
           
           
       

            



  </div>
  )
}

export default Impact;