'use client'
import { useState,useEffect } from 'react';
import  HeroSectionBanner  from '@/components/global/HeroSectionBanner'
import DonateKnow  from '@/components/donate/donateKnow/DonateKnow';
import GetInvolvedHeroSection   from '@/components/getinvolved/getInvolvedHeroSection/GetInvolvedHeroSection';

import { useDispatch, useSelector } from 'react-redux';
import { setStats,setDoc } from '@/redux/reducers/programSlice';
import { useQuery } from 'react-query';
import Axios from '@/config/api';
import DonationTiers   from '@/components/getinvolved/donationTiers/DonationTiers';
import TrackImpact   from '@/components/global/trackImpact/TrackImpact';
import Foundationgurdian  from '@/components/getinvolved/foundationgurdian/Foundationgurdian';
import { setPillarWithPrograms } from '@/redux/reducers/pillarSlice';
import ContributionCounts  from '@/components/getinvolved/contributionCounts/ContributionCounts';
import { Suspense } from "react";

import devLog from '@/utils/logsHelper';


const Donate = () => {
 const dispatch=useDispatch();
 const { docs,doc } = useSelector(state => state.program);
  const [currentPage, setCurrentPage] = useState(1);
const [limit, setLimit] = useState(10);
   const { pillarWithPrograms } = useSelector(state => state.pillar);


 const  intialId=docs[0]?._id;
  // console.log( 'selectProgram  in s',intialId)

const [selectProgram, setSelectProgram] = useState(null);


  // Safely log
  // devLog(' this is a    devLog',doc);

 useEffect(() => {
  if (docs.length > 0 && !selectProgram) {
    setSelectProgram(docs[0]?._id);
  }
}, [docs, selectProgram]);

  const queryKey = ['program',currentPage, limit,];

  const { isLoading, isError, error } = useQuery(
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







  const pillerQueryKey = ['pillars',];

  const { isLoading: isPillarsLoading,
  isError: isPillarsError,
  error: pillarsError } = useQuery(
    pillerQueryKey,
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




const singleProgramQueryKey = ['program', selectProgram];

const {
  isLoading: singleProgramLoading,
  isError: isErrorProgram,
  error: errorProgram,
} = useQuery(
  singleProgramQueryKey,
  () => {
    if (!selectProgram) return null;
    return Axios.get(`/program/${selectProgram}`);
  },
  {
    enabled: !!selectProgram,
    refetchOnWindowFocus: false,
    onSuccess: (res) => {
        // devLog("Single program response:", res);
      const {
        data: {
          data: { doc },
        },
      } = res;

      dispatch(setDoc(doc));
    },
  } 
);  




 

  return (


          <div className="flex  flex-col  w-full ">
                <GetInvolvedHeroSection
            />
            {/* <DonateKnow
selectProgram={selectProgram}
setSelectProgram={setSelectProgram}
      singleProgramLoading={singleProgramLoading}
     isErrorProgram={isErrorProgram}
  errorProgram={errorProgram}

           isLoading={isLoading && currentPage === 1} 
           isError={isError} 
           error={error}
            /> */}

              <Foundationgurdian/>
                <Suspense fallback={<div>Loading…</div>}>
                    <ContributionCounts />
                  </Suspense>

           <DonationTiers
  isLoading={isPillarsLoading}
  isError={isPillarsError}
  error={pillarsError}
/>
           <div className='mt-16 w-full '>
             <TrackImpact/>
           </div>
       
            


  </div>
  )
}

export default Donate