
'use client'
import { useEffect } from "react";
import HeroSection from "@/components/global/HeroSectionBanner";
import  Layout  from '@/components/global/AccountLayout';
import  DonationTable   from '@/components/account/donationhistory/DonationTable';
import { useSelector,useDispatch } from "react-redux";
import { setStats } from "@/redux/reducers/donateSlice";
import fetcher from "@/utils/fetcher";
import { getTokenCookie } from "@/utils/authCookies";
import { useQuery } from 'react-query';

const DonationHistory = () => {
 const { docs } = useSelector(state => state.donate);
   const dispatch = useDispatch();
  const token = getTokenCookie();


//  console.log('this is a  ',docs)

 console.log('docs  donete ',docs)



 const { isLoading, isError, data, error } = useQuery(
  ["my-donate-me"],
  () => fetcher("/donation/me"),
  {
    enabled: !!token, 
    onSuccess: (res) => {
      console.log("Donation API response:", res); 

      if (res?.data?.data) {
        const { docs, pages, docsCount, page } = res.data.data;
        dispatch(setStats({ docs, pages, docsCount, page }));
      } else {
        console.warn("Unexpected response structure:", res);
      }
    },
    
    onError: (err) => {
      console.error("Donation API failed:", err);
    },
  }
);


  return (
       <div className="flex flex-col w-full ">
          <HeroSection
        title="Donation History"
        height="h-[250px]"
                bannerSvgClass = 'w-[280px]  lg:w-[320px]   xl:w-[400px] ' 
      />
    <Layout>

   <DonationTable

  isLoading={isLoading} 
           isError={isError} 
           error={error}

   />

</Layout>
</div>
  )
}

export default DonationHistory