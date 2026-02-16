

'use client'
import { useState,useEffect } from "react";
import HeroSection from "@/components/global/HeroSectionBanner";
import  Layout  from '@/components/global/AccountLayout';
import { useSelector,useDispatch } from "react-redux";
import { setStats } from "@/redux/reducers/registerEventSlice";
import fetcher from "@/utils/fetcher";
import { getTokenCookie } from "@/utils/authCookies";
import { useQuery } from 'react-query';
import devLog from "@/utils/logsHelper";
import RegisterProgramTable   from '@/components/account/registerProgram/RegisterProgramTable';
import DeleteEvent  from '@/components/account/registerProgram/DeleteEvent'


const RegisterProgram = () => {


   const { docs } = useSelector(state => state.registerEvent);
       const {showDeleteEventPopup} = useSelector(state => state.app);
       const [eventId,setEventId]=useState(null)
   
      const dispatch = useDispatch();
  const token = getTokenCookie();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const { isLoading, isError, data, error } = useQuery(
    ["my-register-event", currentPage, limit], 
    () =>
      fetcher(
        `/event/my-registrations?pageSize=${limit}&page=${currentPage}`
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
        console.error(" failed:", err);
      },
    }
  );
  return (
    <>

              {showDeleteEventPopup &&   <DeleteEvent  eventId={eventId}  setEventId={setEventId}/> }  


      <div className="flex flex-col w-full ">
          <HeroSection
        title="Registerd Program"
        height="h-[250px]"
                bannerSvgClass = '   w-[320px]  lg:w-[350px]    xl:w-[460px]  ' 
      />
    <Layout>
<div className=" flex flex-col gap-3 w-full">
  <RegisterProgramTable
setCurrentPage={setCurrentPage}
currentPage={currentPage}
  isLoading={isLoading} 
           isError={isError} 
           error={error}
           setEventId={setEventId}

  />

</div>


</Layout>
</div>

    </>
    
    
  )
}

export default RegisterProgram