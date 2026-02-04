
'use client'
import { useEffect } from "react";
import HeroSection from "@/components/global/HeroSectionBanner";
import  Layout  from '@/components/global/AccountLayout';
import  DonationTable   from '@/components/account/donationhistory/DonationTable';
import { useSelector,useDispatch } from "react-redux";

// import { getMyProfile } from "@/redux/actions/profileActions";
const DonationHistory = () => {

  // const dispatch=useDispatch();
  //  const { docs, loading, error } = useSelector((state) => state.profile);

  //  console.log('docs',docs);

  // useEffect(() => {
  //   dispatch(getMyProfile());
  // }, [dispatch]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p className="text-red-500">{error}</p>;

  return (
       <div className="flex flex-col w-full ">
          <HeroSection
        title="Donation History"
        height="h-[250px]"
                bannerSvgClass = 'w-[280px]  lg:w-[320px]   xl:w-[400px] ' 
      />
    <Layout>

   <DonationTable/>

</Layout>
</div>
  )
}

export default DonationHistory