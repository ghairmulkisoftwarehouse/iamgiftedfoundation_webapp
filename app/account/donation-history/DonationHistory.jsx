
'use client'
import { useState,useEffect } from "react";
import HeroSection from "@/components/global/HeroSectionBanner";
import  Layout  from '@/components/global/AccountLayout';
import  DonationTable   from '@/components/account/donationhistory/DonationTable';
import { useSelector,useDispatch } from "react-redux";
import { setStats } from "@/redux/reducers/donateSlice";
import fetcher from "@/utils/fetcher";
import { getTokenCookie } from "@/utils/authCookies";
import { useQuery } from 'react-query';
import devLog from "@/utils/logsHelper";

const DonationHistory = () => {
 const { docs } = useSelector(state => state.donate);
   const dispatch = useDispatch();
  const token = getTokenCookie();


//  console.log('this is a  ',docs)

// devLog('docs  donete ',docs)


const [currentPage, setCurrentPage] = useState(1);
const [limit] = useState(10);

const { isLoading, isError, data, error } = useQuery(
  ["my-donate-me", currentPage, limit], 
  () =>
    fetcher(
      `/donation/me?pageSize=${limit}&page=${currentPage}`
    ),
  {
    enabled: !!token, 
    onSuccess: (res) => {
      if (res?.data) {
        const { docs, pages, docsCount, page } = res.data;
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
setCurrentPage={setCurrentPage}
currentPage={currentPage}
  isLoading={isLoading} 
           isError={isError} 
           error={error}

   />

</Layout>
</div>
  )
}

export default DonationHistory