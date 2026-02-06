
'use client'
import { useState } from 'react';
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import Humanitarian   from '@/components/programs/Humanitarian';
import Fundrasing   from '@/components/programs/Fundrasing';
import { useDispatch, useSelector } from 'react-redux';
import { setStats } from '@/redux/reducers/programSlice';
import { useQuery } from 'react-query';
import Axios from '@/config/api';
import devLog from '@/utils/logsHelper';

const Program = () => {

  const dispatch=useDispatch();
  const { docs } = useSelector(state => state.program);
  const [currentPage, setCurrentPage] = useState(1);
const [limit, setLimit] = useState(10);



  // Safely log
  devLog(' this is a   program',docs);

  const queryKey = ['program',currentPage, limit,];

  const { isLoading,isFetching, isError, error } = useQuery(
    queryKey,
    () => {
      const url = `/program?pageSize=${limit}&page=${currentPage}&sortBy=createdAt_descending`; 
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
            title="Programs"
            subtitle="At IAMGIFTED, we believe every child deserves the chance to discover their potential and thrive. That’s why we’re committed to giving kids in underserved communities the resources, support, and mentorship they need to unlock their unique gifts."
             height="h-[250px] "
                   bannerSvgClass = 'w-[170px]  sm:w-[180px]  xl:w-[250px] '   
          subtitleClass=" text-sm sm:text-base  md:text-[17px]   text-white/70"
            />
            <Fundrasing

                  isFetching={isFetching}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
           isLoading={isLoading && currentPage === 1} 
           isError={isError} 
           error={error}
            />
            {/* <Humanitarian/> */}
            



  </div>
  )
}

export default Program