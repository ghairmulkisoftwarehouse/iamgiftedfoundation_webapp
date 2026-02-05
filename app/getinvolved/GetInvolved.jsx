'use client'
import { useState } from 'react';
import GetInvolvedHeroSection   from '@/components/getinvolved/getInvolvedHeroSection/GetInvolvedHeroSection';
// import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
// import  VolunteerCard   from '@/components/getinvolved/volunteerCard/VolunteerCard';
// import VolunteerOptions  from '@/components/getinvolved/volunteerOptions/VolunteerOptions';
import dynamic from "next/dynamic"

import DonationTiers   from '@/components/getinvolved/donationTiers/DonationTiers';
import TrackImpact   from '@/components/global/trackImpact/TrackImpact';
import Foundationgurdian  from '@/components/getinvolved/foundationgurdian/Foundationgurdian';
import { useDispatch, useSelector } from 'react-redux';
import { setPillarWithPrograms } from '@/redux/reducers/pillarSlice';
import ContributionCounts  from '@/components/getinvolved/contributionCounts/ContributionCounts';

import { useQuery } from 'react-query';
import Axios from '@/config/api';
import devLog from '@/utils/logsHelper';






const GetInvolved = () => {
 const dispatch = useDispatch();
  const { pillarWithPrograms } = useSelector(state => state.pillar);


  const queryKey = ['pillars',];

  const { isLoading, isError, error } = useQuery(
    queryKey,
    () => {
      const url = `/piller/with-programs-list?sortBy=createdAt_descending`; 
      return Axios.get(url);
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        const {
          data: { docs, pages, docsCount, page },
        } = res.data;
        dispatch(setPillarWithPrograms({ docs, pages, docsCount, page }));
      },
    }
  );



  return (
          <div className="flex  flex-col  w-full ">
            <GetInvolvedHeroSection
            />

          <Foundationgurdian/>
          <ContributionCounts/>

            <DonationTiers 
             isLoading={isLoading} 
            isError={isError} 
            error={error}
              
            />
           <div className='mt-16 w-full '>
             <TrackImpact/>
           </div>
            
            {/* <VolunteerCard/> */}
            {/* <VolunteerOptions/> */}
            {/* <Volunteervideo/> */}
       
            


  </div>
  )
}

export default GetInvolved
