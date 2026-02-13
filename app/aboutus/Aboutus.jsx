'use client'
import { useState } from 'react';
import OurTeam  from '@/components/aboutus/ourteam/OurTeam';
import TeamOverview  from '@/components/aboutus/teamoverview/TeamOverview';
import OurteamMission   from '@/components/aboutus/ourteam-misson/OurteamMission';
import  HeroSectionBanner   from '@/components/global/HeroSectionBanner';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setStats } from '@/redux/reducers/teamSlice'
import Axios from '@/config/api';

const Aboutus = () => {
 const dispatch = useDispatch();
  const { docs } = useSelector(state => state.team);
  const [currentPage, setCurrentPage] = useState(1);
const [limit, setLimit] = useState(10);
   console.log('docs',docs)


  const queryKey = ['team',currentPage,limit];

  const { isLoading,isFetching, isError, error } = useQuery(
    queryKey,
    () => {
      const url = `/team?pageSize=${limit}&page=${currentPage}&sortBy=createdAt_descending`; 
      return Axios.get(url);
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        const {
          data: { docs, pages, docsCount, page },
        } = res.data;
        dispatch(setStats({ docs, pages, docsCount, page }));
      },
    }
  );


  return (
  <div className="flex  flex-col  w-full ">
<HeroSectionBanner
  title="About Us"
        subtitle="The Founder: Alexander Mattison"
        height="h-[250px] "
                       bannerSvgClass = 'w-[150px]   lg:w-[170px]   xl:w-[220px] '   

        subtitleClass="font-semibold md:text-2xl  text-white/80"
/>
  <TeamOverview/>
            <OurTeam
                  isFetching={isFetching}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  isLoading={isLoading && currentPage === 1} 
                  isError={isError} 
                  error={error}
            />
    <div className='pb-5  lg:pb-10'>
     <OurteamMission/>
    </div>
 


  </div>
  )
}

export default Aboutus