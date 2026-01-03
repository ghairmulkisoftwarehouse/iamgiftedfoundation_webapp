
'use client'
import HeroSection from "@/components/global/HeroSectionBanner";
import  Layout  from '@/components/global/AccountLayout';
import ReportList   from '@/components/account/impactReport/reportList/ReportList';
import  TotalReport  from '@/components/account/impactReport/totalReport/TotalReport';

const ImpactReport = () => {
  return (
       <div className="flex flex-col w-full ">
          <HeroSection
        title="Impact Report"
        height="h-[250px]"
                bannerSvgClass = 'w-[230px]  lg:w-[260px]    xl:w-[350px]  ' 
      />
    <Layout>
<div className=" flex flex-col gap-3 w-full">
  <TotalReport/>
  <ReportList/>

</div>


</Layout>
</div>
  )
}

export default ImpactReport