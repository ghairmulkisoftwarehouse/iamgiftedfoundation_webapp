'use client'
import  HeroSectionBanner   from '@/components/global/HeroSectionBanner';
import { useDispatch, useSelector } from 'react-redux';
import {setPublicBadge } from '@/redux/reducers/badgeSlice';
import { useQuery } from 'react-query';
import Axios from '@/config/api';
import BadgesCatelog   from '@/components/appBadge/BadgesCatelog';


const AppBadge = () => {
 
  const   dispatch = useDispatch();
   const { publicBadge } = useSelector((state) => state.badge);
   

//  console.log(' this is a  publicBadge',publicBadge)

  const queryKey = ['publicBadge'];

  const { isLoading, isError, error } = useQuery(
    queryKey,
    () => Axios.get(`/badge/catalog`),
    {
      refetchOnWindowFocus: false,
      onSuccess: (res) => {
        dispatch(setPublicBadge(res.data?.data?.badges || []));
      },
    }
  );
  return (
  <div className="flex  flex-col  w-full ">
<HeroSectionBanner
  title="App Badge"
  height="h-[250px]"
  bannerSvgClass="w-[160px] md:w-[170px] lg:w-[190px] xl:w-[245px]"
  subtitleClass="text-sm sm:text-base md:text-[17px] text-white/70"

/>

<BadgesCatelog/>

  </div>
  )
}

export default AppBadge;