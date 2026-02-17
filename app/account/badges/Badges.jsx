
'use client'
import HeroSection from "@/components/global/HeroSectionBanner";
import  Layout  from '@/components/global/AccountLayout';
import { useSelector,useDispatch } from "react-redux";
// import { setStats } from "@/redux/reducers/donateSlice";
import fetcher from "@/utils/fetcher";
import { getTokenCookie } from "@/utils/authCookies";
import { useQuery } from 'react-query';
import { setUserBadge } from "@/redux/reducers/badgeSlice";
import devLog from "@/utils/logsHelper";
import UserBadge   from '@/components/account/user-badge/UserBadge';



const Badges = () => {

 const { userBadge } = useSelector(state => state.badge);
  const dispatch = useDispatch();
  const token = getTokenCookie();


  const { isLoading, isError, data, error } = useQuery(
    ["my-donate-me"], 
    () => fetcher(`/badge/me`),
    {
      enabled: !!token, 
      onSuccess: (res) => {
        if (res) {
          const { data: badges } = res; 
          dispatch(setUserBadge(badges)); 
        } else {
          console.warn("Unexpected response structure:", res);
        }
      },
      onError: (err) => {
        console.error("Badge API failed:", err);
      },
    }
  );




  return (
       <div className="flex flex-col w-full ">
          <HeroSection
        title="User Badges"
        height="h-[250px]"
                bannerSvgClass = ' w-[200px] lg:w-[230px]  xl:w-[290px]    ' 
      />
    <Layout>

<UserBadge/>
  

</Layout>
</div>
  )
}

export default Badges