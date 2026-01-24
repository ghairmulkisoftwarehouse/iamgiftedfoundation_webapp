import  HeroSectionBanner  from '@/components/global/HeroSectionBanner';
import ProgramInformation   from '@/components/programdetails/ProgramInformation/ProgramInformation';
import Partner   from '@/components/programdetails/partner/Partner';



const ProgramsDetail = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="PROGRAM DETAIL"
                 height=" h-[250px] "
                bannerSvgClass=" w-[240px] sm:w-[250px] lg:w-[280px] xl:w-[360px] " 
      
            />
         
           
             <ProgramInformation/>
             <Partner/>
            



  </div>
  )
}

export default ProgramsDetail;