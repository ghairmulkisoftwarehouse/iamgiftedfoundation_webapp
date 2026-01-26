import  HeroSectionBanner  from '@/components/global/HeroSectionBanner';
import ProgramInformation   from '@/components/programdetails/ProgramInformation/ProgramInformation';
import Partner   from '@/components/programdetails/partner/Partner';



const ProgramsDetail = () => {
  return (
          <div className="flex  flex-col  w-full ">
            <HeroSectionBanner
            title="PROGRAM DETAIL"
                 height=" h-[250px] "
                bannerSvgClass=" w-[260px] lg:w-[290px] xl:w-[370px] " 
      
            />
         
           
             <ProgramInformation/>
             <Partner/>
            



  </div>
  )
}

export default ProgramsDetail;