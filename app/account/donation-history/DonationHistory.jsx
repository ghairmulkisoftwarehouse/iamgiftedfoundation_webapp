
'use client'
import HeroSection from "@/components/global/HeroSectionBanner";
import  Layout  from '@/components/global/AccountLayout';
import  DonationTable   from '@/components/account/donationhistory/DonationTable';

const DonationHistory = () => {
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