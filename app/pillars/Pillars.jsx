'use client';
import { useState, } from "react";
import HeroSectionBanner from '@/components/global/HeroSectionBanner';
import Empowerment from '@/components/pillars/empowerment/Empowerment';
import { useDispatch, useSelector } from 'react-redux';
import { setPillarWithPrograms } from '@/redux/reducers/pillarSlice';
import { useQuery } from 'react-query';
import Axios from '@/config/api';
import devLog from '@/utils/logsHelper';



const Pillars = () => {
  const dispatch = useDispatch();
  const { pillarWithPrograms } = useSelector(state => state.pillar);
   const [currentPage, setCurrentPage] = useState(1);
const [limit, setLimit] = useState(10);

  // Safely log
  if (pillarWithPrograms?.docs) {
    devLog('pillarWithPrograms', pillarWithPrograms.docs);
  }

  const queryKey = ['pillars',currentPage, limit,];

  const { isLoading,isFetching, isError, error } = useQuery(
    queryKey,
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

  return (
    <div className="flex flex-col w-full">
      <HeroSectionBanner
        title="OUR PILLARS"
        height="h-[250px]"
        bannerSvgClass="w-[190px] lg:w-[220px] xl:w-[280px]"
        subtitleClass="text-sm sm:text-base md:text-[17px] text-white/70"
      />

      <div className="mb-9">
      
          <Empowerment  
          isFetching={isFetching}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
           isLoading={isLoading && currentPage === 1} 
           isError={isError} 
           error={error}

           />
       
      </div>
    </div>
  );
};

export default Pillars;
